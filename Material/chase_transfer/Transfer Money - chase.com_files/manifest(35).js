define({version:2,area:{module:"insights/area",viewPath:{prefix:"insights/views/"},dependencies:{"./css/insights.css":"css"},services:{insights:{module:"insights/services/service"},someService:{module:"insights/services/request"}},controllers:{index:{module:"insights/controllers/index",components:{someComponent:{module:"insights/components/component",spec:"insights/components/specs/spec"}},immediate:!0},summary:{module:"insights/controllers/summary",components:{layout:{module:"insights/components/layout",spec:"insights/components/specs/layout",model:"layout",modelCleanup:!0},cashFlow:{module:"insights/components/cashFlow",spec:"insights/components/specs/cashFlow",model:"cashFlow",modelCleanup:!0},cashBalance:{module:"insights/components/cashBalance",spec:"insights/components/specs/cashBalance",model:"cashBalance",modelCleanup:!0}},immediate:!0},transactions:{module:"insights/controllers/transactions",components:{transactionsHeader:{module:"insights/components/transactionsHeader",spec:"insights/components/specs/transactionsHeader",model:"transactionsHeader",modelCleanup:!0},transactionsFilter:{module:"insights/components/transactionsFilter",spec:"insights/components/specs/transactionsFilter",model:"transactionsFilter",modelCleanup:!0},transactionsActivity:{module:"insights/components/transactionsActivity",spec:"insights/components/specs/transactionsActivity",model:"transactionsActivity",modelCleanup:!0}},immediate:!0}}}});