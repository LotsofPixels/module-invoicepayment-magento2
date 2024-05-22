<?php

declare(strict_types=1);

namespace Lotsofpixels\InvoicePayment\Model;

/**
 * Pay In Store payment method model
 */
class PaymentMethod extends \Magento\Payment\Model\Method\AbstractMethod
{
    /**
     * Payment code
     *
     * @var string
     */
    protected $_code = 'invoicepayment';

    protected $_canAuthorize = 'true';
}