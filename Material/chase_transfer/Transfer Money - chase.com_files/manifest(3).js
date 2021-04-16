define({version:2,area:{module:"autoCat/area",viewPath:{prefix:"autoCat/views/"},dependencies:{"./css/autoCat.css":"css"},services:{preferredTransferOption:{module:"autoCat/services/preferredTransferOption"},accountSelection:{module:"autoCat/services/accountSelection"},chooseExternalInstitution:{module:"autoCat/services/chooseExternalInstitution"},transferPartialSecurities:{module:"autoCat/services/transferPartialSecurities"},transferPartialSecuritiesQuantities:{module:"autoCat/services/transferPartialSecurities"},ineligibleSecurities:{module:"autoCat/services/ineligibleSecurities"},termsAndConditionsAuthorization:{module:"autoCat/services/termsAndConditionsAuthorization"}},controllers:{accountTransferLandingPageContainer:{module:"autoCat/controllers/accountTransferLandingPageContainer",components:{accountTransferLandingPageContainer:{module:"autoCat/components/accountTransferLandingPageContainer",spec:"autoCat/components/spec/account_transfer",model:"accountTransferLandingPageContainer"},accountTransferEntry:{module:"autoCat/components/accountTransferEntry",spec:"autoCat/components/spec/account_transfer_overview",model:"accountTransferEntry"}},immediate:!0},autoCatContainer:{module:"autoCat/controllers/autoCatContainer",components:{autoCatContainer:{module:"autoCat/components/autoCatContainer",spec:"autoCat/components/spec/account_transfer",model:"autoCatContainer"},errorModule:{module:"autoCat/components/errorModule",spec:"autoCat/components/spec/account_transfer",model:"errorModule"}},immediate:!0},accountTransferTypeManualOption:{module:"autoCat/controllers/accountTransferTypeManualOption",components:{accountTransferTypeManualOption:{module:"autoCat/components/accountTransferTypeManualOption",spec:"autoCat/components/spec/account_transfer_type",model:"accountTransferTypeManualOption"}},immediate:!0},accountSelection:{module:"autoCat/controllers/accountSelection",components:{accountSelection:{module:"autoCat/components/accountSelection",spec:"autoCat/components/spec/account_transfer_details",model:"accountSelection"},missingAccountsTable:{module:"autoCat/components/missingAccountsTable",spec:"autoCat/components/spec/accounts_ineligibility_reasons",model:"missingAccountsTable"}},immediate:!0},modalContainer:{module:"autoCat/controllers/modalContainer",components:{ineligibleSecuritiesModal:{module:"autoCat/components/ineligibleSecuritiesModal",spec:"autoCat/components/spec/ineligible_securities",model:"ineligibleSecuritiesModal"}},immediate:!0},messageBoxContainer:{module:"autoCat/controllers/messageBoxContainer",components:{missingAccountsOverlay:{module:"autoCat/components/missingAccountsOverlay",spec:"autoCat/blue-spec-share/accounts_ineligibility_reasons",model:"missingAccountsOverlay"},fullAccountTransferOverlay:{module:"autoCat/components/fullAccountTransferOverlay",spec:"autoCat/components/spec/account_transfer_confirmation",model:"fullAccountTransferOverlay"},ineligiblePartialTransferOverlay:{module:"autoCat/components/ineligiblePartialTransferOverlay",spec:"autoCat/blue-spec-share/ineligible_partial_transfer",model:"ineligiblePartialTransferOverlay"},ineligibleFullAccountTransferOverlay:{module:"autoCat/components/ineligibleFullAccountTransferOverlay",spec:"autoCat/components/spec/account_transfer_securities_details",model:"ineligibleFullAccountTransferOverlay"},eligibleAccountsOverlay:{module:"autoCat/components/eligibleAccountsOverlay",spec:"autoCat/components/spec/eligible_account_types",model:"eligibleAccountsOverlay"},youInvestPortfolioAccountNoticeOverlay:{module:"autoCat/components/youInvestPortfolioAccountNoticeOverlay",spec:"autoCat/blue-spec-share/you_invest_portfolio_advisory",model:"youInvestPortfolioAccountNoticeOverlay"},youInvestPortfolioAccountGlobalNotice:{module:"autoCat/components/youInvestPortfolioAccountGlobalNotice",spec:"autoCat/blue-spec-share/you_invest_portfolio_advisory",model:"youInvestPortfolioAccountNoticeOverlay"},accountNameRequiredOverlay:{module:"autoCat/components/accountNameRequiredOverlay",spec:"autoCat/components/spec/update_account_owner_name",model:"accountNameRequiredOverlay"},nameAccountMismatchOverlay:{module:"autoCat/components/nameAccountMismatchOverlay",spec:"autoCat/components/spec/compare_accounts_information",model:"nameAccountMismatchOverlay"},transferPartialSecuritiesListOverlay:{module:"autoCat/components/transferPartialSecuritiesListOverlay",spec:"autoCat/components/spec/account_transfer_securities_details",model:"transferPartialSecuritiesListOverlay"},financialInstitutionsOverlay:{module:"autoCat/components/financialInstitutionsOverlay",spec:"autoCat/components/spec/automated_financial_institutions",model:"financialInstitutionsOverlay"},lowConfidenceOverlay:{module:"autoCat/components/lowConfidenceOverlay",spec:"autoCat/components/spec/account_transfer_details",model:"lowConfidenceOverlay"},quovoIframeContainer:{module:"autoCat/components/quovoIframeContainer",spec:"autoCat/components/spec/quovo_iframe_container",model:"quovoIframeContainer"}},immediate:!0},selectFullOrPartialTransfer:{module:"autoCat/controllers/selectFullOrPartialTransfer",components:{selectFullOrPartialTransfer:{module:"autoCat/components/selectFullOrPartialTransfer",spec:"autoCat/components/spec/account_transfer_type",model:"selectFullOrPartialTransfer"}},immediate:!0},confirmationPage:{module:"autoCat/controllers/confirmationPage",components:{confirmationPage:{module:"autoCat/components/confirmationPage",spec:"autoCat/components/spec/account_transfer_securities_details",model:"confirmationPage"},confirmationTransferDetails:{module:"autoCat/components/confirmationTransferDetails",spec:"autoCat/components/spec/account_transfer_securities_details",model:"confirmationTransferDetails"},confirmationExpectNext:{module:"autoCat/components/confirmationExpectNext",spec:"autoCat/components/spec/account_transfer_securities_details",model:"confirmationExpectNext"},confirmationWhatNext:{module:"autoCat/components/confirmationWhatNext",spec:"autoCat/components/spec/account_transfer_securities_details",model:"confirmationWhatNext"},confirmationFootNote:{module:"autoCat/components/confirmationFootNote",spec:"autoCat/components/spec/account_transfer_securities_details",model:"confirmationFootNote"}},immediate:!0},transferVerification:{module:"autoCat/controllers/transferVerification",components:{transferVerification:{module:"autoCat/components/transferVerification",spec:"autoCat/components/spec/account_transfer_securities_details",model:"transferVerification"}},immediate:!0},transferPartialSecurities:{module:"autoCat/controllers/transferPartialSecurities",components:{transferPartialSecurities:{module:"autoCat/components/transferPartialSecurities",spec:"autoCat/components/spec/account_transfer_securities_details",model:"transferPartialSecurities"}},immediate:!0},transferPartialSecuritiesQuantities:{module:"autoCat/controllers/transferPartialSecuritiesQuantities",components:{transferPartialSecuritiesQuantities:{module:"autoCat/components/transferPartialSecuritiesQuantities",spec:"autoCat/components/spec/account_transfer_securities_details",model:"transferPartialSecuritiesQuantities"}},immediate:!0},preferredTransferOption:{module:"autoCat/controllers/preferredTransferOption",components:{preferredTransferOption:{module:"autoCat/components/preferredTransferOption",spec:"autoCat/components/spec/preferredTransferOption",model:"preferredTransferOption"}},immediate:!0},chooseExternalInstitution:{module:"autoCat/controllers/chooseExternalInstitution",components:{chooseExternalInstitution:{module:"autoCat/components/chooseExternalInstitution",spec:"autoCat/components/spec/financial_institution_search",model:"chooseExternalInstitution"}},immediate:!0},termsAndConditionsAuthorization:{module:"autoCat/controllers/termsAndConditionsAuthorization",components:{termsAndConditionsAuthorization:{module:"autoCat/components/termsAndConditionsAuthorization",spec:"autoCat/components/spec/account_transfer_securities_details",model:"termsAndConditionsAuthorization"}},immediate:!0},flyout:{block:"flyout"},autoCatContactUs:{block:"autoCatContactUs"},investmentDisclosures:{block:"investmentDisclosures"}}}});
//# sourceMappingURL=manifest.js.map