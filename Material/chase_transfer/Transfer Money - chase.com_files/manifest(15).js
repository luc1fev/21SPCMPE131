/**
 * version 1.0.94
 */
define({
    version: 2,
    area: {
        module: 'pmr/area',
        viewPath: {
            prefix: 'pmr/views/'
        },
        services: {
            payMultipleRecipientsServices: {
                module: 'pmr/services/payMultipleRecipientsUpdatedServices'
            }
        },
        controllers: {
            pmrContainer: {
                module: 'pmr/controllers/pmrContainer',
                components: {
                    pmrContainer: {
                        module: 'pmr/components/pmrContainer',
                        spec: 'pmr/components/specs/pmrContainer',
                        model: true
                    }
                },
                immediate: true
            },
            pmrEntry: {
                module: 'pmr/controllers/pmrEntry',
                components: {
                    pmrEntry: {
                        module: 'pmr/components/pmrEntry',
                        spec: 'pmr/components/specs/pmrEntry',
                        model: true
                    }
                },
                immediate: false
            },
            pmrVerify: {
                module: 'pmr/controllers/pmrVerify',
                components: {
                    pmrVerify: {
                        module: 'pmr/components/pmrVerify',
                        spec: 'pmr/components/specs/pmrVerify',
                        model: true
                    }
                },
                immediate: false
            },
            pmrConfirm: {
                module: 'pmr/controllers/pmrConfirm',
                components: {
                    pmrConfirm: {
                        module: 'pmr/components/pmrConfirm',
                        spec: 'pmr/components/specs/pmrConfirm',
                        model: true
                    }
                },
                immediate: false
            },
            singlePaymentContainer: {
                module: 'pmr/controllers/singlePaymentContainer',
                components: {
                    pmrContainer: {
                        module: 'pmr/components/pmrContainer',
                        spec: 'pmr/components/specs/pmrContainer',
                        model: true
                    }
                },
                immediate: false
            },
            externalFundingBlock: {
                block: 'externalFundingBlock',
                immediate: false
            }
        },
        dependencies: {
            './css/payMultipleRecipients.css': 'css'
        }
    }
});
