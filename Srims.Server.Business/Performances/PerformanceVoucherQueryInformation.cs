﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MIS.Common.Query;
using MIS.Common;
using Srims.Server.Business.Projects;
using Srims.Server.Business.Fund;

namespace Srims.Server.Business.Performances
{
    /// <summary>
    /// 绩效凭单查询信息
    /// </summary>
    public class PerformanceVoucherQueryInformation : QueryInformation
    {
        /// <summary>
        /// 取得或设置是否横向项目
        /// </summary>
        public bool? IsHorizontal { get; set; }
        /// <summary>
        /// 取得或设置查询的凭单号
        /// </summary>
        public string VoucherNumber { get; set; }
        /// <summary>
        /// 取得或设置查询的专家的姓名或姓名首字母
        /// </summary>
        public string ExpertNameOrNameSpell { get; set; }
        /// <summary>
        /// 取得或设置查询的项目的名称或名称首字母
        /// </summary>
        public string ProjectNameOrNameSpell { get; set; }
        /// <summary>
        /// 凭单的状态
        /// </summary>
        public PerformanceVoucherState[] VoucherState { get; set; }
        /// <summary>
        /// 所属学院 
        /// </summary>
        public string College { get; set; }
        /// <summary>
        /// 账本号
        /// </summary>
        public string PerformanceAccountBookNumber { get; set; }
        /// <summary>
        /// 财务制单号
        /// </summary>
        public string FinanceNumber { get; set; }
        /// <summary>
        /// 财务分配时间
        /// </summary>
        public Range<DateTime> FinanceAllocationDateTime { get; set; }
        /// <summary>
        /// 取得或设置查询的排序方式
        /// </summary>
        public SortInfo SortInfo { get; set; }

        /// <summary>
        /// 取得或设置凭单对应的项目信息（仅用于统计）
        /// </summary>
        public ProjectQueryInformation ProjectQueryInformation { get; set; }
        /// <summary>
        /// 取得或设置凭单对应的经费分配的状态（仅用于统计）
        /// </summary>
        public PerformanceAllocationState[] PerformanceAllocationStates { get; set; }
        /// <summary>
        /// 取得或设置凭单对应的经费分配的审核通过的时间（仅用于统计）
        /// </summary>
        public Range<DateTime> PerformanceAllocationCensorPassDateTime { get; set; }
    }
}
