/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module controllerName/manifest
 */
define('autoCatContactUs/manifest',{
    version: 2,
    controller: {
        module: 'autoCatContactUs/controller',
        viewPath: {
            prefix: 'autoCatContactUs/views/'
        },
        services: {
            frequentlyAskedQuestions: {
                module: 'autoCatContactUs/services/frequentlyAskedQuestions'
            }
        },
        components: {
            faqContainer: {
                //faq flyout
                module: 'autoCatContactUs/components/faqContainer',
                spec: 'autoCatContactUs/blue-spec-share/account_transfer_help',
                model: 'faqContainer'
            },
            faqFlyout: {
                //faq flyout
                module: 'autoCatContactUs/components/faqFlyout',
                spec: 'autoCatContactUs/blue-spec-share/account_transfer_help',
                model: 'faqFlyout'
            },
            accountTransferHelp: {
                //contact us
                module: 'autoCatContactUs/components/accountTransferHelp',
                spec: 'autoCatContactUs/blue-spec-share/account_transfer_help',
                model: 'accountTransferHelp'
            }
        }
    }
});
define('autoCatContactUs/dataProviders/frequentlyAskedQuestions',[],function () {
    'use strict';

    var processDataSuccess = function (reqData, resData, modelData, model) {
        var tabsContent = {},
            tabs = [],
            faqList,
            mapper = [
                'external',
                'internal'
            ],
            map = {},
            numFaqList,
            shortcut = resData.result.topic.subtopics,
            currentSelection = model.get('faqFlyout.currentSelection');

        shortcut.forEach(function (element, index) {
            map[element.title] = mapper[index];
            tabsContent[map[element.title]] = element.questions;
            tabs.push({
                id: 'option' + index,
                groupName: 'faqTabs',
                adatext: '',
                label: element.title,
                active: map[element.title] === currentSelection,
                identifier: map[element.title],
                rClick: 'tabFocus',
                selectedAdaText: 'current'
            });
        });

        numFaqList = model.get('faqContainer.numFaqList');
        faqList = tabsContent[currentSelection];

        model.set('faqFlyout.faqType', tabs);
        model.set('faqFlyout.subtopics', tabsContent);
        model.set('faqFlyout.tabMap', map);
        model.set('faqFlyout.frequentlyAskedQuestions', faqList);
        
        model.set('faqContainer.additionalFrequentlyAskedQuestionsAvailable', true);
        model.set('faqContainer.frequentlyAskedQuestions', faqList.slice(0, numFaqList));
    };

    var processDataFailure = function (reqData, resData, modelData, model) {
        model.set('faqContainer.frequentlyAskedQuestions', {
            failure: true
        });
    };

    var mappers = {
        frequentlyAskedQuestions: {
            getFaqs: {
                success: processDataSuccess,
                failure: processDataFailure
            }
        }
    };

    return mappers;
});
define('autoCatContactUs/lib/constants',[],function () {
    'use strict';

    var constants = {
        FLYOUT_URL: '/flyout/index',
        FLYOUT_DESTROY: '/flyout/teardown',
        content: '#flyoutContent',
        wrapper: '#flyoutWrapper',
        baseRoute: '/autoCatContactUs/faqFlyout',
        FLYOUT_SETTINGS: { // application name is prepended to routes in area.js
            faqFlyout: {
                route: '/autoCatContactUs/faqFlyout',
                params: [],
                size: 'flyoutSize-standard',
                classes: 'contact-us-faq-flyout',
                closeEventName: 'exitHelpAndSupportFlyout',
                closeAdaHATKey: 'MERCHANT_FUNDED_OFFERS_FREQUENTLY_ASKED_QUESTIONS',
                displayHeaderText: true,
                hasGradientBar: false
            }
        },
        DEFAULT: {
            compName: 'accountTransferHelp',
            numFaq: 4,
            currentSelection: 'external',
            hideTabs: false
        },
        mismatchVariationMap: {
            CHASE_WEALTH_MANAGEMENT: 'ACCOUNT_NAMES_MISMATCH_CWM',
            PRIVATE_BANK: 'ACCOUNT_NAMES_MISMATCH_PRIVATE_BANK',
            JP_MORGAN_SECURITIES: 'ACCOUNT_NAMES_MISMATCH_JPMS',
            JP_MORGAN_SECURITIES_SELF_DIRECTED: 'ACCOUNT_NAMES_MISMATCH_JPMS_SELF_DIRECTED',
            JP_MORGAN_SECURITIES_FULL_SERVICE: 'ACCOUNT_NAMES_MISMATCH_JPMS_FULL_SERVICE'
        },
        segmentToVariationMapper: {
            'CWM': 'CHASE_WEALTH_MANAGEMENT',
            'PVB': 'PRIVATE_BANK',
            'WTH': 'PRIVATE_BANK',
            'PCB': 'JP_MORGAN_SECURITIES'
        },
        lineOfBusiness: {
            CWM_ADVISOR_ADVISED: 'CHASE_WEALTH_MANAGEMENT',
            CWM_DEFAULT: 'CHASE_WEALTH_MANAGEMENT',
            CWM_EDA: 'CHASE_WEALTH_MANAGEMENT',
            CWM_RSU: 'CHASE_WEALTH_MANAGEMENT',
            CWM_SDI: 'CHASE_WEALTH_MANAGEMENT',
            JPMS_FULL_SERVICE: 'JP_MORGAN_SECURITIES_FULL_SERVICE',
            JPMS_SDI: 'JP_MORGAN_SECURITIES_SELF_DIRECTED',
            PB_SDI: 'PRIVATE_BANK'
        },
        globalKeys: [
            'exitHelpMessageAda',
            'beginHelpMessageAda',
            'endHelpMessageAda',
            'exitAda',
            'warningAda',
            'importantAda',
            'closeLabel',
            'continueLabel',
            'notAvailableLabel',
            'backLabel',
            'nextLabel',
            'currentSelectionAda',
            'opensMenuAda',
            'closesMenuAda',
            'progressBarStepPercentageCompleteAda',
            'hidesContentBelowAda',
            'showsContentBelowAda'
        ]
    };

    return constants;
});
define('autoCatContactUs/lib/autoCatUtility',['require'],function (require) {
    'use strict';
    var dataAttrActionMap = {
        requestNewAccount: 'requestNewAccount'
    };
    var setIdAndFire = function (thisView, id, action, currentTarget) {
            id && thisView.context.$(currentTarget).attr('id', id);
            thisView.trigger(action, {
                data: currentTarget,
                id: id
            });
        },
        triggerViewLinks = function (thisView, currentTarget, id, event) {
            var dataAttrVal = currentTarget.attributes['data-attr'].value;
            event.preventDefault();
            if (dataAttrVal.includes('http')) {
                setIdAndFire(thisView, null, 'requestAccountTransferForm', event.currentTarget);
            } else {
                dataAttrVal = dataAttrActionMap[dataAttrVal] || dataAttrVal;
                setIdAndFire(thisView, id, dataAttrVal, currentTarget);
            }
        },
        isFlyout = function (state) {
            return !!(state && state.action && state.action.params && state.action.params.flyout);
        },
        isFlyoutRoute = function (context) {
            var prevRoute = context.routeToObject(context.routeHistory.lastRoute(1));
            return isFlyout(context.state()) || context.is.defined(prevRoute.action.params.flyout);
        },
        navigateBackFromFlyout = function (context) {
            var currentState = context.routeToObject();
            delete currentState.action.params.flyout;
            context.state(currentState);
        },
        isFlyoutRefresh = function (getRouteHistory) {
            // getHistory id will be 1 if there was only one route previous to this
            if (getRouteHistory().id === 1) {
                return getRouteHistory(1).url.includes('flyout=');
            }
            return false;
        },

        getLobSegmentVariation = function (context) {
            var lob = context.constants.lob,
                constants = context.constants,
                segmentToVariationMapper = constants.segmentToVariationMapper,
                variation = lob ? constants.lineOfBusiness[lob] : segmentToVariationMapper[context.siteData.getData('segment')] || segmentToVariationMapper.CWM;
            return variation;
        },
        setSegmentVariation = function (component, key) {
            var compContext = component.context,
                variation = getLobSegmentVariation(compContext),
                dcu = compContext.dcu.dynamicContent;
            dcu.set(component, key, variation);
        },
        faqFlyout = function (component) {
            var componentContext = component.context,
                url = '/' + componentContext.appName,
                currentState = componentContext.routeToObject();
            componentContext.areaName && (url += '/' + componentContext.areaName);
            currentState.action.params.flyout = ['faqFlyout'];
            componentContext.state(currentState);
        },
        savedHybridOptions = [{}],
        /** Function setHybrid 
         * Parameters:
         * 1) options: {
         *      pageTitle: String - Title of page.
         *      showBackArrow: Boolean, defaults to false
         *      showProfileSettings: Boolean, defaults to false
         *      showHamburgerMenu: Boolean, defaults to false
         *      close: callBack function for Close, shown if callback exists, if native behavior is wanted return true;
         *      cancel: callBack function for Cancel, shown if callback exists, if native behavior is wanted return true;
         *      back: callBack function for Back, if native behavior is wanted return true;
         * }
         */
        setHybrid = function(options, componentContext){
            var currentOptions,
                jsBridge = componentContext.hybridHelper.webNativeMessenger,
                buildOldCallbacks = function(){
                    var oldCallbacks = {};
                    currentOptions.back && (oldCallbacks.isHybridBackButtonRequired = function(){
                        return !currentOptions.back(); //Old JSB - For web code return true; For native behavior return false;
                    });
                    currentOptions.closeCancelAction && (oldCallbacks.isCloseSelected = currentOptions.closeCancelAction);
                    return oldCallbacks;
                },
                setupOptions = function(){
                    options.navButtonParams = {
                        pageTitle: options.pageTitle || savedHybridOptions[0].pageTitle,
                        showHamburgerMenu: !!options.showHamburgerMenu,
                        showProfileSettings: !!options.showProfileSettings,
                        showBackArrow: !!options.showBackArrow,
                        showCancel: !!options.cancel,
                        showClose: !!options.close       
                    };
                    options.closeCancelAction = options.close || options.cancel;
                    savedHybridOptions[1] = savedHybridOptions[0];//savedHybridOptions[0] is whatever is prsently on page.
                    return options;
                };
            currentOptions = componentContext.util.object.deepClone(savedHybridOptions[0] = options ? setupOptions(): savedHybridOptions[1]);

            jsBridge.updateNativeNavigationBar(currentOptions.navButtonParams);
            jsBridge.setShouldNativeHandleButtonPressedCallBack(function(buttonPressed) {
                var result = true,
                    button = String(buttonPressed).toLowerCase();
                if (['back', 'close', 'cancel'].indexOf(button) >= 0 && typeof currentOptions[button] === 'function') {
                    result = currentOptions[button]();
                }
                return !!result;
            }, buildOldCallbacks());
        };


    return {
        setSegmentVariation: setSegmentVariation,
        getLobSegmentVariation: getLobSegmentVariation,
        setIdAndFire: setIdAndFire,
        triggerViewLinks: triggerViewLinks,
        isFlyoutRoute: isFlyoutRoute,
        isFlyout: isFlyout,
        setHybrid: setHybrid,
        navigateBackFromFlyout: navigateBackFromFlyout,
        isFlyoutRefresh: isFlyoutRefresh,
        faqFlyout: faqFlyout,
        ELEMENTS: {
            content: '#flyoutContent'
        }
    };
});
/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module controllerName/controller
 */
define('autoCatContactUs/controller',['require','autoCatContactUs/dataProviders/frequentlyAskedQuestions','blue/siteData','autoCatContactUs/lib/constants','autoCatContactUs/lib/autoCatUtility','appkit-utilities/common/mediaQueryListener','appkit-utilities/content/globalContentMixin'],function (require) {
    'use strict';

    var dataMapper = require('autoCatContactUs/dataProviders/frequentlyAskedQuestions'),
        siteData = require('blue/siteData'),
        constants = require('autoCatContactUs/lib/constants'),
        acatUtility = require('autoCatContactUs/lib/autoCatUtility'),
        mediaQuery = require('appkit-utilities/common/mediaQueryListener'),
        globalContentMixin = require('appkit-utilities/content/globalContentMixin');

    return function autoCatContactUsContainerController(controllerContext) {
        var thisController = this,
            defaultConstant = constants.DEFAULT,
            isHybrid = controllerContext.hybrid;

        thisController.onInit = function () {
            thisController.dataProvider.mappers = dataMapper;
            controllerContext.globalContentMixin = globalContentMixin;
            controllerContext.constants = constants;
            controllerContext.acatUtility = acatUtility;
            controllerContext.siteData = siteData;

            controllerContext.on({
                'exitHelpAndSupportFlyout': thisController.destroyComponents
            });
        };

        thisController.setupFlyoutBlock = function () {
            var flyoutSettings = constants.FLYOUT_SETTINGS,
                sizeMap = {
                    xs: 'flyoutSize-standard', // force full-width layout
                    sm: 'flyoutSize-standard',
                    md: 'flyoutSize-standard',
                    lg: 'flyoutSize-standard'
                },
                url = '/' + controllerContext.appName;
            flyoutSettings.faqFlyout.route = constants.baseRoute;
            controllerContext.areaName && (url += '/' + controllerContext.areaName);
            controllerContext.constants.lob = null;

            Object.keys(flyoutSettings).forEach(function (key) {
                flyoutSettings[key].size = sizeMap[mediaQuery.currentBreakpoint] || flyoutSettings[key].size;
                flyoutSettings[key].route = url + flyoutSettings[key].route;
                flyoutSettings[key].pageHeader = controllerContext.dcu.dynamicContent.get({
                    'area': {
                        name: 'app'
                    },
                    'spec': {
                        name: 'ACCOUNT_TRANSFER_HELP'
                    }
                }, 'accountTransferHelpAndSupportHeader');
            });
            controllerContext.privateState(url + constants.FLYOUT_URL, {
                flyoutSettings: JSON.stringify(flyoutSettings)
            });
        };

        thisController.updateModels = function (params) {
            var lob = params.lob;
            controllerContext.constants.lob = lob;
            thisController.registry.hasComponent('faqFlyout') && controllerContext.acatUtility.setSegmentVariation(thisController.components.faqFlyout, 'phoneNumberLabel');
        };

        thisController.fetchFaqs = function (params) {
            var currentSelection = params.privateDataObject && params.privateDataObject.currentSelection || defaultConstant.currentSelection;

            thisController.model.set('faqFlyout.currentSelection', currentSelection);

            thisController.setupFlyoutBlock();
            thisController.dataProvider.request('frequentlyAskedQuestions.getFaqs');
        };

        thisController.faqListDataMap = function (faqList, numFaqList) {
            var currentSelection = thisController.model.get('faqFlyout.currentSelection'),
                faqs = faqList ? faqList : thisController.model.get('faqFlyout.subtopics.' + currentSelection);

            thisController.model.set('faqContainer.additionalFrequentlyAskedQuestionsAvailable', true);
            thisController.model.set('faqContainer.frequentlyAskedQuestions', faqs.slice(0, numFaqList));
            thisController.model.set('faqFlyout.frequentlyAskedQuestions', faqs);
        };

        thisController.index = function (params) {
            var component = params.compName || defaultConstant.compName,
                targetId = params.targetId,
                faqList = params.privateDataObject && params.privateDataObject.faqList,
                faqFlyoutExist = faqList && faqList.length > 0,
                numFaqList = params.numFaqList || defaultConstant.numFaq,
                currentSelection = params.privateDataObject && params.privateDataObject.currentSelection || defaultConstant.currentSelection,
                hideTabs = params.privateDataObject && params.privateDataObject.hideTabs || defaultConstant.hideTabs;

            thisController.model.set('faqFlyout.frequentlyAskedQuestions', thisController.model.get('faqFlyout.subtopics.' + currentSelection));

            // TODO: remove when Quovo is fully implemented
            if (mediaQuery.currentBreakpoint === mediaQuery.BREAKPOINT.XS || isHybrid) {
                hideTabs = true;
                currentSelection = 'internal';
            }

            thisController.model.set('faqFlyout.hideTabs', hideTabs);

            if (!thisController.registry.hasComponent(component)) {
                thisController.model.set('faqFlyout.currentSelection', currentSelection);

                if (faqFlyoutExist) {
                    thisController.faqListDataMap(faqList, numFaqList);
                } else {
                    thisController.model.set('faqContainer.numFaqList', numFaqList);
                    thisController.dataProvider.request('frequentlyAskedQuestions.getFaqs');
                }

                thisController.setupFlyoutBlock();

                return [
                    [thisController.components[component], component, {
                        target: targetId
                    }]
                ];
            }

            return [];
        };

        thisController.faqFlyout = function () {
            var currentSelection = thisController.model.get('faqFlyout.currentSelection') || defaultConstant.currentSelection;

            thisController.model.set('faqFlyout.frequentlyAskedQuestions', thisController.model.get('faqFlyout.subtopics.' + currentSelection));

            if (!thisController.registry.hasComponent('faqFlyout')) {

                return [
                    [thisController.components.faqFlyout, 'faqFlyout', {
                        target: '#flyoutContent'
                    }]
                ];
            }
            return [];
        };

        thisController.destroyComponents = function () {
            thisController.registry.destroyComponent('faqFlyout');
        };

    };
});
define('autoCatContactUs/blue-spec-share/account_transfer_help',[], function() { return {
  "name": "ACCOUNT_TRANSFER_HELP",
  "data": {
    "frequentlyAskedQuestions": {
      "type": "List",
      "items": {
        "frequentlyAskedQuestion": {
          "type": "Description",
          "exportable": true
        },
        "frequentlyAskedAnswer": "Description"
      }
    },
    "frequentlyAskedQuestion": {
      "type": "Description",
      "exportable": true
    },
    "additionalFrequentlyAskedQuestionsAvailable": {
      "type": "OnOff"
    }
  },
  "actions": {
    "requestFrequentlyAskedQuestions": true,
    "requestFrequentlyAskedQuestion": true,
    "exitFrequentlyAskedQuestion": true,
    "exitAccountTransferHelpAndSupport": true,
    "requestAccountTransferFAQ": true,
    "requestSecuritiesTransferFAQ": true
  },
  "settings": {
    "contactUsLabel": true,
    "phoneNumberLabel": true,
    "accountTransferHelperMessage": true,
    "requestAdditionalFrequentlyAskedQuestionsLabel": true,
    "frequentlyAskedQuestionsHeader": true,
    "accountTransferHelpAndSupportHeader": true,
    "exitAccountTransferHelpAndSupportAda": true,
    "requestExternalSecuritiesTransferFAQLabel": true,
    "requestInternalSecuritiesTransferFAQLabel": true
  }
}; });
define('autoCatContactUs/services/frequentlyAskedQuestions',[],function () {
    'use strict';

    return function frequentlyAskedQuestions(serviceContext) {
        var thisService = this,
            sq5url = serviceContext.config.APP_CQ5_HOST_CARD;
        thisService.onInit = function () {
            var serviceCalls = {},
                svcProps = {
                    //Temporary service
                    getFaqs: sq5url + '/content/faq/digital-ui/en/topics/account-transfer-faq.json'
                };

            Object.keys(svcProps).forEach(function (key) {
                serviceCalls[key] = {
                    settings: {
                        type: 'GET',
                        disableCsrf: true,
                        xhrFields: {
                            withCredentials: false
                        },
                        //above parameters are temporary as this is a temporary GET json call.
                        url: svcProps[key]
                    }
                };
            });

            thisService.serviceCalls = serviceCalls;
        };
    };
});
define('autoCatContactUs/components/faqContainer',[],function() {
    'use strict';

    return function faqContainer(componentContext) {
        var thisComponent = this;

        thisComponent.onInit = function() {};

        //for FAQ link && show more
        thisComponent.requestFrequentlyAskedQuestions = function(){
            componentContext.acatUtility.faqFlyout(thisComponent);
        };

        //to expand questions
        //this function is for analytics
        thisComponent.requestFrequentlyAskedQuestion = function() {
            return true;
        };

        //to close questions
        //this function is for analytics
        thisComponent.exitFrequentlyAskedQuestion = function(){
            return true;
        };
    };
});
define('autoCatContactUs/components/faqFlyout',[],function () {
    'use strict';
  
    return function faqFlyout(compContext) {
        var thisComponent = this;

        thisComponent.onInit = function () {
            compContext.globalContentMixin.call(thisComponent, compContext.constants.globalKeys);
            compContext.acatUtility.setSegmentVariation(thisComponent, 'phoneNumberLabel');
        };

        thisComponent.onReady = function() {
           compContext.hybrid && compContext.acatUtility.setHybrid({
                back: thisComponent.exitAccountTransferHelpAndSupport,
                showBackArrow: true,
                pageTitle: thisComponent.context.util.string.unescapeHtml(thisComponent.accountTransferHelpAndSupportHeader)
            }, compContext);
        };

        thisComponent.exitAccountTransferHelpAndSupport = function(){
            var currentState = compContext.routeToObject();
            delete currentState.action.params.flyout;
            compContext.state(currentState);
            return false;
        };

        //to expand questions
        //this function is for analytics
        thisComponent.requestFrequentlyAskedQuestion = function (event) {
            thisComponent.frequentlyAskedQuestion = event.context.header;
            return true;
        };

        //to close questions
        //this function is for analytics
        thisComponent.exitFrequentlyAskedQuestion = function () {
            return true;
        };

        thisComponent.requestSecuritiesTransferFAQ = function (event) {
            var type = thisComponent.model.get('subtopics'),
                tabMap = thisComponent.model.get('tabMap'),
                selection = tabMap[event.context.label];

            // resetting frequentlyAskedQuestions to avoid having accordion open on tab change
            thisComponent.model.set('frequentlyAskedQuestions', null);
            thisComponent.model.set('frequentlyAskedQuestions', type[selection]);
        };
    };

});

define('autoCatContactUs/components/accountTransferHelp',[],function() {
    'use strict';

    return function accountTransferHelp(componentContext) {
        var thisComponent = this;

        thisComponent.requestFrequentlyAskedQuestions = function() {
            componentContext.acatUtility.faqFlyout(thisComponent);
        };

    };
});
define('autoCatContactUs/template/faqContainer',[], function() { return {"v":4,"t":[{"t":7,"e":"div","m":[{"n":"class","f":"row","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"frequently-asked-questions-container col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8","t":13}],"f":[{"t":8,"r":"faqs"}]}]}]}; });
define('autoCatContactUs/views/specs/faqContainer',{
    name: 'FAQ_CONTAINER',
    defaultBindings: true,
    bindings: {},
    triggers: {
        handleClick: {
            action: 'view.handleClick'
        }
    }
});
define('autoCatContactUs/template/partials/frequentlyAskedQuestions',[], function() { return {"v":4,"t":[{"t":7,"e":"div","m":[{"n":"id","f":"transferSecuritiesFaq","t":13},{"n":"class","f":"faqContainer","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"faq-wrapper","t":13}],"f":[{"t":7,"e":"h3","m":[{"n":"class","f":"frequently-asked-questions-header","t":13}],"f":[{"t":2,"r":"~/frequentlyAskedQuestionsHeader","s":true}]}," ",{"t":4,"f":[{"t":7,"e":"blueLoader","m":[{"n":"id","f":"faqs","t":13},{"n":"classes","f":"content","t":13}]}],"n":50,"x":{"r":[".frequentlyAskedQuestions"],"s":"!_0"}},{"t":4,"n":51,"f":[{"t":4,"f":[{"t":7,"e":"blueAccordion","m":[{"n":"header","f":[{"t":3,"x":{"r":["~/sanitizer",".question"],"s":"_0.sanitizeHTML(_1)"}}],"t":13},{"n":"id","f":["faq_",{"t":2,"r":"@index"}],"t":13},{"n":"content","f":"true","t":13},{"n":"classes","f":"faq-items","t":13},{"n":"open","f":"false","t":13},{"n":"rClick","f":[{"t":4,"f":["exitFrequentlyAskedQuestion"],"n":50,"r":"faqAccordionOpenState"},{"t":4,"n":51,"f":["requestFrequentlyAskedQuestion"],"l":1}],"t":13},{"n":"ada","f":[{"t":2,"x":{"r":["hidesContentBelowAda","showsContentBelowAda"],"s":"{open:_0,closed:_1}"}}],"t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"faqAnswer","t":13}],"f":[{"t":3,"x":{"r":["~/sanitizer",".answer"],"s":"_0.sanitizeHTML(_1)"}}]}]}],"n":52,"r":".frequentlyAskedQuestions"}," ",{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"show-more-wrapper","t":13}],"f":[{"t":7,"e":"blueLink","m":[{"n":"id","f":"faqShowMore","t":13},{"n":"classes","f":"show-more-expand-flyout","t":13},{"n":"content","f":[{"t":2,"r":"~/requestAdditionalFrequentlyAskedQuestionsLabel","s":true}],"t":13},{"n":"adatext","f":[{"t":2,"r":"~/requestAdditionalFrequentlyAskedQuestionsAda","s":true}],"t":13},{"n":"rClick","f":"requestFrequentlyAskedQuestions","t":13},{"n":"endIcon","f":"progressright","t":13}]}]}],"n":50,"r":"additionalFrequentlyAskedQuestionsAvailable"}],"l":1}]}]}],"e":{}}; });
define('autoCatContactUs/views/faqContainer',['require','autoCatContactUs/template/faqContainer','autoCatContactUs/views/specs/faqContainer','blue-ui/view/elements/link','blue-ui/view/modules/accordion','blue-ui/view/elements/loader','autoCatContactUs/template/partials/frequentlyAskedQuestions'],function (require) {
    'use strict';
    var _template = require('autoCatContactUs/template/faqContainer'),
        _bridge = require('autoCatContactUs/views/specs/faqContainer'),
        _views = {
            'blueLink': require('blue-ui/view/elements/link'),
            'blueAccordion': require('blue-ui/view/modules/accordion'),
            'blueLoader': require('blue-ui/view/elements/loader')
        },
        _partials = {
            'faqs': require('autoCatContactUs/template/partials/frequentlyAskedQuestions')
        };

    return function faqContainer(viewContext) {
        var thisView = this;

        thisView.onInit = function () {
            thisView.template = _template;
            thisView.bridge = _bridge;
            thisView.views = _views;
            thisView.partials = _partials;
        };

    };
});
define('autoCatContactUs/template/faqFlyout',[], function() { return {"v":4,"t":[{"t":7,"e":"div","m":[{"n":"id","f":"faqFlyout","t":13},{"n":"class","f":"container-fluid faqFlyout-container","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"full-page-container","t":13}],"f":[{"t":4,"f":[{"t":7,"e":"blueLoader","m":[{"n":"id","f":"flyoutWrapper","t":13},{"n":"classes","f":"content","t":13}]}],"n":50,"x":{"r":[".frequentlyAskedQuestions"],"s":"!_0"}},{"t":4,"n":51,"f":[{"t":7,"e":"div","m":[{"n":"class","f":["col-xs-12 faq-tabs-container ",{"t":4,"f":["hide-tabs"],"n":50,"r":"~/hideTabs"}],"t":13}],"f":[{"t":7,"e":"blueTabs","m":[{"n":"id","f":"faqTabs","t":13},{"n":"classes","f":"faq-Tabs","t":13},{"n":"tabs","f":[{"t":2,"r":"faqType"}],"t":13}]}]}," ",{"t":7,"e":"div","m":[{"n":"id","f":"flyout-blue-accordion","t":13},{"n":"class","f":"accordion-flyout","t":13}],"f":[{"t":4,"f":[{"t":7,"e":"blueAccordion","m":[{"n":"header","f":[{"t":3,"x":{"r":["~/sanitizer",".question"],"s":"_0.sanitizeHTML(_1)"}}],"t":13},{"n":"id","f":["fAQ_",{"t":2,"r":"@index"}],"t":13},{"n":"groupName","f":"opensided","t":13},{"n":"content","f":"true","t":13},{"n":"opensided","f":"true","t":13},{"n":"classes","f":"faq-items","t":13},{"n":"open","f":[{"t":2,"r":".faqAccordionOpenState"}],"t":13},{"n":"rClick","f":[{"t":4,"f":["exitFrequentlyAskedQuestion"],"n":50,"r":".faqAccordionOpenState"},{"t":4,"n":51,"f":["requestFrequentlyAskedQuestion"],"l":1}],"t":13},{"n":"ada","f":[{"t":2,"x":{"r":["hidesContentBelowAda","showsContentBelowAda"],"s":"{open:_0,closed:_1}"}}],"t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"faqAnswer","t":13}],"f":[{"t":3,"x":{"r":["~/sanitizer",".answer"],"s":"_0.sanitizeHTML(_1)"}}]}]}],"n":52,"r":".frequentlyAskedQuestions"}]}],"l":1}]}]}],"e":{}}; });
define('autoCatContactUs/views/specs/faqFlyout',{
    name: 'ACCOUNT_TRANSFER_HELP',
    defaultBindings: true,
    bindings: {},
    triggers: {
        tabFocus: {
            action: 'view.tabFocus'
        }
    }
});
define('autoCatContactUs/views/faqFlyout',['require','autoCatContactUs/template/faqFlyout','autoCatContactUs/views/specs/faqFlyout','blue/$','blue-ui/view/modules/accordion','blue-ui/view/elements/loader','blue-ui/view/modules/tabs'],function (require) {
    'use strict';
    var _template = require('autoCatContactUs/template/faqFlyout'),
        _viewSpec = require('autoCatContactUs/views/specs/faqFlyout'),
        _jQ = require('blue/$'),
        _views = {
            blueAccordion: require('blue-ui/view/modules/accordion'),
            blueLoader: require('blue-ui/view/elements/loader'),
            blueTabs: require('blue-ui/view/modules/tabs')
        };

    return function faqFlyout(viewContext) {
        var thisView = this;

        thisView.template = _template;
        thisView.bridge = _viewSpec;
        thisView.views = _views;

        thisView.onReady = function () {
            _jQ('html, body').animate({
                scrollTop: 0
            }, 'fast');
        };

        thisView.tabFocus = function (event) {
            thisView.trigger('requestSecuritiesTransferFAQ', event);
            viewContext.$('.tab.Transfers.active').focus();
        };
    };
});
define('autoCatContactUs/template/accountTransferHelp',[], function() { return {"v":4,"t":[{"t":7,"e":"div","f":[{"t":7,"e":"div","m":[{"n":"class","f":"contact-us-header","t":13}],"f":[{"t":7,"e":"mds-icon","m":[{"n":"class","f":"contact-us-icon","t":13},{"n":"size","f":"24","t":13},{"n":"color","f":"default","t":13},{"n":"type","f":"ico_alert_outlined","t":13}]}," ",{"t":7,"e":"span","m":[{"n":"class","f":"contact-us-label","t":13}],"f":[{"t":2,"r":"~/contactUsLabel","s":true}]}]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"contact-us-message","t":13},{"n":"click","f":"handleClick","t":70}],"f":[{"t":3,"r":"~/accountTransferHelperMessage"}]}]}]}; });
define('autoCatContactUs/views/accountTransferHelp',['require','autoCatContactUs/template/accountTransferHelp','autoCatContactUs/views/specs/faqContainer','blue-ui/view/elements/icon'],function (require) {
    'use strict';
    var _template = require('autoCatContactUs/template/accountTransferHelp'),
        _viewSpec = require('autoCatContactUs/views/specs/faqContainer'),
        _views = {
            'blueIcon': require('blue-ui/view/elements/icon')
        };

    return function accountTransferHelp(viewContext) {
        var thisView = this;

        thisView.onInit = function () {
            thisView.template = _template;
            thisView.bridge = _viewSpec;
            thisView.views = _views;
        };

        thisView.handleClick = function (event) {
            var domEvent = event.domEvent;
            if(domEvent.target.nodeName === 'A' && domEvent.target.dataset.attr === 'requestAdditionalFrequentlyAskedQuestions'){
                domEvent.cancelBubble = true;
                domEvent.preventDefault();
                thisView.trigger('requestFrequentlyAskedQuestions');
                domEvent.target.focus();
            }
        };
    };
});

define("autoCatContactUs/manifest", [],function(){});
