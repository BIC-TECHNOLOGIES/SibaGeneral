namespace SibaDev.Models.History_Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_HGA_TRANSIT")]
    public partial class INS_UDW_HGA_TRANSIT:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HTRANS_SYS_ID { get; set; }

        public int? TRANS_SYS_ID { get; set; }

        public int? TRANS_POLH_SYS_ID { get; set; }

        public int? TRANS_POLH_DOC_NO { get; set; }

        public int? TRANS_POLH_END_NO { get; set; }

        [StringLength(30)]
        public string TRANS_RISK_TYPE { get; set; }

        [StringLength(50)]
        public string TRANS_RISK_NAME { get; set; }

        [StringLength(15)]
        public string TRANS_REGION_CODE { get; set; }

        [StringLength(50)]
        public string TRANS_REGION_NAME { get; set; }

        [StringLength(15)]
        public string TRANS_AREA_CODE { get; set; }

        [StringLength(50)]
        public string TRANS_AREA_NAME { get; set; }

        [StringLength(15)]
        public string TRANS_LOC_CODE { get; set; }

        [StringLength(50)]
        public string TRANS_LOC_NAME { get; set; }

        [StringLength(100)]
        public string TRANS_LOC_DESC { get; set; }

        [StringLength(50)]
        public string TRANS_LOC_ADDRS { get; set; }

        [StringLength(15)]
        public string TRANS_EARTHQ_ZONE { get; set; }

        [StringLength(30)]
        public string TRANS_DENT_FROM { get; set; }

        [StringLength(30)]
        public string TRANS_DENT_T0 { get; set; }

        [StringLength(30)]
        public string TRANS_DISTANCE { get; set; }

        public decimal? TRANS_SUM_INSURED_FC { get; set; }

        public decimal? TRANS_SUM_INSURED_BC { get; set; }

        public decimal? TRANS_LIMIT_LOSS_FC { get; set; }

        public decimal? TRANS_LIMIT_LOSS_BC { get; set; }

        public decimal? TRANS_PREMIUM_FC { get; set; }

        public decimal? TRANS_PREMIUM_BC { get; set; }

        public decimal? TRANS_ANN_TURNOVER_FC { get; set; }

        public decimal? TRANS_ANN_TURNOVER_BC { get; set; }

        public DateTime? TRANS_START_DATE { get; set; }

        public DateTime? TRANS_END_DATE { get; set; }

        public int? TRANS_PERIOD_DAYS { get; set; }

        public short? TRANS_UW_YEAR { get; set; }

        [StringLength(5)]
        public string TRANS_CURRENCY { get; set; }

        public decimal? TRANS_CURR_RATE { get; set; }

        public decimal? TRANS_TOT_PREM_FC { get; set; }

        public decimal? TRANS_TOT_PREM_BC { get; set; }

        public decimal? TRANS_SI_FC { get; set; }

        public decimal? TRANS_SI_BC { get; set; }

        public decimal? TRANS_RISK_PREM_FC { get; set; }

        public decimal? TRANS_RISK_PREM_BC { get; set; }

        public decimal? TRANS_ADJ_PREM_FC { get; set; }

        public decimal? TRANS_ADJ_PREM_BC { get; set; }

        public decimal? TRANS_DISC_FC { get; set; }

        public decimal? TRANS_DISC_BC { get; set; }

        public decimal? TRANS_LOAD_FC { get; set; }

        public decimal? TRANS_LOAD_BC { get; set; }

        public decimal? TRANS_COMP_FEE_FC { get; set; }

        public decimal? TRANS_COMP_FEE_BC { get; set; }

        public decimal? TRANS_COMMISSION_FC { get; set; }

        public decimal? TRANS_COMMISSION_BC { get; set; }

        [StringLength(1)]
        public string TRANS_TXN_STATUS { get; set; }

        [StringLength(50)]
        public string TRANS_RISK_STATE { get; set; }

        public int? TRANS_RISK_NO { get; set; }

        [StringLength(15)]
        public string TRANS_RISK_ID { get; set; }

        [StringLength(15)]
        public string TRANS_PDT_CODE { get; set; }

        [StringLength(20)]
        public string TRANS_CVR_CODE { get; set; }

        [StringLength(1)]
        public string TRANS_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string TRANS_END_TYPE { get; set; }

        public DateTime? TRANS_APTRANSVE_DATE { get; set; }

        public DateTime? TRANS_ACCT_DATE { get; set; }

        public decimal? TRANS_RI_SI_FC { get; set; }

        public decimal? TRANS_RI_SI_BC { get; set; }

        public decimal? TRANS_RI_PREM_FC { get; set; }

        public decimal? TRANS_RI_PREM_BC { get; set; }

        [StringLength(50)]
        public string TRANS_CRTE_BY { get; set; }

        public DateTime? TRANS_CRTE_DATE { get; set; }

        [StringLength(50)]
        public string TRANS_MOD_BY { get; set; }

        public DateTime? TRANS_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TRANS_STATUS { get; set; }
    }
}
