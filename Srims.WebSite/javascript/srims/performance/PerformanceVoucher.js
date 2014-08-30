if (!Srims.performance)
    Ext.namespace('Srims.performance');

Srims.performance.PerformanceVoucher = Ext.data.Record.create([{
    name: 'id',
    type: 'int',
    mapping: 'ID'
}, {
    name: 'accountBookNumber',
    type: 'string',
    mapping: 'AccountBookNumber'
}, {
    name: 'performancePay',
    type: 'int',
    mapping: 'PerformancePay'
}, {
    name: 'totalPerformancePay',
    type: 'int',
    mapping: 'TotalPerformancePay'
}, {
    name: 'allocatedPerformancePay',
    type: 'int',
    mapping: 'AllocatedPerformancePay'
}, {
    name: 'performanceAccountBookNumber',
    type: 'string',
    mapping: 'PerformanceAccountBookNumber'
}, {
    name: 'financeNumber',
    type: 'string',
    mapping: 'FinanceNumber'
}, {
    name: 'isRead',
    type: 'bool',
    mapping: 'IsRead',
    convert: Boolean.toBoolean
}, {
    name: 'overheadExpensesIn',
    type: 'int',
    mapping: 'OverheadExpensesIn'
}, {
    name: 'overheadExpensesOut',
    type: 'int',
    mapping: 'OverheadExpensesOut'
}, {
    name: 'amount',
    type: 'int',
    mapping: 'Amount'
}, {
    name: 'overheadExpenses',
    type: 'int',
    mapping: 'OverheadExpenses'
}, {
    name: 'voucherNumber',
    type: 'string',
    mapping: 'VoucherNumber'
}, {
    name: 'currentStateID',
    type: 'int',
    mapping: 'CurrentStateID'
}, {
    name: 'voucherState',
    type: 'string',
    mapping: 'VoucherState'
}, {
    name: 'financeAllocationDateTime',
    type: 'date',
    mapping: 'FinanceAllocationDateTime'
}, {
    name: 'stateDateTime',
    type: 'date',
    mapping: 'StateDateTime'
}, {
    name: 'stateOperator',
    type: 'string',
    mapping: 'StateOperator'
}, {
    name: 'stateRemark',
    type: 'string',
    mapping: 'StateRemark'
}, {
    name: 'performanceAllocationId',
    type: 'int',
    mapping: 'PerformanceAllocationId'
}, {
    name: 'fundAllocationOverheadExpenses',
    type: 'int',
    mapping: 'FundAllocationOverheadExpenses'
}, {
    name: 'fundAllocationDateTime',
    type: 'date',
    mapping: 'FundAllocationDateTime'
}, {
    name: 'fundAllocationOverheadExpensesIn',
    type: 'int',
    mapping: 'FundAllocationOverheadExpensesIn'
}, {
    name: 'fundAllocationOverheadExpensesOut',
    type: 'int',
    mapping: 'FundAllocationOverheadExpensesOut'
}, {
    name: 'fundAllocationStateDateTime',
    type: 'date',
    mapping: 'FundAllocationStateDateTime'
}, {
    name: 'fundAllocationStateOperator',
    type: 'string',
    mapping: 'FundAllocationStateOperator'
}, {
    name: 'fundAllocationStateRemark',
    type: 'string',
    mapping: 'FundAllocationStateRemark'
}, {
    name: 'fundAllocationState',
    type: 'string',
    mapping: 'FundAllocationState'
}, {
    name: 'projectID',
    type: 'int',
    mapping: 'ProjectID'
}, {
    name: 'projectName',
    type: 'string',
    mapping: 'ProjectName'
}, {
    name: 'projectPrincipal',
    type: 'string',
    mapping: 'ProjectPrincipal'
}, {
    name: 'projectIsSecret',
    type: 'bool',
    mapping: 'ProjectIsSecret',
    convert: Boolean.toBoolean
}, {
    name: 'projectType',
    type: 'string',
    mapping: 'ProjectType'
}, {
    name: 'projectTypePreCode',
    type: 'string',
    mapping: 'ProjectTypePreCode'
}, {
    name: 'financeID',
    type: 'int',
    mapping: 'FinanceID'
}, {
    name: 'financeAmount',
    type: 'int',
    mapping: 'FinanceAmount'
}, {
    name: 'financeReceivedDate',
    type: 'date',
    mapping: 'FinanceReceivedDate'
}, {
    name: 'financeVoucherNumber',
    type: 'string',
    mapping: 'FinanceVoucherNumber'
}, {
    name: 'financeAbstract',
    type: 'string',
    mapping: 'FinanceAbstract'
}, {
    name: 'isBorrow',
    type: 'bool',
    mapping: 'IsBorrow',
    convert: Boolean.toBoolean
}, {
    name: 'userIsExpert',
    type: 'bool',
    mapping: 'UserIsExpert',
    convert: Boolean.toBoolean
}, {
    name: 'fundMemberID',
    type: 'int',
    mapping: 'FundMemberID'
}, {
    name: 'expertID',
    type: 'int',
    mapping: 'ExpertID'
}, {
    name: 'expertName',
    type: 'string',
    mapping: 'ExpertName'
}, {
    name: 'isExpertSecondCollege',
    type: 'string',
    mapping: 'IsExpertSecondCollege',
    convert: Boolean.toBoolean
}, {
    name: 'deparment',
    type: 'string',
    mapping: 'Deparment'
}, {
    name: 'expertCollegeCode',
    type: 'string',
    mapping: 'ExpertCollegeCode'
}, {
    name: 'hasPermission_Show',
    type: 'bool',
    mapping: 'HasPermission_Show',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Edit',
    type: 'bool',
    mapping: 'HasPermission_Edit',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Delete',
    type: 'bool',
    mapping: 'HasPermission_Delete',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Print',
    type: 'bool',
    mapping: 'HasPermission_Print',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_ResetPrint',
    type: 'bool',
    mapping: 'HasPermission_ResetPrint',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_ResetAccountBookNumber',
    type: 'bool',
    mapping: 'HasPermission_ResetAccountBookNumber',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_SignIn',
    type: 'bool',
    mapping: 'HasPermission_SignIn',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_ReturnVoucher',
    type: 'bool',
    mapping: 'HasPermission_ReturnVoucher',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_FinanceAllocate',
    type: 'bool',
    mapping: 'HasPermission_FinanceAllocate',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_CancelFinanceAllocate',
    type: 'bool',
    mapping: 'HasPermission_CancelFinanceAllocate',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_Print',
    type: 'bool',
    mapping: 'HasPermission_Print',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_ResetPrint',
    type: 'bool',
    mapping: 'HasPermission_ResetPrint',
    convert: Boolean.toBoolean
}, {
    name: 'hasPermission_ShowFundAllocation',
    type: 'bool',
    mapping: 'HasPermission_ShowFundAllocation',
    convert: Boolean.toBoolean
}, {
    name: 'canShow',
    type: 'bool',
    mapping: 'CanShow',
    convert: Boolean.toBoolean
}, {
    name: 'canEdit',
    type: 'bool',
    mapping: 'CanEdit',
    convert: Boolean.toBoolean
}, {
    name: 'canDelete',
    type: 'bool',
    mapping: 'CanDelete',
    convert: Boolean.toBoolean
}, {
    name: 'canPrint',
    type: 'bool',
    mapping: 'CanPrint',
    convert: Boolean.toBoolean
}, {
    name: 'canResetPrint',
    type: 'bool',
    mapping: 'CanResetPrint',
    convert: Boolean.toBoolean
}, {
    name: 'canResetAccountBookNumber',
    type: 'bool',
    mapping: 'CanResetAccountBookNumber',
    convert: Boolean.toBoolean
}, {
    name: 'canSignIn',
    type: 'bool',
    mapping: 'CanSignIn',
    convert: Boolean.toBoolean
}, {
    name: 'canReturnVoucher',
    type: 'bool',
    mapping: 'CanReturnVoucher',
    convert: Boolean.toBoolean
}, {
    name: 'canFinanceAllocate',
    type: 'bool',
    mapping: 'CanFinanceAllocate',
    convert: Boolean.toBoolean
}, {
    name: 'canFinanceAllocate',
    type: 'bool',
    mapping: 'CanFinanceAllocate',
    convert: Boolean.toBoolean
}, {
    name: 'canCancelFinanceAllocate',
    type: 'bool',
    mapping: 'CanCancelFinanceAllocate',
    convert: Boolean.toBoolean
}, {
    name: 'canResetPrint',
    type: 'bool',
    mapping: 'CanResetPrint',
    convert: Boolean.toBoolean
}, {
    name: 'canShowFundAllocation',
    type: 'bool',
    mapping: 'CanShowFundAllocation',
    convert: Boolean.toBoolean
}, {
    name: 'overheadExpensesExpert',
    type: 'int',
    mapping: 'OverheadExpensesExpert'
}, {
    name: 'overheadExpensesExpertRest',
    type: 'int',
    mapping: 'OverheadExpensesExpertRest'
}, {
    name: 'performanceAllocationExpertTotal',
    type: 'int',
    mapping: 'PerformanceAllocationExpertTotal'
}, {
    name: 'performanceAllocationArrivedPerformance',
    type: 'int',
    mapping: 'PerformanceAllocationArrivedPerformance'
}
]);

Srims.data.Entity.apply(Srims.performance.PerformanceVoucher);