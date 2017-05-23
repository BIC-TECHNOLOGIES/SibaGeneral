namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_LIABILITY_WKS_COMP")]
    public partial class INS_UDW_LIABILITY_WKS_COMP:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_UDW_LIABILITY_WKS_COMP()
        {
            INS_UWD_RISK_COVERS = new HashSet<INS_UWD_RISK_COVERS>();
            INS_UDW_LIABILITY_FEES = new HashSet<INS_UDW_LIABILITY_FEES>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int LIAWOC_SYS_ID { get; set; }

        public int? LIAWOC_POLH_SYS_ID { get; set; }

        public int? LIAWOC_POLH_DOC_NO { get; set; }

        [StringLength(20)]
        public string LIAWOC_POLH_END_NO { get; set; }

        [StringLength(15)]
        public string LIAWOC_OBJECT { get; set; }

        [StringLength(100)]
        public string LIAWOC_OBJECT_NAME { get; set; }

        [StringLength(100)]
        public string LIAWOC_ADDRESS { get; set; }

        [StringLength(1)]
        public string LIAWOC_FLOATER { get; set; }

        public decimal? LIAWOC_SAL_SLAB { get; set; }

        [StringLength(50)]
        public string LIAWOC_GEO_LIM { get; set; }

        public decimal? LIAWOC_NO_PERSONS { get; set; }

        public short? LIAWOC_NO_YEARS { get; set; }

        public decimal? LIAWOC_SAL_MONTH { get; set; }

        public decimal? LIAWOC_ADD_MONTH_BENF { get; set; }

        [StringLength(1)]
        public string LIAWOC_LABR_TYPE { get; set; }

        public decimal? LIAWOC_ANN_WAGES_FC { get; set; }

        public decimal? LIAWOC_ANN_WAGES_BC { get; set; }

        public decimal? LIAWOC_PREMIUM_FC { get; set; }

        public decimal? LIAWOC_PREMIUM_BC { get; set; }

        [StringLength(20)]
        public string LIAWOC_CURRENCY { get; set; }

        public decimal? LIAWOC_CURRENCY_RATE { get; set; }

        public DateTime? LIAWOC_START_DATE { get; set; }

        public DateTime? LIAWOC_END_DATE { get; set; }

        [StringLength(10)]
        public string LIAWOC_PERIOD_DAYS { get; set; }

        public short? LIAWOC_UW_YEAR { get; set; }

        public decimal? LIAWOC_TOT_PREM_FC { get; set; }

        public decimal? LIAWOC_TOT_PREM_BC { get; set; }

        public decimal? LIAWOC_SI_FC { get; set; }

        public decimal? LIAWOC_SI_BC { get; set; }

        public decimal? LIAWOC_RISK_PREM_FC { get; set; }

        public decimal? LIAWOC_RISK_PREM_BC { get; set; }

        public decimal? LIAWOC_ADJ_PREM_FC { get; set; }

        public decimal? LIAWOC_ADJ_PREM_BC { get; set; }

        public decimal? LIAWOC_DISC_FC { get; set; }

        public decimal? LIAWOC_DISC_BC { get; set; }

        public decimal? LIAWOC_LOAD_FC { get; set; }

        public decimal? LIAWOC_LOAD_BC { get; set; }

        public decimal? LIAWOC_COMP_FEE_FC { get; set; }

        public decimal? LIAWOC_COMP_FEE_BC { get; set; }

        public decimal? LIAWOC_COMMISSION_FC { get; set; }

        public decimal? LIAWOC_COMMISSION_BC { get; set; }

        public decimal? LIAWOC_RI_SI_FC { get; set; }

        public decimal? LIAWOC_RI_SI_BC { get; set; }

        public decimal? LIAWOC_RI_PREM_FC { get; set; }

        public decimal? LIAWOC_RI_PREM_BC { get; set; }

        [StringLength(1)]
        public string LIAWOC_TXN_STATUS { get; set; }

        [StringLength(1)]
        public string LIAWOC_RISK_STATE { get; set; }

        public int? LIAWOC_RISK_ID { get; set; }

        public int? LIAWOC_RISK_NO { get; set; }

        [StringLength(15)]
        public string LIAWOC_PDT_CODE { get; set; }

        [StringLength(15)]
        public string LIAWOC_CVR_CODE { get; set; }

        [StringLength(1)]
        public string LIAWOC_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string LIAWOC_END_TYPE { get; set; }

        public DateTime? LIAWOC_APPROVE_DATE { get; set; }

        public DateTime? LIAWOC_ACCT_DATE { get; set; }

        [StringLength(30)]
        public string LIAWOC_CRTE_BY { get; set; }

        public DateTime? LIAWOC_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string LIAWOC_MOD_BY { get; set; }

        public DateTime? LIAWOC_MOD_DATE { get; set; }

        [StringLength(1)]
        public string LIAWOC_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_RISK_COVERS> INS_UWD_RISK_COVERS { get; set; } 

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_LIABILITY_FEES> INS_UDW_LIABILITY_FEES { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
