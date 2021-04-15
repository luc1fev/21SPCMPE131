/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module cardAccountServicing/manifest
 */
define({
    version: 2,
    area: {
        module: 'cardAccountServicingArea/area',
        viewPath: {
            prefix: 'cardAccountServicingArea/views/'
        },
        dependencies: {
            './css/cardAccountServicingArea.css': 'css'
        },
        services: {
            replaceCardService: {
                module: 'cardAccountServicingArea/services/replaceCard'
            }
        },
        controllers: {
            replaceCard: {
                module: 'cardAccountServicingArea/controllers/replaceCard',
                components: {
                    replaceCard: {
                        module: 'cardAccountServicingArea/components/replaceCard',
                        spec: 'bluespec/card_replacement'
                    }
                },
                immediate: true
            }
        }
    }
});