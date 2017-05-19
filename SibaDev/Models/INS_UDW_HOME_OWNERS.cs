namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_HOME_OWNERS")]
    public partial class INS_UDW_HOME_OWNERS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_UDW_HOME_OWNERS()
        {
            INS_UDW_HOME_OWNERS_DETAILS = new HashSet<INS_UDW_HOME_OWNERS_DETAILS>();
            INS_UDW_HOME_OWNERS_FEES = new HashSet<INS_UDW_HOME_OWNERS_FEES>();
            INS_UWD_RISK_COVERS = new HashSet<INS_UWD_RISK_COVERS>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int HOP_SYS_ID { get; set; }

        public int? HOP_POLH_SYS_ID { get; set; }

        public int? HOP_POLH_DOC_NO { get; set; }

        [StringLength(20)]
        public string HOP_POLH_END_NO { get; set; }

        [StringLength(100)]
        public string HOP_SEC_NAME { get; set; }

        [StringLength(500)]
        public string HOP_DESC { get; set; }

        [StringLength(15)]
        public string HOP_LOC_CODE { get; set; }

        [StringLength(50)]
        public string HOP_LOC_NAME { get; set; }

        [StringLength(1)]
        public string HOP_RIPML { get; set; }

        public int? HOP_PML { get; set; }

        [StringLength(50)]
        public string HOP_GEO_LIM { get; set; }

        public decimal? HOP_SUM_INSURED_FC { get; set; }

        public decimal? HOP_SUM_INSURED_BC { get; set; }

        public decimal? HOP_PREMIUM_FC { get; set; }

        public decimal? HOP_PREMIUM_BC { get; set; }

        [StringLength(20)]
        public string HOP_CURRENCY { get; set; }

        public decimal? HOP_CURRENCY_RATE { get; set; }

        public DateTime? HOP_START_DATE { get; set; }

        public DateTime? HOP_END_DATE { get; set; }

        public decimal? HOP_SI_FC { get; set; }

        public decimal? HOP_SI_BC { get; set; }

        public decimal? HOP_TOT_PREM_FC { get; set; }

        public decimal? HOP_TOT_PREM_BC { get; set; }

        public decimal? HOP_RISK_PREM_FC { get; set; }

        public decimal? HOP_RISK_PREM_BC { get; set; }

        public decimal? HOP_ADJ_PREM_FC { get; set; }

        public decimal? HOP_ADJ_PREM_BC { get; set; }

        public decimal? HOP_DISC_FC { get; set; }

        public decimal? HOP_DISC_BC { get; set; }

        public decimal? HOP_LOAD_FC { get; set; }

        public decimal? HOP_LOAD_BC { get; set; }

        public decimal? HOP_COMP_FEE_FC { get; set; }

        public decimal? HOP_COMP_FEE_BC { get; set; }

        public decimal? HOP_COMMISSION_FC { get; set; }

        public decimal? HOP_COMMISSION_BC { get; set; }

        public decimal? HOP_RI_SI_FC { get; set; }

        public decimal? HOP_RI_SI_BC { get; set; }

        public decimal? HOP_RI_PREM_FC { get; set; }

        public decimal? HOP_RI_PREM_BC { get; set; }

        [StringLength(10)]
        public string HOP_PERIOD_DAYS { get; set; }

        public short? HOP_UW_YEAR { get; set; }

        public int? HOP_RISK_NO { get; set; }

        [StringLength(20)]
        public string HOP_TXN_STATUS { get; set; }

        [StringLength(20)]
        public string HOP_RISK_STATE { get; set; }

        public int? HOP_RISK_ID { get; set; }

        [StringLength(15)]
        public string HOP_PDT_CODE { get; set; }

        [StringLength(15)]
        public string HOP_CVR_CODE { get; set; }

        [StringLength(1)]
        public string HOP_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string HOP_END_TYPE { get; set; }

        public DateTime? HOP_APPROVE_DATE { get; set; }

        public DateTime? HOP_ACCT_DATE { get; set; }

        [StringLength(30)]
        public string HOP_CRTE_BY { get; set; }

        public DateTime? HOP_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string HOP_MOD_BY { get; set; }

        public DateTime? HOP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string HOP_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_HOME_OWNERS_DETAILS> INS_UDW_HOME_OWNERS_DETAILS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_HOME_OWNERS_FEES> INS_UDW_HOME_OWNERS_FEES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_RISK_COVERS> INS_UWD_RISK_COVERS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
