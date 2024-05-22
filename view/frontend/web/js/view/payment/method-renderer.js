define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'invoicepayment',
                component: 'Lotsofpixels_InvoicePayment/js/view/payment/method-renderer/invoicepayment'
            }
        );
        return Component.extend({});
    }
);