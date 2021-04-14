/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module paymentPlansBlock/manifest
 * cxo.block.paymentPlansArea.version=3.0.24
 */
define({
    version: 2,
    area: {
        module: 'paymentPlansBlock/area',
        viewPath: {
            prefix: 'paymentPlansBlock/views/'
        },
        dependencies: {
            './css/main.css': 'css'
        },
        services: {
            paymentPlansServices: {
                module: 'paymentPlansBlock/services/paymentPlansServices'
            },
            collectionPaymentServices: {
                module: 'paymentPlansBlock/services/collectionPaymentServices'
            },
            planDetailsServices: {
                module: 'paymentPlansBlock/services/planDetailsServices'
            }
        },
        controllers: {
            card: {
                module: 'paymentPlansBlock/controllers/card',
                components: {
                    card: {
                        module: 'paymentPlansBlock/components/card',
                        spec: 'paymentPlansBlock/components/specs/card'
                    },
                    paymentPlansOverlay: {
                        module: 'paymentPlansBlock/components/paymentPlansOverlay',
                        spec: 'paymentPlansBlock/components/specs/paymentPlansOverlay'
                    }
                },
                immediate: true
            },
            cardPayment: {
                module: 'paymentPlansBlock/controllers/scheduleCardPayment',
                components: {
                    cardPayment: {
                        spec: 'paymentPlansBlock/components/specs/scheduleCardPayment',
                        module: 'paymentPlansBlock/components/scheduleCardPayment'
                    }
                },
                immediate: true
            },
            planDetails: {
                module: 'paymentPlansBlock/controllers/planDetails',
                components: {
                    planDetails: {
                        spec: 'paymentPlansBlock/components/specs/planDetails',
                        module: 'paymentPlansBlock/components/planDetails'
                    }
                },
                immediate: true
            },
            splashScreenController: {
                module: 'paymentPlansBlock/controllers/splashScreenController',
                components: {
                    splashScreenComponent: {
                        spec: 'paymentPlansBlock/components/specs/card',
                        module: 'paymentPlansBlock/components/splashScreenComponent',
                        modelCleanup: true
                    }
                },
                immediate: true
            },
        }
    }
});
