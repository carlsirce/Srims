
if (!Srims.papers)
    Ext.namespace("Srims.papers");

Srims.papers.Paper = Ext.data.Record.create([{
    name: 'id',
    type: 'int',
    mapping: 'ID'
}, {
    name: 'name',
    type: 'string',
    mapping: 'Name'
}, {
    name: 'influenceFactorOfPaper',
    type: 'int',
    mapping: 'InfluenceFactorOfPaper'
}, {
    name: 'type',
    type: 'string',
    mapping: 'Type'
}, {
    name: 'citeFrequencyOfPaper',
    type: 'int',
    mapping: 'CiteFrequencyOfPaper'
}, {
    name: 'publishYear',
    type: 'int',
    mapping: 'PublishYear'
}, {
    name: 'publishDate',
    type: 'string',
    mapping: 'PublishDate'
}, {
    name: 'documentNumber',
    type: 'string',
    mapping: 'DocumentNumber'
}, {
    name: 'volume',
    type: 'string',
    mapping: 'Volume'
}, {
    name: 'startPage',
    type: 'int',
    mapping: 'StartPage'
}, {
    name: 'endPage',
    type: 'int',
    mapping: 'EndPage'
}, {
    name: 'pages',
    type: 'int',
    mapping: 'Pages'
}, {
    name: 'subAirer',
    type: 'int',
    mapping: 'SubAirer'
}, {
    name: 'authorKeyWord',
    type: 'string',
    mapping: 'AuthorKeyWord'
}, {
    name: 'keyWord',
    type: 'string',
    mapping: 'KeyWord'
}, {
    name: 'abstract',
    type: 'string',
    mapping: 'Abstract'
}, {
    name: 'linkManAddress',
    type: 'string',
    mapping: 'LinkManAddress'
}, {
    name: 'linkManEmail',
    type: 'string',
    mapping: 'LinkManEmail'
}, {
    name: 'linkManSignUnit',
    type: 'string',
    mapping: 'LinkManSignUnit'
}, {
    name: 'firstAuthorSignUnit',
    type: 'string',
    mapping: 'FirstAuthorSignUnit'
}, {
    name: 'signOrder',
    type: 'int',
    mapping: 'SignOrder'
}, {
    name: 'lab',
    type: 'string',
    mapping: 'Lab'
}, {
    name: 'isiUniqueArticleIdentifier',
    type: 'string',
    mapping: 'ISIUniqueArticleIdentifier'
}, {
    name: 'remark',
    type: 'string',
    mapping: 'Remark'
}, {
    name: 'magazineID',
    type: 'int',
    mapping: 'MagazineID'
}, {
    name: 'fullName',
    type: 'string',
    mapping: 'FullName'
}, {
    name: 'shortName',
    type: 'string',
    mapping: 'ShortName'
}, {
    name: 'issn',
    type: 'string',
    mapping: 'ISSN'
}, {
    name: 'subjectRank',
    type: 'string',
    mapping: 'SubjectRank'
}, {
    name: 'subjectClass',
    type: 'string',
    mapping: 'SubjectClass'
}, {
    name: 'publishType',
    type: 'string',
    mapping: 'PublishType'
}, {
    name: 'language',
    type: 'string',
    mapping: 'Language'
}, {
    name: 'collegeID',
    type: 'int',
    mapping: 'CollegeID'
}, {
    name: 'collegeName',
    type: 'string',
    mapping: 'CollegeName'
}, {
    name: 'firstAuthorID',
    type: 'int',
    mapping: 'FirstAuthorID'
}, {
    name: 'firstAuthorName',
    type: 'string',
    mapping: 'FirstAuthorName'
}, {
    name: 'linkManID',
    type: 'int',
    mapping: 'LinkManID'
}, {
    name: 'linkManName',
    type: 'string',
    mapping: 'LinkManName'
}, {
    name: 'authors',
    type: 'string',
    mapping: 'Authors'
}, {
    name: 'indexed',
    type: 'string',
    mapping: 'Indexed'
}, {
    name: 'indexedString',
    type: 'string',
    mapping: 'IndexedString'
}, {
    name: 'resourceName',
    type: 'string',
    mapping: 'ResourceName'
}, {
    name: 'hasPermission_Show',
    type: 'boolean',
    mapping: 'HasPermission_Show',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Edit',
    type: 'boolean',
    mapping: 'HasPermission_Edit',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_EditPaperAuhtor',
    type: 'boolean',
    mapping: 'HasPermission_EditPaperAuhtor',
    convert: Boolean.toBoolean
}, {
    name: 'canEdit',
    type: 'boolean',
    mapping: 'CanEdit',
    convert: Boolean.toBoolean
}, {
    name: 'canEditPaperAuthor',
    type: 'boolean',
    mapping: 'CanEditPaperAuthor',
    convert: Boolean.toBoolean
}, {
    name: 'canShow',
    type: 'boolean',
    mapping: 'CanShow',
    convert: Boolean.toBoolean
}]);
    Srims.data.Entity.apply(Srims.papers.Paper);

