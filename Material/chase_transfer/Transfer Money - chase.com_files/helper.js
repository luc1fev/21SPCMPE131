/** Store common functions for language functionality. **/

define(['require','blue-app/settings','blue/siteMode','blue/resource/persona','appkit-utilities/personalization/personalization','blue/store/enumerable/cookie'],function(require) {
    var settings = require('blue-app/settings'),
        siteMode = require('blue/siteMode'),
        Persona = require('blue/resource/persona'),
        personalization = new(require('appkit-utilities/personalization/personalization'))(),
        splashStore = new(require('blue/store/enumerable/cookie'))('splash', false, null, '/', '.chase.com', true),
        defaultLanguage = 'en-us',

        /* ----- methods from common/js/utility/languageHelper.js ----- */
        /* @returns {String} 4 character language-region code, e.g. 'en-us' regardless of site/user state */
        getUserLanguage = function() {
            return settings.get('language', settings.Type.PERM) || settings.get('language') || settings.get('languageDefault') || defaultLanguage;
        },

        /* @returns {Boolean} Whether the user is allowed to see foreign language content, based on segment and site mode. 'internationalizationSplash' set to true means 'english only', false means 'allow other languages'*/
        isUserAllowedForeignLanguage = function() {
            return !siteMode.isModeEnabled('internationalizationSplash');
        },

        /* @returns {String} 4 character language-region code, e.g. 'en-us' */
        getLanguage = function() {
            return isUserAllowedForeignLanguage() ? getUserLanguage() : defaultLanguage;
        },

        /* @returns {String} current language by replacing hyper (-) to underscore (_) e.g, "en_us" */
        getLanguagePrefix = function() {
            return getLanguage().replace('-', '_');
        },

        /* @returns {String} 2 character language code, e.g. 'en' */
        getContentLanguage = function() {
            return getLanguage().split('-')[0];
        },

        /* @returns {Boolean} whether the current language is equal to the argument. */
        isLanguageSetTo = function(language) {
            if (typeof(language) !== 'string') {
                throw new Error('argument "language" should be a 2 characters string, e.g. "en"');
            }
            return (getContentLanguage() === language);
        },

        /* @returns {Boolean} Whether the user's local cookie is something other than blank or the default language. */
        isPersonaLocaleForeignLanguage = function() {
            var personaData = new Persona().read(),
                language = personaData && personaData.locale ? personaData.locale.replace('_', '-') : '';
            return !!language && language !== defaultLanguage;
        },


        /* ----- methods from common/js/lib/language.js ----- */
        isCurrentLanguageSetToDefault = function() {
            return (!!settings.get('languageDefault')) ? personalization.getLocale() === settings.get('languageDefault') : personalization.getLocale() === defaultLanguage;
        },

        isInternationalizationEnabled = function(splashFlag) {
            var segment = personalization.getSegment() || '',
                unavailableSegments = settings.get('languageSplashUnavailableSegments');

            if (!unavailableSegments) {
                throw new Error('setting "languageSplashUnavailableSegments" is undefined');
            }
            return !splashFlag && unavailableSegments.indexOf(segment.toUpperCase()) === -1;
        },

        // internationalizationSplashSeen is a terrible, no good name for this setting,
        // but SFO was really keen on it and we have to play nice
        clearSplashViewed = function() {
            splashStore.remove('internationalizationSplashSeen');
        },

        setSplashViewed = function() {
            splashStore.set('internationalizationSplashSeen', true);
        },

        getSplashViewed = function() {
            return splashStore.get('internationalizationSplashSeen');
        };

    return {
        getLanguage: getLanguage,
        getUserLanguage: getUserLanguage,
        getLanguagePrefix: getLanguagePrefix,
        isUserAllowedForeignLanguage: isUserAllowedForeignLanguage,
        getContentLanguage: getContentLanguage,
        isLanguageSetTo: isLanguageSetTo,
        isPersonaLocaleForeignLanguage: isPersonaLocaleForeignLanguage,
        isCurrentLanguageSetToDefault: isCurrentLanguageSetToDefault,
        isInternationalizationEnabled: isInternationalizationEnabled,
        clearSplashViewed: clearSplashViewed,
        setSplashViewed: setSplashViewed,
        getSplashViewed: getSplashViewed
    };
});
