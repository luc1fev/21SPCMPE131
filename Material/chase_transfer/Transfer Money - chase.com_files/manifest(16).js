define({version:2,area:{module:"accountOpening/area",viewPath:{prefix:"accountOpening/view/"},dependencies:{"./css/accountOpening.css":"css"},controllers:{product:{module:"accountOpening/controller/product",components:{redeemOffer:{module:"accountOpening/component/redeemOffer",spec:"accountOpening/spec/product_information"},product:{module:"accountOpening/component/product",spec:"accountOpening/spec/product_information"},frequentlyAskedQuestions:{module:"accountOpening/component/frequentlyAskedQuestions",spec:"accountOpening/spec/product_information"},details:{module:"accountOpening/component/details",spec:"accountOpening/spec/product_information"},compare:{module:"accountOpening/component/compare",spec:"accountOpening/spec/product_information"},breadCrumb:{module:"accountOpening/component/breadCrumb",spec:"bluespec/product_shopping_breadcrumb"},questionnaireResults:{module:"accountOpening/component/questionnaireResults",spec:"accountOpening/spec/product_information"}},immediate:!0},productShoppingAds:{module:"accountOpening/controller/productShoppingAds",immediate:!0},widget:{module:"accountOpening/controller/widget",components:{hero:{module:"accountOpening/component/identifiers/hero",spec:"accountOpening/spec/product_information"},navigation:{module:"accountOpening/component/identifiers/navigation",spec:"accountOpening/spec/product_information"},info:{module:"accountOpening/component/identifiers/info",spec:"accountOpening/spec/product_information"},advisory:{module:"accountOpening/component/identifiers/advisory",spec:"accountOpening/spec/product_information"},column:{module:"accountOpening/component/identifiers/column",spec:"accountOpening/spec/product_information"},footnotes:{module:"accountOpening/component/identifiers/footnotes",spec:"accountOpening/spec/product_information"},adSlot:{module:"accountOpening/component/identifiers/footnotes",spec:"accountOpening/spec/product_information"},explore:{module:"accountOpening/component/identifiers/explore",spec:"accountOpening/spec/product_information"},compareAll:{module:"accountOpening/component/identifiers/compareAll",spec:"accountOpening/spec/product_information"},productFinder:{module:"accountOpening/component/identifiers/productFinder",spec:"accountOpening/spec/product_information"}},immediate:!0}},services:{productInfoService:{module:"accountOpening/service/productInfo"},targetIntegrationService:{module:"accountOpening/service/targetIntegrationService"}}}});