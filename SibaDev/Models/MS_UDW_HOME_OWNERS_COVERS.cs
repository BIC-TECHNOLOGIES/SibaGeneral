namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_HOME_OWNERS_COVERS")]
    public partial class MS_UDW_HOME_OWNERS_COVERS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HCV_SYS_ID { get; set; }

        public int? HCV_HON_SYS_ID { get; set; }

        [StringLength(15)]
        public string HCV_COV_CODE { get; set; }

        [StringLength(100)]
        public string HCV_COV_NAME { get; set; }

        public decimal? HCV_DEF_RATE { get; set; }

        public decimal? HCV_SI { get; set; }

        public decimal? HCV_DEF_PREM { get; set; }

        [StringLength(1)]
        public string HCV_DFT { get; set; }

        [StringLength(30)]
        public string HCV_CRTE_BY { get; set; }

        public DateTime? HCV_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string HCV_MOD_BY { get; set; }

        public DateTime? HCV_MOD_DATE { get; set; }

        [StringLength(1)]
        public string HCV_STATUS { get; set; }

        public virtual MS_UDW_HOME_OWNERS MS_UDW_HOME_OWNERS { get; set; }

        public virtual MS_UDW_COVERS MS_UDW_COVERS { get; set; }
    }
}
