namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_PA_GROUP_NAMED")]
    public partial class INS_UDW_PA_GROUP_NAMED:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PA_GRP_SYS_ID { get; set; }

        public int? PA_GRP_PA_SYS_ID { get; set; }

        public int? PA_GRP_POLH_SYS_ID { get; set; }

        public int? PA_GRP_POLH_DOC_NO { get; set; }

        public int? PA_GRP_POLH_END_NO { get; set; }

        [StringLength(50)]
        public string PA_GRP_RISK_CLASSCODE { get; set; }

        [StringLength(50)]
        public string PA_GRP_RISK_CLASSNAME { get; set; }

        public int? PA_GRP_RISK_NO { get; set; }

        [StringLength(50)]
        public string PA_GRP_ID { get; set; }

        [StringLength(50)]
        public string PA_GRP_NAME { get; set; }

        public DateTime? PA_GRP_ISSUE_DATE { get; set; }

        public DateTime? PA_GRP_RETRO_DATE { get; set; }

        [StringLength(100)]
        public string PA_GRP_NAME_INSURED { get; set; }

        public DateTime? PA_GRP_DOB { get; set; }

        public byte? PA_GRP_AGE { get; set; }

        [StringLength(1)]
        public string PA_GRP_GENDER { get; set; }

        [StringLength(100)]
        public string PA_GRP_NAME_NOMINEE { get; set; }

        [StringLength(20)]
        public string PA_GRP_RELATION { get; set; }

        [StringLength(1)]
        public string PA_GRP_EARNING { get; set; }

        public decimal? PA_GRP_MONTHLY_INCOME { get; set; }

        [StringLength(50)]
        public string PA_GRP_JOB_TYPE { get; set; }

        public decimal? PA_GRP_RATE { get; set; }

        public short? PA_GRP_WEEKS { get; set; }

        public decimal? PA_GRP_WEEKLY_BENEFIT { get; set; }

        [StringLength(100)]
        public string PA_GRP_DESCRIPTION { get; set; }

        [StringLength(10)]
        public string PA_GRP_CRTE_BY { get; set; }

        public DateTime? PA_GRP_CRTE_DATE { get; set; }

        [StringLength(10)]
        public string PA_GRP_MOD_BY { get; set; }

        public DateTime? PA_GRP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PA_GRP_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
