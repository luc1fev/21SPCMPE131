define(['require','blue/is'],function(require) {
    'use strict';

    var is = require('blue/is'),
        shortAlphaNumericMatcher = /^[a-zA-Z0-9-_]{1,30}$/,
        defaultValidationRegex = /^[a-zA-Z0-9-_]+$/,
        defaultMaxParamValueLength = 30,
        maxParams = 20;

   function getParameterByName(name, url) {
        if (!url) { url = window.location.href; }
        name = name.replace(/[[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i'),
            results = regex.exec(url);
        if (!results) { return null; }
        if (!results[2]) { return ''; }
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function regexValidator(overridesForParam, paramValue) {
        var validationRegex = overridesForParam.validationRegex || defaultValidationRegex;
        if (is.string(validationRegex)) {
            validationRegex = new RegExp(validationRegex);
        }
        if (!validationRegex.test(paramValue)) {
            return false;
        }
        return true;
    }

    function isSafe(unsafeParams, paramName) {
        var paramValue;
        if (!is.string(paramName) || (!shortAlphaNumericMatcher.test(paramName))) {
            return false;
        }
        paramValue = unsafeParams[paramName];
        if (!is.string(paramValue)) {
            return false;
        }
        var decodedParamValue = decodeURIComponent(paramValue);
        var overrides = {};
        if (!this) {
            throw new Error('isSafe called without being bound to "this"');
        }
        var allOverrides = this.paramConfigOverrides;
        if (is.plainObject(allOverrides)) {
            var overridesForCurrentParam = allOverrides[paramName];
            if (is.plainObject(overridesForCurrentParam)) {
                overrides = overridesForCurrentParam;
            }
        }
        var maxLength = overrides.maxLength || defaultMaxParamValueLength;
        if (decodedParamValue.length > maxLength) {
            return false;
        }
        return regexValidator(overrides, decodedParamValue);
    }

    function _validateUrlParams(params) {
        var paramNames;
        if (!is.plainObject(params)) {
            throw new Error('urlParams are not an object');
        }
        paramNames = Object.keys(params);
        if (paramNames.length > maxParams) {
            throw new Error('urlParams has too many params');
        }
        paramNames.forEach(function(name) {
            if (!isSafe.call(this, params, name)) {
                throw new Error('urlParam is not safe');
            }
        }, this);
        return params;
    }

    function _secureUrlParams(unsafeParams) {
        var paramNames = Object.keys(unsafeParams),
            safeParams;

        paramNames = paramNames.filter(isSafe.bind(this, unsafeParams));

        // if there are more than 20 parameters, only accept the first 20
        paramNames = paramNames.slice(0, maxParams);

        safeParams = {};
        paramNames.forEach(function(name){ safeParams[name] = unsafeParams[name]; });

        return safeParams;
    }

    function serializeUrlParams(paramsObject) {
        return encodeURIComponent(JSON.stringify(this._secureUrlParams(paramsObject)));
    }

    //
    // JSON.parse will throw an exception if the JSON input is bad. Since we expect this will
    // never happen (assuming serializeUrlParams is always used to create the JSON), that
    // exception is the desired behavior.
    //
    function deserializeUrlParams(paramsString) {
        return this._validateUrlParams(JSON.parse(decodeURIComponent(paramsString)));
    }

    /*
     * template - a string (typically an URL) that contains tokens, to be replaced with
     *            provided data. the tokens should include double-braces around the parameter
     *            name; it should look something like this:
     *
     *            https://foo.com?p1={{param1}}&p2={{param2}}&p3={{param3}}
     *
     *            or
     *
     *            #/dashboard/accounts/overview/index?p1={{param1}}&p2={{param2}}&p3={{param3}}
     *
     * params - an object giving the values to be inserted into the template; for example:
     *
     *          {
     *               param1: 'my%20param',
     *               param2: 'your%20param',
     *               param4: 'ignored'
     *          }
     *
     * constraints - an object describing which parameters are allowed; for example:
     *
     *               {
     *                    param1: true,
     *                    param2: true,
     *                    param3: true
     *               }
     *
     * Note that the value of the parameter in the constraints object doesn't matter; even if the
     * value is false, if the parameter exists in the object, we allow it.
     */
    function insertUrlParams(originalTemplate, params, constraints) {

        var providedParamNames;
        var regexSelectorForParam;
        var template = originalTemplate;
        var serializeObject = function serializeObject(obj) {
            try {
                return JSON.stringify(obj);
            } catch (ex) {
                return 'not an object';
            }
        };
        var throwError = function throwError(message) {
            var serializedParams = serializeObject(params),
                serializedConstraints = serializeObject(constraints),
                errorTextParts = [
                    message,
                    originalTemplate,
                    serializedParams,
                    serializedConstraints
                ];
            throw new Error(errorTextParts.join(' '));
        };

        if (!is.string(originalTemplate)) {
            throwError('invalid url template');
        }
        if (!is.plainObject(params)) {
            throwError('invalid params');
        }
        if (!is.plainObject(constraints)) {
            throwError('invalid constraints');
        }

        providedParamNames = Object.keys(params);

        Object.keys(constraints).forEach(function (paramName) {
            var isParamProvided = providedParamNames.indexOf(paramName) !== -1,
                encodedParamValue = isParamProvided ? encodeURIComponent(params[paramName]) : '';
            regexSelectorForParam = new RegExp('{{' + paramName + '}}', 'g');
            template = template.replace(regexSelectorForParam, encodedParamValue);
        });

        return template;
    }

    //
    // paramConfigOverrides allows us to use custom safety checks for specific parameters.
    // it is an object whose keys are parameter names, and whose values are objects containing
    // param-specific configuration values.
    //
    // there are currently two allowed configuration values:
    //
    //     maxLength - the maximum allowed length of the parameter's value
    //     validationRegex - a regular expression describing a valid value for the parameter
    //
    // here is an example that overrides both configuration options:
    //
    //     {
    //       paramWithPluses: {
    //         maxLength: 200,
    //         validationRegex: /^[a-zA-Z+]$/
    //       }
    //     }
    //
    // this would accept the following URL parameter, that would otherwise be rejected:
    //
    //     https://secure.chase.com/web/auth/nav?navKey=myNavKey&paramWithPluses=some+long+piece+of+text+as+a+parameter+and+with+pluses
    //
    var urlParamUtilConstructor = function urlParamUtilConstructor(paramConfigOverrides) {
        this.paramConfigOverrides = paramConfigOverrides || {};
    };

    urlParamUtilConstructor.prototype.getParameterByName = getParameterByName;
    urlParamUtilConstructor.prototype.insert = insertUrlParams;
    urlParamUtilConstructor.prototype.serialize = serializeUrlParams;
    urlParamUtilConstructor.prototype.deserialize = deserializeUrlParams;

    // private functions for the above prototypes
    urlParamUtilConstructor.prototype._secureUrlParams = _secureUrlParams;
    urlParamUtilConstructor.prototype._validateUrlParams = _validateUrlParams;

    return urlParamUtilConstructor;
});