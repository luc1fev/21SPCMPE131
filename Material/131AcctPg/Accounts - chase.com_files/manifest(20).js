define({
    version: 2,
    area: {
        module: 'paymentPlansRecovery/area',
        viewPath: {
            prefix: 'paymentPlansRecovery/views/'
        },
        dependencies: {
            './css/paymentPlansRecovery.css': 'css'
        },
        services: {
            paymentPlansRecoveryServices: {
                module: 'paymentPlansRecovery/services/paymentPlansRecoveryServices'
            }
        },
        controllers: {
            paymentPlansRecoveryController: {
                module: 'paymentPlansRecovery/controllers/paymentPlansRecoveryController',
                components: {
                    paymentPlansRecoveryContainerComponent: {
                        module: 'paymentPlansRecovery/components/paymentPlansRecoveryContainerComponent',
                        spec: 'paymentPlansRecovery/components/specs/spec'
                    }
                },
                immediate: true
            }
        }
    }
});