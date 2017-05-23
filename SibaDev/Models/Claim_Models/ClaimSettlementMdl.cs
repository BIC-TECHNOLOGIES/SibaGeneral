using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models.Claim_Models;

namespace SibaDev.Models.Claim_Models
{
    public class ClaimSettlementMdl : Model
    {
        public static MS_SYS_COUNTRY get_country(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_COUNTRY where mdl.CNT_CODE == code select mdl).ToList().Select(mdl => new MS_SYS_COUNTRY
            {
                CNT_CODE = mdl.CNT_CODE,
                CNT_NAME = mdl.CNT_NAME,
                CNT_ZIP = mdl.CNT_ZIP,
                CNT_CRTE_BY = mdl.CNT_CRTE_BY,
                CNT_CRTE_DATE = mdl.CNT_CRTE_DATE,
                CNT_STATUS = mdl.CNT_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_COUNTRY> get_countries()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_COUNTRY where mdl.CNT_STATUS == "A" select mdl).ToList().Select(mdl => new MS_SYS_COUNTRY
            {
                CNT_CODE = mdl.CNT_CODE,
                CNT_NAME = mdl.CNT_NAME,
                CNT_ZIP = mdl.CNT_ZIP,
                CNT_CRTE_BY = mdl.CNT_CRTE_BY,
                CNT_CRTE_DATE = mdl.CNT_CRTE_DATE,
                CNT_STATUS = mdl.CNT_STATUS
            });
        }

        public static IEnumerable<object> get_lov_country()
        {
            var db = new SibaModel();
            return (from country in db.MS_SYS_COUNTRY
                    where country.CNT_STATUS == "A"
                    select new
                    { CODE = country.CNT_CODE, NAME = country.CNT_NAME });
        }

        public static bool save_claim_settlement(INS_CLM_PAYMENT_HEAD cty) 
        {
            var db = new SibaModel();
            if (cty.CLPMT_STATUS == "A")
            {
                var db_country = db.INS_CLM_PAYMENT_HEAD.Find(cty.CLPMT_SYS_ID);
                if (db_country != null)
                {
                    db.INS_CLM_PAYMENT_HEAD.Attach(db_country);
                    db_country.Map(cty);
                }

            }
            else if (cty.CLPMT_STATUS == "U")
            {
                cty.CLPMT_STATUS = "A";
                db.INS_CLM_PAYMENT_HEAD.Add(cty);
            }
            else if (cty.CLPMT_STATUS == "D")
            {
                var db_country = db.INS_CLM_PAYMENT_HEAD.Find(cty.CLPMT_SYS_ID);
                if (db_country != null)
                {
                    db.INS_CLM_PAYMENT_HEAD.Attach(db_country);
                    db_country.CLPMT_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_COUNTRY> search_countries(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_SYS_COUNTRY where (cty.CNT_CODE.ToLower().Contains(q.ToLower()) || cty.CNT_NAME.ToLower().Contains(q.ToLower())) 
                    && cty.CNT_STATUS == "A" select cty).ToList();

        }
    }
}