/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module incomeCaptureBlock/manifest
 */
define('incomeCaptureBlock/manifest',{
    version: 2,
    controller: {
        module: 'incomeCaptureBlock/myIncomeCapture',
        viewPath: {
            prefix: 'incomeCaptureBlock/views/'
        },
        dependencies: {
            './css/myIncomeCapture.css': 'css'
        },
        services: {
            myIncomeCapture: 'incomeCaptureBlock/services/myIncomeCapture'
        },
        components: {
            myIncomeCapture: {
                module: 'incomeCaptureBlock/components/myIncomeCapture',
                spec: 'incomeCaptureBlock/specs/myIncomeCapture'
            }
        }
    }
});
define('incomeCaptureBlock/dataProvider/myIncomeCapture',[],function () {
    'use strict';
    return function MyIncomeCaptureMapper(controllerContext) {
        return {
            myIncomeCapture: {
                incomeUpdate: {
                    success: function success(reqData, resData) {
                        if (resData.code === 'SUCCESS') {
                            controllerContext.onIncomeUpdateSuccess(resData.code);
                        }else{
                            controllerContext.serviceFailure(resData);
                        }
                    },
                    failure: function failure(reqData, resData) {
                        controllerContext.serviceFailure(resData);
                    }
                },
                disposition: {
                    success: function success(reqData, resData) {
                        if (resData.code === 'SUCCESS') {
                            controllerContext.onDispositionSuccess(reqData);
                        }else{
                            controllerContext.serviceFailure(resData);
                        }
                    },
                    failure: function failure(reqData, resData) {
                        controllerContext.serviceFailure(resData);
                    }
                }
            }
        };
    };
});
/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module incomeCaptureBlock/myIncomeCapture
 */
define('incomeCaptureBlock/myIncomeCapture',['require','appkit-utilities/analytics/overlay','incomeCaptureBlock/dataProvider/myIncomeCapture'],function(require) {
    'use strict';

    return function MyIncomeCapture(controllerContext) {
        var thisController = this,
        analyticsOverlay = require('appkit-utilities/analytics/overlay'),
        incomeCaptureBlockMapper = require('incomeCaptureBlock/dataProvider/myIncomeCapture')(thisController);

        function updateFocusPlacementModel(selector){
            thisController.model.set('myIncomeCapture.focusPlacement', '');
            thisController.model.set('myIncomeCapture.focusPlacement', selector);
        }

        function updateModel(){
            thisController.model.set('myIncomeCapture.serviceException', false);
            thisController.model.set('myIncomeCapture.showConfirmation', true);
            if (thisController.model.get('myIncomeCapture.isInterstitial')) {
                thisController.confirm();
            } else {
                updateFocusPlacementModel('CONFIRM_HEADER');
            }
        }
        function updateCAV(isInterstitial, target) {
            var myIncomeCapture = 'myIncomeCapture';
            thisController.dataProvider.mappers = incomeCaptureBlockMapper;
            thisController.initModel(isInterstitial);
            thisController.registry.updateComponent('myIncomeCapture', {
                model: thisController.model.lens('myIncomeCapture')
            });
            if(isInterstitial) {
                updateFocusPlacementModel('INTERSTITIAL_HEADER');
            } else {
               var focusTargetId = controllerContext.hybrid ? 'PROFILE_HEADER' : 'PROFILE_MESSAGE';
               updateFocusPlacementModel(focusTargetId);
            }
            if (!thisController.registry.hasComponent(myIncomeCapture)) {
                var obj = { target: target};
                isInterstitial && (obj.append = true);
                return [thisController.components.myIncomeCapture, 'myIncomeCapture', obj];
            }
            return [];
        }

        controllerContext.renderMobileProfileMenu = function(isInterstitial) {
            if (!isInterstitial) {
                controllerContext.area.broadcast('renderMyProfileMenuMobile');
                if (!controllerContext.hybrid) {
                    controllerContext.exitDialogUtil.setListeners(thisController.components.myIncomeCapture);
                }
            }
        };

        controllerContext.addDisposition = function (actionCode) {
            thisController.addDisposition(actionCode);
        };

        controllerContext.makeServiceCall = function (data) {
            var modelData = thisController.model.get('myIncomeCapture');
            modelData.incomeData = data.param;
            thisController.model.set('myIncomeCapture', modelData);
            thisController.makeServiceCall('incomeUpdate', modelData.incomeData);
        };

        controllerContext.goToDashboard = function (exitMethod) {
            controllerContext.area.broadcast('exitIncomeCaptureInterstitial', {type: 'incomeCapture'});
            if(controllerContext.hybrid) {
                thisController.registry.destroyComponent('myIncomeCapture');
                controllerContext.hybridHelper && controllerContext.hybridHelper.webNativeMessenger.onFinish();
            } else {
                exitMethod && analyticsOverlay.hideOverlay(thisController.components.myIncomeCapture, 'incomeCaptureInterstitialOverlay', exitMethod).then(function () {
                    thisController.registry.destroyComponent('myIncomeCapture');
                });
            } 
        };

        thisController.initModel = function (isInterstitial) {
            thisController.model.set({
                'myIncomeCapture': {
                    grossAnnualIncome: '',
                    showConfirmation: false,
                    serviceException: false,
                    isInterstitial: isInterstitial
                }
            });
        };

        thisController.init = function(){
            controllerContext.Api = {
                modal: controllerContext.modalApi(thisController)
            };
            controllerContext.hybrid && controllerContext.hybridMixin.call(thisController);
        };

        thisController.index = function () {
            thisController.clearCAV('myIncomeCapture'); //destroy if myIncomeCapture is already registered
            return controllerContext.elementObserver.isInsertedPromise('#incomeCapture-block').then(function() {
                return updateCAV(false, '#incomeCapture-block');
            });
        };

        thisController.interstitial = function () {
            return controllerContext.elementObserver.isInsertedPromise('#block-target').then(function() {
                return updateCAV(true, '#block-target');
            });
        };

        thisController.confirm = function () {
            updateFocusPlacementModel(thisController.model.get('myIncomeCapture.showConfirmation') ? 'CONFIRM_HEADER' : 'ERROR_HEADER');
        };

        thisController.makeServiceCall = function (service, data) {
            controllerContext.application.emit('spinner:on', {target:'#incomeCaptureBlock'});
            thisController.dataProvider.request('myIncomeCapture.' + service, data);
        };

        thisController.addDisposition = function (actionCode) {
            var requestObj = {
                offerContext: 'CURRENT_INCOME',
                action: actionCode
            };
            thisController.makeServiceCall('disposition', requestObj);
        };

        thisController.onIncomeUpdateSuccess = function () {
            controllerContext.application.emit('spinner:off', {target:'#incomeCaptureBlock'});
            if (thisController.model.get('myIncomeCapture.isInterstitial')) {
                thisController.addDisposition('ACCEPTED');
            }else {
                updateModel();
            }
        };

        thisController.onDispositionSuccess = function (req) {
            controllerContext.application.emit('spinner:off', {target:'#incomeCaptureBlock'});
            if (req.params.action === 'ACCEPTED') {
                updateModel();
            } else {
                controllerContext.goToDashboard('doNotUpdateMyIncome');
            }
        };

        thisController.serviceFailure = function () {
            thisController.model.set('myIncomeCapture.serviceException', true);
            thisController.model.set('myIncomeCapture.showConfirmation', false);
            controllerContext.application.emit('spinner:off', {target:'#incomeCaptureBlock'});
            if (thisController.model.get('myIncomeCapture.isInterstitial')) {
                thisController.confirm();
            } else {
                updateFocusPlacementModel('ERROR_HEADER');
            }
        };

        thisController.clearCAV = function(componentName) {     
            if (thisController.registry.hasComponent(componentName)) {
                thisController.registry.destroyComponent(componentName);
            }
        };


    };
});
/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module incomeCaptureBlock/services/myIncomeCapture
 */
define('incomeCaptureBlock/services/myIncomeCapture',[],function() {
    'use strict';

    return function MyIncomeCaptureService(serviceContext) {
        var me = this,
            baseUrl = serviceContext.config.serviceUrl,
            svcPostProps = function (svcUrl) {
                return {
                    settings: {
                        type: 'POST',
                        url: baseUrl + svcUrl
                    }
                };
            };

        me.serviceCalls = {
            incomeUpdate: svcPostProps('/svc/wr/profile/secure/v2/income/update'),
            disposition: svcPostProps('/svc/wr/accounts/secure/v1/offer/disposition/add')
        };
    };
});
 /**
 * @author SERV-BLR2
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module income-cature-cmpt/util/incomeCapture
 */

define('incomeCaptureBlock/lib/util/incomeUtil',[],function () {
    'use strict';

        /**
         * @function moneyStringToDecimal
         * @description converts string to decimal
         * @returns {Number}
         * @params {string}
         * @memberOf module: incomeUtil
         */
        var moneyStringToDecimal = function (moneyString) {
            // Remove all non dot / digits:
            // eslint-disable-next-line
            return Number(moneyString.replace(/[^0-9\.]+/g, ''));
        };

    return {
        moneyStringToDecimal: moneyStringToDecimal
    };
});
/**
* @description Constants for INCOME capture block
* @return {[type]} [Values]
*/
define('incomeCaptureBlock/settings',[],function () {
    'use strict';
    return {
        INCOME_CONST: {
            CURRENT_INCOME_OFFER: 'CURRENT_INCOME_OFFER',
            REJECTED: 'REJECTED',
            YES: 'YES', 
            NO: 'NO',
            ICON_URL: '/content/dam/cpo-static/images/profile_illustration.png'
        },
        INCOME_VALIDATION_CONST: {
            GREATER_THAN_GROSS_INCOME: 'GREATER_THAN_GROSS_INCOME',
            ABOVE_MAXIMUM: 'ABOVE_MAXIMUM',
            BELOW_MINIMUM: 'BELOW_MINIMUM',
            TEN_MILLION: 10000000,
            ZERO: 0
        },
		variations:{
			INCOME_INTERSTITIAL: 'INCOME_INTERSTITIAL',
			MY_PROFILE_INCOME: 'MY_PROFILE_INCOME'
		}
    };
});
 /**
 * @author SERV-BLR2
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module income-capture-cmpt/validator/incomeCapture
 */

define('incomeCaptureBlock/lib/validator/incomeValidator',['require','incomeCaptureBlock/settings'],function (require) {
    'use strict';

    var CONST = require('incomeCaptureBlock/settings'),

        /**
         * @function amountWithoutComma
         * @description removing commas from amount
         * @returns {Number}
         *@params {String}
         * @memberOf module: incomeValidator
         */
        amountWithoutComma = function (amount) {
            return amount && Number(amount.replace(/,|\$/g, ''));
        },

        /**
         * @function lessThanTenMillion
         * @description checking additional and gross annual is less then ten million
         * @returns {Object}
         *@params {Object}, {Object}
         * @memberOf module: incomeValidator
         */
        lessThanTenMillion = function (data, model) {
            var isValid = amountWithoutComma(model[data.item]) < CONST.INCOME_VALIDATION_CONST.TEN_MILLION;
            return {
                isValid: isValid,
                errorType: isValid ? '' : CONST.INCOME_VALIDATION_CONST.ABOVE_MAXIMUM
            };
        },

        /**
         * @function belowMinimum
         * @description checking whether gross annual income or non taxable gross annual income is at or below minimum amount of 0
         * @returns {object}
         * @params {Object}, {Object}
         * @memberOf module: incomeValidator
         */
        belowMinimum = function(data,model){
            var isValid = amountWithoutComma(model[data.item]) > CONST.INCOME_VALIDATION_CONST.ZERO;
            return {
                isValid: isValid,
                errorType: isValid ? '' : CONST.INCOME_VALIDATION_CONST.BELOW_MINIMUM
            }
        },

        formValidators = {
            validators: {
                grossAnnualIncome: [
                    {validator: lessThanTenMillion, type:'custom'}, 
                    {validator: belowMinimum, type:'custom'}
                ]
            }
        };

        return formValidators;
});
/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module incomeCaptureBlock/components/myIncomeCapture
 */
define('incomeCaptureBlock/components/myIncomeCapture',['require','appkit-utilities/validation/componentValidate','appkit-utilities/validation/variations','appkit-utilities/analytics/overlay','appkit-utilities/content/globalContentMixin','incomeCaptureBlock/lib/util/incomeUtil','incomeCaptureBlock/lib/validator/incomeValidator','incomeCaptureBlock/settings'],function(require) {
    'use strict';

    var componentValidate = require('appkit-utilities/validation/componentValidate'),
        variations = require('appkit-utilities/validation/variations'),
        analyticsOverlay = require('appkit-utilities/analytics/overlay'),
        noop = function() {},
        globalContent = require('appkit-utilities/content/globalContentMixin');

    return function MyIncomeCapture(componentContext) {
        var thisComponent = this;
        thisComponent.utils = require('incomeCaptureBlock/lib/util/incomeUtil');
        thisComponent.incomeValidator = require('incomeCaptureBlock/lib/validator/incomeValidator');
        thisComponent.CONST = require('incomeCaptureBlock/settings');
       
        /**
         * @function onInit
         * @description updating the content
         * @returns {none}
         * @memberOf module: incomeCapture Component
         */
        thisComponent.onInit = function() {
            // get CQ5Url root to form icon URL
            var CQ5Url = componentContext.config.APP_CQ5_HOST_CARD
            // set iconUrl to model prop
            thisComponent.model.set('iconUrl', CQ5Url + thisComponent.CONST.INCOME_CONST.ICON_URL);
            thisComponent.dcu = componentContext.dcu.dynamicContent;
            thisComponent.getDcuContent();
            // setup component validate and custom validation also set whiteLise
            thisComponent.initializeValidation();
            thisComponent.isInterstitial && !componentContext.hybrid && analyticsOverlay.showOverlay(thisComponent, 'incomeCaptureInterstitialOverlay');
        };
        thisComponent.onReady = function(){
            componentContext.renderMobileProfileMenu(thisComponent.isInterstitial);
            if (componentContext.hybrid) {
                var webNativeMessenger = componentContext.hybridHelper.webNativeMessenger,
                    navigationBarOptions = {
                        showCancel: false,
                        showBackArrow: !thisComponent.isInterstitial,
                        showClose: false,
                        showExitConfirmationOverlay: false,
                        pageTitle: thisComponent.myIncomeHeader
                    },
                    handleNativeBackButton = function () {
                        return false;
                    },
                    functionMapper = {
                        'BACK': handleNativeBackButton
                    },
                    appKitCallBack = function (buttonPressed) {
                        return functionMapper[buttonPressed] && !functionMapper[buttonPressed]();
                    },
                    oldPayLoad = {  // required only for backward compatible
                        isHybridBackButtonRequired: handleNativeBackButton
                    };

                webNativeMessenger.updateNativeNavigationBar(navigationBarOptions);
                webNativeMessenger.setShouldNativeHandleButtonPressedCallBack(appKitCallBack, oldPayLoad);
            }
        };

        /**
         * @function initializeValidation
         * @description intilizing the validation
         * @returns {none}
         * @memberOf module: incomeCapture Component
         */
        thisComponent.initializeValidation = function() {
            componentContext.variations = variations;
            // Pass in custom validators to componentValidate
            componentValidate.call(thisComponent, componentContext, thisComponent.incomeValidator.validators);
            // set grossAnnualIncome on page load
            thisComponent.model.set('whiteList', ['grossAnnualIncome']);
        };

        /**
         * @function getDcuContent
         * @description updating the content using keys and variations
         * @returns {none}
         * @memberOf module: incomeCapture Component
         */
        thisComponent.getDcuContent = function(){

            var interstitialContentVariation = thisComponent.CONST.variations.INCOME_INTERSTITIAL,
                myProfileContentVariation = thisComponent.CONST.variations.MY_PROFILE_INCOME;
            // set global content 
            globalContent.call(thisComponent, [
                'closeLabel',
                'importantAda',
                'checkmarkAda',
                'showsContentBelowAda',
                'hidesContentBelowAda',
                'errorAnnouncementAda',
                'beginHelpMessageAda',
                'exitHelpMessageAda',
                'endHelpMessageAda',
                'exitAda',
                'requestProfileSettingsMenuAda',
                'totalErrorsAda'
            ]);
            if(thisComponent.isInterstitial){
                // set interstital specific content
                thisComponent.dcu.set(thisComponent, 'confirmUpdateMyIncomeMessage', interstitialContentVariation);
            }else {
                // set profile specific content
                thisComponent.dcu.set(thisComponent, 'confirmUpdateMyIncomeMessage', myProfileContentVariation);
            }            
        };

        /**
         * @function updateMyIncome
         * @description Handling the update button click and making service call accordingly
         * @returns {none}
         * @memberOf module: incomeCapture Component
         */
        thisComponent.updateMyIncome = function(){
            thisComponent.validateFormData();
            if(thisComponent.v.isFormValid) { //If form valid then navigate to next screen or else show the error message
                var param = {
                    personId: componentContext.userInfo.personId,
                    incomeAmount: thisComponent.utils.moneyStringToDecimal(thisComponent.grossAnnualIncome || '')
                };
                componentContext.makeServiceCall({
                    param: param
                });
            } else {
                thisComponent.model.set('showConfirmation', false);
                thisComponent.model.set('focusPlacement', '');
                thisComponent.model.set('focusPlacement', 'ANNUAL_INCOME');
            }
        };

        /**
         * @function doNotUpdateMyIncome
         * @description handling the cancel button for interstitial and income capture page
         * @returns {none}
         * @memberOf module: incomeCapture Component
         */

        thisComponent.doNotUpdateMyIncome = function() {
            componentContext.addDisposition('DEFERRED');
        };

        /**
         * @function exitUpdateMyIncome
         * @description navigating to dashboard
         * @returns {none}
         * @memberOf module: incomeCapture Component
         */
        thisComponent.exitUpdateMyIncome = function () {
            componentContext.goToDashboard('exitUpdateMyIncome');
        };

        // @description requestGrossAnnualIncomeHelpMessage method (analytics purpose only)
        thisComponent.requestGrossAnnualIncomeHelpMessage = noop;

        // @description requestNonTaxableGrossIncomeHelpMessage method (analytics purpose only)
        thisComponent.requestNonTaxableGrossIncomeHelpMessage = noop;
        
        // @description exitMyProfileIncome method (analytics purpose only)        
        thisComponent.exitMyProfileIncome = noop;

        // @description requestIncomeExample method (analytics purpose only)
        thisComponent.requestIncomeExample = noop;
    };
});
define('incomeCaptureBlock/template/myIncomeCapture',[], function() { return {"v":4,"t":[{"t":7,"e":"div","m":[{"n":"class","f":"incomeCaptureBlock","t":13},{"n":"id","f":"incomeCaptureBlock","t":13}],"f":[{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"income-capture-interstitial-modal","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"container","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":[{"t":4,"f":["col-sm-12"],"n":50,"x":{"r":[".hybrid",".isXS"],"s":"_0&&!_1"}},{"t":4,"n":51,"f":["col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"],"l":1}," col-xs-12"],"t":13}],"f":[{"t":8,"r":"incomeFormPartial"}]}]}]}],"n":50,"r":"isInterstitial"},{"t":4,"n":51,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"profileSection","t":13}],"f":[{"t":8,"r":"incomeFormPartial"}]}],"l":1}]}],"e":{}}; });
/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module controllerName/views/specs/someSpec
 */
define('incomeCaptureBlock/views/specs/myIncomeCapture',{
    name: 'INCOME_CAPTURE',
    bindings: {
        grossAnnualIncome: {
            direction: 'BOTH'
        },
        isInterstitial: {},
        showConfirmation:{},
        serviceException: {},
        focusPlacement: {}
    },
    triggers: {    
        formatAmount: {
            action: 'view.formatAmount'
        },
        incomeCaptureFormSubmit: {
            action: 'view.incomeCaptureFormSubmit'
        },
        submitMyIncomeForm: {
            action: 'view.submitMyIncomeForm'
        }
    }
});
define('incomeCaptureBlock/template/alertMessagePartial',[], function() { return {"v":4,"t":[{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"alert-message","t":13}],"f":[{"t":7,"e":"mds-alert","m":[{"n":"id","f":"updateIncomeError","t":13},{"n":"variant","f":"error","t":13},{"n":"alert-title","f":[{"t":2,"r":".updateMyIncomeErrorMessage"}],"t":13},{"n":"accessible-text-icon","f":[{"t":2,"r":"~/importantAda","s":true}],"t":13}],"f":[]}]}],"n":50,"r":"serviceException"},{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"alert-message","t":13}],"f":[{"t":7,"e":"mds-alert","m":[{"n":"id","f":"updateIncomeSuccess","t":13},{"n":"variant","f":"success","t":13},{"n":"alert-title","f":[{"t":2,"r":".confirmUpdateMyIncomeHeader"}],"t":13},{"n":"accessible-text-icon","f":[{"t":2,"r":"~/checkmarkAda","s":true}],"t":13},{"n":"message","f":[{"t":2,"r":".confirmUpdateMyIncomeMessage"}],"t":13},{"n":"size","f":"base","t":13}],"f":[]}]}],"n":50,"r":"showConfirmation"}]}; });
define('incomeCaptureBlock/template/incomeFormPartial',[], function() { return {"v":4,"t":[{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"income-capture row","t":13},{"n":"id","f":"incomeCaptureAlertBlock","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":["section-body col-xs-12 noPadding ",{"t":4,"f":["alignCenter"],"n":50,"x":{"r":[".hybrid",".isXS"],"s":"_0&&!_1"}}],"t":13}],"f":[{"t":8,"r":"alertMessagePartial"}," ",{"t":7,"e":"div","m":[{"n":"class","f":[{"t":4,"f":["col-sm-6 col-sm-offset-3"],"n":50,"r":".hybrid"},{"t":4,"n":51,"f":["col-sm-4 col-sm-offset-8"],"l":1}," col-xs-12 closeButtonContainer"],"t":13}],"f":[{"t":7,"e":"mds-button","m":[{"n":"text","f":[{"t":2,"r":"~/closeLabel","s":true}],"t":13},{"n":"variant","f":"primary","t":13},{"n":"width-type","f":"layout","t":13},{"n":"click","f":"exitUpdateMyIncome","t":70}],"f":[]}]}]}]}],"n":50,"x":{"r":["isInterstitial","showConfirmation","serviceException"],"s":"_0&&(_1||_2)"}},{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"income-capture row","t":13},{"n":"id","f":"incomeCaptureFormContainer","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"section-body col-xs-12 noPadding","t":13}],"f":[{"t":4,"f":[{"t":8,"r":"alertMessagePartial"}],"n":50,"x":{"r":["isInterstitial","showConfirmation","serviceException"],"s":"!_0&&(_1||_2)"}}," ",{"t":7,"e":"div","m":[{"n":"class","f":"header-container","t":13}],"f":[{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":["interstitial-header-container ",{"t":4,"f":["interstitial-header-container-hybrid-sm"],"n":50,"x":{"r":[".hybrid",".isXS"],"s":"_0&&!_1"}}],"t":13}],"f":[{"t":7,"e":"img","m":[{"n":"class","f":"interstitial-icon","t":13},{"n":"src","f":[{"t":2,"r":".iconUrl"}],"t":13},{"n":"alt","f":"","t":13}]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"interstitial-header-text-container","t":13}],"f":[{"t":7,"e":"h2","m":[{"n":"class","f":"interstitial-header H2","t":13},{"n":"id","f":"interstitialHeader","t":13},{"n":"tabindex","f":"-1","t":13}],"f":[{"t":2,"r":".myIncomeHeader"}]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"interstitial-message BODY2","t":13}],"f":[{"t":2,"r":".myIncomeMessage"}]}]}]}],"n":50,"r":"isInterstitial"},{"t":4,"n":51,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"profile-message BODY2","t":13},{"n":"id","f":"profileMessage","t":13}],"f":[{"t":2,"r":".myIncomeMessage"}]}],"l":1}]}," ",{"t":7,"e":"form","m":[{"n":"role","f":"form","t":13},{"n":"id","f":"incomeCaptureForm","t":13},{"n":"class","f":"income-capture-form","t":13},{"n":"novalidate","f":0,"t":13},{"n":"submit","f":"incomeCaptureFormSubmit","t":70}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"row noMargin","t":13}],"f":[{"t":7,"e":"blueFieldGroup","m":[{"n":"id","f":"annualIncome","t":13},{"n":"analyticsId","f":"grossAnnualIncome","t":13},{"n":"classes","f":"text-field","t":13},{"n":"label","f":[{"t":2,"r":".grossAnnualIncomeLabel","s":true}],"t":13},{"n":"inputColumns","f":["col-sm-6 col-xs-12 ",{"t":4,"f":["col-md-4 noPadding"],"n":50,"x":{"r":["isInterstitial"],"s":"!_0"}}],"t":13},{"n":"labelColumns","f":["col-xs-12 ",{"t":4,"f":["noPadding"],"n":50,"x":{"r":["isInterstitial"],"s":"!_0"}}],"t":13},{"n":"groupType","f":"vertical moneybox validationInput","t":13},{"n":"inputValue","f":[{"t":2,"r":".grossAnnualIncome"}],"t":13},{"n":"initErrorBubble","f":"true","t":13},{"n":"validationInput","f":[{"t":2,"x":{"r":[".v.grossAnnualIncome.errorMessage",".errorAnnouncementAda"],"s":"{name:\"grossAnnualIncome\",type:\"text\",maxLength:\"12\",errorMessage:_0,rFocus:\"formFieldTracking\",rBlur:[\"formatAmount\",\"validateField\"],rChange:\"formFieldTracking\",required:\"true\",labelErrorPrefix:_1,autocomplete:\"off\"}"}}],"t":13}]}," "]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"messageContent col-md-12 grossAnnualIncomeHelpMessage BODY","t":13}],"f":[{"t":3,"x":{"r":["sanitizer","grossAnnualIncomeHelpMessage"],"s":"_0.sanitizeHTML(_1)"}}]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"BODY","t":13}],"f":[{"t":7,"e":"mds-accordion","m":[{"n":"variant","f":"borderless","t":13},{"n":"id","f":"seeIncomeExamples","t":13},{"n":"click","f":"requestIncomeExample","t":70},{"n":"accordion-items","f":["[{ \"name\":\"seeIncomeExamplesLabel\", \"label\":\"",{"t":2,"r":"seeIncomeExamplesLabel"},"\", \"accessible-text\":\"",{"t":2,"r":"~/hidesContentBelowAda","s":true},"\", \"heading-level\":\"3\" }]"],"t":13}],"f":[{"t":7,"e":"div","m":[{"n":"slot","f":"seeIncomeExamplesLabel","t":13},{"n":"class","f":"row","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"col-xs-12 accordionContent","t":13}],"f":[{"t":3,"x":{"r":["sanitizer","incomeExamplesMessage"],"s":"_0.sanitizeHTML(_1)"}}]}]}]}]}," ",{"t":4,"f":[{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"row buttonContainer","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"col-xs-12 noPaddingMobile marginBottomMobile","t":13}],"f":[{"t":7,"e":"mds-button","m":[{"n":"id","f":"updateMyIncome","t":13},{"n":"text","f":[{"t":2,"r":".updateMyIncomeLabel"}],"t":13},{"n":"variant","f":"primary","t":13},{"n":"width-type","f":"layout","t":13},{"n":"click","f":"submitMyIncomeForm","t":70}],"f":[]}]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"col-xs-12 noPaddingMobile","t":13}],"f":[{"t":7,"e":"mds-button","m":[{"n":"text","f":[{"t":2,"r":".doNotUpdateMyIncomeLabel"}],"t":13},{"n":"variant","f":"secondary","t":13},{"n":"width-type","f":"layout","t":13},{"n":"click","f":"doNotUpdateMyIncome","t":70}],"f":[]}]}]}],"n":50,"r":".isXS"},{"t":4,"n":51,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"row buttonContainer","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":["col-xs-12 ",{"t":4,"f":["noPaddingLeft col-sm-6"],"n":50,"r":".hybrid"},{"t":4,"n":51,"f":["col-sm-offset-2 col-sm-5 col-md-offset-4 col-md-4"],"l":1}," noPaddingMobile marginBottomMobile"],"t":13}],"f":[{"t":7,"e":"mds-button","m":[{"n":"text","f":[{"t":2,"r":".doNotUpdateMyIncomeLabel"}],"t":13},{"n":"variant","f":"secondary","t":13},{"n":"width-type","f":"layout","t":13},{"n":"click","f":"doNotUpdateMyIncome","t":70}],"f":[]}]}," ",{"t":7,"e":"div","m":[{"n":"class","f":["col-xs-12 ",{"t":4,"f":["col-sm-6"],"n":50,"r":".hybrid"},{"t":4,"n":51,"f":["col-sm-5 col-md-4"],"l":1}," noPaddingRight noPaddingMobile"],"t":13}],"f":[{"t":7,"e":"mds-button","m":[{"n":"id","f":"updateMyIncome","t":13},{"n":"text","f":[{"t":2,"r":".updateMyIncomeLabel"}],"t":13},{"n":"variant","f":"primary","t":13},{"n":"width-type","f":"layout","t":13},{"n":"click","f":"submitMyIncomeForm","t":70}],"f":[]}]}]}],"l":1}],"n":50,"r":"isInterstitial"},{"t":4,"n":51,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"row","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":[{"t":4,"f":["col-sm-6 col-sm-offset-3"],"n":50,"r":".hybrid"},{"t":4,"n":51,"f":["col-sm-3 col-sm-offset-9 col-md-2 col-md-offset-10"],"l":1}," col-xs-12 noPadding buttonMargin"],"t":13}],"f":[{"t":7,"e":"mds-button","m":[{"n":"id","f":"updateMyIncome","t":13},{"n":"text","f":[{"t":2,"r":".updateMyIncomeLabel"}],"t":13},{"n":"variant","f":"primary","t":13},{"n":"width-type","f":"layout","t":13},{"n":"click","f":"submitMyIncomeForm","t":70}],"f":[]}]}]}],"l":1}]}]}]}],"n":50,"x":{"r":["isInterstitial","showConfirmation","serviceException"],"s":"!(_0&&(_1||_2))"}}],"e":{}}; });
/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module incomeCaptureBlock/views/myIncomeCapture
 */
define('incomeCaptureBlock/views/myIncomeCapture',['require','incomeCaptureBlock/template/myIncomeCapture','incomeCaptureBlock/views/specs/myIncomeCapture','blue/object/extend','appkit-utilities/validation/trigger','common/lib/focusUtil','appkit-utilities/formatters/number','blue-ui/utilities/isApple','appkit-utilities/common/mediaQueryListener','appkit-utilities/view/validationSubmitAda','blue-ui/view/collections/fieldgroup','incomeCaptureBlock/template/alertMessagePartial','incomeCaptureBlock/template/incomeFormPartial'],function(require) {
    'use strict';

    var template = require('incomeCaptureBlock/template/myIncomeCapture'),
        viewSpec = require('incomeCaptureBlock/views/specs/myIncomeCapture'),
        extend = require('blue/object/extend'),
        triggers = require('appkit-utilities/validation/trigger'),
        focusUtil = require('common/lib/focusUtil'),
        currencyFormatter = require('appkit-utilities/formatters/number').currencyFormatter,
        isApple = require('blue-ui/utilities/isApple'),
        mediaQuery = require('appkit-utilities/common/mediaQueryListener'),
        validationSubmitAda = require('appkit-utilities/view/validationSubmitAda');
        
    return function MyIncomeCapture(viewContext) {
        var thisView = this;
        thisView.template = template;
        thisView.viewName = 'INCOME';
        thisView.views = {
            'blueFieldGroup': require('blue-ui/view/collections/fieldgroup')
        };
        thisView.partials = {
            alertMessagePartial: require('incomeCaptureBlock/template/alertMessagePartial'),
            incomeFormPartial: require('incomeCaptureBlock/template/incomeFormPartial')
        };
        thisView.focusEnumToElMap = {
            'ANNUAL_INCOME': '#annualIncome-text-validate-input-field',
            'CONFIRM_HEADER': '#updateIncomeSuccess',
            'INTERSTITIAL_HEADER': '#interstitialHeader',
            'PROFILE_HEADER': '#profileHeader',
            'PROFILE_MESSAGE': '#profileMessage',
            'ERROR_HEADER': '#updateIncomeError',
            'simpleHeader': '#simple-header',
            'backNavHeaderTitle': '#back-nav-header-title'
        };
        
        thisView.init = function () {
            thisView.model.isXS = mediaQuery.currentBreakpoint === mediaQuery.BREAKPOINT.XS;
            //add appkit validation methods to the webspec            
            extend(viewSpec.triggers, triggers);
            thisView.bridge = viewSpec;
        };

        thisView.setFocus = function(focusEnum) {
            var focusObject = thisView.focusEnumToElMap[focusEnum],
                timer = 500;
            if(thisView.model.isInterstitial) {
                if(isApple() && (focusEnum === 'CONFIRM_HEADER' || focusEnum === 'ERROR_HEADER')){
                    timer = 1000;
                }
                setTimeout(function() {
                    focusObject && focusUtil.setFocus(viewContext.page.$, focusObject);
                }, timer);
            } else {
                thisView.model.isXS && !viewContext.hybrid && viewContext.scrollToTop();
                focusObject && viewContext.$(focusObject).focus();
            }
        };
       
        thisView.onReady = function(){            
            thisView.onData('focusPlacement', function(focusEnum) {
                focusEnum && thisView.setFocus(focusEnum);
            }, { init: true });
            if (!thisView.model.isInterstitial && !viewContext.hybrid) {
                var focusHeader = thisView.model.isXS ? thisView.focusEnumToElMap.backNavHeaderTitle : thisView.focusEnumToElMap.simpleHeader;
                focusUtil.setFocus(viewContext.page.$, focusHeader);
            }
            var options = {
                formId : 'incomeCaptureForm',
                messageForAda: thisView.model.totalErrorsAda + ' {{0}}'
            };
            validationSubmitAda.call(thisView, options);
        };

        thisView.incomeCaptureFormSubmit = function(e) {
            e.domEvent.preventDefault();
        };

        thisView.formatAmount = function(e){
            var fieldName = e.context.name;
            var inputValue = e.context.value;

            var formattedAmount = inputValue.toString().replace(/,|\$/g, '');
              if( formattedAmount !== '' && formattedAmount >= 0 && !isNaN(formattedAmount) ){
                formattedAmount = Number(formattedAmount);
                  //Formats the currency to have two decimal digits. Eg: converts 1230 to 1,230.00
                  formattedAmount =  currencyFormatter(formattedAmount, {dollarSign: false});
              }
              thisView.model[fieldName] = formattedAmount;
        };

        thisView.submitMyIncomeForm = function(){
            thisView.trigger('validateForm');
            thisView.model.v.isFormValid ? thisView.trigger('updateMyIncome') : thisView.triggerSubmitAda();
        };

    };
});
define('incomeCaptureBlock/specs/myIncomeCapture',['require','blue-spec-shared/income_capture'],function(require) {
    'use strict';
    var spec = require('blue-spec-shared/income_capture');
    spec.states = spec.states || {};
    spec.states.showConfirmation= true;
    spec.states.serviceException= true;
    spec.states.focusPlacement= true;
    return spec;
});


define("incomeCaptureBlock/manifest", [],function(){});
