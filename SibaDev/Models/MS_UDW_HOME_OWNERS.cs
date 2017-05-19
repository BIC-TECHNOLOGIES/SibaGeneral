namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_HOME_OWNERS")]
    public partial class MS_UDW_HOME_OWNERS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_UDW_HOME_OWNERS()
        {
            MS_UDW_HOME_OWNERS_COVERS = new HashSet<MS_UDW_HOME_OWNERS_COVERS>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HON_SYS_ID { get; set; }

        [Required]
        [StringLength(15)]
        public string HON_SEC_CODE { get; set; }

        [StringLength(50)]
        public string HON_SEC_NAME { get; set; }

        [StringLength(100)]
        public string HON_SEC_DESC { get; set; }

        [Required]
        [StringLength(15)]
        public string HON_PDT_CODE { get; set; }

        [StringLength(50)]
        public string HON_PDT_NAME { get; set; }

        [StringLength(15)]
        public string HON_INS_TYPE { get; set; }

        public decimal? HON_MAX_SI { get; set; }

        public decimal? HON_MAX_SI_PERC { get; set; }

        [StringLength(30)]
        public string HON_CRTE_BY { get; set; }

        public DateTime? HON_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string HON_MOD_BY { get; set; }

        public DateTime? HON_MOD_DATE { get; set; }

        [StringLength(1)]
        public string HON_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_UDW_HOME_OWNERS_COVERS> MS_UDW_HOME_OWNERS_COVERS { get; set; }
    }
}
