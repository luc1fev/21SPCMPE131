/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module rollover-area/manifest
 */
define({
    version: 2,
    area: {
        module: 'rollover-area/area',
        viewPath: {
            prefix: 'rollover-area/'
        },
        dependencies: {
            './rollover-area.css': 'css'
        },
        imports: {
            rollover401kBlock: 'rollover401kBlock'
        },
        services: {
            aemContent: {
                module: './services/aemContent'
            },
            accountTypeComparison: {
                module: './services/accountTypeComparison'
            },
            rolloverExperience: {
                module: './services/rolloverExperience'
            },
            accounts: {
                module: './services/accounts'
            }
        },
        controllers: {
            '401kRollover': {
                block: 'rollover401kBlock'
            },
            investmentDisclosures: { 
                block: 'investmentDisclosures' 
            },
            wizard: {
                module: 'rollover-area/wizard/controller',
                components: {
                    wizard: {
                        module: 'rollover-area/wizard/component',
                        spec: 'rollover-area/wizard/compSpec',
                        model: 'wizard'
                    },
                    overview: {
                        module: 'rollover-area/modules/overview/component',
                        spec: 'rollover-area/modules/overview/compSpec',
                        model: 'overview'
                    },
                    accountSelection: {
                        module: 'rollover-area/modules/accountSelection/component',
                        spec: 'rollover-area/modules/accountSelection/compSpec',
                        model: 'accountSelection'
                    },
                    contributions: {
                        module: 'rollover-area/modules/contributions/component',
                        spec: 'rollover-area/modules/contributions/compSpec',
                        model: 'contributions'
                    },
                    openAnAccount: {
                        module: 'rollover-area/modules/openAnAccount/component',
                        spec: 'rollover-area/modules/openAnAccount/compSpec',
                        model: 'openAnAccount'
                    },
                    chooseAccountType: {
                        module: 'rollover-area/modules/chooseAccountType/component',
                        spec: 'rollover-area/modules/chooseAccountType/compSpec',
                        model: 'chooseAccountType'
                    },
                    checklist: {
                        module: 'rollover-area/modules/checklist/component',
                        spec: 'rollover-area/modules/checklist/compSpec',
                        model: 'checklist'
                    },
                    conciergeDesk: {
                        module: 'rollover-area/modules/conciergeDesk/component',
                        spec: 'rollover-area/modules/conciergeDesk/compSpec',
                        model: 'conciergeDesk'
                    }
                },
                immediate: true
            }
        }
    }
});

