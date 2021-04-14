/* global ActiveXObject:true */
define([],function() {
    'use strict';

    return {
        isInstalled: function(name) {
            return this.getInfo(name).isInstalled;
        },
        getVersion: function(name) {
            return this.getInfo(name).version;
        },
        getInfo: function(name) {
            var info = this.PLUGINS[name];
            var isInstalled = false;
            var version = null;
            if (this.supportsNavigatorPlugins()) {
                var plugin = this.findNavigatorPluginByName((name === 'RealPlayer') ? 'RealPlayer Version Plugin' : name);
                if (plugin) {
                    isInstalled = true;
                    version = this.getVersionFromPlugin(plugin);
                }
            } else {
                isInstalled = this.hasActiveXObject(this.PLUGINS[name] && this.PLUGINS[name].progID);
                if (isInstalled) {
                    if (this.PLUGINS[name].getActiveXVersionInfo) {
                        version = this.PLUGINS[name].getActiveXVersionInfo();
                    } else {
                        var progID = this.getProgIdForActiveXObject(this.PLUGINS[name].progID);
                        version = this.getVersionFromPlugin(progID);
                    }
                } else {
                    version = this.getActiveXPluginByClassId(this.PLUGINS[name] && this.PLUGINS[name].classID);
                    if (version) {
                        version = version.replace(/,/g, '.');
                    }
                    isInstalled = (version !== null && version !== undefined);
                }
            }
            var result = {};
            for (var i in info) {
                if (Object.hasOwnProperty.call(info, i)) {
                    result[i] = info[i];
                }
            }
            result.isInstalled = isInstalled;
            result.version = version;
            result.name = name;
            return result;
        },
        PLUGINS: {
            'Acrobat': {
                description: 'Adobe Acrobat Plugin',
                progID: ['PDF.PdfCtrl.7', 'PDF.PdfCtrl.6', 'PDF.PdfCtrl.5', 'PDF.PdfCtrl.4', 'PDF.PdfCtrl.3', 'AcroPDF.PDF.1'],
                classID: 'CA8A9780-280D-11CF-A24D-444553540000'
            },
            'QuickTime': {
                description: 'QuickTime Plug-in',
                progID: ['QuickTimeCheckObject.QuickTimeCheck.1', 'QuickTime.QuickTime'],
                classID: '02BF25D5-8C17-4B23-BC80-D3488ABDDC6B',
                getActiveXVersionInfo: function() {
                    var progID = this.getProgIdForActiveXObject(this.PLUGINS.QuickTime.progID);
                    var obj = new ActiveXObject(progID);
                    var version = (obj && obj.QuickTimeVersion) ? obj.QuickTimeVersion.toString(16) : '';
                    return version.substring(0, 1) + '.' + version.substring(1, 2) + '.' + version.substring(2, 3);
                }
            },
            'DivX': {
                description: 'DivX Browser Plugin',
                progID: ['npdivx.DivXBrowserPlugin.1', 'npdivx.DivXBrowserPlugin'],
                classID: '67DABFBF-D0AB-41fa-9C46-CC0F21721616'
            },
            'Director': {
                description: 'Macromedia Director',
                progID: ['SWCtl.SWCtl.11', 'SWCtl.SWCtl.10', 'SWCtl.SWCtl.9', 'SWCtl.SWCtl.8', 'SWCtl.SWCtl.7', 'SWCtl.SWCtl.6', 'SWCtl.SWCtl.5', 'SWCtl.SWCtl.4'],
                classID: '166B1BCA-3F9C-11CF-8075-444553540000'
            },
            'Flash': {
                description: 'Macromedia Shockwave Flash',
                progID: ['ShockwaveFlash.ShockwaveFlash.9', 'ShockwaveFlash.ShockwaveFlash.8.5', 'ShockwaveFlash.ShockwaveFlash.8', 'ShockwaveFlash.ShockwaveFlash.7', 'ShockwaveFlash.ShockwaveFlash.6', 'ShockwaveFlash.ShockwaveFlash.5', 'ShockwaveFlash.ShockwaveFlash.4'],
                classID: 'D27CDB6E-AE6D-11CF-96B8-444553540000'
            },
            'VLC': {
                description: 'VLC multimedia plugin',
                progID: [],
                classID: ''
            },
            'Windows Media': {
                description: 'Windows Media Player Plug-in Dynamic Link Library',
                progID: ['WMPlayer.OCX', 'MediaPlayer.MediaPlayer.1'],
                classID: '22D6f312-B0F6-11D0-94AB-0080C74C7E95',
                getActiveXVersionInfo: function() {
                    var progID = this.getProgIdForActiveXObject(this.PLUGINS['Windows Media'].progID);
                    var obj = new ActiveXObject(progID);
                    return (obj && obj.versionInfo) ? obj.versionInfo : '';
                }
            },
            'Java': {
                description: 'Java Virtual Machine',
                progID: [],
                classID: '08B0E5C0-4FCB-11CF-AAA5-00401C608500'
            }

        },
        supportsNavigatorPlugins: function() {
            return (navigator.plugins && (navigator.plugins.length > 0));
        },
        findNavigatorPluginByName: function(name) {
            if (this.supportsNavigatorPlugins()) {
                for (var i = 0; i < navigator.plugins.length; ++i) {
                    var plugin = navigator.plugins[i];
                    if (plugin.name.indexOf(name) !== -1) {
                        return plugin;
                    }
                }
            }
            return null;
        },
        getIEClientCaps: function() {
            var clientcaps = document.getElementById('__Plugin_ClientCaps');
            if (!clientcaps) {
                clientcaps = document.createElement('DIV');
                clientcaps.id = '__Plugin_ClientCaps';
                if (clientcaps.addBehavior) {
                    clientcaps.addBehavior('#default#clientCaps');
                    document.body.appendChild(clientcaps);
                }
                clientcaps = document.getElementById('__Plugin_ClientCaps');
            }
            return clientcaps;
        },
        getActiveXPluginByClassId: function(classID) {
            if (!classID) {
                return null;
            }
            if (!classID.match(/{[^}]+}/)) {
                classID = '{' + classID + '}';
            }
            var clientcaps = this.getIEClientCaps();
            try {
                var result = clientcaps.getComponentVersion(classID, 'ComponentID');
                return result || null;
            } catch (err) {

            }
            return null;
        },
        hasActiveXObject: function(progID) {
            progID = this.getProgIdForActiveXObject(progID);
            return (progID !== null && progID !== undefined);
        },
        getProgIdForActiveXObject: function(progID) {
            if (!progID) {
                return null;
            }
            for (var i = 0; i < progID.length; i++) {
                try {
                    return progID[i] || null;
                } catch (e) {}
            }
            return null;
        },
        getVersionFromPlugin: function(plugin) {
            if (!plugin.name) {
                plugin = {
                    name: plugin,
                    description: name
                };
            }
            var matches = /[\d][\d.]*/.exec(plugin.name);
            if (matches && plugin.name.indexOf('Java') === -1) {
                return matches[0];
            }
            matches = /[\d.]+/.exec(plugin.description);
            return matches ? matches[0] : '';
        }
    };
});