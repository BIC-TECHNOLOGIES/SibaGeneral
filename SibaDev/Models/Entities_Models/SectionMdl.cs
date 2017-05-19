using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class SectionMdl : Model
    {
        public static MS_SYS_SECTION get_section(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_SECTION where mdl.SEC_CODE == code select mdl).ToList().Select(mdl => new MS_SYS_SECTION
            {
                SEC_CODE = mdl.SEC_CODE,
                SEC_NAME = mdl.SEC_NAME,
                SEC_DESC = mdl.SEC_DESC,
                SEC_CRTE_BY = mdl.SEC_CRTE_BY,
                SEC_CRTE_DATE = mdl.SEC_CRTE_DATE,
                SEC_STATUS = mdl.SEC_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_SECTION> get_sections()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_SECTION where mdl.SEC_STATUS == "A" select mdl).ToList().Select(mdl => new MS_SYS_SECTION
            {
                SEC_CODE = mdl.SEC_CODE,
                SEC_NAME = mdl.SEC_NAME,
                SEC_DESC = mdl.SEC_DESC,
                SEC_CRTE_BY = mdl.SEC_CRTE_BY,
                SEC_CRTE_DATE = mdl.SEC_CRTE_DATE,
                SEC_STATUS = mdl.SEC_STATUS
            });
        }

        public static IEnumerable<object> get_lov_section()
        {
            var db = new SibaModel();
            return (from section in db.MS_SYS_SECTION
                    where section.SEC_STATUS == "A"
                    select new
                    { CODE = section.SEC_CODE, NAME = section.SEC_NAME });
        }

        public static bool save_section(MS_SYS_SECTION cty)
        {
            var db = new SibaModel();
            if (cty.SEC_STATUS == "A")
            {
                var db_section = db.MS_SYS_SECTION.Find(cty.SEC_CODE);
                if (db_section != null)
                {
                    db.MS_SYS_SECTION.Attach(db_section);
                    db_section.Map(cty);
                }

            }
            else if (cty.SEC_STATUS == "U")
            {
                cty.SEC_STATUS = "A";
                db.MS_SYS_SECTION.Add(cty);
            }
            else if (cty.SEC_STATUS == "D")
            {
                var db_section = db.MS_SYS_SECTION.Find(cty.SEC_CODE);
                if (db_section != null)
                {
                    db.MS_SYS_SECTION.Attach(db_section);
                    db_section.SEC_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_SECTION> search_sections(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_SYS_SECTION where (cty.SEC_CODE.ToLower().Contains(q.ToLower()) || cty.SEC_NAME.ToLower().Contains(q.ToLower())) 
                    && cty.SEC_STATUS == "A" select cty).ToList();

        }
    }
}