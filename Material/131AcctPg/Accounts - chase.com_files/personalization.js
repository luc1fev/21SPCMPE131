/*
This utility provides personal details like
	ZipCode,
	Eci,
	Segment,
	Locale,
	GeoZipCode,
	GeoImageFreshness.
*/
define(['require','blue/is','blue-app/settings','blue-app/validate/var/ZIP_CODE_REGEX','blue/store/enumerable/cookie','blue/siteData','blue/declare'],function(require) {
    var is = require('blue/is'),
        appsettings = require('blue-app/settings'),
        zipCodeRegex = require('blue-app/validate/var/ZIP_CODE_REGEX'),
        cookieStore = new(require('blue/store/enumerable/cookie'))(null, true),
        siteData = require('blue/siteData');

    return require('blue/declare')({
        constructor: function Personalization(geoZipCookieName,geoFreshnessCookieName) {
            var data = appsettings.get('persona');
            this.persona = data || {};
            this.geoFreshnessCookieName = geoFreshnessCookieName || '_geoFreshness';
            this.geoZipCookieName = geoZipCookieName || '_geoZip';
        },
        getPersona: function() {
            return this.persona;
        },
        getZipCode: function() {
            var zip = this.persona.zip || siteData.getData('geoZip');
            if (zip) {
                zip = zip.substring(0, 5);
                if (zipCodeRegex.test(zip)) {
                    return zip;
                }
            }
            return null;
        },
        getEci: function() {
            return this.persona.ECI || null;
        },
        getSegment: function() {
            return this.persona.segment || null;
        },
        getLocale: function() {
            var locale = this.persona.locale;
            if (!locale || !is.string(locale)) {
                locale = null;
            }
            if (locale) {
                locale = locale.replace('_', '-');
            }
            return locale || 'en-us';
        },
        getGeoZipCode: function() {
            var zip = cookieStore.get(this.geoZipCookieName);
            if (!zip) {
                zip = this.getZipCode();
                if (zip) {
                    cookieStore.set(
                        this.geoZipCookieName,
                        zip,
                        null,
                        '/',
                        '.chase.com',
                        true
                    );
                }
            }
            return zip;
        },
        getGeoImageFreshness: function() {
            var freshness = cookieStore.get(this.geoFreshnessCookieName);
            if (!freshness) {
                freshness = new Date().getMonth();
                cookieStore.set(
                    this.geoFreshnessCookieName,
                    freshness,
                    null,
                    '/',
                    '.chase.com',
                    true
                );
            }
            return freshness;
        }
    });
});
