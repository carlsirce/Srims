using System;
using System.Collections.Generic;
using System.Data.Linq;
using System.Linq;
using System.Text;

using MIS.Common;
using MIS.Common.Validate;
using MIS.Common.Query;

namespace Srims.Server.Business.Common
{
    /// <summary>
    /// 外协单位
    /// </summary>
    public partial class OutsourcingUnit
    {
        #region ID和时间戳

        private int _ID = NEW_ENTITY_ID;
        private byte[] _TimeStamp = new byte[] { };

        /// <summary>
        /// 取得ID
        /// </summary>
        public override int ID
        {
            get { return _ID; }
        }
        /// <summary>
        /// 取得时间戳
        /// </summary>
        public override byte[] TimeStamp
        {
            get { return _TimeStamp; }
        }

        #endregion

        #region 成员

        private string _Name;
        private string _LegalRepresentativeName;
        private string _RegisteredCapital;
        private string _RegisteredCardNumber;
        private string _OrganizationCode;
        private string _TaxNumber;
        private string _CompanyType;
        private string _ManagementType;
        private string _BusinessScope;
        private DateTime? _CreateDateTime;
        private DateTime? _DealDateTimeStart;
        private DateTime? _DealDateTimeEnd;
        private string _Remark;

        #endregion

        #region 属性

        /// <summary>
        /// 取得或设置单位名称
        /// </summary>
        public string Name
        {
            get { return _Name; }
            set { _Name = value; }
        }
        /// <summary>
        /// 取得或设置法定代表人姓名
        /// </summary>
        public string LegalRepresentativeName
        {
            get { return _LegalRepresentativeName; }
            set { _LegalRepresentativeName = value; }
        }
        /// <summary>
        /// 取得或设置组册资本
        /// </summary>
        public string RegisteredCapital
        {
            get { return _RegisteredCapital; }
            set { _RegisteredCapital = value; }
        }
        /// <summary>
        /// 取得或设置注册号
        /// </summary>
        public string RegisteredCardNumber
        {
            get { return _RegisteredCardNumber; }
            set { _RegisteredCardNumber = value; }
        }
        /// <summary>
        /// 取得或设置组织代码
        /// </summary>
        public string OrganizationCode
        {
            get { return _OrganizationCode; }
            set { _OrganizationCode = value; }
        }
        /// <summary>
        /// 取得或设置税号
        /// </summary>
        public string TaxNumber
        {
            get { return _TaxNumber; }
            set { _TaxNumber = value; }
        }
        /// <summary>
        /// 取得或设置公司类型
        /// </summary>
        public string CompanyType
        {
            get { return _CompanyType; }
            set { _CompanyType = value; }
        }
        /// <summary>
        /// 取得或设置管理类别
        /// </summary>
        public string ManagementType
        {
            get { return _ManagementType; }
            set { _ManagementType = value; }
        }
        /// <summary>
        /// 取得或设置经营范围
        /// </summary>
        public string BusinessScope
        {
            get { return _BusinessScope; }
            set { _BusinessScope = value; }
        }
        /// <summary>
        /// 取得或设置成立时间
        /// </summary>
        public DateTime? CreateDateTime
        {
            get { return _CreateDateTime; }
            set { _CreateDateTime = value; }
        }
        /// <summary>
        /// 取得或设置营业期限开始
        /// </summary>
        public DateTime? DealDateTimeStart
        {
            get { return _DealDateTimeStart; }
            set { _DealDateTimeStart = value; }
        }
        /// <summary>
        /// 取得或设置营业期限结束
        /// </summary>
        public DateTime? DealDateTimeEnd
        {
            get { return _DealDateTimeEnd; }
            set { _DealDateTimeEnd = value; }
        }
        /// <summary>
        /// 取得或设置备注
        /// </summary>
        public string Remark
        {
            get { return _Remark; }
            set { _Remark = value; }
        }

        #endregion
    }
}
