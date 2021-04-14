/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module retirementPlanningHub/manifest
 */
define({
    version: 1,
    area: {
        module: 'retirementPlanningHub/area',
        viewPath: {
            prefix: 'retirementPlanningHub/views/'
        },
        dependencies: {
            './css/main.css': 'css'
        },
        services: {
            retirementHub: {
                module: 'retirementPlanningHub/services/retirementHub'
            },
            insightsDetails: {
                module: 'retirementPlanningHub/services/insightsDetails'
            },
            articleDetails:{
                module: 'retirementPlanningHub/services/articleDetails'
            },
            commonService:{
                module: 'retirementPlanningHub/services/commonService'
            }
        },
        controllers: {
            articleSearch: {
                block: 'articleSearch'
            },
            retirementHub: {
                module: 'retirementPlanningHub/controllers/retirementHub',
                components: {
                    overview: {
                        module: 'retirementPlanningHub/components/overview',
                        spec: 'retirementPlanningHub/components/specs/retirement_planning_details',
                        model: 'overview'
                    },
                    lifeStage: {
                        module: 'retirementPlanningHub/components/lifeStage',
                        spec: 'retirementPlanningHub/components/specs/retirement_planning_details',
                        model: 'lifeStage'
                    }
                }
            },
            retirementContainer: {
                module: 'retirementPlanningHub/controllers/retirementContainer',
                components: {
                    retirementContainer: {
                        module: 'retirementPlanningHub/components/retirementContainer',
                        spec: 'retirementPlanningHub/components/specs/containerEnriched',
                        model: 'retirementContainer'
                    },
                    flyout: {
                        module: 'retirementPlanningHub/components/flyout',
                        spec: 'bluespec/retirement_planning_details',
                        model: 'flyout'
                    }
                },
                immediate: true
            },
            investmentDisclosures: {
                block: 'investmentDisclosures'
            }
        }
    }
});