(function(){this.Blue=this.Blue||{},this.Blue.version=this.Blue.version||{},this.Blue.buildDate=this.Blue.buildDate||{},this.Blue.buildHash=this.Blue.buildHash||{},this.Blue.version["blue-view/main"]="2.19.0",this.Blue.buildDate["blue-view/main"]="2020-11-16T15:13:00.238Z",this.Blue.buildHash["blue-view/main"]="87157c8"}).call(this),requirejs.config({paths:{d3:"d3/dist/d3","xss-filters":"xss-filters/dist/xss-filters.min"},shim:{"xss-filters":{exports:"xssFilters"}}}),define("blue-view/config",(function(){})),function(e,t){function n(e,t,n){return i.yubl(t((n||i.yufull)(e)))}(function(){return this}()).xssFilters=e,e._getPrivFilters=function(){function e(e){return 2===(e=e.split(C,2)).length&&e[0]?e[0]:null}function t(e,t){return void 0===e?"undefined":null===e?"null":t.apply(e.toString(),[].splice.call(arguments,2))}function n(e,n,i,r){n=n||m,i=i||f;var o,u=[].splice.call(arguments,4);return t(e,(function(){return o=this.replace(l,"�").replace(i,(function(e,t,i,r){return t?128===(t=Number(t[0]<="9"?t:"0"+t))?"€":130===t?"‚":131===t?"ƒ":132===t?"„":133===t?"…":134===t?"†":135===t?"‡":136===t?"ˆ":137===t?"‰":138===t?"Š":139===t?"‹":140===t?"Œ":142===t?"Ž":145===t?"‘":146===t?"’":147===t?"“":148===t?"”":149===t?"•":150===t?"–":151===t?"—":152===t?"˜":153===t?"™":154===t?"š":155===t?"›":156===t?"œ":158===t?"ž":159===t?"Ÿ":t>=55296&&57343>=t||13===t?"�":a.frCoPt(t):n[i||r]||e})),r?r.apply(o,u):o}))}function i(e){return"\\"+e.charCodeAt(0).toString(16).toLowerCase()+" "}function r(e,t){return n(e,null,null,(function(){return this.replace(t,i)}))}function o(t,r){return n(t,null,null,(function(){var t=a.yufull(this),n=e(t);return t=n&&x[n.toLowerCase()]?"##"+t:t,r?t.replace(r,i):t}))}var a,u=/</g,s=/"/g,c=/'/g,l=/\x00/g,d=/(?:^(?:["'`]|\x00+$|$)|[\x09-\x0D >])/g,p=/[&<>"'`]/g,v=/(?:\x00|^-*!?>|--!?>|--?!?$|\]>|\]$)/g,f=/&(?:#([xX][0-9A-Fa-f]+|\d+);?|(Tab|NewLine|colon|semi|lpar|rpar|apos|sol|comma|excl|ast|midast|ensp|emsp|thinsp);|(nbsp|amp|AMP|lt|LT|gt|GT|quot|QUOT);?)/g,m={Tab:"\t",NewLine:"\n",colon:":",semi:";",lpar:"(",rpar:")",apos:"'",sol:"/",comma:",",excl:"!",ast:"*",midast:"*",ensp:" ",emsp:" ",thinsp:" ",nbsp:" ",amp:"&",lt:"<",gt:">",quot:'"',QUOT:'"'},g=/[^%#+\-\w\.]/g,h=/[\x01-\x1F\x7F\\"]/g,b=/[\x01-\x1F\x7F\\']/g,w=/['\(\)]/g,y=/\/\/%5[Bb]([A-Fa-f0-9:]+)%5[Dd]/,x={javascript:1,data:1,vbscript:1,mhtml:1},C=/(?::|&#[xX]0*3[aA];?|&#0*58;?|&colon;)/,V=/(?:^[\x00-\x20]+|[\t\n\r\x00]+)/g,I={Tab:"\t",NewLine:"\n"},k=String.prototype.replace,A=String.fromCodePoint||function(e){return 0===arguments.length?"":65535>=e?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),e%1024+56320))};return a={frCoPt:function(e){return!isFinite(e)||0>=e||e>1114111||e>=1&&8>=e||e>=14&&31>=e||e>=127&&159>=e||e>=64976&&65007>=e||11===e||65535==(65535&e)||65534==(65535&e)?"�":A(e)},d:n,yup:function(t){return(t=e(t.replace(l,"")))?n(t,I,null,(function(){return this.replace(V,"").toLowerCase()})):null},y:function(e){return t(e,k,p,(function(e){return"&"===e?"&amp;":"<"===e?"&lt;":">"===e?"&gt;":'"'===e?"&quot;":"'"===e?"&#39;":"&#96;"}))},yd:function(e){return t(e,k,u,"&lt;")},yc:function(e){return t(e,k,v,(function(e){return"\0"===e?"�":"--!"===e||"--"===e||"-"===e||"]"===e?e+" ":e.slice(0,-1)+" >"}))},yavd:function(e){return t(e,k,s,"&quot;")},yavs:function(e){return t(e,k,c,"&#39;")},yavu:function(e){return t(e,k,d,(function(e){return"\t"===e?"&#9;":"\n"===e?"&#10;":"\v"===e?"&#11;":"\f"===e?"&#12;":"\r"===e?"&#13;":" "===e?"&#32;":">"===e?"&gt;":'"'===e?"&quot;":"'"===e?"&#39;":"`"===e?"&#96;":"�"}))},yu:encodeURI,yuc:encodeURIComponent,yubl:function(e){return x[a.yup(e)]?"x-"+e:e},yufull:function(e){return a.yu(e).replace(y,(function(e,t){return"//["+t+"]"}))},yceu:function(e){return r(e,g)},yced:function(e){return r(e,h)},yces:function(e){return r(e,b)},yceuu:function(e){return o(e,w)},yceud:function(e){return o(e)},yceus:function(e){return o(e,c)}}};var i=e._privFilters=e._getPrivFilters();e.inHTMLData=i.yd,e.inHTMLComment=i.yc,e.inSingleQuotedAttr=i.yavs,e.inDoubleQuotedAttr=i.yavd,e.inUnQuotedAttr=i.yavu,e.uriInSingleQuotedAttr=function(e){return n(e,i.yavs)},e.uriInDoubleQuotedAttr=function(e){return n(e,i.yavd)},e.uriInUnQuotedAttr=function(e){return n(e,i.yavu)},e.uriInHTMLData=i.yufull,e.uriInHTMLComment=function(e){return i.yc(i.yufull(e))},e.uriPathInSingleQuotedAttr=function(e){return n(e,i.yavs,i.yu)},e.uriPathInDoubleQuotedAttr=function(e){return n(e,i.yavd,i.yu)},e.uriPathInUnQuotedAttr=function(e){return n(e,i.yavu,i.yu)},e.uriPathInHTMLData=i.yu,e.uriPathInHTMLComment=function(e){return i.yc(i.yu(e))},e.uriQueryInSingleQuotedAttr=e.uriPathInSingleQuotedAttr,e.uriQueryInDoubleQuotedAttr=e.uriPathInDoubleQuotedAttr,e.uriQueryInUnQuotedAttr=e.uriPathInUnQuotedAttr,e.uriQueryInHTMLData=e.uriPathInHTMLData,e.uriQueryInHTMLComment=e.uriPathInHTMLComment,e.uriComponentInSingleQuotedAttr=function(e){return i.yavs(i.yuc(e))},e.uriComponentInDoubleQuotedAttr=function(e){return i.yavd(i.yuc(e))},e.uriComponentInUnQuotedAttr=function(e){return i.yavu(i.yuc(e))},e.uriComponentInHTMLData=i.yuc,e.uriComponentInHTMLComment=function(e){return i.yc(i.yuc(e))},e.uriFragmentInSingleQuotedAttr=function(e){return i.yubl(i.yavs(i.yuc(e)))},e.uriFragmentInDoubleQuotedAttr=function(e){return i.yubl(i.yavd(i.yuc(e)))},e.uriFragmentInUnQuotedAttr=function(e){return i.yubl(i.yavu(i.yuc(e)))},e.uriFragmentInHTMLData=e.uriComponentInHTMLData,e.uriFragmentInHTMLComment=e.uriComponentInHTMLComment}({}),define("xss-filters",function(e){return function(){return e.xssFilters}}(this)),define("blue-view/resolver/cav",["require","blue/as/serializable","blue/is","blue/object/extend","blue/util","blue/deferred","blue/log"],(function(e){"use strict";var t=e("blue/as/serializable"),n=e("blue/is"),i=e("blue/object/extend"),r=e("blue/util").object.deepClone,o=e("blue/deferred"),a=e("blue/log")("[blue:view]"),u={append:!1,react:!1},s=0;function c(e,t,a,s,c,l){var d=n.array(s)?s[0]:s.component,p=n.array(s)?s[1]:s.view,v=n.array(s)?s[2]||{}:s.options,f=l?r(l):e.viewResolverOptions||{};this.hasComponent=!d,this.hasView=!1,this.view=void 0,this.component=void 0,this.viewName=void 0,this.options=i({},u,v||{}),this.resolving=new o,this.resolved=this.resolving.promise,d&&this.setComponent(e,d,p),this.viewEngine=t,n.string(p)&&"/"!==p[0]&&d&&d.context?d.context.page&&d.context.page.viewResolverOptions&&(f=r(d.context.page.viewResolverOptions)):n.string(p)&&"/"===p[0]&&(p=p.substr(1),f={}),p&&this.setView(e,a,p,c,f)}return c.prototype.resolve=function(){var e;if(this.isReady()){if(this.component&&this.view.viewName&&this.component._("viewName",this.view.viewName),!this.viewInternals.bridge){var t=this.component&&this.component.key?this.component.key:"EMPTY";this.viewInternals.createBridge({name:t,bindings:{},triggers:{}})}this.component&&(e=this.component.spec||{},this.viewInternals.bridge.addComponentSpecData(Object.keys(e.data||{}).reduce((function(e,t){return e[t]=1,e}),{})),this.viewInternals.bridge.addComponentSpecSettings(this.component.getSettingsValues()),this.viewInternals.bridge.addComponentSpecActions(this.component.getActionNames()),this.view._componentStack=this.component.context.getStack()),this.options.viewInternals=this.viewInternals,this.resolving.resolve([this.component,this.view,this.options])}},c.prototype.reject=function(e,t){t.msg=t.message,a.error("["+e.getStack()+"]","CAV failed to resolve:",t),e.page.emit("page:error",{code:"blue:cav:error:cavResolutionFailed",description:"CAV could not be resolved:"+t}),this.resolving.reject(t)},c.prototype.setComponent=function(e,t,i){var r=this;t.oldComponent?(t.oldComponent.then((function(){r.component=t,r.component._("viewName",n.string(i)?i:""),r.hasComponent=!0,r.resolve()})).catch((function(o){o.msg=o.message,a.warn("["+e.getStack()+"]","Old Component instance "+t.key+" failed to destroy cleanly",o),r.component=t,r.component._("viewName",n.string(i)?i:""),r.hasComponent=!0,a.error("["+e.getStack()+"]","CAV component "+t.key+" failed to remove old component with same name:",o),e.page.emit("page:error",{code:"blue:cav:error:componentConstructionFailed",description:"CAV component "+t.key+" failed to remove old component with same name:"+o}),r.reject(e,o)})),delete t.oldComponent):(r.component=t,r.component._("viewName",n.string(i)?i:""),r.hasComponent=!0,r.resolve())},c.prototype.setView=function(e,t,i,r,o){var u,c,l,d=this,p=o.prefix||"",v=o.suffix||"";o=o||{},n.string(i)?(this.viewName=i,t[u=r+"/"+i]?(c=t[u],o={},l=e.getViewRegistry(d.viewEngine)):(c=p+i+v,l=e.getViewRegistry(d.viewEngine)),u=u+"/"+s,l.then((function(t){t.registerView(u,e.viewResolver.createId(c,o),!0)}))):(this.viewName=i.name||"anonymous",u=p+this.viewName+v,(l=e.getViewRegistry(d.viewEngine)).then((function(e){e.registerView(u,i,!0)}))),n.object(this.options)&&n.defined(i.targetSelector)&&!n.defined(this.options.target)&&(this.options.target=i.targetSelector),l.then((function(t){t.getView(u).then((function(t){t&&n.function(t.replaceIn)&&n.function(t.appendTo)?(d.view=t,d.viewInternals=t.link(),d.viewName&&!d.view.viewName&&(d.view.viewName=d.viewName)):a.warn("["+e.getStack()+"]","This is not a view!",t),d.hasView=!0,d.resolve()}),(function(t){t.msg=t.message,a.error("["+e.getStack()+"]","CAV view "+d.viewName+" failed to resolve:",t),e.page.emit("page:error",{code:"blue:cav:error:viewResolutionFailed",description:"CAV view "+d.viewName+" failed to resolve:"+t.name+":"+t.message}),d.reject(e,t)}))})),s++},c.prototype.isReady=function(){return this.hasComponent&&this.hasView},t.call(c.prototype,(function(){return"ComponentAndView"})),c})),define("blue-view/load",["require","blue/is","blue/resolver/module"],(function(e){"use strict";var t=e("blue/is"),n=new(e("blue/resolver/module"));return n.prefix="wire!",n.suffix="/pageConfig",function(e,i,r){if(!t.string(e))throw new TypeError("name must be a string");if(!t.function(i))throw new TypeError("callback must be a function");n.resolve(e).onValue((function(e){i.call(r,e)}))}})),define("blue-view/nodeDictionary",["require","blue/$","blue/is","blue/store/weakMemory","blue/as/serializable","blue/log"],(function(e){"use strict";var t=e("blue/$"),n=e("blue/is"),i=e("blue/store/weakMemory"),r=e("blue/as/serializable"),o=new(e("blue/log"))("[nodeDictionary]"),a=function(e){return n.array(e)?t(e[0]).get(0):t(e).get(0)};function u(){this.store=new i("node")}return u.prototype.hasViewAt=function(e){var n=t(e),i=n.get(0);return 1===n.length?this.store.has(i):(n.length,!1)},u.prototype.getViewAt=function(e){var n,i=t(e),r=i.get(0);if(1===i.length&&this.store.has(r))return n=1===(n=this.store.get(r)).length?n[0]:n},u.prototype.add=function(e,n){var i,r,u,s=a(e);if(!s)throw r=n.name.split(n.viewName)[0].slice(0,-1),n._componentStack&&(u=n._componentStack),o.warn('Could not create view in node "'+e+'". Node not found in DOM.'),n._destroy(),u?new Error('Could not create-view in controller "'+r+'" for component "'+u+'" in node "'+e.selector+'". Node not found in DOM.'):new Error('Could not create-view in controller "'+r+'" in node "'+e.selector+'". Node not found in DOM.');t(s).attr("data-has-view","true"),(i=this.store.get(s)||[]).push(n),this.store.set(s,i)},u.prototype.destroy=function(e){var n=this,i=[],r=a(e);return r?((n.store.get(r)||[]).forEach((function(e){i.push(n.destroyView(e))})),Promise.all(i).then((function(){t(r).removeAttr("data-has-view"),n.store.remove(r)}))):Promise.resolve()},u.prototype.destroyView=function(e){var n,i,r,a,u=this,s=e.viewName||"(unknown)",c=[],l=new Promise((function(e,t){i=e,r=t})),d=e.$target,p=d?d.get(0):null;return e.$element&&p&&u.store.has(p)&&u.store.get(p).indexOf(e)>-1?("function"==typeof(a=e.$element.find("[data-has-view]").toArray().map((function(e){var n=t(e),i=[],r=n&&n.length>0?n.get(0):void 0;return r&&u.store.has(r)&&(u.store.get(r).forEach((function(e){i.push((function(){return e._destroy()}))})),n.removeAttr("data-has-view"),u.store.remove(r)),function(){return Promise.all(i.map((function(e){return e()})))}})).reduceRight((function(e,t){return t?e.then(t()).catch((function(e){throw e})):e}),Promise.resolve()))&&(a=a()),a.then((function(){var t;p?(n=u.store.get(p))&&(1===n.length&&n[0]===e?(c.push(e._destroy()),d.removeAttr("data-has-view"),u.store.remove(p)):n.length>1&&(t=n.filter((function(t){return t!==e})),c.push(e._destroy()),u.store.set(p,t))):c.push(e._destroy()),Promise.all(c).then((function(){i()})).catch((function(e){o.error("Error encountered when destroying a top-level view "+s,e),r(e)}))})).catch((function(e){throw o.error("Error encountered when destroying a nested view within "+s,e),e}))):(e._destroy&&e._destroy(),i()),l},r.call(u.prototype,(function(){return"NodeDictionary"})),new u})),define("blue-view/page/web",["require","blue/as/contextual","blue/as/registry","blue/util","../resolver/cav","blue/deferred","blue/dom","blue/event/channel","blue/log","blue/is","../load","../nodeDictionary","blue/queue","blue/resolver/module","blue/root","blue/siteData","blue/$"],(function(t){"use strict";var n,i=t("blue/as/contextual"),r=t("blue/as/registry"),o=t("blue/util").object.deepClone,a=t("../resolver/cav"),u=t("blue/deferred"),s=t("blue/dom"),c=t("blue/event/channel"),l=t("blue/log"),d=t("blue/is"),p=t("../load"),v=t("../nodeDictionary"),f=t("blue/queue"),m=t("blue/resolver/module"),g=t("blue/root"),h=t("blue/siteData"),b=t("blue/$"),w=l("[blue:view]"),y=g.performance&&g.performance.now&&g.performance.mark,x={},C={ractive:{path:"blue-view-ractive/view",deferred:void 0},vue:{path:"blue-view-vue/view",deferred:void 0}},V={},I=function(e,t,i){var r,o,a={alert:"once",when:"visible",percent:50,duration:0,event:"blue:dom:visibility",handler:function(){}},u=function(e,t){var n=t?">"+t:"",i=e,r=0;if(e.id)return"#"+e.id+n;if(!e.parentNode)return e.tagName+n;if((e.nextSibling||e.previousSibling||{}).tagName===e.tagName){for(;i=i.previousSibling;)r++;return u(e.parentNode,e.tagName+":nth-child("+r+")"+n)}return u(e.parentNode,e.tagName+n)},c=function(e,t,i){var r=n.context;e&&e.removeAttribute("trackVisibility"),r&&w.error("["+r.getStack()+"]",i+" ["+t.data+"]")},l=function(e){switch(e.when){case"visible":return e.isVisible;case"hidden":return!e.isVisible}return!0},d=function(e,t){var r,o,a=function(e,t){var n=e.getAttribute("trackVisibility")||'{"default": true}';try{n=JSON.parse(n)}catch(t){c(e,{data:e.id},"Unable to parse trackVisibility value"),n={}}return{alert:n.alert||t.alert,when:n.when||t.when,percent:Math.max(1,Math.min(100,n.percent||t.percent)),duration:Math.max(n.duration||t.duration),event:n.event||t.event,isVisible:n.isVisible||!1,selector:n.selector||u(e),data:n.data}}(e,n);if(!t||!V[a.selector]){if(r=a.isVisible,o=function(e){var t,n,i=e.getBoundingClientRect(),r=Math.ceil(.1*(i.bottom-i.top)),o=Math.ceil(.1*(i.right-i.left)),a=window.innerWidth||document.documentElement.clientWidth,u=window.innerHeight||document.documentElement.clientHeight,s=function(t,n){return e.contains(document.elementFromPoint(t,n))};return i.top>u||i.left>a||i.right<0||i.bottom<0||!(s(Math.max(i.left+o,0),Math.max(i.top+r,0))||s(Math.min(i.right-o,a),Math.max(i.top+r,0))||s(Math.max(i.left+o,0),Math.min(i.bottom-r,u))||s(Math.min(i.right-o,a),Math.min(i.bottom-r,u)))?0:(t=(i.bottom-i.top)*(i.right-i.left),n=(Math.min(i.bottom,u)-Math.max(i.top,0))*(Math.min(i.right,a)-Math.max(i.left,0)),Math.round(n/t*100))}(e),a.isVisible=o>=a.percent,a.duration&&a.isVisible){if(!r)return a.isVisible=Date.now()+a.duration,e.setAttribute("trackVisibility",JSON.stringify(a)),setTimeout((function(){d(e,t)}),a.duration);if(r.constructor===Number&&r>Date.now())return}switch(a.alert){case"once":if(!l(a))return;t&&(V[a.selector]=!0),e.removeAttribute("trackVisibility");break;case"every":if(a.isVisible===r)return;if(e.setAttribute("trackVisibility",JSON.stringify(a)),!l(a)||!a.isVisible&&r.constructor===Number)return;break;default:return void c(e,a,"Invalid trackVisibility alert attribute")}!function(e,t,r){var o,a=(i.context||{}).children||[],u=a.length,s={selector:t.selector,isVisibile:t.isVisible,data:t.data};if(r)try{n.handler(s)}catch(n){c(e,t,n.message)}if(!t.default)for(;u--;)if((o=a[u].$().get(0))&&o.contains(e))return a[u].emit(t.event,s)}(e,a,t)}},p=function(e){e?(g.addEventListener("resize",f,!1),g.addEventListener("scroll",f,!1)):(g.removeEventListener("resize",f,!1),g.removeEventListener("scroll",f,!1)),o=e},v=function(e,t){for(var n,i=document.querySelectorAll(e),r=n=i.length;r--;)d(i[r],t);return n},f=function(){r||(r=setTimeout((function(){var e,t=Date.now(),i=(n.selector?v(n.selector,!0):0)+v("[trackVisibility]");!i&&o&&p(!1),i&&!o&&p(!0),r=void 0,(e=Date.now()-t)>50&&n.context&&w.warn("["+n.context.getStack()+"]","Visibility tracking took "+e+"ms to check "+i+" elements!")}),250))};i.constructor!==Object&&(i={}),Object.keys(a).forEach((function(e){e in i||(i[e]=a[e])})),i.context=e,n||(g.MutationObserver?new g.MutationObserver(f).observe(s,{childList:!0,subtree:!0}):g.addEventListener("DOMNodeInserted",f,!1)),n=i,f()},k=function(e,t,n){var i,r,o,a=Object.create(null),u=!0;function s(e){if(d.defined(e)&&d.plainObject(e)&&e&&d.defined(e.actions)&&d.plainObject(e.actions)&&e.actions)for(o in e.actions)a[o]=e.actions[o]}if(n.length){if(i=t[e.spec.name],d.defined(i)&&d.plainObject(i)&&i)for(r=0;r<n.length;r++)s(i[n[r]])}else s(e.spec);for(o in e.spec.actions)u=u&&a[o];return u&&(a[e.spec.name]=!0),a},A=function(e,t){var n=t[0]&&t[0].context&&t[0].context.viewEngine?t[0].context.viewEngine:e;return t[1]&&t[1].viewEngine&&(n=t[1].viewEngine),t[2]&&t[2].viewEngine&&(n=t[2].viewEngine),n},S=function(e,t,n){var i=t.link(),r=e.spec||{};return(n=n||{}).linkToPage=!0,i.bridge.addComponentSpecData(Object.keys(r.data||{}).reduce((function(e,t){return e[t]=1,e}),{})),i.bridge.addComponentSpecSettings(e.getSettingsValues()),i.bridge.addComponentSpecActions(e.getActionNames()),n.viewInternals=i,{resolved:Promise.resolve([e,t,n])}},E=function(e){var t=e.destroy;e.destroy=function(n){return n?t.call(e):Promise.reject(new Error("Warning: Page view's component was told to destroy. This component may not be destroyed."))}},T=function(e,t){var n=this;n.name=e,n.defineContext(t,{name:e,pageName:e,logger:l("[Page-"+e+"]"),viewResolver:new m,screen:Object.create(null,{hasViewAt:{value:v.hasViewAt.bind(v),enumerable:!0},getViewAt:{value:v.getViewAt.bind(v),enumerable:!0}}),env:Object.create(t.env||null),$:b}),Object.defineProperties(n.context.site.env,{onLine:{get:function(){return g.navigator.onLine},enumerable:!0},print:{value:function(){g.print()},enumerable:!0}}),Object.defineProperties(n.context.env,{scrollToTop:{value:function(e){e?(e.scrollTop=0,e.scrollLeft=0):g.scrollTo(0,0)},enumerable:!0}}),n.tellApp=void 0,n.context.getViewRegistry=function(e){return new Promise((function(t,n){C[e]?C[e].deferred.promise.then((function(){t(C[e].registry)})):n()}))},n.context.on("application:display",(function(e){var t,i=[],r=e.contextStack,u=e.resolverPathOptions||o(n.context.viewResolverOptions)||{};!e.resolverPathOptions&&e.areaName&&(u.prefix=u.prefix||"",u.prefix=u.prefix+e.areaName+"/"),e.viewEngine||(e.viewEngine="ractive"),d.array(e.cavList)?d.array(e.cavList[0])||d.plainObject(e.cavList[0])?e.cavList.forEach((function(o){"PAGE"===o[1]&&o[0]?(E(o[0]),i.push(S(o[0],n.pageView,o[2]))):(t=A(e.viewEngine,o),n.loadViewEngine(t),i.push(new a(n.context,t,x,o,r,u)))}),n):"PAGE"===e.cavList[1]&&e.cavList[0]?(E(e.cavList[0]),i.push(S(e.cavList[0],n.pageView,e.cavList[2]))):(t=A(e.viewEngine,e.cavList),n.loadViewEngine(t),i.push(new a(n.context,t,x,e.cavList,r,u))):d.plainObject(e.cavList)&&i.push(new a(n.context,e.viewEngine,x,e.cavList,r,u)),i.length||(n.context.emit("blue:route:viewRenderComplete",{msgType:"blue:route:viewRenderComplete",id:e.routeId,displayReqId:e.displayReqId,contextPath:e.contextStack,cavList:"",timestamp:y?performance.now():0,name:"blue:route:viewRenderComplete view "+e.contextStack+" "+e.displayReqId}),e.resolve&&e.resolve()),n.insertComponentView(e.controllerAction,i,e.activityChannel).then((function(t){n.context.emit("blue:route:viewRenderComplete",{msgType:"blue:route:viewRenderComplete",id:e.routeId,displayReqId:e.displayReqId,contextPath:e.contextStack,cavList:t,timestamp:y?performance.now():0,name:"blue:route:viewRenderComplete view "+e.contextStack+" "+e.displayReqId}),e.resolve&&e.resolve()}),(function(t){n.context.emit("blue:route:viewRenderComplete",{msgType:"blue:route:viewRenderComplete",id:e.routeId,displayReqId:e.displayReqId,contextPath:e.contextStack,cavList:"",timestamp:y?performance.now():0,name:"blue:route:viewRenderComplete view "+e.contextStack+" "+e.displayReqId}),e.reject&&e.reject(t)}))})),n.context.on("application:ready",(function(){n.context.on("page:error",(function(e){n.tellApp("page:error",e)})),n.context.on("blue:route:viewRenderComplete",(function(e){n.tellApp(e.msgType,e)}))})),n.context.on("importer:registerView",(function(e){var t=e.contextStack+"/"+e.viewName;x[t]=e.viewPath}))};function N(e,t){return(e&&e.context?e.context.getStack():"")+"+"+(t?t.name:"")}return T.prototype=Object.create(null),T.prototype.constructor=T,T.prototype.destroy=function(){n=void 0,this.destroyContext()},T.prototype.loadViewEngine=function(e){var t=this;e&&C[e]&&(C[e].deferred||(C[e].deferred=new u,g.requirejs([C[e].path],(function(n){C[e].deferred.resolve(n),r.call(C[e],"view",n,{lazy:!0,noCache:!0}),C[e].defineViewsRegistry(t.context)}),(function(e){context.error(e)}))))},T.prototype.insertComponentView=function(t,n,i){var r,a,u,s,l,p,m=this,g=[];return a=n.map((function(e){if(e)return e.resolved})),r=Promise.all(a),u=a.length,s=new Promise((function(e,t){l=e,p=t})),r.then((function(n){var r=new f("sync");n.forEach((function(n,a){r.add((function(r){var s,f,h,b,y,x,C=n[0],V=n[1],I=n[2],A=C&&C.context||{},S={},E=function(){var e,t,n;C?C.destroyed?setTimeout((function(){v.destroyView(V)}),0):(C._("enabled")&&C.disable(),I.viewInternals.bridge.enable(C.output),!C.__used&&i&&(C.__used=!0,e=C.output.asEventStream(),t=i.plug(e),e.onEnd(t)),C.enable(I.viewInternals.bridge.output)):(n=new c({eventTarget:I.viewInternals.bridge}),I.viewInternals.bridge.queueOutput=!0,I.viewInternals.bridge.enable(n)),r(),g.push(N(C,V)),a+1>=u&&l(g.join(","))};return C&&C.destroyed||V&&V.destroyed?(r(),g.push(N(C,V)),void(a+1>=u&&l(g.join(",")))):(I.target?s=I.target:A.viewTargeter&&(s=A.viewTargeter.targetRequest(t,V.viewName)),void(I.linkToPage?(V.model.roles=k(C,m.roledata,m.userType),C._queueData=!0,b=C.spec||{},y=Object.keys(b.data||{}).reduce((function(e,t){return e[t]=1,e}),{}),x=V.rtemplate.get(),C.destroyed||(C._("enabled")&&C.disable(),Object.keys(x).forEach((function(e){y[e]&&C.model.set(e,x[e])})),I.viewInternals.bridge.reBind(C.output,y,C.getSettingsValues(),C.getActionNames()),!C.__used&&i&&(C.__used=!0,f=C.output.asEventStream(),h=i.plug(f),f.onEnd(h)),C.enable(I.viewInternals.bridge.output)),r(),a+1>=u&&l(g.join(","))):s?(d.plainObject(I.model)&&(V.model=m.context.util.object.mixIn(V.model,o(I.model))),C&&(Object.keys(C.spec.data||{}).forEach((function(e){S[e]=void 0})),V.model=m.context.util.object.mixIn(S,V.model,C.model.get({isolate:!0}),C.getSettingsValues()),V.model.roles=k(C,m.roledata,m.userType),C._queueData=!0),(I.append?Promise.resolve():v.destroy([s])).then((function(){I.append?V.appendTo(s,E):V.replaceIn(s,E)}),(function(e){throw w.error("["+m.context.getStack()+"]","View(s) in target node "+s+" failed to destroy",e),m.context.page.emit("page:error",{code:"blue:app:error:nodeDestroyFailed",description:"View(s) in target node "+s+" failed to destroy; "+e.name+":"+e.message}),e})).catch((function(e){var t=C?C.spec.name:"NONE",n=I.append?"appended":"rendered";w.error("["+m.context.getStack()+"]","CAV ("+t+":"+V.viewName+") could not be "+n+" to target "+s,e),m.context.page.emit("page:error",{code:I.append?"blue:app:error:cavAppendFailed":"blue:app:error:cavInsertFailed",description:"CAV ("+t+":"+V.viewName+") could not be "+n+" to target "+s+"; "+e.name+":"+e.message}),r(),a+1>=u&&p(e)}))):(w.error("["+m.context.getStack()+"]",V.veiwName+" has no render target specified"),r(),a+1>=u&&p(e))))}))}))}),(function(e){w.error("["+m.context.getStack()+"]","CAV List could not be resolved:",e),m.context.page.emit("page:error",{code:"blue:app:error:cavListResolutionFailed",description:"CAV List could not be resolved:"+e}),p(e)})),s},T.prototype.loadSpec=function(){var e,t,n,i,r=this,o=new Promise((function(n,i){e=n,t=i}));return p((n="",(i=(s.location.hash||"").replace("#","").split("/")).length&&i[0]?n=i[0]:g.appRoutes&&g.appRoutes[0]&&(n=g.appRoutes[0]),n),(function(n){r.settings=n,r.roledata=n.roles||Object.create(null),r.userType=[];var i=h.getData("userType");if(d.defined(i)&&i&&(d.string(i)||d.array(i))){var o=[],u=!0;d.string(i)&&(i=[i]);for(var s=0;s<i.length;s++)d.undefined(i[s])||!i[s]||"PrimaryUser"===i[s]?u=!1:o.push(i[s]);u&&(r.userType=o)}n.viewResolverOptions&&(r.context.viewResolverOptions=n.viewResolverOptions||{}),n.viewEngine?r.view&&r.loadViewEngine(n.viewEngine):(n.viewEngine="ractive",r.view&&r.loadViewEngine("ractive")),n.context&&Object.keys(n.context).forEach((function(e){r.context[e]=n.context[e]})),b((function(){if(r.view){var i,o=r.viewTarget||"body";r.loadViewEngine(n.viewEngine),(i=new a(r.context,n.viewEngine,x,[void 0,r.view,{target:o}],r.context.getStack())).resolved.then((function(e){r.pageView=e[1]})),r.trackVisibility&&i.resolved.then((function(){I(r.context,0,r.trackVisibility)})),r.insertComponentView("page.root",[i]).then(e,t)}else e()}))})),o},T=i.call(T,{name:"page"})})),define("blue-view/mvc/mapper/mapping",["require","blue/is","blue/declare"],(function(e){"use strict";var t=e("blue/is");return e("blue/declare")({constructor:function(e){if(this.mapping=e,t.undefined(this.mapping))throw new TypeError('"mapping" is undefined')},lookup:function(){if(t.function(this.mapping.lookup))return this.mapping.lookup.apply(this.mapping,arguments);throw new TypeError('"mapping.lookup()" is not a function')},toString:function(){return" Mapping "}})})),define("blue-view/mvc/mapper",["require","blue/is","./mapper/mapping","blue/compose","blue/util","blue/intercept","blue/declare"],(function(e){"use strict";var t=e("blue/is"),n=e("./mapper/mapping"),i=e("blue/compose"),r=e("blue/util").string.trim,o=e("blue/intercept"),a=e("blue/declare"),u=function(e){return new n(e)};return a((function(){var e={constructor:function(){var e,t,n;if(arguments.length){for(e=[this],t=0;t<arguments.length;t++)e.push(arguments[t]);i.apply(i,e)}Object.defineProperty(this,"mappings",{get:function(){return n},set:function(e){n=e.map(u)},enumerable:!0}),this.defineInterceptors()},destroy:function(){this.destroyInterceptors()},mapRequest:function(){var e,n=arguments,i=!1;return this.mappings&&this.mappings.length&&this.mappings.some((function(o){return e=o.lookup.apply(o,n),t.defined(e)&&(e=e.split(",").map(r),i=e.length>0),i}),this),e},toString:function(){return" Mapper "}};return o.withInterceptors.call(e,"mapRequest"),e}))})),define("blue-view/mvc/targeter",["require","./mapper","blue/declare"],(function(e){"use strict";var t=e("./mapper");return e("blue/declare")(t,{constructor:function(){t.call(this)},targetRequest:function(e,t){return this.mapRequest(e,t)},toString:function(){return" Targeter "}})})),define("blue-view/with/domManagement",["require","blue/is"],(function(e){"use strict";var t=e("blue/is");return function(){this.domManager={addClass:function(e,n,i){t.undefined(i)&&(i=n,n=void 0),e.$(n).addClass(i)},after:function(e,n,i){t.undefined(i)&&(i=n,n=void 0),e.$(n).after(i)},empty:function(e,t){e.$(t).empty()},hasClass:function(e,n,i){return t.undefined(i)&&(i=n,n=void 0),e.$(n).hasClass(i)},hide:function(e,t){e.$(t).hide()},html:function(e,n,i){t.undefined(i)&&(i=n,n=void 0),e.$(n).html(i)},prepend:function(e,n,i){t.undefined(i)&&(i=n,n=void 0),e.$(n).prepend(i)},remove:function(e,t){e.$(t).remove()},removeClass:function(e,n,i){t.undefined(i)&&(i=n,n=void 0),e.$(n).removeClass(i)},replace:function(e){var t=e.$element;e.destroyElement(),e.insertElement((function(){$(t).replaceWith(e.$element)}))},show:function(e,t){e.$(t).show()}},Object.keys(this.domManager).forEach((function(e){this[e]=this.domManager[e].bind(this,this)}),this)}})),define("blue-view/main",(function(){}));