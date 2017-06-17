namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_ENGINEER_FEES")]
    public partial class INS_UDW_ENGINEER_FEES:Model 
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ENG_FEE_SYS_ID { get; set; }

        public int? ENG_FEE_POL_SYS_ID { get; set; }

        public int? ENG_FEE_END_NO { get; set; }

        [StringLength(15)]
        public string ENG_FEE_CODE { get; set; }

        public decimal? ENG_FEE_FC_AMOUNT { get; set; }

        public decimal? ENG_FEE_BC_AMOUNT { get; set; }

        public int? ENG_FEE_RK_SYS_ID { get; set; }

        [StringLength(15)]
        public string ENG_FEE_RK_CODE { get; set; }

        public int? ENG_FEE_RK_NO { get; set; }

        [StringLength(15)]
        public string ENG_FEE_CRTE_BY { get; set; }

        public DateTime? ENG_FEE_CRTE_DATE { get; set; }

        [StringLength(1)]
        public string ENG_FEE_STATUS { get; set; }

        public virtual INS_UDW_ENG_OTHER INS_UDW_ENG_OTHER { get; set; } 
    }
}
