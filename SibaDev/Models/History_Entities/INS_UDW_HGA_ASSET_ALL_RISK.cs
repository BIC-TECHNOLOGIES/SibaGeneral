namespace SibaDev.Models.History_Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_HGA_ASSET_ALL_RISK")]
    public partial class INS_UDW_HGA_ASSET_ALL_RISK:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HAAR_SYS_ID { get; set; }

        public int? AAR_SYS_ID { get; set; }

        public int? AAR_POLH_SYS_ID { get; set; }

        public int? AAR_POLH_DOC_NO { get; set; }

        public int? AAR_POLH_END_NO { get; set; }

        public int? AAR_GA_SYS_ID { get; set; }

        [StringLength(30)]
        public string AAR_RISK_TYPE { get; set; }

        [StringLength(50)]
        public string AAR_RISK_NAME { get; set; }

        [StringLength(100)]
        public string AAR_DESCRIPTION { get; set; }

        public decimal? AAR_LIMIT_LIABILITY { get; set; }

        public DateTime? AAR_START_DATE { get; set; }

        public DateTime? AAR_END_DATE { get; set; }

        public int? AAR_PERIOD_DAYS { get; set; }

        public short? AAR_UW_YEAR { get; set; }

        [StringLength(5)]
        public string AAR_CURRENCY { get; set; }

        public decimal? AAR_CURR_RATE { get; set; }

        public decimal? AAR_TOT_PREM_FC { get; set; }

        public decimal? AAR_TOT_PREM_BC { get; set; }

        public decimal? AAR_SI_FC { get; set; }

        public decimal? AAR_SI_BC { get; set; }

        public decimal? AAR_RISK_PREM_FC { get; set; }

        public decimal? AAR_RISK_PREM_BC { get; set; }

        public decimal? AAR_ADJ_PREM_FC { get; set; }

        public decimal? AAR_ADJ_PREM_BC { get; set; }

        public decimal? AAR_DISC_FC { get; set; }

        public decimal? AAR_DISC_BC { get; set; }

        public decimal? AAR_LOAD_FC { get; set; }

        public decimal? AAR_LOAD_BC { get; set; }

        public decimal? AAR_COMP_FEE_FC { get; set; }

        public decimal? AAR_COMP_FEE_BC { get; set; }

        public decimal? AAR_COMMISSION_FC { get; set; }

        public decimal? AAR_COMMISSION_BC { get; set; }

        [StringLength(1)]
        public string AAR_TXN_STATUS { get; set; }

        [StringLength(50)]
        public string AAR_RISK_STATE { get; set; }

        public int? AAR_RISK_NO { get; set; }

        [StringLength(15)]
        public string AAR_RISK_ID { get; set; }

        [StringLength(15)]
        public string AAR_PDT_CODE { get; set; }

        [StringLength(20)]
        public string AAR_CVR_CODE { get; set; }

        [StringLength(1)]
        public string AAR_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string AAR_END_TYPE { get; set; }

        public DateTime? AAR_APAARVE_DATE { get; set; }

        public DateTime? AAR_ACCT_DATE { get; set; }

        public decimal? AAR_RI_SI_FC { get; set; }

        public decimal? AAR_RI_SI_BC { get; set; }

        public decimal? AAR_RI_PREM_FC { get; set; }

        public decimal? AAR_RI_PREM_BC { get; set; }

        [StringLength(50)]
        public string AAR_CRTE_BY { get; set; }

        public DateTime? AAR_CRTE_DATE { get; set; }

        [StringLength(50)]
        public string AAR_MOD_BY { get; set; }

        public DateTime? AAR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string AAR_STATUS { get; set; }
    }
}
