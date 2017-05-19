namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_PA_FEES")]
    public partial class INS_UDW_PA_FEES:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PA_FEE_SYS_ID { get; set; }

        public int? PA_FEE_POL_SYS_ID { get; set; }

        public int? PA_FEE_END_NO { get; set; }

        [StringLength(15)]
        public string PA_FEE_CODE { get; set; }

        public decimal? PA_FEE_FC_AMOUNT { get; set; }

        public decimal? PA_FEE_BC_AMOUNT { get; set; }

        public int? PA_FEE_RK_SYS_ID { get; set; }

        [StringLength(15)]
        public string PA_FEE_RK_CODE { get; set; }

        public int? PA_FEE_RK_NO { get; set; }

        [StringLength(15)]
        public string PA_FEE_CRTE_BY { get; set; }

        public DateTime? PA_FEE_CRTE_DATE { get; set; }

        [StringLength(1)]
        public string PA_FEE_STATUS { get; set; }

        public virtual INS_UDW_PERSONAL_ACCIDENT INS_UDW_PERSONAL_ACCIDENT { get; set; } 
    }
}
