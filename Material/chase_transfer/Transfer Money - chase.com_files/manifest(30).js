/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module findInvestments/manifest
 */
define({
    version: 2,
    area: {
        module: 'findInvestments/area',
        viewPath: {
            prefix: 'findInvestments/view/'
        },
        imports: {
            createPortfolio: 'createPortfolio',
            findInvestmentsOverview: 'findInvestmentsOverview'
        },
        dependencies: {
            './css/findInvestments.css': 'css'
        },
        controllers: {
            marketScreenersContainer: {
                module: 'findInvestments/controller/marketScreenersContainer',
                components: {
                    marketScreenersContainer: {
                        spec: 'findInvestments/component/spec/marketScreenersContainer',
                        module: 'findInvestments/component/marketScreenersContainer',
                        model: 'marketScreenersContainer'
                    }
                }
            },
            investmentDisclosures: { 
                block: 'investmentDisclosures' 
            },
            createPortfolio: {
                block: 'createPortfolio'
            },
            findInvestmentsOverview: {
                block: 'findInvestmentsOverview'
            },
            mutualfunds: {
                module: 'findInvestments/controller/mutualFunds',
                components: {
                    marketScreenersContainer: {
                        spec: 'findInvestments/component/spec/marketScreenersContainer',
                        module: 'findInvestments/component/marketScreenersContainer'
                    },
                    screeners: {
                        spec: 'findInvestments/component/spec/market_screeners',
                        module: 'findInvestments/component/mutualFunds/screeners',
                        model: 'screeners'
                    },
                    quickScreen: {
                        spec: 'findInvestments/component/spec/shared/quickScreen',
                        module: 'findInvestments/component/shared/quickScreen',
                        keepAlive: true,
                        model: 'screeners'
                    },
                    portfolioDetails: {
                        spec: 'bluespec/market_screeners_portfolio_details',
                        module: 'findInvestments/component/shared/portfolioDetails',
                        keepAlive: true,
                        immediate: true,
                        model: 'screeners'
                    },
                    returns: {
                        spec: 'bluespec/market_screeners_returns',
                        module: 'findInvestments/component/shared/returns',
                        keepAlive: true,
                        immediate: true,
                        model: 'screeners'
                    },
                    feesAndManagement: {
                        spec: 'findInvestments/component/spec/shared/feesAndManagement',
                        module: 'findInvestments/component/shared/feesAndManagement',
                        keepAlive: true,
                        immediate: true,
                        model: 'screeners'
                    },
                    morningstar: {
                        spec: 'bluespec/market_screeners_morning_star',
                        module: 'findInvestments/component/shared/morningstar',
                        keepAlive: true,
                        immediate: true,
                        model: 'screeners'
                    },
                    results: {
                        spec: 'findInvestments/component/spec/shared/results',
                        module: 'findInvestments/component/shared/results',
                        model: 'results'
                    },
                    serviceError: {
                        spec: 'bluespec/service_error',
                        module: 'findInvestments/component/shared/serviceError',
                        model: 'serviceError'
                    },
                    filterDefinitions: {
                        spec: 'bluespec/market_screeners_filter_definitions',
                        module: 'findInvestments/component/shared/filterDefinitions',
                        model: 'filterDefinitions'
                    },
                    filterDefinitionsHeader: {
                        spec: 'bluespec/market_screeners_filter_definitions',
                        module: 'findInvestments/component/shared/filterDefinitionsHeader',
                        model: 'filterDefinitions'
                    },
                    requestConfirmation: {
                        spec: 'bluespec/request_confirmation',
                        module: 'findInvestments/component/shared/requestConfirmation',
                        model: 'requestConfirmation'
                    },
                    savePopupBox: {
                        spec: 'findInvestments/component/spec/market_screeners',
                        module: 'findInvestments/component/shared/savePopupBox',
                        model: 'savePopupBox'
                    },
                    manageSavedFilters: {
                        spec: 'findInvestments/component/spec/market_screeners',
                        module: 'findInvestments/component/shared/manageSavedFilters',
                        model: 'manageSavedFilters'
                    }
                }
            },
            etfs: {
                module: 'findInvestments/controller/etfs',
                components: {
                    marketScreenersContainer: {
                        spec: 'findInvestments/component/spec/marketScreenersContainer',
                        module: 'findInvestments/component/marketScreenersContainer'
                    },
                    screeners: {
                        spec: 'findInvestments/component/spec/market_screeners',
                        module: 'findInvestments/component/etfs/screeners',
                        model: 'screeners'
                    },
                    quickScreen: {
                        spec: 'findInvestments/component/spec/shared/quickScreen',
                        module: 'findInvestments/component/shared/quickScreen',
                        keepAlive: true,
                        model: 'screeners'
                    },
                    portfolioDetails: {
                        spec: 'bluespec/market_screeners_portfolio_details',
                        module: 'findInvestments/component/shared/portfolioDetails',
                        keepAlive: true,
                        immediate: true,
                        model: 'screeners'
                    },
                    returns: {
                        spec: 'bluespec/market_screeners_returns',
                        module: 'findInvestments/component/shared/returns',
                        keepAlive: true,
                        immediate: true,
                        model: 'screeners'
                    },
                    feesAndManagement: {
                        spec: 'findInvestments/component/spec/shared/feesAndManagement',
                        module: 'findInvestments/component/shared/feesAndManagement',
                        keepAlive: true,
                        immediate: true,
                        model: 'screeners'
                    },
                    morningstar: {
                        spec: 'bluespec/market_screeners_morning_star',
                        module: 'findInvestments/component/shared/morningstar',
                        keepAlive: true,
                        immediate: true,
                        model: 'screeners'
                    },
                    results: {
                        spec: 'findInvestments/component/spec/shared/results',
                        module: 'findInvestments/component/shared/results',
                        model: 'results'
                    },
                    filterDefinitions: {
                        spec: 'bluespec/market_screeners_filter_definitions',
                        module: 'findInvestments/component/shared/filterDefinitions',
                        model: 'filterDefinitions'
                    },
                     serviceError: {
                        spec: 'bluespec/service_error',
                        module: 'findInvestments/component/shared/serviceError',
                        model: 'serviceError'
                    },
                    filterDefinitionsHeader: {
                        spec: 'bluespec/market_screeners_filter_definitions',
                        module: 'findInvestments/component/shared/filterDefinitionsHeader',
                        model: 'filterDefinitions'
                    },
                    requestConfirmation: {
                        spec: 'bluespec/request_confirmation',
                        module: 'findInvestments/component/shared/requestConfirmation',
                        model: 'requestConfirmation'
                    },
                    savePopupBox: {
                        spec: 'findInvestments/component/spec/market_screeners',
                        module: 'findInvestments/component/shared/savePopupBox',
                        model: 'savePopupBox'
                    },
                    manageSavedFilters: {
                        spec: 'findInvestments/component/spec/market_screeners',
                        module: 'findInvestments/component/shared/manageSavedFilters',
                        model: 'manageSavedFilters'
                    }
                }
            },
            stocks: {
                module: 'findInvestments/controller/stocks',
                components: {
                    marketScreenersContainer: {
                        spec: 'findInvestments/component/spec/marketScreenersContainer',
                        module: 'findInvestments/component/marketScreenersContainer'
                    },
                    screeners: {
                        spec: 'findInvestments/component/spec/market_screeners',
                        module: 'findInvestments/component/stocks/screeners',
                        model: 'screeners'
                    },
                    quickScreen: {
                        spec: 'findInvestments/component/spec/shared/quickScreen',
                        module: 'findInvestments/component/shared/quickScreen',
                        keepAlive: true,
                        model: 'screeners'
                    },
                    performanceAndVolume: {
                        spec: 'bluespec/market_screeners_performance_and_volume',
                        module: 'findInvestments/component/stocks/performanceAndVolume',
                        keepAlive: true,
                        model: 'screeners',
                        immediate: true
                    },
                    earningsAndFinancials: {
                        spec: 'bluespec/market_screeners_earnings_and_financials',
                        module: 'findInvestments/component/stocks/earningsAndFinancials',
                        keepAlive: true,
                        model: 'screeners',
                        immediate: true
                    },
                    valuationAndOwnership: {
                        spec: 'bluespec/market_screeners_valuation_and_ownership',
                        module: 'findInvestments/component/stocks/valuationAndOwnership',
                        keepAlive: true,
                        model: 'screeners',
                        immediate: true
                    },
                    filterDefinitions: {
                        spec: 'bluespec/market_screeners_filter_definitions',
                        module: 'findInvestments/component/shared/filterDefinitions',
                        model: 'filterDefinitions'
                    },
                    serviceError: {
                        spec: 'bluespec/service_error',
                        module: 'findInvestments/component/shared/serviceError',
                        model: 'serviceError'
                    },
                    results: {
                        spec: 'findInvestments/component/spec/shared/results',
                        module: 'findInvestments/component/shared/results',
                        model: 'results'
                    },
                    filterDefinitionsHeader: {
                        spec: 'bluespec/market_screeners_filter_definitions',
                        module: 'findInvestments/component/shared/filterDefinitionsHeader',
                        model: 'filterDefinitions'
                    },
                    requestConfirmation: {
                        spec: 'bluespec/request_confirmation',
                        module: 'findInvestments/component/shared/requestConfirmation',
                        model: 'requestConfirmation'
                    },
                    savePopupBox: {
                        spec: 'findInvestments/component/spec/market_screeners',
                        module: 'findInvestments/component/shared/savePopupBox',
                        model: 'savePopupBox'
                    },
                    manageSavedFilters: {
                        spec: 'findInvestments/component/spec/market_screeners',
                        module: 'findInvestments/component/shared/manageSavedFilters',
                        model: 'manageSavedFilters'
                    }
                }
            },
            filterDefinitions: {
                module: 'findInvestments/controller/filterDefinitions',
                immediate: true
            }
        },
        services: {
            mutualFunds: {
                module: 'findInvestments/service/mutualFunds'
            },
            ETFs: {
                module: 'findInvestments/service/ETFs'
            },
            stocks: {
                module: 'findInvestments/service/stocks'
            },
            accountServices: {
                module: 'findInvestments/service/accountServices'
            },
            investmentIdeas: {
                module: 'findInvestments/service/investmentIdeas'
            },
            savedFilters: {
                module: 'findInvestments/service/savedFilters'
            }
        }
    }
});