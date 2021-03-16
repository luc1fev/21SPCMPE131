define({
    version: 1,
    area: {
        module: 'sblPortfolioLineOfCredit/area',

        viewPath: {
            prefix: 'sblPortfolioLineOfCredit/views/'
        },
        controllers: {
            discovery: {
                module: 'sblPortfolioLineOfCredit/controllers/discovery',
                immediate: true,
                components: {
                    discovery: {
                        spec: 'bluespec/portfolio_line_of_credit_benefits',
                        module: 'sblPortfolioLineOfCredit/components/discovery'
                    }
                }
            },
            bridgeExpenseCalculator: {
                module: 'sblPortfolioLineOfCredit/controllers/bridgeExpenseCalculator',
                immediate: true,
                components: {
                    bridgeExpenseCalculator: {
                        spec: 'sblPortfolioLineOfCredit/spec/bridgeExpenseCalculator',
                        module: 'sblPortfolioLineOfCredit/components/bridgeExpenseCalculator'
                    },
                    bridgeExpenseCalculatorHeader: {
                        spec: 'sblPortfolioLineOfCredit/spec/bridgeExpenseCalculator',
                        module: 'sblPortfolioLineOfCredit/components/bridgeExpenseCalculatorHeader'
                    }
                }
            },
            widget: {
                module: 'sblPortfolioLineOfCredit/controllers/widget',
                components: {
                    hero:{
                        module: 'sblPortfolioLineOfCredit/components/identifiers/hero',
                        spec: 'bluespec/portfolio_line_of_credit_benefits'
                    },
                    column:{
                        module: 'sblPortfolioLineOfCredit/components/identifiers/column',
                        spec: 'bluespec/portfolio_line_of_credit_benefits'
                    },
                    twoColumn:{
                        module: 'sblPortfolioLineOfCredit/components/identifiers/twoColumn',
                        spec: 'bluespec/portfolio_line_of_credit_benefits'
                    },
                    tableColumn:{
                        module: 'sblPortfolioLineOfCredit/components/identifiers/tableColumn',
                        spec: 'bluespec/portfolio_line_of_credit_benefits'
                    },
                    offerBox:{
                        module: 'sblPortfolioLineOfCredit/components/identifiers/offerBox',
                        spec: 'bluespec/portfolio_line_of_credit_benefits'
                    },
                    advisory:{
                        module: 'sblPortfolioLineOfCredit/components/identifiers/advisory',
                        spec: 'bluespec/portfolio_line_of_credit_benefits'
                    }
                },
                immediate: true
            }
        },
        services: {
            discovery: {
                module: 'sblPortfolioLineOfCredit/services/discovery'
            },
            bridgeExpenseCalculator: {
                module: 'sblPortfolioLineOfCredit/services/bridgeExpenseCalculator'
            }
        },
        dependencies: {
            './css/sblPortfolioLineOfCredit.css': 'css'
        }
    }
});