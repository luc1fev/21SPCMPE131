define('utilities/helpers/helpers-code/1.0.0/js/helpers-code',['module'],function(module){'use strict';var helpers={embed:function embed(src,lang){var content=Glob.globFiles(src);var ext=path.extname(src).replace(/^(\.)/gm,'');var output;lang=lang||ext;if(utils.isUndefined(lang)){lang=ext}else{lang=lang}switch(ext){case'md':case'markdown':case'mdown':output=content.replace(/^(```)/gm,'&#x60;&#x60;&#x60;');ext='md';break;case'txt':output=content;ext='text';break;case'hbs':case'hbars':output=content.replace(/^(---)/gm,'---');ext='html';break;case'less':output=content;ext='scss';break;case void 0:output=content;ext='';break;default:output=content;ext='';}var result='```'+lang+'\n'+output+'\n```\n';return new utils.safeString(result)},withItem:function withItem(object,options){return options.fn(object[options.hash.key])},withKey:function withKey(object,options){return options.fn(object[options.hash.key])}};module.exports.register=function(Handlebars,options){options=options||{};for(var helper in helpers){if(helpers.hasOwnProperty(helper)){Handlebars.registerHelper(helper,helpers[helper])}}};module.exports.helpers=helpers});
//# sourceMappingURL=./helpers-code.js.map