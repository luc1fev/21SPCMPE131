/**
 * @copyright &copy; JPMorgan Chase & Co. All rights reserved.
 * @module flyout/manifest
 * @version 2.2.1
 */
define({
    version: 2,
    controller: {
        module: 'flyout/controller',
        viewPath: {
            prefix: 'flyout/view/'
        },
        components: {
            flyout: {
                module: 'flyout/component/flyout',
                spec: 'flyout/spec/flyoutSpec',
                model: 'flyout',
                modelCleanup: true
            }
        }
    }
});
