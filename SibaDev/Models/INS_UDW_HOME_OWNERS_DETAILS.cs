namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_HOME_OWNERS_DETAILS")]
    public partial class INS_UDW_HOME_OWNERS_DETAILS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HODT_SYS_ID { get; set; }

        public int? HODT_HOP_SYS_ID { get; set; }

        [StringLength(20)]
        public string HODT_ITEM_NAME { get; set; }

        public decimal? HODT_SUM_INSURED { get; set; }

        [StringLength(100)]
        public string HODT_QTY { get; set; }

        [StringLength(500)]
        public string HODT_DESC { get; set; }

        [StringLength(30)]
        public string HODT_CRTE_BY { get; set; }

        public DateTime? HODT_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string HODT_MOD_BY { get; set; }

        public DateTime? HODT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string HODT_STATUS { get; set; }

        public virtual INS_UDW_HOME_OWNERS INS_UDW_HOME_OWNERS { get; set; }
    }
}
