namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_CLM_PAYMENT_HEAD")]
    public partial class INS_CLM_PAYMENT_HEAD : Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CLPMT_SYS_ID { get; set; }

        public int CLPMT_CLM_REG_SYS_ID { get; set; }

        public int? CLPMT_RISK_SYS_ID { get; set; }

        public int CLPMT_POLH_SYS_ID { get; set; }

        [Required]
        [StringLength(15)]
        public string CLPMT_CLM_TYPE { get; set; }

        [Required]
        [StringLength(20)]
        public string CLPMT_CLAIM_NO { get; set; }

        [StringLength(20)]
        public string CLPMT_PAY_NO { get; set; }

        [Required]
        [StringLength(10)]
        public string CLPMT_CLM_OFFICE { get; set; }

        [Required]
        [StringLength(10)]
        public string CLPMT_POL_OFFICE { get; set; }

        [StringLength(10)]
        public string CLPMT_COB { get; set; }

        [StringLength(5)]
        public string CLPMT_CURRENCY { get; set; }

        public decimal? CLPMT_CURR_RATE { get; set; }

        public decimal? CLPMT_EST_FC { get; set; }

        public decimal? CLPMT_EST_BC { get; set; }

        public decimal? CLPMT_CLM_AMT_FC { get; set; }

        public decimal? CLPMT_CLM_AMT_BC { get; set; }

        public decimal? CLPMT_DED_FC { get; set; }

        public decimal? CLPMT_DED_BC { get; set; }

        public decimal? CLPMT_TAX_FC { get; set; }

        public decimal? CLPMT_TAX_BC { get; set; }

        public decimal? CLPMT_NET_CLM_FC { get; set; }

        public decimal? CLPMT_NET_CLM_BC { get; set; }

        [Required]
        [StringLength(2)]
        public string CLPMT_STLMNT_TYPE { get; set; }

        [StringLength(2)]
        public string CLPMT_PAY_TYPE { get; set; }

        [StringLength(2)]
        public string CLPMT_PAY_TO { get; set; }

        [StringLength(15)]
        public string CLPMT_PAYEE_ID { get; set; }

        [StringLength(100)]
        public string CLPMT_PAYEE_NAME { get; set; }

        [StringLength(40)]
        public string CLPMT_ADDRESS { get; set; }

        public DateTime? CLPMT_APPR_DATE { get; set; }

        [StringLength(15)]
        public string CLPMT_APPR_BY { get; set; }

        [StringLength(1)]
        public string CLPMT_EX_GRATIA { get; set; }

        [StringLength(1)]
        public string CLPMT_TOTAL_LOSS { get; set; }

        [StringLength(5)]
        public string CLPMT_POL_CURR { get; set; }

        [StringLength(200)]
        public string CLPMT_CLM_NARRATION { get; set; }

        [StringLength(15)]
        public string CLPMT_CRTE_BY { get; set; }

        public DateTime? CLPMT_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CLPMT_MOD_BY { get; set; }

        public DateTime? CLPMT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CLPMT_STATUS { get; set; }

        [StringLength(15)]
        public string CLPMT_CLM_EXP_TYPE { get; set; }

        [StringLength(1)]
        public string CLPMT_STLMNT_OPTION { get; set; }

        [StringLength(1)]
        public string CLPMT_TXN_TYPE { get; set; }

        [StringLength(100)]
        public string CLPMT_CHQ_NAME { get; set; }
    }
}
