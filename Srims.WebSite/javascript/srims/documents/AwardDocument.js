
if (!Srims.documents) 
    Ext.namespace('Srims.documents');

Srims.documents.AwardDocument = Ext.data.Record.create([{
    name: 'id',
    type: 'int',
    mapping: 'ID'
}, {
    name: 'authorName',
    type: 'string',
    mapping: 'AuthorName'
}, {
    name: 'authorId',
    type: 'string',
    mapping: 'AuthorId'
}, {
    name: 'awardName',
    type: 'string',
    mapping: 'AwardName'
}, {
    name: 'censor',
    type: 'string',
    mapping: 'Censor'
}, {
    name: 'awardFirstWinnerName',
    type: 'string',
    mapping: 'AwardFirstWinnerName'
}, {
    name: 'censorDateTime',
    type: 'date',
    mapping: 'CensorDateTime'
}, {
    name: 'resource',
    type: 'string',
    mapping: 'Resource'
}, {
    name: 'name',
    type: 'string',
    mapping: 'Name'
}, {
    name: 'state',
    type: 'string',
    mapping: 'State'
}, {
    name: 'submitDateTime',
    type: 'date',
    mapping: 'SubmitDateTime'
}, {
    name: 'hasPermission_Delete',
    type: 'boolean',
    mapping: 'HasPermission_Delete',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_CensorPass',
    type: 'boolean',
    mapping: 'HasPermission_CensorPass',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_CensorReject',
    type: 'boolean',
    mapping: 'HasPermission_CensorReject',
    convert: Boolean.toBoolean
}, {
    name: 'canDelete',
    type: 'boolean',
    mapping: 'CanDelete',
    convert: Boolean.toBoolean
}, {
    name: 'canCensorReject',
    type: 'boolean',
    mapping: 'CanCensorReject',
    convert: Boolean.toBoolean
}, {
    name: 'canCensorPass',
    type: 'boolean',
    mapping: 'CanCensorPass',
    convert: Boolean.toBoolean
}])

Srims.data.Entity.apply(Srims.documents.AwardDocument);
