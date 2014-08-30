if (!Srims.performance)
    Ext.namespace('Srims.performance');

Srims.performance.PerformanceAllocation = Ext.data.Record.create([{
    name: 'id',
    type: 'int',
    mapping: 'ID'
}, {
    name: 'projectNumber',
    type: 'string',
    mapping: 'ProjectNumber'
}, {
    name: 'canAllocate',
    type: 'bool',
    mapping: 'CanAllocate',
    convert: Boolean.toBoolean
}, {
    name: 'fundAllocationIn',
    type: 'int',
    mapping: 'FundAllocationIn'
}, {
    name: 'indirectCosts',
    type: 'int',
    mapping: 'IndirectCosts'
}, {
    name: 'projectPerformancePay',
    type: 'int',
    mapping: 'ProjectPerformancePay'
}, {
    name: 'allocationDateTime',
    type: 'date',
    mapping: 'AllocationDateTime'
}, {
    name: 'performanceTotal',
    type: 'int',
    mapping: 'PerformanceTotal'
}, {
    name: 'performancePay',
    type: 'int',
    mapping: 'PerformancePay'
}, {
    name: 'arrivedPerformance',
    type: 'int',
    mapping: 'ArrivedPerformance'
}, {
    name: 'allocatedPerformance',
    type: 'int',
    mapping: 'AllocatedPerformance'
}, {
    name: 'state',
    type: 'string',
    mapping: 'CurrentState'
}, {
    name: 'operator',
    type: 'string',
    mapping: 'Operator'
}, {
    name: 'dateTime',
    type: 'date',
    mapping: 'DateTime'
}, {
    name: 'remark',
    type: 'string',
    mapping: 'Remark'
}, {
    name: 'projectID',
    type: 'int',
    mapping: 'ProjectID'
}, {
    name: 'projectName',
    type: 'string',
    mapping: 'ProjectName'
}, {
    name: 'projectPricinpalName',
    type: 'string',
    mapping: 'ProjectPricinpalName'
}, {
    name: 'typeName',
    type: 'string',
    mapping: 'TypeName'
}, {
    name: 'isCancel',
    type: 'bool',
    mapping: 'IsCancel',
    convert: Boolean.toBoolean
},{
    name: 'isHorizontal',
    type: 'bool',
    mapping: 'IsHorizontal',
    convert: Boolean.toBoolean
}, {
    name: 'performanceID',
    type: 'int',
    mapping: 'performanceID'
}, {
    name: 'hasPermission_Allocation',
    type: 'bool',
    mapping: 'HasPermission_Allocation',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Canel',
    type: 'bool',
    mapping: 'HasPermission_Canel',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Censor',
    type: 'bool',
    mapping: 'HasPermission_Censor',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Submit',
    type: 'bool',
    mapping: 'HasPermission_Submit',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_UndoSubmit',
    type: 'bool',
    mapping: 'HasPermission_UndoSubmit',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Correct',
    type: 'bool',
    mapping: 'HasPermission_Correct',
    convert: Boolean.toBoolean
}, {
    name: 'canAllocation',
    type: 'bool',
    mapping: 'CanAllocation',
    convert: Boolean.toBoolean
}, {
    name: 'canCancel',
    type: 'bool',
    mapping: 'CanCancel',
    convert: Boolean.toBoolean
}, {
    name: 'canCensorPass',
    type: 'bool',
    mapping: 'CanCensorPass',
    convert: Boolean.toBoolean
}, {
    name: 'canCensorReject',
    type: 'bool',
    mapping: 'CanCensorReject',
    convert: Boolean.toBoolean
}, {
    name: 'canSubmit',
    type: 'bool',
    mapping: 'CanSubmit',
    convert: Boolean.toBoolean
}, {
    name: 'canUndoSubmit',
    type: 'bool',
    mapping: 'CanUndoSubmit',
    convert: Boolean.toBoolean
}, {
    name: 'canCorrect',
    type: 'bool',
    mapping: 'CanCorrect',
    convert: Boolean.toBoolean
}, {
    name: 'canAllocationPerformancePay',
    type: 'bool',
    mapping: 'CanAllocationPerformancePay',
    convert: Boolean.toBoolean
}, {
    name: 'canChangePerformanceAmount',
    type: 'bool',
    mapping: 'CanChangePerformanceAmount',
    convert: Boolean.toBoolean
}, {
    name: 'arrivedOverheadexpensesExpert',
    type: 'int',
    mapping: 'ArrivedOverheadexpensesExpert',
}, {
    name: 'expertIndirectFee',
    type: 'int',
    mapping: 'ExpertIndirectFee',
}
]);

    Srims.data.Entity.apply(Srims.performance.PerformanceAllocation);