/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module myHome/manifest
 */
define({
    version: 2,
    area: {
        module: 'myHome/area',
        viewPath: {
            prefix: 'myHome/views/'
        },
        dependencies: {
            './css/myHome.css': 'css'
        },
        services: {
            //#region MH Services
            myHome: {
                module: 'myHome/services/mh/myHome'
            },
            myEquity: {
                module: 'myHome/services/mh/myEquity'
            },
            sharedMyEquity: {
                module: 'myHome/services/mh/sharedMyEquity'
            },
            sharedMyLoan: {
                module: 'myHome/services/mh/sharedMyLoan'
            },
            mortgageDetails: {
                module: 'myHome/services/mh/mortgageDetails'
            },
            interstitial: {
                module: 'myHome/services/mh/interstitial'
            },
            homeDetails: {
                module: 'myHome/services/mh/homeDetails'
            },
            addressDetails: {
                module: 'myHome/services/mh/addressDetails'
            },
            thingsToKnow: {
                module: 'myHome/services/mh/thingsToKnow'
            },
            myHomeDisclosures: {
                module: 'myHome/services/mh/disclosures'
            },
            refinancingCalculator: {
                module: 'myHome/services/mh/refinancingCalculator'
            },
            myOptions: {
                module: 'myHome/services/mh/myOptions'
            },
            myNeighborhood: {
                module: 'myHome/services/mh/myNeighborhood'
            },
            justForYou: {
                module: 'myHome/services/mh/justForYou'
            },
            questionAndAnswer: {
                module: 'myHome/services/mh/questionAndAnswer'
            },
            //#endregion MH Services
            //#region CMH Services
            buyingPower: {
                module: 'myHome/services/cmh/buyingPower'
            },
            manualAddress: {
                module: 'myHome/services/cmh/manualAddress'
            },
            chaseMyHome: {
                module: 'myHome/services/cmh/myHome'
            },
            loanOptions: {
                module: 'myHome/services/cmh/loanOptions'
            },
            overview: {
                module: 'myHome/services/cmh/overview'
            },
            cmhInterstitial: {
                module: 'myHome/services/cmh/interstitial'
            },
            approvalLetter: {
                module: 'myHome/services/cmh/approvalLetter'
            },
            applyCenter: {
                module: 'myHome/services/cmh/applyCenter'
            },
            firstVisitInterstitial: {
                module: 'myHome/services/cmh/firstVisitInterstitial'
            },
            applicationReview: {
                module: 'myHome/services/cmh/applicationReview'
            },
            refinance: {
                module: 'myHome/services/cmh/refinance'
            },
            thirdPartyRedirect: {
                module: 'myHome/services/cmh/thirdPartyRedirect'
            },
            learningCenter: {
                module: 'myHome/services/cmh/learningCenter'
            }
            //#endregion CMH Services
        },
        controllers: {
            //#region MH Controllers
            myHome: {
                module: 'myHome/controllers/mh/myHome',
                components: {
                    myHome: {
                        module: 'myHome/components/area/myHome',
                        spec: 'myHome/spec/mh/my_home_layout'
                    }
                },
                immediate: true
            },
            brandBar: {
                module: 'myHome/controllers/area/brandBar',
                components: {
                    brandBar: {
                        module: 'myHome/components/area/brandBar',
                        spec: 'blue-spec-shared/my_home_header'
                    }
                }
            },
            tabBar: {
                module: 'myHome/controllers/mh/tabBar',
                components: {
                    tabBar: {
                        module: 'myHome/components/mh/tabBar',
                        spec: 'blue-spec-shared/my_home_tabs'
                    }
                }
            },
            overview: {
                module: 'myHome/controllers/mh/overview',
                components: {
                    overview: {
                        module: 'myHome/components/mh/overview',
                        spec: 'myHome/spec/mh/my_home_layout'
                    },
                    haveQuestionsSection: {
                        module: 'myHome/components/mh/widgets/haveQuestionsSection',
                        spec: 'blue-spec-shared/my_home_footer'
                    }
                }
            },
            mortgageDetails: {
                module: 'myHome/controllers/mh/widgets/mortgageDetails',
                components: {
                    mortgageDetails: {
                        module: 'myHome/components/mh/widgets/mortgageDetails',
                        spec: 'myHome/spec/mh/my_home_mortgage_details'
                    },
                    myHomeValueChart: {
                        module: 'myHome/components/mh/widgets/myHomeValueChart',
                        spec: 'myHome/spec/mh/my_home_market_value_slider',
                        modelCleanup: true
                    }
                }
            },
            interstitial: {
                module: 'myHome/controllers/mh/widgets/interstitial',
                components: {
                    interstitial: {
                        module: 'myHome/components/mh/widgets/interstitial',
                        spec: 'myHome/spec/mh/interstitial'
                    }
                }
            },
            equity: {
                module: 'myHome/controllers/mh/equity',
                components: {
                    equity: {
                        module: 'myHome/components/mh/equity',
                        spec: 'myHome/spec/mh/my_home_equity_market_value'
                    },
                    haveQuestionsSection: {
                        module: 'myHome/components/mh/widgets/haveQuestionsSection',
                        spec: 'blue-spec-shared/my_home_footer'
                    }
                }
            },
            myEquityHeader: {
                module: 'myHome/controllers/mh/widgets/myEquityHeader',
                components: {
                    myEquityHeader: {
                        module: 'myHome/components/mh/widgets/myEquityHeader',
                        spec: 'myHome/spec/mh/my_home_equity_market_value',
                        modelCleanup: true
                    },
                    myHomeValueChart: {
                        module: 'myHome/components/mh/widgets/myHomeValueChart',
                        spec: 'myHome/spec/mh/my_home_market_value_slider',
                        modelCleanup: true
                    }
                }
            },
            equityWorkForYou: {
                module: 'myHome/controllers/area/widgets/equityWorkForYou',
                components: {
                    equityWorkForYou: {
                        module: 'myHome/components/area/widgets/equityWorkForYou',
                        spec: 'myHome/spec/mh/my_home_make_your_equity_work',
                        modelCleanup: true
                    }
                }
            },
            exploreYourHome: {
                module: 'myHome/controllers/mh/widgets/exploreYourHome',
                components: {
                    exploreYourHome: {
                        module: 'myHome/components/mh/widgets/exploreYourHome',
                        spec: 'myHome/spec/mh/my_home_explore_your_home'
                    }
                }
            },
            loan: {
                module: 'myHome/controllers/mh/loan',
                components: {
                    loan: {
                        module: 'myHome/components/mh/loan',
                        spec: 'myHome/spec/mh/my_home_loan_estimated_mortgage'
                    },
                    haveQuestionsSection: {
                        module: 'myHome/components/mh/widgets/haveQuestionsSection',
                        spec: 'blue-spec-shared/my_home_footer'
                    }
                }
            },
            loanPersonalizedOptions: {
                module: 'myHome/controllers/mh/widgets/loanPersonalizedOptions',
                components: {
                    loanPersonalizedOptions: {
                        module: 'myHome/components/mh/widgets/loanPersonalizedOptions',
                        spec: 'myHome/spec/mh/my_home_loan_personalized_options'
                    },
                    estimatedMortgage: {
                        module: 'myHome/components/mh/widgets/estimatedMortgage',
                        spec: 'myHome/spec/mh/my_home_loan_estimated_mortgage',
                        modelCleanup: true
                    },
                    personalizedRefinancing: {
                        module: 'myHome/components/area/widgets/personalizedRefinancing',
                        spec: 'blue-spec-shared/my_home_loan_personalized_options',
                        modelCleanup: true
                    },
                    refinancingCalculatorsInfo: {
                        module: 'myHome/components/mh/widgets/refinancingCalculatorsInfo',
                        spec: 'blue-spec-shared/my_home_loan_refinancing_calculators_info',
                        modelCleanup: true
                    }
                }
            },
            options: {
                module: 'myHome/controllers/mh/options',
                components: {
                    options: {
                        module: 'myHome/components/mh/options',
                        spec: 'blue-spec-shared/my_home_options'
                    },
                    myOptionsHeader:{
                        module: 'myHome/components/area/widgets/myOptionsHeader',
                        spec: 'blue-spec-shared/my_home_options'
                    },
                    myOffersHeader:{
                        module: 'myHome/components/area/widgets/myOffersHeader',
                        spec: 'myHome/spec/cmh/my_home_offers'
                    },
                    justForYouOffers:{
                        module: 'myHome/components/area/widgets/justForYouOffers',
                        spec: 'blue-spec-shared/my_home_options',
                        modelCleanup: true
                    },
                    personalizedRefinancing: {
                        module: 'myHome/components/area/widgets/personalizedRefinancing',
                        spec: 'blue-spec-shared/my_home_loan_personalized_options',
                        modelCleanup: true
                    },
                    haveQuestionsSection: {
                        module: 'myHome/components/mh/widgets/haveQuestionsSection',
                        spec: 'blue-spec-shared/my_home_footer'
                    },
                    offersMessageSection: {
                        module: 'myHome/components/mh/widgets/offersMessageSection',
                        spec: 'blue-spec-shared/my_home_offers'
                    }
                }
            },
            neighborhood: {
                module: 'myHome/controllers/mh/neighborhood',
                components: {
                    neighborhood: {
                        module: 'myHome/components/mh/neighborhood',
                        spec: 'myHome/spec/mh/my_home_neighborhood'
                    },
                    myNeighborhoodHeaderAndMarketInsights: {
                        module: 'myHome/components/mh/widgets/myNeighborhoodHeaderAndMarketInsights',
                        spec: 'blue-spec-shared/my_home_market_insights'
                    },
                    myNeighborhoodAverageSalesPrice: {
                        module: 'myHome/components/mh/widgets/myNeighborhoodAverageSalesPrice',
                        spec: 'blue-spec-shared/my_home_average_sales'
                    },
                    myNeighborhoodNeighborhoodInsights: {
                        module: 'myHome/components/mh/widgets/myNeighborhoodNeighborhoodInsights',
                        spec: 'blue-spec-shared/my_home_neighborhood_insights'
                    },
                    haveQuestionsSection: {
                        module: 'myHome/components/mh/widgets/haveQuestionsSection',
                        spec: 'blue-spec-shared/my_home_footer'
                    }
                }
            },
            comparableSalesNearby: {
                module: 'myHome/controllers/mh/widgets/comparableSalesNearby',
                components: {
                    comparableSalesNearby: {
                        module: 'myHome/components/mh/widgets/comparableSalesNearby',
                        spec: 'blue-spec-shared/my_home_comparable_sales'
                    }
                }
            },
            learningCenter: {
                module: 'myHome/controllers/mh/learningCenter',
                components: {
                    learningCenter: {
                        module: 'myHome/components/mh/learningCenter',
                        spec: 'blue-spec-shared/my_home_learning_center'
                    }
                }
            },
            homeDetails: {
                module: 'myHome/controllers/mh/homeDetails',
                immediate: true,
                components: {
                    homeDetails: {
                        module: 'myHome/components/mh/homeDetails',
                        spec: 'myHome/spec/mh/homeDetails'
                    }
                }
            },
            loanOptions: {
                module: 'myHome/controllers/mh/loanOptions',
                immediate: true,
                components: {
                    loanOptions: {
                        module: 'myHome/components/mh/loanOptions',
                        spec: 'myHome/spec/mh/loanOptions'
                    }
                }
            },
            addressDetails: {
                module: 'myHome/controllers/mh/addressDetails',
                immediate: true,
                components: {
                    addressDetails: {
                        module: 'myHome/components/mh/addressDetails',
                        spec: 'myHome/spec/mh/addressDetails',
                        modelCleanup: true
                    }
                }
            },
            disclosures: {
                module: 'myHome/controllers/mh/widgets/disclosures',
                immediate: true,
                components: {
                    disclosures: {
                        module: 'myHome/components/mh/widgets/disclosures',
                        spec: 'blue-spec-shared/my_home_disclosures',
                        modelCleanup: true
                    }
                }
            },
            video: {
                block: 'video'
            },
            navigation: {
                block: 'navigation'
            },
            refinancingCalculator: {
                module: 'myHome/controllers/mh/widgets/refinancingCalculator',
                components: {
                    refinancingCalculator: {
                        module: 'myHome/components/mh/widgets/refinancingCalculator',
                        spec: 'myHome/spec/mh/my_home_loan_refinancing_calculators'
                    }
                }
            },
            homePurchaseOptions: {
                module: 'myHome/controllers/area/widgets/homePurchaseOptions',
                components: {
                    homePurchaseOptions: {
                        module: 'myHome/components/area/widgets/homePurchaseOptions',
                        spec: 'blue-spec-shared/my_home_purchase_options',
                        modelCleanup: true
                    }
                }
            },
            homePurchaseNeighborhood: {
                module: 'myHome/controllers/area/widgets/homePurchaseOptions',
                components: {
                    homePurchaseOptions: {
                        module: 'myHome/components/area/widgets/homePurchaseOptions',
                        spec: 'blue-spec-shared/my_home_purchase_options'
                    }
                }
            },
            justForYou: {
                module: 'myHome/controllers/area/justForYou',
                immediate: true,
                components: {
                    justForYou: {
                        module: 'myHome/components/area/justForYou',
                        spec: 'myHome/spec/mh/my_home_options_just_for_you'
                    }
                }
            },
            mortgageDisclaimer: {
                module: 'myHome/controllers/mh/widgets/mortgageDisclaimer',
                components: {
                    mortgageDisclaimer: {
                        module: 'myHome/components/mh/widgets/mortgageDisclaimer',
                        spec: 'blue-spec-shared/my_home_mortgage_disclaimer'
                    }
                }
            },
            mortgageDisclaimerNeighborhood: {
                module: 'myHome/controllers/mh/widgets/mortgageDisclaimer',
                components: {
                    mortgageDisclaimer: {
                        module: 'myHome/components/mh/widgets/mortgageDisclaimer',
                        spec: 'blue-spec-shared/my_home_mortgage_disclaimer'
                    }
                }
            },
            mortgageDisclaimerPersonalized: {
                module: 'myHome/controllers/mh/widgets/mortgageDisclaimer',
                components: {
                    mortgageDisclaimer: {
                        module: 'myHome/components/mh/widgets/mortgageDisclaimer',
                        spec: 'blue-spec-shared/my_home_mortgage_disclaimer'
                    }
                }
            },
            //#endregion MH Controllers
            //#region CMH Controllers
            chaseMyHome: {
                module: 'myHome/controllers/cmh/myHome',
                components: {
                    myHome: {
                        module: 'myHome/components/area/myHome',
                        spec: 'myHome/spec/cmh/my_home_layout'
                    },
                    navMenu: {
                        module: 'myHome/components/area/navMenu',
                        spec: 'myHome/spec/cmh/my_home_tabs'
                    }
                },
                immediate: true
            },
            cmhTabBar: {
                module: 'myHome/controllers/cmh/tabBar',
                components: {
                    tabBar: {
                        module: 'myHome/components/cmh/tabBar',
                        spec: 'blue-spec-shared/my_home_tabs'
                    }
                }
            },
            cmhOverview: {
                module: 'myHome/controllers/cmh/overview',
                components: {
                    overview: {
                        module: 'myHome/components/cmh/overview',
                        spec: 'myHome/spec/cmh/my_home_layout'
                    },
                    discoverChaseMyHome: {
                        module: 'myHome/components/cmh/widgets/discoverChaseMyHome',
                        spec: 'blue-spec-shared/my_home_discover_chase_my_home'
                    },
                    haveQuestionsSection: {
                        module: 'myHome/components/cmh/widgets/haveQuestionsSection',
                        spec: 'blue-spec-shared/my_home_footer'
                    },
                    overviewAlert: {
                        module: 'myHome/components/cmh/widgets/overviewAlert',
                        spec: 'myHome/spec/cmh/my_home_alert'
                    },
                    overviewHeader: {
                        module: 'myHome/components/cmh/widgets/overviewHeader',
                        spec: 'myHome/spec/cmh/my_home_chase_my_home'
                    },
                    overviewInsights: {
                        module: 'myHome/components/cmh/widgets/overviewInsights',
                        spec: 'myHome/spec/cmh/my_home_mortgage_insights'
                    },
                    overviewMainContent: {
                        module: 'myHome/components/cmh/widgets/overviewCombinedMainContentAndOffers',
                        spec: 'myHome/spec/cmh/my_home_chase_my_home_offers'
                    },
                    overviewOffers: {
                        module: 'myHome/components/cmh/widgets/overviewCombinedMainContentAndOffers',
                        spec: 'myHome/spec/cmh/my_home_chase_my_home_offers'
                    },
                    overviewProperty: {
                        module: 'myHome/components/cmh/widgets/overviewProperty',
                        spec: 'myHome/spec/cmh/my_home_layout'
                    },
                    creditJourney: {
                        module: 'myHome/components/cmh/widgets/creditJourney',
                        spec: 'blue-spec-shared/my_home_credit_journey'
                    }
                }
            },
            buyingPower: {
                module: 'myHome/controllers/cmh/buyingPower',
                components: {
                    buyingPower: {
                        module: 'myHome/components/cmh/buyingPower',
                        spec: 'blue-spec-shared/my_home_buying_power'
                    },
                    buyingPowerCalculationInformation: {
                        module: 'myHome/components/cmh/widgets/buyingPowerCalculationInformation',
                        spec: 'blue-spec-shared/my_home_buying_power'
                    },
                    buyingPowerConditionalApprovalNotice: {
                        module: 'myHome/components/cmh/widgets/buyingPowerConditionalApprovalNotice',
                        spec: 'blue-spec-shared/my_home_buying_power'
                    },
                    buyingPowerOfferDetails: {
                        module: 'myHome/components/cmh/widgets/buyingPowerOfferDetails',
                        spec: 'blue-spec-shared/my_home_buying_power'
                    },
                    haveQuestionsSection: {
                        module: 'myHome/components/cmh/widgets/haveQuestionsSection',
                        spec: 'blue-spec-shared/my_home_footer'
                    },
                    stickyGetMyLetter: {
                        module: 'myHome/components/cmh/widgets/stickyGetMyLetter',
                        spec: 'blue-spec-shared/my_home_buying_power'
                    },
                    buyingPowerInvalidOffer: {
                        module: 'myHome/components/cmh/widgets/buyingPowerInvalidOffer',
                        spec: 'myHome/spec/cmh/buying_power_invalid_offer',
                        modelCleanup: true
                    }
                }
            },
            cmhInterstitial: {
                module: 'myHome/controllers/cmh/widgets/interstitial',
                components: {
                    interstitial: {
                        module: 'myHome/components/cmh/widgets/interstitial',
                        spec: 'myHome/spec/cmh/my_home_interstitial'
                    }
                }
            },
            approvalLetter: {
                module: 'myHome/controllers/cmh/approvalLetter',
                components: {
                    approvalLetter: {
                        module: 'myHome/components/cmh/approvalLetter',
                        spec: 'myHome/spec/cmh/my_home_customize_letter'
                    },
                    approvalLetterHeader: {
                        module: 'myHome/components/cmh/widgets/approvalLetterHeader',
                        spec: 'blue-spec-shared/my_home_letter_center'
                    },
                    approvalLetterCustomize: {
                        module: 'myHome/components/cmh/widgets/approvalLetterCustomize',
                        spec: 'myHome/spec/cmh/my_home_customize_letter'
                    },
                    haveQuestionsSection: {
                        module: 'myHome/components/cmh/widgets/haveQuestionsSection',
                        spec: 'blue-spec-shared/my_home_footer'
                    }
                }
            },
            cmhLoanOptions: {
                module: 'myHome/controllers/cmh/loanOptions',
                components: {
                    loanOptions: {
                        module: 'myHome/components/cmh/loanOptions',
                        spec: 'myHome/spec/cmh/my_home_loan_options'
                    },
                    loanOptionsHeader: {
                        module: 'myHome/components/cmh/widgets/loanOptionsHeader',
                        spec: 'myHome/spec/cmh/my_home_loan_options'
                    },
                    loanOptionsCustomization: {
                        module: 'myHome/components/cmh/widgets/loanOptionsCustomization',
                        spec: 'myHome/spec/cmh/my_home_loan_options'
                    },
                    haveQuestionsSection: {
                        module: 'myHome/components/cmh/widgets/haveQuestionsSection',
                        spec: 'blue-spec-shared/my_home_footer'
                    }
                }
            },
            loanOptionsSlideIn: {
                module: 'myHome/controllers/cmh/loanOptionsSlideIn',
                components: {
                    loanOptionsSlideIn: {
                        module: 'myHome/components/cmh/loanOptionsSlideIn',
                        spec: 'myHome/spec/cmh/my_home_loan_options'
                    }
                }
            },
            firstVisitInterstitial: {
                module: 'myHome/controllers/cmh/widgets/firstVisitInterstitial',
                components: {
                    firstVisitInterstitial: {
                        module: 'myHome/components/cmh/widgets/firstVisitInterstitial',
                        spec: 'myHome/spec/cmh/my_home_interstitial_questions'
                    }
                }
            },
            manualAddress: {
                module: 'myHome/controllers/cmh/manualAddress',
                components: {
                    manualAddress: {
                        module: 'myHome/components/cmh/manualAddress',
                        spec: 'myHome/spec/cmh/my_home_loan_options'
                    }
                }
            },
            applyCenter: {
                module: 'myHome/controllers/cmh/applyCenter',
                components: {
                    applyCenter: {
                        module: 'myHome/components/cmh/applyCenter',
                        spec: 'myHome/spec/cmh/my_home_apply_center'
                    },
                    applyCenterHeader: {
                        module: 'myHome/components/cmh/widgets/applyCenterHeader',
                        spec: 'myHome/spec/cmh/my_home_apply_center'
                    },
                    applyCenterCustomize: {
                        module: 'myHome/components/cmh/widgets/applyCenterCustomize',
                        spec: 'myHome/spec/cmh/my_home_apply_center'
                    },
                    applyCenterPurchaseInfo: {
                        module: 'myHome/components/cmh/widgets/applyCenterPurchaseInfo',
                        spec: 'myHome/spec/cmh/my_home_apply_center'
                    },
                    haveQuestionsSection: {
                        module: 'myHome/components/cmh/widgets/haveQuestionsSection',
                        spec: 'blue-spec-shared/my_home_footer'
                    }
                }
            },
            homeSearch: {
                module: 'myHome/controllers/cmh/homeSearch',
                components: {
                    homeSearch: {
                        module: 'myHome/components/cmh/homeSearch',
                        spec: 'myHome/spec/cmh/my_home_layout'
                    }
                }
            },
            thirdPartyRedirect: {
                module: 'myHome/controllers/cmh/widgets/thirdPartyRedirect',
                components: {
                    thirdPartyNavigation: {
                        module: 'myHome/components/cmh/widgets/thirdPartyNavigation',
                        spec: 'myHome/spec/cmh/my_home_interstitial'
                    },
                    overviewInsightsDialog: {
                        module: 'myHome/components/cmh/widgets/overviewInsightsDialog',
                        spec: 'myHome/spec/cmh/my_home_mortgage_insights'
                    }
                }
            },
            propertyReview: {
                module: 'myHome/controllers/cmh/propertyReview',
                components: {
                    propertyReview: {
                        module: 'myHome/components/cmh/propertyReview',
                        spec: 'myHome/spec/cmh/my_home_application_review'
                    },
                    propertyReviewHeader: {
                        module: 'myHome/components/cmh/widgets/propertyReviewHeader',
                        spec: 'myHome/spec/cmh/my_home_application_review'
                    },
                    propertyReviewCustomize: {
                        module: 'myHome/components/cmh/widgets/propertyReviewCustomize',
                        spec: 'myHome/spec/cmh/my_home_application_review'
                    },
                    propertyReviewPropertyInfo: {
                        module: 'myHome/components/cmh/widgets/propertyReviewPropertyInfo',
                        spec: 'myHome/spec/cmh/my_home_application_review'
                    },
                    propertyReviewLoanInfo: {
                        module: 'myHome/components/cmh/widgets/propertyReviewLoanInfo',
                        spec: 'myHome/spec/cmh/my_home_application_review'
                    }
                }
            },
            refinance: {
                module: 'myHome/controllers/cmh/refinance',
                components: {
                    refinance: {
                        module: 'myHome/components/cmh/refinance',
                        spec: 'blue-spec-shared/my_home_refinance'
                    },
                    refinanceHeader: {
                        module: 'myHome/components/cmh/widgets/refinanceHeader',
                        spec: 'blue-spec-shared/my_home_refinance'
                    },
                    refinanceCustomize: {
                        module: 'myHome/components/cmh/widgets/refinanceCustomize',
                        spec: 'myHome/spec/cmh/my_home_refinance'
                    },
                    haveQuestionsSection: {
                        module: 'myHome/components/cmh/widgets/haveQuestionsSection',
                        spec: 'blue-spec-shared/my_home_footer'
                    },
                    refinanceFooter: {
                        module: 'myHome/components/cmh/widgets/refinanceFooter',
                        spec: 'blue-spec-shared/my_home_refinance'
                    }
                }
            },
            cmhLearningCenter: {
                module: 'myHome/controllers/cmh/learningCenter',
                components: {
                    learningCenter: {
                        module: 'myHome/components/cmh/learningCenter',
                        spec: 'blue-spec-shared/my_home_learning_center',
                        modelCleanup: true
                    }
                }
            }
            //#endregion CMH Controllers
        }
    }
});
