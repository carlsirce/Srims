
if (!Srims.fund) 
    Ext.namespace('Srims.fund');

Srims.fund.Finance = Ext.data.Record.create([{
    name: 'id',
    type: 'int',
    mapping: 'ID'
}, {
    name: 'receivedDate',
    type: 'date',
    mapping: 'ReceivedDate'
}, {
    name: 'voucherNumber',
    type: 'string',
    mapping: 'VoucherNumber'
}, {
    name: 'isInvoiced',
    type: 'bool',
    mapping: 'IsInvoiced',
    convert: Boolean.toBoolean
}, {
    name: 'invoiceType',
    type: 'string',
    mapping: 'InvoiceType'
}, {
    name: 'invoiceTime',
    type: 'date',
    mapping: 'InvoiceTime'
}, {
    name: 'invoiceNumber',
    type: 'string',
    mapping: 'InvoiceNumber'
}, {
    name: 'amount',
    type: 'int',
    mapping: 'Amount'
}, {
    name: 'descendAmount',
    type: 'int',
    mapping: 'DescendAmount'
}, {
    name: 'abstract',
    type: 'string',
    mapping: 'Abstract'
}, {
    name: 'remarks',
    type: 'string',
    mapping: 'Remarks'
}, {
    name: 'hasPermission_Show',
    type: 'bool',
    mapping: 'HasPermission_Show',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Delete',
    type: 'bool',
    mapping: 'HasPermission_Delete',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Descend',
    type: 'bool',
    mapping: 'HasPermission_Descend',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Invoice',
    type: 'bool',
    mapping: 'HasPermission_Invoice',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_DeleteInvoice',
    type: 'bool',
    mapping: 'HasPermission_DeleteInvoice',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_EditInvoice',
    type: 'bool',
    mapping: 'HasPermission_EditInvoice',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermisson_ShowVouchers',
    type: 'bool',
    mapping: 'HasPermisson_ShowVouchers',
    convert: Boolean.toBoolean
}, {
    name: 'canShow',
    type: 'bool',
    mapping: 'CanShow',
    convert: Boolean.toBoolean
}, {
    name: 'canDelete',
    type: 'bool',
    mapping: 'CanDelete',
    convert: Boolean.toBoolean
}, {
    name: 'canDescend',
    type: 'bool',
    mapping: 'CanDescend',
    convert: Boolean.toBoolean
}, {
    name: 'canInvoice',
    type: 'bool',
    mapping: 'CanInvoice',
    convert: Boolean.toBoolean
}, {
    name: 'canDeleteInvoice',
    type: 'bool',
    mapping: 'CanDeleteInvoice',
    convert: Boolean.toBoolean
}, {
    name: 'canEditInvoice',
    type: 'bool',
    mapping: 'CanEditInvoice',
    convert: Boolean.toBoolean
}, {
    name: 'canShowVouchers',
    type: 'bool',
    mapping: 'CanShowVouchers',
    convert: Boolean.toBoolean
}]);

Srims.data.Entity.apply(Srims.fund.Finance);