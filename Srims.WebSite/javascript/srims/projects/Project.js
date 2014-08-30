if (!Srims.projects)
    Ext.namespace('Srims.projects');

Srims.projects.Project = Ext.data.Record.create([{
    name: 'id',
    type: 'int',
    mapping: 'ID'
}, {
    name: 'name',
    type: 'string',
    mapping: 'Name'
}, {
    name: 'outsourcingAlreadyAmountString',
    type: 'string',
    mapping: 'OutsourcingAlreadyAmountString'
}, {
    name: 'trueOverheadExpensesAlreadyIn',
    type: 'int',
    mapping: 'TrueOverheadExpensesAlreadyIn'
}, {
    name: 'outsourcingPlanAmountString',
    type: 'string',
    mapping: 'OutsourcingPlanAmountString'
}, {
    name: 'indirectCosts',
    type: 'int',
    mapping: 'IndirectCosts'
}, {
    name: 'projectPerformancePay',
    type: 'int',
    mapping: 'ProjectPerformancePay'
}, {
    name: 'recoveryvoucherNumber',
    type: 'string',
    mapping: 'RecoveryvoucherNumber'
}, {
    name: 'roverheadExpensesAmount',
    type: 'string',
    mapping: 'RoverheadExpensesAmount'
}, {
    name: 'recoveryAmount',
    type: 'string',
    mapping: 'RecoveryAmount'
}, {
    name: 'rremark',
    type: 'string',
    mapping: 'Rremark'
}, {
    name: 'recoveryPrintState',
    type: 'string',
    mapping: 'RecoveryPrintState'
}, {
    name: 'recoveryPrintDate',
    type: 'string',
    mapping: 'RecoveryPrintDate'
},
{
    name: 'number',
    type: 'string',
    mapping: 'Number'
}, {
    name: 'state',
    type: 'string',
    mapping: 'State'
}, {
    name: 'principal',
    type: 'string',
    mapping: 'Principal'
}, {
    name: 'principalNumber',
    type: 'string',
    mapping: 'PrincipalNumber'
}, {
    name: 'principalEmail',
    type: 'string',
    mapping: 'PrincipalEmail'
}, {
    name: 'isPrincipalSecondCollege',
    type: 'string',
    mapping: 'IsPrincipalSecondCollege',
    convert: Boolean.toBoolean
}, {
    name: 'principalCollege',
    type: 'string',
    mapping: 'PrincipalCollege'
}, {
    name: 'principalId',
    type: 'string',
    mapping: 'PrincipalID'
}, {
    name: 'level',
    type: 'string',
    mapping: 'Level'
}, {
    name: 'subjectName',
    type: 'string',
    mapping: 'SubjectName'
}, {
    name: 'firstLevelSubjectId',
    type: 'string',
    mapping: 'FirstLevelSubjectID'
}, {
    name: 'firstLevelSubjectName',
    type: 'string',
    mapping: 'FirstLevelSubjectName'
}, {
    name: 'secondLevelSubjectId',
    type: 'string',
    mapping: 'SecondLevelSubjectID'
}, {
    name: 'secondLevelSubjectName',
    type: 'string',
    mapping: 'SecondLevelSubjectName'
}, {
    name: 'researchType',
    type: 'string',
    mapping: 'ResearchType'
}, {
    name: 'cooperationType',
    type: 'string',
    mapping: 'CooperationType'
}, {
    name: 'startDate',
    type: 'date',
    mapping: 'StartDate'
}, {
    name: 'endDate',
    type: 'date',
    mapping: 'EndDate'
}, {
    name: 'isSecret',
    type: 'boolean',
    mapping: 'IsSecret',
    convert: Boolean.toBoolean
}, {
    name: 'baseId',
    type: 'string',
    mapping: 'BaseID'
}, {
    name: 'baseName',
    type: 'string',
    mapping: 'BaseName'
}, {
    name: 'principalDelegate',
    type: 'string',
    mapping: 'PrincipalDelegate'
}, {
    name: 'principalDelegateId',
    type: 'string',
    mapping: 'PrincipalDelegateID'
}, {
    name: 'creator',
    type: 'string',
    mapping: 'Creator'
}, {
    name: 'createDate',
    type: 'date',
    mapping: 'CreateDate'
}, {
    name: 'corporationPlace',
    type: 'string',
    mapping: 'CorporationPlace'
}, {
    name: 'remark',
    type: 'string',
    mapping: 'Remark'
}, {
    name: 'taskComingFrom',
    type: 'string',
    mapping: 'TaskComingFrom'
}, {
    name: 'isHorizontal',
    type: 'boolean',
    mapping: 'IsHorizontal',
    convert: Boolean.toBoolean
}, {
    name: 'rankId',
    type: 'int',
    mapping: 'RankID'
}, {
    name: 'rankName',
    type: 'string',
    mapping: 'RankName'
}, {
    name: 'typeId',
    type: 'int',
    mapping: 'TypeID'
}, {
    name: 'typeName',
    type: 'string',
    mapping: 'TypeName'
}, {
    name: 'typeShortName',
    type: 'string',
    mapping: 'TypeShortName'
}, {
    name: 'supportCategoryId',
    type: 'int',
    mapping: 'SupportCategoryID'
}, {
    name: 'supportCategoryName',
    type: 'string',
    mapping: 'SupportCategoryName'
}, {
    name: 'supportFieldId',
    type: 'int',
    mapping: 'SupportFieldID'
}, {
    name: 'supportFieldName',
    type: 'string',
    mapping: 'SupportFieldName'
}, {
    name: 'supportSubFieldId',
    type: 'int',
    mapping: 'SupportSubFieldID'
}, {
    name: 'supportSubFieldName',
    type: 'string',
    mapping: 'SupportSubFieldName'
}, {
    name: 'accountBookNumber',
    type: 'string',
    mapping: 'AccountBookNumber'
}, {
    name: 'fundAlreadyHardware',
    type: 'int',
    mapping: 'FundAlreadyHardware'
}, {
    name: 'fundAlreadyIn',
    type: 'int',
    mapping: 'FundAlreadyIn'
}, {
    name: 'fundAlreadyOut',
    type: 'int',
    mapping: 'FundAlreadyOut'
}, {
    name: 'fundAlreadyTotal',
    type: 'int',
    mapping: 'FundAlreadyTotal'
}, {
    name: 'fundContract',
    type: 'int',
    mapping: 'FundContract'
}, {
    name: 'fundFrom',
    type: 'string',
    mapping: 'FundFrom'
}, {
    name: 'fundFromUnit',
    type: 'string',
    mapping: 'FundFromUnit'
}, {
    name: 'fundFromUnitAddress',
    type: 'string',
    mapping: 'FundFromUnitAddress'
}, {
    name: 'fundPlanHardware',
    type: 'int',
    mapping: 'FundPlanHardware'
}, {
    name: 'allocatedPerformance',
    type: 'int',
    mapping: 'AllocatedPerformance'
}, {
    name: 'fundPlanIn',
    type: 'int',
    mapping: 'FundPlanIn'
}, {
    name: 'fundPlanOut',
    type: 'int',
    mapping: 'FundPlanOut'
}, {
    name: 'fundReceived',
    type: 'int',
    mapping: 'FundReceived'
}, {
    name: 'fundTotal',
    type: 'int',
    mapping: 'FundTotal'
}, {
    name: 'fundCanDescend',
    type: 'int',
    mapping: 'FundCanDescend'
}, {
    name: 'overheadExpenseInTotal',
    type: 'int',
    mapping: 'OverheadExpenseInTotal'
}, {
    name: 'overheadExpenseOutTotal',
    type: 'int',
    mapping: 'OverheadExpenseOutTotal'
}, {
    name: 'overheadExpensesAlreadyIn',
    type: 'int',
    mapping: 'OverheadExpensesAlreadyIn'
}, {
    name: 'overheadExpensesAlreadyOut',
    type: 'int',
    mapping: 'OverheadExpensesAlreadyOut'
}, {
    name: 'overheadExpensesInStandard',
    type: 'int',
    mapping: 'OverheadExpensesInStandard'
}, {
    name: 'performancePayStandard',
    type: 'int',
    mapping: 'PerformancePayStandard'
}, {
    name: 'fundManageProportion',
    type: 'int',
    mapping: 'FundManageProportion'	//国家规定管理费比例
}, {
    name: 'performancePay',
    type: 'int',
    mapping: 'PerformancePay'//校内绩效工资
}, {
    name: 'performancePayAlready',
    type: 'int',
    mapping: 'PerformancePayAlready'//已分配绩效工资
}, {
    name: 'receivedOverheadExpenses',
    type: 'int',
    mapping: 'ReceivedOverheadExpenses'	//追缴单-已收管理费
}, {
    name: 'overheadExpensesAmount',
    type: 'int',
    mapping: 'OverheadExpensesAmount'	//追缴单-应收管理费
}, {
    name: 'recoveryAmount',
    type: 'int',
    mapping: 'RecoveryAmount'	//追缴金额 
}, {
    name: 'printDateTime',
    type: 'string',
    mapping: 'PrintDateTime'	//追缴单-打印时间
}, {
    name: 'isPrint',
    type: 'string',
    mapping: 'IsPrint'	//追缴单-是否已打印
}, {
    name: 'equipmentCost',
    type: 'int',
    mapping: 'EquipmentCost'
}, {
    name: 'borrowAmount',
    type: 'int',
    mapping: 'BorrowAmount'
}, {
    name: 'returnAmount',
    type: 'int',
    mapping: 'ReturnAmount'
}, {
    name: 'projectAccountNumber',
    type: 'string',
    mapping: 'ProjectAccountNumber'
}, {
    name: 'hasPermission_Edit',
    type: 'boolean',
    mapping: 'HasPermission_Edit',
    convert: Boolean.toBoolean
}, {
    name: 'canEdit',
    type: 'boolean',
    mapping: 'CanEdit',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Show',
    type: 'boolean',
    mapping: 'HasPermission_Show',
    convert: Boolean.toBoolean
}, {
    name: 'canShow',
    type: 'boolean',
    mapping: 'CanShow',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Delete',
    type: 'boolean',
    mapping: 'HasPermission_Delete',
    convert: Boolean.toBoolean
}, {
    name: 'canDelete',
    type: 'boolean',
    mapping: 'CanDelete',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_WithDraw',
    type: 'boolean',
    mapping: 'HasPermission_WithDraw',
    convert: Boolean.toBoolean
}, {
    name: 'canWithDraw',
    type: 'boolean',
    mapping: 'CanWithDraw',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Terminate',
    type: 'boolean',
    mapping: 'HasPermission_Terminate',
    convert: Boolean.toBoolean
}, {
    name: 'canTerminate',
    type: 'boolean',
    mapping: 'CanTerminate',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_EditProjectMember',
    type: 'boolean',
    mapping: 'HasPermission_EditProjectMember',
    convert: Boolean.toBoolean
}, {
    name: 'canEdit_ProjectMember',
    type: 'boolean',
    mapping: 'CanEdit_ProjectMember',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_ShowProejectMember',
    type: 'boolean',
    mapping: 'HasPermission_ShowProejectMember',
    convert: Boolean.toBoolean
}, {
    name: 'canShow_ProjectMember',
    type: 'boolean',
    mapping: 'CanShow_ProjectMember',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_EditProjectPayPlanItem',
    type: 'boolean',
    mapping: 'HasPermission_EditProjectPayPlanItem',
    convert: Boolean.toBoolean
}, {
    name: 'canEdit_ProjectPayPlanItem',
    type: 'boolean',
    mapping: 'CanEdit_ProjectPayPlanItem',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_ShowProejectPayPlanItem',
    type: 'boolean',
    mapping: 'HasPermission_ShowProejectPayPlanItem',
    convert: Boolean.toBoolean
}, {
    name: 'canShow_ProjectPayPlanItem',
    type: 'boolean',
    mapping: 'CanShow_ProjectPayPlanItem',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_EditProjectContract',
    type: 'boolean',
    mapping: 'HasPermission_EditProjectContract',
    convert: Boolean.toBoolean
}, {
    name: 'canEdit_ProjectContract',
    type: 'boolean',
    mapping: 'CanEdit_ProjectContract',
    convert: Boolean.toBoolean
}, {
    name: 'canEdit_ProjectMainContract',
    type: 'boolean',
    mapping: 'CanEdit_ProjectMainContract',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_ShowProejectContract',
    type: 'boolean',
    mapping: 'HasPermission_ShowProejectContract',
    convert: Boolean.toBoolean
}, {
    name: 'canShow_ProjectContract',
    type: 'boolean',
    mapping: 'CanShow_ProjectContract',
    convert: Boolean.toBoolean
}, {
    name: 'canCensor_ProjectContract',
    type: 'boolean',
    mapping: 'CanCensor_ProjectContract',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_EditProjectDoucment',
    type: 'boolean',
    mapping: 'HasPermission_EditProjectDoucment',
    convert: Boolean.toBoolean
}, {
    name: 'canEdit_ProjectDocument',
    type: 'boolean',
    mapping: 'CanEdit_ProjectDocument',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_ShowProejectDocument',
    type: 'boolean',
    mapping: 'HasPermission_ShowProejectDocument',
    convert: Boolean.toBoolean
}, {
    name: 'canShow_ProjectDocument',
    type: 'boolean',
    mapping: 'CanShow_ProjectDocument',
    convert: Boolean.toBoolean
}, {
    name: 'canCensor_ProjectDocument',
    type: 'boolean',
    mapping: 'CanCensor_ProjectDocument',
    convert: Boolean.toBoolean
}, {
    name: 'canRequire_ProjectDocument',
    type: 'boolean',
    mapping: 'CanRequire_ProjectDocument',
    convert: Boolean.toBoolean
}, {
    name: 'canSubmitStart',
    type: 'boolean',
    mapping: 'CanSubmitStart',
    convert: Boolean.toBoolean
}, {
    name: 'canSubmitEnd',
    type: 'boolean',
    mapping: 'CanSubmitEnd',
    convert: Boolean.toBoolean
}, {
    name: 'canUndoStart',
    type: 'boolean',
    mapping: 'CanUndoStart',
    convert: Boolean.toBoolean
}, {
    name: 'canUndoEnd',
    type: 'boolean',
    mapping: 'CanUndoEnd',
    convert: Boolean.toBoolean
}, {
    name: 'canCensorStart',
    type: 'boolean',
    mapping: 'CanCensorStart',
    convert: Boolean.toBoolean
}, {
    name: 'canCensorEnd',
    type: 'boolean',
    mapping: 'CanCensorEnd',
    convert: Boolean.toBoolean
}, {
    name: 'canSetDelegatePrincipal',
    type: 'boolean',
    mapping: 'CanSetDelegatePrincipal',
    convert: Boolean.toBoolean
}, {
    name: 'canClearDelegatePrincipal',
    type: 'boolean',
    mapping: 'CanClearDelegatePrincipal',
    convert: Boolean.toBoolean
}, {
    name: 'canClearProjectAccountBookNumber',
    type: 'boolean',
    mapping: 'CanClearProjectAccountBookNumber',
    convert: Boolean.toBoolean
}, {
    name: 'canCompleteIn',
    type: 'boolean',
    mapping: 'CanCompleteIn',
    convert: Boolean.toBoolean
}, {
    name: 'campusIndirectCosts',
    type: 'int',
    mapping: 'CampusIndirectCosts'
}, {
    name: 'overheadExpenseMiddleTotal',
    type: 'int',
    mapping: 'OverheadExpenseMiddleTotal'
}, {
    name: 'overheadExpenseExpertTotal',
    type: 'int',
    mapping: 'OverheadExpenseExpertTotal'
}

]);
Srims.data.Entity.apply(Srims.projects.Project);