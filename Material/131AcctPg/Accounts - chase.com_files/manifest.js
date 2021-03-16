define({version:2,area:{module:"eda/area",viewPath:{prefix:"eda/views/"},dependencies:{"./css/eda.css":"css"},services:{assetClassDefinitions:{module:"eda/services/assetClassDefinitions"},riskProfileDefinitions:{module:"eda/services/riskProfileDefinitions"},portfolioDefinitions:{module:"eda/services/portfolioDefinitions"},targetAllocationService:{module:"eda/services/targetAllocationService"},questionnaireService:{module:"eda/services/questionnaireService"},originations:{module:"eda/services/originations"},accountDataService:{module:"eda/services/accountDataService"}},controllers:{index:{module:"eda/controllers/index"},edaContainer:{module:"eda/controllers/edaContainer",components:{edaContainer:{module:"eda/components/edaContainer",spec:"eda/specs/edaContainerSpec",model:"edaContainer"}},immediate:!0},autoInvest:{module:"eda/controllers/autoInvest",components:{autoInvest:{spec:"eda/specs/simulationSpec",module:"eda/components/autoInvest/autoInvest",model:"autoInvest"},contactUs:{spec:"eda/specs/common/contactUsSpec",module:"eda/components/common/contactUs",model:!0}}},assetClassDefinitions:{module:"eda/controllers/assetClassDefinitions",components:{assetClassDefinitions:{spec:"eda/specs/assetClassDefinitionsSpec",module:"eda/components/assetClassDefinitions/assetClassDefinitions",model:"assetClassDefinitions"},contactUs:{spec:"eda/specs/common/contactUsSpec",module:"eda/components/common/contactUs",model:!0}}},editSimulate:{module:"eda/controllers/editSimulate",components:{editSimulate:{spec:"eda/specs/riskProfileSpec",module:"eda/components/editRiskProfile/editSimulate",model:"editSimulate"},contactUs:{spec:"eda/specs/common/contactUsSpec",module:"eda/components/common/contactUs",model:!0}}},editPreview:{module:"eda/controllers/editPreview",components:{editPreview:{spec:"eda/specs/riskProfileSpec",module:"eda/components/editRiskProfile/editPreview",model:"editPreview"},contactUs:{spec:"eda/specs/common/contactUsSpec",module:"eda/components/common/contactUs",model:!0}}},editAction:{module:"eda/controllers/editAction",components:{editAction:{spec:"eda/specs/riskProfileSpec",module:"eda/components/editRiskProfile/editAction",model:"editAction"},contactUs:{spec:"eda/specs/common/contactUsSpec",module:"eda/components/common/contactUs",model:!0}}},riskProfileDefinitions:{module:"eda/controllers/riskProfileDefinitions",components:{riskProfileDefinitions:{spec:"eda/specs/riskProfileDefinitionsSpec",module:"eda/components/riskProfileDefinitions/riskProfileDefinitions",model:"riskProfileDefinitions",modelCleanup:!0},contactUs:{spec:"eda/specs/common/contactUsSpec",module:"eda/components/common/contactUs",model:!0},footnoteOverlayComponent:{spec:"eda/specs/footnoteOverlaySpec",module:"eda/components/common/footnoteOverlay",model:"footnoteOverlayComponent"}}},portfolioDefinitions:{module:"eda/controllers/portfolioDefinitions",components:{portfolioDefinitions:{spec:"eda/specs/portfolioDefinitionsSpec",module:"eda/components/portfolioDefinitions/portfolioDefinitions",model:"portfolioDefinitions"},contactUs:{spec:"eda/specs/common/contactUsSpec",module:"eda/components/common/contactUs",model:!0}}},targetAllocation:{module:"eda/controllers/targetAllocation",components:{targetAllocationContainer:{spec:"eda/specs/automatedInvestingSpec",module:"eda/components/targetAllocation/targetAllocationContainer"},summary:{spec:"eda/specs/summarySpec",module:"eda/components/targetAllocation/summary"},accountDetails:{spec:"eda/specs/accountDetailsSpec",module:"eda/components/targetAllocation/accountDetails"},targetAllocation:{spec:"eda/specs/automatedInvestingSpec",module:"eda/components/targetAllocation/targetAllocation"},riskProfileValidation:{spec:"eda/specs/validationOverlaySpec",module:"eda/components/targetAllocation/riskProfileValidation"},speedbumpOverlay:{spec:"eda/specs/speedbumpOverlaySpec",module:"eda/components/common/speedbumpOverlay"},contactUs:{spec:"eda/specs/common/contactUsSpec",module:"eda/components/common/contactUs",model:!0}}},questionnaire:{module:"eda/controllers/questionnaire",components:{questionnaire:{spec:"eda/specs/questionnaireSpec",module:"eda/components/questionnaire/questionnaire",modelCleanup:!0},contactUs:{spec:"eda/specs/common/contactUsSpec",module:"eda/components/common/contactUs",model:!0}}},error:{module:"eda/controllers/error",components:{error:{spec:"eda/blue-spec-shared/eda_automated_investing",module:"eda/components/common/error"}}},headerContainer:{module:"eda/controllers/headerContainer",components:{headerContainer:{spec:"eda/specs/headerContainerSpec",module:"eda/components/common/headerContainer",model:"headerContainer"},speedbumpOverlay:{spec:"eda/specs/speedbumpOverlaySpec",module:"eda/components/common/speedbumpOverlay"}}},projectedSimulationChart:{block:"projectedSimulationChart"},flyout:{block:"flyout"},video:{block:"video"},exclusionList:{block:"exclusionList"},assetSymbolLookup:{block:"assetSymbolLookup"}}}});