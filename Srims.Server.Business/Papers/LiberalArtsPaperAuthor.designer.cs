using System;
using System.Collections.Generic;
using System.Data.Linq;
using System.Linq;
using System.Text;

using MIS.Common;
using MIS.Common.Validate;
using MIS.Common.Query;

using Srims.Server.Business.Papers;
using Srims.Server.Business.Experts;

namespace Srims.Server.Business.Papers
{
    /// <summary>
    /// 文科论文作者
    /// </summary>
    public partial class LiberalArtsPaperAuthor
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

        private int _LiberalArtsPaperID;
        private EntityRef<LiberalArtsPaper> _LiberalArtsPaper;
        private int? _ExpertID;
        private EntityRef<Expert> _Expert;
        private string _Name;
        private string _EnglishName;
        private int _Order;
        private bool _IsLinkMan;

        #endregion

        #region 属性

        /// <summary>
        /// 取得对应对应论文的ID
        /// </summary>
        public int LiberalArtsPaperID
        {
            get { return _LiberalArtsPaperID; }
        }
        /// <summary>
        /// 取得对应的对应论文
        /// </summary>
        public LiberalArtsPaper LiberalArtsPaper
        {
            get { return _LiberalArtsPaper.Entity; }
            set
            {
                _LiberalArtsPaper.Entity = value;
                _LiberalArtsPaperID = value == null ? 0 : value.ID;
            }
        }
        /// <summary>
        /// 取得对应对应专家的ID
        /// </summary>
        public int? ExpertID
        {
            get { return _ExpertID; }
        }
        /// <summary>
        /// 取得对应的对应专家
        /// </summary>
        public Expert Expert
        {
            get { return _Expert.Entity; }
            set
            {
                _Expert.Entity = value;
                _ExpertID = value == null ? null : new int?(value.ID);
            }
        }
        /// <summary>
        /// 取得或设置姓名
        /// </summary>
        public string Name
        {
            get { return _Name; }
            set { _Name = value; }
        }
        /// <summary>
        /// 取得或设置英文名
        /// </summary>
        public string EnglishName
        {
            get { return _EnglishName; }
            set { _EnglishName = value; }
        }
        /// <summary>
        /// 取得或设置位次
        /// </summary>
        public int Order
        {
            get { return _Order; }
            set { _Order = value; }
        }
        /// <summary>
        /// 取得或设置是否是通讯作者
        /// </summary>
        public bool IsLinkMan
        {
            get { return _IsLinkMan; }
            set { _IsLinkMan = value; }
        }

        #endregion
    }
}
