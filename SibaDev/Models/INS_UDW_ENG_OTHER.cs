namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_ENG_OTHER")]
    public partial class INS_UDW_ENG_OTHER:Model 
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_UDW_ENG_OTHER() 
        {
            INS_UWD_RISK_COVERS = new HashSet<INS_UWD_RISK_COVERS>(); 
            INS_UDW_ENGINEER_FEES = new HashSet<INS_UDW_ENGINEER_FEES>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ENG_OTHER_SYS_ID { get; set; }

        public int? ENG_OTHER_POLH_SYS_ID { get; set; }

        public int? ENG_OTHER_POLH_DOC_NO { get; set; } 

        public int? ENG_OTHER_ENG_SYS_ID { get; set; } 

        [StringLength(20)]
        public string ENG_OTHER_POLH_END_NO { get; set; }

        [StringLength(15)]
        public string ENG_OTHER_OBJECT { get; set; }

        [StringLength(100)]
        public string ENG_OTHER_OBJECT_NAME { get; set; }

        [StringLength(100)]
        public string ENG_OTHER_DESC { get; set; }

        [StringLength(50)]
        public string ENG_OTHER_SERL_NO { get; set; }

        [StringLength(50)]
        public string ENG_OTHER_MK_MODEL { get; set; }

        [StringLength(100)]
        public string ENG_OTHER_MANUF { get; set; }

        [StringLength(50)]
        public string ENG_OTHER_MANUF_YR { get; set; }

        [StringLength(1)]
        public string ENG_OTHER_STND_BY { get; set; }

        [StringLength(1)]
        public string ENG_OTHER_CAP { get; set; }

        [StringLength(1)]
        public string ENG_OTHER_LOC { get; set; }

        public decimal? ENG_OTHER_FUNDT_FC { get; set; }

        public decimal? ENG_OTHER_FUNDT_BC { get; set; }

        public decimal? ENG_OTHER_TRANSF_FC { get; set; }

        public decimal? ENG_OTHER_TRANSF_BC { get; set; }

        public decimal? ENG_OTHER_SUM_INSURED_FC { get; set; }

        public decimal? ENG_OTHER_SUM_INSURED_BC { get; set; }

        public decimal? ENG_OTHER_PREMIUM_FC { get; set; }

        public decimal? ENG_OTHER_PREMIUM_BC { get; set; }

        [StringLength(50)]
        public string ENG_OTHER_ESCL { get; set; }

        [StringLength(20)]
        public string ENG_OTHER_CURRENCY { get; set; }

        public decimal? ENG_OTHER_CURRENCY_RATE { get; set; }

        public DateTime? ENG_OTHER_START_DATE { get; set; }

        public DateTime? ENG_OTHER_END_DATE { get; set; }

        [StringLength(10)]
        public string ENG_OTHER_PERIOD_DAYS { get; set; }

        public short? ENG_OTHER_UW_YEAR { get; set; }

        public decimal? ENG_OTHER_TOT_PREM_FC { get; set; }

        public decimal? ENG_OTHER_TOT_PREM_BC { get; set; }

        public decimal? ENG_OTHER_SI_FC { get; set; }

        public decimal? ENG_OTHER_SI_BC { get; set; }

        public decimal? ENG_OTHER_RISK_PREM_FC { get; set; }

        public decimal? ENG_OTHER_RISK_PREM_BC { get; set; }

        public decimal? ENG_OTHER_ADJ_PREM_FC { get; set; }

        public decimal? ENG_OTHER_ADJ_PREM_BC { get; set; }

        public decimal? ENG_OTHER_DISC_FC { get; set; }

        public decimal? ENG_OTHER_DISC_BC { get; set; }

        public decimal? ENG_OTHER_LOAD_FC { get; set; }

        public decimal? ENG_OTHER_LOAD_BC { get; set; }

        public decimal? ENG_OTHER_COMP_FEE_FC { get; set; }

        public decimal? ENG_OTHER_COMP_FEE_BC { get; set; }

        public decimal? ENG_OTHER_COMMISSION_FC { get; set; }

        public decimal? ENG_OTHER_COMMISSION_BC { get; set; }

        public decimal? ENG_OTHER_RI_SI_FC { get; set; }

        public decimal? ENG_OTHER_RI_SI_BC { get; set; }

        public decimal? ENG_OTHER_RI_PREM_FC { get; set; }

        public decimal? ENG_OTHER_RI_PREM_BC { get; set; }

        [StringLength(1)]
        public string ENG_OTHER_TXN_STATUS { get; set; }

        [StringLength(1)]
        public string ENG_OTHER_RISK_STATE { get; set; }

        public int? ENG_OTHER_RISK_ID { get; set; }

        public int? ENG_OTHER_RISK_NO { get; set; }

        [StringLength(15)]
        public string ENG_OTHER_PDT_CODE { get; set; }

        [StringLength(15)]
        public string ENG_OTHER_CVR_CODE { get; set; }

        [StringLength(1)]
        public string ENG_OTHER_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string ENG_OTHER_END_TYPE { get; set; }

        public DateTime? ENG_OTHER_APPROVE_DATE { get; set; }

        public DateTime? ENG_OTHER_ACCT_DATE { get; set; }

        [StringLength(30)]
        public string ENG_OTHER_CRTE_BY { get; set; }

        public DateTime? ENG_OTHER_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string ENG_OTHER_MOD_BY { get; set; }

        public DateTime? ENG_OTHER_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ENG_OTHER_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_RISK_COVERS> INS_UWD_RISK_COVERS { get; set; }
         
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_ENGINEER_FEES> INS_UDW_ENGINEER_FEES { get; set; }

        public virtual INS_UDW_ENGINEER INS_UDW_ENGINEER { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
