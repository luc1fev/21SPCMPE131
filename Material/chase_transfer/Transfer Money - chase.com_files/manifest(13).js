/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module transferMoneyArea/manifest
 */
define({
    version: 2,
    area: {
        module: 'transferMoneyArea/area',
        viewPath: {
            prefix: 'transferMoneyArea/views/'
        },
        controllers: {
            childDebitAccount: {
                module               : 'transferMoneyArea/controllers/childDebitAccount',
                components: {
                    declineRequest: {
                        spec         : 'transferMoneyArea/components/specs/decline_request_enrichment',
                        module       : 'transferMoneyArea/components/childDebitAccount/declineRequest',
                        modelCleanup : true
                    },
                    deleteRequest: {
                        spec         : 'transferMoneyArea/components/specs/child_debit_account_enrichment',
                        module       : 'transferMoneyArea/components/childDebitAccount/deleteRequest',
                        modelCleanup : true
                    },
                    editNetNewRequest: {
                        spec         : 'transferMoneyArea/components/specs/child_debit_account_enrichment',
                        module       : 'transferMoneyArea/components/childDebitAccount/editNetNewRequest',
                        modelCleanup : true
                    },
                    editRequest: {
                        spec         : 'transferMoneyArea/components/specs/child_debit_account_enrichment',
                        module       : 'transferMoneyArea/components/childDebitAccount/editRequest',
                        modelCleanup : true
                    },
                    moveChildMoney: {
                        spec         : 'transferMoneyArea/components/specs/child_debit_account_enrichment',
                        module       : 'transferMoneyArea/components/childDebitAccount/moveMoney',
                        modelCleanup : true
                    },
                    moveMoney: {
                        spec         : 'transferMoneyArea/components/specs/child_debit_account_enrichment',
                        module       : 'transferMoneyArea/components/childDebitAccount/moveMoney',
                        modelCleanup : true
                    },
                    requestMoney: {
                        spec         : 'transferMoneyArea/components/specs/child_debit_account_enrichment',
                        module       : 'transferMoneyArea/components/childDebitAccount/requestMoney',
                        modelCleanup : true
                    },
                    reviewRequest: {
                        spec         : 'transferMoneyArea/components/specs/child_debit_account_enrichment',
                        module       : 'transferMoneyArea/components/childDebitAccount/reviewRequest',
                        modelCleanup : true
                    }
                },
                immediate: true
            },
            flyout: {
                block: 'flyout',
                immediate: false
            }
        },
        services: {
            childDebitAccount: {
                module: 'transferMoneyArea/services/childDebitAccount'
            }
        },
        dependencies: {
            './css/main.css': 'css'
        }
    }
});