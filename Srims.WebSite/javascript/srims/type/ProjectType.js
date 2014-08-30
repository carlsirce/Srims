
if (!Srims.type) 
    Ext.namespace('Srims.type');

Srims.type.ProjectType = Ext.data.Record.create([{
    name: 'id',
    type: 'int',
    mapping: 'ID'
}, {
    name: 'name',
    type: 'string',
    mapping: 'Name'
}, {
    name: 'isBudget',
    type: 'boolean',
    mapping: 'IsBudget',
    convert: Boolean.toBoolean
}, {
    name: 'overheadExpenseInRate',
    type: 'int',
    mapping: 'OverheadExpenseInRate'
}, {
    name: 'overheadExpenseOutRate',
    type: 'int',
    mapping: 'OverheadExpenseOutRate'
}, {
    name: 'nameSpell',
    type: 'string',
    mapping: 'NameSpell'
}, {
    name: 'administration',
    type: 'string',
    mapping: 'Administration'
}, {
    name: 'shortName',
    type: 'string',
    mapping: 'ShortName'
}, {
    name: 'code',
    type: 'string',
    mapping: 'Code'
}, {
    name: 'bakCode',
    type: 'string',
    mapping: 'BakCode'
}, {
    name: 'perCode',
    type: 'string',
    mapping: 'PerCode'
}, {
    name: 'isAvailable',
    type: 'boolean',
    mapping: 'IsAvailable',
    convert: Boolean.toBoolean
}, {
    name: 'isExploit',
    type: 'boolean',
    mapping: 'IsExploit',
    convert: Boolean.toBoolean
}, {
    name: 'isHorizontalType',
    type: 'boolean',
    mapping: 'IsHorizontalType',
    convert: Boolean.toBoolean
}, {
    name: 'projectComingFrom',
    type: 'string',
    mapping: 'ProjectComingFrom'
}, {
    name: 'projectRankID',
    type: 'int',
    mapping: 'ProjectRankID'
}, {
    name: 'projectRank',
    type: 'string',
    mapping: 'ProjectRank'
}, {
    name: 'subjectNature',
    type: 'string',
    mapping: 'SubjectNatrue'
}, {
	name: 'managementFeesType',
	type: 'string',
	mapping: 'ManagementFeesType'
},{
    name: 'hasPermission_Show',
    type: 'boolean',
    mapping: 'HasPermission_Show',
    convert: Boolean.toBoolean
}, {
    name: 'canDelete',
    type: 'boolean',
    mapping: 'CanDelete',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Edit',
    type: 'boolean',
    mapping: 'HasPermission_Edit',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Delete',
    type: 'boolean',
    mapping: 'HasPermission_Delete',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_ManageProjectSupportField',
    type: 'boolean',
    mapping: 'HasPermission_ManageProjectSupportField',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_ManageProjectSupportCategory',
    type: 'boolean',
    mapping: 'HasPermission_ManageProjectSupportCategory',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_UploadDocumentModel',
    type: 'boolean',
    mapping: 'HasPermission_UploadDocumentModel',
    convert: Boolean.toBoolean
}, {
    name: 'canShow',
    type: 'boolean',
    mapping: 'CanShow',
    convert: Boolean.toBoolean
}, {
    name: 'canEdit',
    type: 'boolean',
    mapping: 'CanEdit',
    convert: Boolean.toBoolean
}, {
    name: 'canManageProjectSupportField',
    type: 'boolean',
    mapping: 'CanManageProjectSupportField',
    convert: Boolean.toBoolean
}, {
    name: 'canManageProjectSupportCategory',
    type: 'boolean',
    mapping: 'CanManageProjectSupportCategory',
    convert: Boolean.toBoolean
}]);
Srims.data.Entity.apply(Srims.type.ProjectType);
