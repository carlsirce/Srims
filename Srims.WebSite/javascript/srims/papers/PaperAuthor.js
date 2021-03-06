
if (!Srims.papers) 
    Ext.namespace("Srims.papers");

Srims.papers.PaperAuthor = Ext.data.Record.create([{
    name: 'id',
    type: 'int',
    mapping: 'ID'
}, {
    name: 'paperID ',
    type: 'int',
    mapping: 'PaperID'
}, {
    name: 'order',
    type: 'int',
    mapping: 'Order'
}, {
    name: 'name',
    type: 'string',
    mapping: 'Name'
}, {
    name: 'englishName',
    type: 'string',
    mapping: 'EnglishName'
}, {
    name: 'expertID',
    type: 'int',
    mapping: 'ExpertID'
}, {
    name: 'expertNumber',
    type: 'string',
    mapping: 'ExpertNumber'
}, {
    name: 'isLinkMan',
    type: 'boolean',
    mapping: 'IsLinkMan',
    convert: Boolean.toBoolean
}])

Srims.data.Entity.apply(Srims.papers.PaperAuthor);
