/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module depositAccountServicingArea/manifest
 */
define({
    version: 2,
    area: {
        module: 'depositAccountServicingArea/area',
        viewPath: {
            prefix: 'depositAccountServicingArea/views/'
        },
        dependencies: {
            './css/depositAccountServicingArea.css': 'css'
        },
        services: {
            setUpDirectDepositService: {
                module: 'depositAccountServicingArea/services/setUpDirectDeposit'
            },
            orderCheckService: {
                module: 'depositAccountServicingArea/services/orderCheck'
            }
        },
        controllers: {
            setUpDirectDeposit: {
                module: 'depositAccountServicingArea/controllers/setUpDirectDeposit',
                components: {
                    setUpDirectDepositForm: {
                        spec: 'depositAccountServicingArea/spec/setUpDirectDeposit',
                        module: 'depositAccountServicingArea/components/setUpDirectDepositForm'
                    }
                },
                immediate: true
            },
            orderCheck: {
                module: 'depositAccountServicingArea/controllers/orderCheck',
                components: {
                    orderCheck: {
                        spec: 'depositAccountServicingArea/spec/orderCheck',
                        module: 'depositAccountServicingArea/components/orderCheck'
                    }
                },
                immediate: true
            }
        }
    }
});