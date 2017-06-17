namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_CLM_DED_EXCESS")]
    public partial class MS_CLM_DED_EXCESS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EXS_SYS_ID { get; set; }

        [StringLength(15)]
        public string EXS_CODE { get; set; }

        [StringLength(15)]
        public string EXS_PROD_CODE { get; set; }

        [StringLength(5)]
        public string EXS_TYPE { get; set; }

        [StringLength(100)]
        public string EXS_NART { get; set; }

        public decimal? EXS_AMOUNT { get; set; }

        public decimal? EXS_MIN_AMOUNT { get; set; }

        public decimal? EXS_MAX_AMOUNT { get; set; }

        public decimal? EXS_RATE { get; set; }

        [StringLength(30)]
        public string EXS_CRTE_BY { get; set; }

        public DateTime? EXS_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string EXS_MOD_BY { get; set; }

        public DateTime? EXS_MOD_DATE { get; set; }

        [StringLength(1)]
        public string EXS_STATUS { get; set; }
    }
}
