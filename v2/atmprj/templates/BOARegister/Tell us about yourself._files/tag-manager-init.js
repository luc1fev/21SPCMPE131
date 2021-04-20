function initializeTagManager() {
	// Define the utag_data object that the Tealium library will use to populate
	// its data layer.
	if(typeof window.utag_data === "undefined"){
		//console.log("window.utag_data undefined. Creating");
		window.utag_data = {};
		// Default environment is defined as notprod.
		window.bactm_envSelector = "notprod";

		// BAC.COM SPECIFIC: Determine environment (prod or not)
		function bactm_setTMLib() {
			var testString = window.location.href;
			if (testString.indexOf('.bankofamerica.com') > -1) {
				var tempArr = testString.split('.bankofamerica.com');
				var tempStr = tempArr[0];
				if (tempStr.indexOf('//') > -1) {
					tempArr = tempStr.split('//');
					tempStr = tempArr[1];
					if (tempStr.indexOf('.') > -1) {
						tempArr = tempStr.split('.');
						tempStr = tempArr[0];
						var tempStrPt2 = tempArr[1];
					}
					if (tempStr.indexOf('www') > -1) {
						if (tempStr.indexOf('-') > -1) {
							bactm_envSelector = "notprod";
						} else if (tempStrPt2 != null) {
							if (tempStrPt2.indexOf('ecnp') > -1) {
								bactm_envSelector = "notprod";
							}
						} else {
							bactm_envSelector = "prod";
						}
					} else if (tempStrPt2 != null) {
						if (tempStrPt2.indexOf('ecnp') > -1) {
							bactm_envSelector = "notprod";
						}
					} else {
						bactm_envSelector = "prod";
					}
				}
			}
		}
		bactm_setTMLib();

		// Instrument the Tealium base library utilizing the environment defined
		// above.
		(function(a, b, c, d) {
			a = '//tags.tiqcdn.com/utag/bofa/main/' + bactm_envSelector
					+ '/utag.js';
			b = document;
			c = 'script';
			d = b.createElement(c);
			d.src = a;
			d.type = 'text/java' + c;
			d.async = true;
			a = b.getElementsByTagName(c)[0];
			a.parentNode.insertBefore(d, a);
		})();
	}else{
		//console.log("window.utag_data already exists.")
	}
}
