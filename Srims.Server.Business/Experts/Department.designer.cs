using System;
using System.Collections.Generic;
using System.Data.Linq;
using System.Linq;
using System.Text;

using MIS.Common;
using MIS.Common.Validate;
using MIS.Common.Query;

namespace Srims.Server.Business.Experts
{
    /// <summary>
    /// 部门
    /// </summary>
    public partial class Department
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
        private string _NameSpell;
        private string _ShortName;
        private string _Code;
        private bool _IsCollege;

        #endregion

        #region 属性

        /// <summary>
        /// 取得或设置名称拼音首字母缩写
        /// </summary>
        public string NameSpell
        {
            get { return _NameSpell; }
            set { _NameSpell = value; }
        }
        /// <summary>
        /// 取得或设置简称
        /// </summary>
        public string ShortName
        {
            get { return _ShortName; }
            set { _ShortName = value; }
        }
        /// <summary>
        /// 取得或设置代码
        /// </summary>
        public string Code
        {
            get { return _Code; }
            set { _Code = value; }
        }
        /// <summary>
        /// 取得或设置是否是学院
        /// </summary>
        public bool IsCollege
        {
            get { return _IsCollege; }
            set { _IsCollege = value; }
        }

        #endregion
    }
}
