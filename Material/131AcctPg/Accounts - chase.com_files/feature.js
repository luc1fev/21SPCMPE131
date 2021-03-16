define(['require','exports','module','blue/is'],function(require, exports, module) {
 'use strict';
	var config = module.config() || {},
		is = require('blue/is');
	return {
		enabled: function enabled(featureName) {
			if (!is.string(featureName)) {
				return false;
			}
			var featureList = config.feature;
			if (!is.object(featureList)) {
				return false;
			}
			var featureFlag = featureList[featureName];
            if (is.boolean(featureFlag)) {
                return featureFlag;
            }
			if (!is.string(featureFlag)) {
				return false;
			}
			if (featureFlag.toLowerCase() !== 'true') {
				return false;
			}
			return true;
		},
		getList: function getList(featureName){
			return (config.feature && config.feature[featureName]) || {};
			
		}
	};
});