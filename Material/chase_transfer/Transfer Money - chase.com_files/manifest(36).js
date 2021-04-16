define({version:2,area:{module:"accountSafe/area",viewPath:{prefix:"accountSafe/views/"},dependencies:{"./css/accountSafe.css":"css"},services:{accountSafeService:{module:"accountSafe/services/accountSafe"},aggregatorContent:{module:"common/lib/thirdPartyAccess/service/aggregatorContent"},externalAccountsService:{module:"accountSafe/services/externalAccounts"},reportFraudService:{module:"accountSafe/services/detailPages/reportFraud"}},controllers:{accountSafeOverview:{module:"accountSafe/controllers/accountSafeOverview",components:{accountSafe:{module:"accountSafe/components/accountSafe",spec:"bluespec/account_safe_menu"}},immediate:!0},detail:{module:"accountSafe/controllers/accountSafeDetailContainer",components:{accountSafeDetailContainer:{module:"accountSafe/components/accountSafeDetailContainer",spec:"bluespec/account_safe_menu",model:"accountSafeDetail",modelCleanup:!0},accountSafeBreadcrumb:{module:"accountSafe/components/accountSafeBreadcrumb",spec:"bluespec/account_safe_breadcrumb",model:"accountSafeBreadcrumb",modelCleanup:!0}}},dataPrivacy:{immediate:!0,module:"accountSafe/controllers/detailPages/dataPrivacy/dataPrivacy",components:{dataPrivacy:{module:"accountSafe/components/detailPages/dataPrivacy/dataPrivacy",spec:"bluespec/data_privacy"}}},reportFraud:{immediate:!0,module:"accountSafe/controllers/detailPages/reportFraud/reportFraud",components:{reportFraud:{module:"accountSafe/components/detailPages/reportFraud/reportFraud",spec:"bluespec/report_fraud"}}},linkedApplications:{block:"linkedAppsBlock",immediate:!1},desktopApps:{block:"desktopSoftwareBlock",immediate:!1},accountSafeFAQ:{block:"accountSafeFaqBlock",immediate:!1},savedAccountManager:{block:"savedAccountManager",immediate:!1}}}});
//# sourceMappingURL=manifest.js.map