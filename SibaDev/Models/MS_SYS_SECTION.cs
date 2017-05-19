namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_SECTION")]
    public partial class MS_SYS_SECTION:Model
    {
        [Key]
        [StringLength(15)]
        public string SEC_CODE { get; set; }

        [StringLength(50)]
        public string SEC_NAME { get; set; }

        [StringLength(100)]
        public string SEC_DESC { get; set; }

        [StringLength(30)]
        public string SEC_CRTE_BY { get; set; }

        public DateTime? SEC_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string SEC_MOD_BY { get; set; }

        public DateTime? SEC_MOD_DATE { get; set; }

        [StringLength(1)]
        public string SEC_STATUS { get; set; }
    }
}
