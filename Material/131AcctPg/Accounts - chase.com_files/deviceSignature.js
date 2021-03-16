define(['require','common/utility/plugin','blue/is'],function(require) {
    'use strict';
    var plugin = require('common/utility/plugin'),
        is = require('blue/is');

    return {
        getDeviceSignature: function() {
            var signature = {};
            signature.navigator = this.getNavigatorProps();

            signature.plugins = this.getPlugins();

            signature.screen = this.getScreenProps();

            signature.extra = this.getExtraProps();
            return JSON.stringify(signature);
        },
        getNavigatorProps: function() {
            var navigatorMap = {};
            for (var prop in navigator) {
                if (is.defined(navigator[prop])) {
                    try {
                        var value = navigator[prop];
                        if ((typeof value === 'boolean') || (typeof value === 'number') ||
                            (typeof value === 'string') ||
                            //(typeof value === 'array') || //not a valid type
                            (value === null)) {
                            navigatorMap[prop] = value;
                        }
                    } catch (e) {}
                }
            }
            return navigatorMap;
        },
        getPlugins: function() {
            var plugins = [];
            var pluginNames = new Array('Acrobat', 'QuickTime', 'DivX', 'Director', 'Windows Media', 'Flash', 'Java', 'VLC');
            var plgncount = 0;
            for (var i = 0; i < pluginNames.length; i++) {
                try {
                    if (plugin.isInstalled(pluginNames[i])) {
                        var map = {};
                        var info = plugin.getInfo(pluginNames[i]);
                        if (info !== null && info !== undefined) {
                            map.name = info.description;
                            map.version = info.version;
                            plugins[plgncount++] = map;
                        }
                    }
                } catch (e) {}
            }
            return plugins;
        },
        getScreenProps: function() {
            var screenProps = ['availHeight', 'availWidth', 'colorDepth', 'height', 'pixelDepth', 'width'];
            var screenMap = {};
            for (var j = 0; j < screenProps.length; j++) {
                try {
                    var screenVal = screen[screenProps[j]];
                    if (screenVal !== null && screenVal !== undefined) {
                        screenMap[screenProps[j]] = screenVal;
                    }
                } catch (e) {}
            }
            return screenMap;
        },
        getExtraProps: function() {
            var extraMap = {};
            var vbVer = null;

            if (navigator.appName === 'Microsoft Internet Explorer') {
                try {
                    //Next line JSHint-ignored since these are supported in IE
                    vbVer = ScriptEngineMajorVersion() + '.' + ScriptEngineMinorVersion() + '.' + ScriptEngineBuildVersion(); //eslint-disable-line
                } catch (e) {}
            }
            if (vbVer !== null && vbVer !== undefined) {
                extraMap.vbscript_ver = vbVer;
            }
            extraMap.javascript_ver = '2.0';

            try {
                var currDate = new Date();
                var currTime = currDate.toString();
                if ((currTime.indexOf('PDT') > 0) || (currTime.indexOf('MDT') > 0) || (currTime.indexOf('CDT') > 0) || (currTime.indexOf('EDT') > 0) || (currTime.indexOf('Daylight') > 0)) {
                    extraMap.timezone = currDate.getTimezoneOffset() + 60;
                } else {
                    extraMap.timezone = currDate.getTimezoneOffset();
                }
            } catch (e) {
                extraMap.timezone = '';
            }
            return extraMap;
        }
    };

});