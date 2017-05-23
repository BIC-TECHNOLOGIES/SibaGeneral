namespace SibaDev.Models.History_Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_HGA_PROF_INDEMNITY")]
    public partial class INS_UDW_HGA_PROF_INDEMNITY:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HPRO_SYS_ID { get; set; }

        public int? PRO_SYS_ID { get; set; }

        public int? PRO_POLH_SYS_ID { get; set; }

        public int? PRO_POLH_DOC_NO { get; set; }

        public int? PRO_POLH_END_NO { get; set; }

        [StringLength(50)]
        public string PRO_ITEM { get; set; }

        [StringLength(100)]
        public string PRO_ITEM_DESC { get; set; }

        public decimal? PRO_AGGRET_LIMIT_FC { get; set; }

        public decimal? PRO_AGGRET_LIMIT_BC { get; set; }

        public decimal? PRO_LIMIT_OCCUR_FC { get; set; }

        public decimal? PRO_LIMIT_OCCUR_BC { get; set; }

        public decimal? PRO_PREM_FC { get; set; }

        public decimal? PRO_PREM_BC { get; set; }

        public decimal? PRO_LIMIT_LOSS { get; set; }

        public decimal? PRO_ANN_TURNOVER { get; set; }

        public DateTime? PRO_START_DATE { get; set; }

        public DateTime? PRO_END_DATE { get; set; }

        public int? PRO_PERIOD_DAYS { get; set; }

        public short? PRO_UW_YEAR { get; set; }

        [StringLength(5)]
        public string PRO_CURRENCY { get; set; }

        public decimal? PRO_CURR_RATE { get; set; }

        public decimal? PRO_TOT_PREM_FC { get; set; }

        public decimal? PRO_TOT_PREM_BC { get; set; }

        public decimal? PRO_SI_FC { get; set; }

        public decimal? PRO_SI_BC { get; set; }

        public decimal? PRO_RISK_PREM_FC { get; set; }

        public decimal? PRO_RISK_PREM_BC { get; set; }

        public decimal? PRO_ADJ_PREM_FC { get; set; }

        public decimal? PRO_ADJ_PREM_BC { get; set; }

        public decimal? PRO_DISC_FC { get; set; }

        public decimal? PRO_DISC_BC { get; set; }

        public decimal? PRO_LOAD_FC { get; set; }

        public decimal? PRO_LOAD_BC { get; set; }

        public decimal? PRO_COMP_FEE_FC { get; set; }

        public decimal? PRO_COMP_FEE_BC { get; set; }

        public decimal? PRO_COMMISSION_FC { get; set; }

        public decimal? PRO_COMMISSION_BC { get; set; }

        [StringLength(1)]
        public string PRO_TXN_STATUS { get; set; }

        [StringLength(50)]
        public string PRO_RISK_STATE { get; set; }

        public int? PRO_RISK_NO { get; set; }

        [StringLength(15)]
        public string PRO_RISK_ID { get; set; }

        [StringLength(15)]
        public string PRO_PDT_CODE { get; set; }

        [StringLength(20)]
        public string PRO_CVR_CODE { get; set; }

        [StringLength(1)]
        public string PRO_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string PRO_END_TYPE { get; set; }

        public DateTime? PRO_APPROVE_DATE { get; set; }

        public DateTime? PRO_ACCT_DATE { get; set; }

        public decimal? PRO_RI_SI_FC { get; set; }

        public decimal? PRO_RI_SI_BC { get; set; }

        public decimal? PRO_RI_PREM_FC { get; set; }

        public decimal? PRO_RI_PREM_BC { get; set; }

        [StringLength(50)]
        public string PRO_CRTE_BY { get; set; }

        public DateTime? PRO_CRTE_DATE { get; set; }

        [StringLength(50)]
        public string PRO_MOD_BY { get; set; }

        public DateTime? PRO_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PRO_STATUS { get; set; }
    }
}
