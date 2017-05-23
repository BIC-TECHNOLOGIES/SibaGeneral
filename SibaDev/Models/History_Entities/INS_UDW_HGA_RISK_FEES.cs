namespace SibaDev.Models.History_Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_HGA_RISK_FEES")]
    public partial class INS_UDW_HGA_RISK_FEES:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HGAR_FEE_SYS_ID { get; set; }

        public int? GAR_FEE_SYS_ID { get; set; }

        public int? GAR_FEE_POL_SYS_ID { get; set; }

        public int? GAR_FEE_END_NO { get; set; }

        [StringLength(15)]
        public string GAR_FEE_CODE { get; set; }

        public decimal? GAR_FEE_FC_AMOUNT { get; set; }

        public decimal? GAR_FEE_BC_AMOUNT { get; set; }

        public int? GAR_FEE_RK_SYS_ID { get; set; }

        [StringLength(15)]
        public string GAR_FEE_RK_CODE { get; set; }

        public int? GAR_FEE_RK_NO { get; set; }

        [StringLength(15)]
        public string GAR_FEE_CRTE_BY { get; set; }

        public DateTime? GAR_FEE_CRTE_DATE { get; set; }

        [StringLength(1)]
        public string GAR_FEE_STATUS { get; set; }
    }
}
