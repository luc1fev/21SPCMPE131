define(['require','common/utility/deviceSignature'],function(require){
    'use strict';
    var signature = require('common/utility/deviceSignature');

    return function(appContext) {
        var getSetting = function( name ) {
            return appContext.settings.get(name);
        };

        var setSetting = function(name, value) {
            appContext.settings.set(name, value);
        };

        var removeSetting = function(name) {
            appContext.settings.remove(name);
        };

        var getRequestData = function() {
            var requestData = {
                siteId: getSetting('defaultAuthSiteId'),
                userId: undefined,
                passwd: null,
                passwd_org: undefined,
                contextId: getSetting('authLoginContextId'),
                deviceId: getSetting('authDeviceId'),
                deviceSignature: signature.getDeviceSignature(),
                deviceCookie: (appContext.config || {}).authDeviceCookie || getSetting('defaultAuthDeviceCookie'),
                tokencode: getSetting('authTokenCode'),
                externalData: getSetting('authExternalData')
            };

            return requestData;
        };

        var getRandomValue = function() {
            var val = Math.floor(Math.random() * 90000) + 10000;
            val += new Date().getTime();
            return val;
        };

        var invokeRandomizeCall = function(services){
             //Make the randomize service call asyncronously
            require(['blue/dom'], function(dom) {
                var isLogoff = (dom.location.hash.indexOf('logoff') >= 0);
                if( !isLogoff ) {
                    var requestData = getRequestData(requestData);
                    var serviceRequest = {
                            type: getSetting('authResponseType'),
                            auth_reqid: getRandomValue(),
                            auth_siteId: getSetting('defaultAuthSiteId')
                        },
                        randomizedRequest = {};

                    services.auth.randomizecache(serviceRequest).then(function(responseData) {
                        responseData.forEach(function(map) {
                            if (requestData && requestData[map.inputId]) {
                                randomizedRequest[map.randomParameter] = requestData[map.inputId];
                            } else {
                                randomizedRequest[map.randomParameter] = map.inputValue || null;
                            }
                        });
                        randomizedRequest.type = getSetting('authResponseType');
                        setSetting('randomizedRequest', randomizedRequest);
                        //randomize response is invalid after 12 minutes (720000 miliseconds), so remove it at that point in time
                        setTimeout(function() {
                            removeSetting('randomizedRequest');
                        }, getSetting('randomizeCacheExpiration'));
                    });
                }
            });
        };

        return {
            getSetting: getSetting,
            setSetting: setSetting,
            removeSetting: removeSetting,
            getRequestData: getRequestData,
            getRandomValue: getRandomValue,
            invokeRandomizeCall: invokeRandomizeCall
        };
    };
});