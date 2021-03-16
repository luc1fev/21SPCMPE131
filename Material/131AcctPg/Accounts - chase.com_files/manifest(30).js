/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module accountSafe/ manifest
 */
define({
    version: 2,
    area: {
        module: 'accountSafe/area',
        viewPath: {
            prefix: 'accountSafe/views/'
        },
        dependencies: {
            './css/accountSafe.css': 'css'
        },
        services: {
            accountSafeService: {
                module: 'accountSafe/services/accountSafe'
            },
            aggregatorContent: {
                module: 'common/lib/thirdPartyAccess/service/aggregatorContent'
            },
            externalAccountsService: {
                module: 'accountSafe/services/externalAccounts'
            }
        },
        controllers: {
            accountSafeOverview: {
                module: 'accountSafe/controllers/accountSafeOverview',
                components: {
                    accountSafe: {
                        module: 'accountSafe/components/accountSafe',
                        spec: 'bluespec/account_safe_menu'
                    }
                },
                immediate: true
            },
            detail: {
                module: 'accountSafe/controllers/accountSafeDetailContainer',
                components: {
                    accountSafeDetailContainer: {
                        module: 'accountSafe/components/accountSafeDetailContainer',
                        spec: 'bluespec/account_safe_menu',
                        model: 'accountSafeDetail',
                        modelCleanup: true
                    },
                    accountSafeBreadcrumb: {
                        module: 'accountSafe/components/accountSafeBreadcrumb',
                        spec: 'bluespec/account_safe_breadcrumb',
                        model: 'accountSafeBreadcrumb',
                        modelCleanup: true
                    }
                }
            },
            dataPrivacy: {
                immediate: true,
                module: 'accountSafe/controllers/dataPrivacy/dataPrivacy',
                components: {
                    dataPrivacy: {
                        module: 'accountSafe/components/dataPrivacy/dataPrivacy',
                        spec: 'bluespec/data_privacy'
                    }
                }
            },
            externalFinancialAccounts: {
                block: 'externalFinancialAccounts',
                immediate: false
            },
            linkedApplications: {
                block: 'linkedAppsBlock',
                immediate: false
            },
            desktopApps: {
                block: 'desktopSoftwareBlock',
                immediate: false
            },
            accountSafeFAQ: {
                block: 'accountSafeFaqBlock',
                immediate: false
            },
            savedAccountManager: {
                block: 'savedAccountManager',
                immediate: false
            }
        }
    }
});