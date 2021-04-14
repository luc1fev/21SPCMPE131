/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module areaName/manifest
 */
define({
    version: 2,
    area: {
        module: 'elasticSearchArea/area',
        viewPath: {
            prefix: 'elasticSearchArea/views/'
        },
        imports: {
            elasticSearch: 'elasticSearch'
        },
        dependencies: {
            './css/elasticSearchArea.css': 'css'
        },
        services: {
            searchContainer: {
                module: 'elasticSearchArea/services/searchContainer'
            }
        },
        controllers: {
            searchContainer: {
                module: 'elasticSearchArea/controllers/searchContainer',
                components: {
                    searchContainer: {
                        module: 'elasticSearchArea/components/searchContainer',
                        spec: 'elasticSearchArea/blue-spec-share/elastic_transaction_search_header'
                    }
                },
                immediate: true
            },
            elasticSearch: {
                block: 'elasticSearch',
                immediate: false
            }
        }
    }
});
