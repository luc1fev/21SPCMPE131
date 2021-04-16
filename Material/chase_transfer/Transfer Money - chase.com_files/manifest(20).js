define({version:1,area:{module:"tradeBlock/area",viewPath:{prefix:"tradeBlock/views/"},controllers:{assetSymbolLookup:{block:"assetSymbolLookup"},tradePositionsAndOpenOrders:{module:"tradeBlock/controllers/shared/tradePositionsAndOpenOrders",immediate:!0,components:{tradePositionsAndOpenOrders:{spec:"tradeBlock/components/specs/shared/assetPositionsAndOpenOrdersEnrichment",module:"tradeBlock/components/shared/tradePositionsAndOpenOrders",model:"tradePositionsAndOpenOrders",modelCleanup:!0}}},equity:{module:"tradeBlock/controllers/equity/equity",immediate:!0},order:{module:"tradeBlock/controllers/order/order",immediate:!0},help:{module:"tradeBlock/controllers/help/help",components:{help:{spec:"tradeBlock/components/specs/shared/help_enrichment",module:"tradeBlock/components/help/help",model:"help",modelCleanup:!0}},immediate:!0}},services:{listAccountsService:{module:"tradeBlock/services/listAccountsService"},tradeEquityServices:{module:"tradeBlock/services/tradeEquityServices"},listAccountBalancesService:{module:"tradeBlock/services/tradeListAccountBalancesService"},listTradeAccountPositions:{module:"tradeBlock/services/listTradeAccountPositions"},help:{module:"tradeBlock/services/help"},tradePositionsAndOpenOrdersServices:{module:"tradeBlock/services/tradePositionsAndOpenOrdersServices"},tradeMarginRequirements:{module:"tradeBlock/services/tradeMarginRequirements"},orderStatusService:{module:"tradeBlock/services/orderStatusService"},orderDetailsService:{module:"tradeBlock/services/orderDetailsService"}},dependencies:{"./css/trade.css":"css"}}});