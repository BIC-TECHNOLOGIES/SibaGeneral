using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;
using WebGrease.Css.Extensions;

namespace SibaDev.Models
{
    public class HomeOwnersMdl : Model
    {

        public static MS_UDW_HOME_OWNERS get_homeowner(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from prod in db.MS_UDW_HOME_OWNERS where prod.HON_SEC_CODE == code select prod).ToList().Select(prod => new MS_UDW_HOME_OWNERS
                {
                    HON_SYS_ID = prod.HON_SYS_ID,
                    HON_SEC_CODE = prod.HON_SEC_CODE,
                    HON_SEC_NAME = prod.HON_SEC_NAME,
                    HON_SEC_DESC = prod.HON_SEC_DESC,
                    HON_PDT_CODE = prod.HON_PDT_CODE,
                    HON_PDT_NAME = prod.HON_PDT_NAME,
                    HON_INS_TYPE = prod.HON_INS_TYPE,
                    HON_MAX_SI = prod.HON_MAX_SI,
                    HON_CRTE_BY = prod.HON_CRTE_BY,
                    HON_CRTE_DATE = prod.HON_CRTE_DATE,
                    HON_MOD_BY = prod.HON_MOD_BY,
                    HON_MOD_DATE = prod.HON_MOD_DATE,
                    HON_STATUS = prod.HON_STATUS,

                    MS_UDW_HOME_OWNERS_COVERS = prod.MS_UDW_HOME_OWNERS_COVERS != null ? prod.MS_UDW_HOME_OWNERS_COVERS.Select(c =>
                         new MS_UDW_HOME_OWNERS_COVERS
                         {
                             HCV_SYS_ID = c.HCV_SYS_ID,
                             HCV_HON_SYS_ID = c.HCV_HON_SYS_ID,
                             HCV_COV_CODE = c.HCV_COV_CODE,
                             HCV_COV_NAME = c.HCV_COV_NAME,
                             HCV_DEF_PREM = c.HCV_DEF_PREM,
                             HCV_DEF_RATE = c.HCV_DEF_RATE,
                             HCV_DFT = c.HCV_DFT,
                             HCV_SI = c.HCV_SI,
                             HCV_CRTE_BY = c.HCV_CRTE_BY,
                             HCV_CRTE_DATE = c.HCV_CRTE_DATE,
                             HCV_MOD_BY = c.HCV_MOD_BY,
                             HCV_MOD_DATE = c.HCV_MOD_DATE,
                             HCV_STATUS = c.HCV_STATUS,

                         }).ToList() : null,

                }).Single();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static MS_UDW_HOME_OWNERS get_sub_homeowner(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from prod in db.MS_UDW_HOME_OWNERS where prod.HON_SEC_CODE == code select prod).ToList().Select(prod => new MS_UDW_HOME_OWNERS
                {
                    HON_SYS_ID = prod.HON_SYS_ID,
                    HON_SEC_CODE = prod.HON_SEC_CODE,
                    HON_SEC_NAME = prod.HON_SEC_NAME,
                    HON_SEC_DESC = prod.HON_SEC_DESC,
                    HON_PDT_CODE = prod.HON_PDT_CODE,
                    HON_PDT_NAME = prod.HON_PDT_NAME,
                    HON_INS_TYPE = prod.HON_INS_TYPE,
                    HON_MAX_SI = prod.HON_MAX_SI,
                    HON_CRTE_BY = prod.HON_CRTE_BY,
                    HON_CRTE_DATE = prod.HON_CRTE_DATE,
                    HON_MOD_BY = prod.HON_MOD_BY,
                    HON_MOD_DATE = prod.HON_MOD_DATE,
                    HON_STATUS = prod.HON_STATUS,
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<MS_UDW_HOME_OWNERS> get_homeowners()
        {
            var db = new SibaModel();
            return (from prod in db.MS_UDW_HOME_OWNERS where prod.HON_STATUS == "A" select prod.HON_SEC_CODE).ToList().Select(get_sub_homeowner);
        }

        public static IEnumerable<object> get_lov_homeowners()
        {
            var db = new SibaModel();
            return (from prod in db.MS_UDW_HOME_OWNERS where prod.HON_STATUS == "A" select new { CODE = prod.HON_SEC_CODE, NAME = prod.HON_SEC_NAME });
        }


        public static IEnumerable<object> search_homeowners(string q)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_UDW_HOME_OWNERS
                    where (mdl.HON_SEC_CODE.ToLower().Contains(q.ToLower())) && mdl.HON_STATUS == "A"
                    select mdl.HON_SEC_CODE).ToList().Select(get_homeowner);
        }

        public static bool save_homeowners(MS_UDW_HOME_OWNERS viewProd)
        {
            var db = new SibaModel();
            switch (viewProd.HON_STATUS)
            {
                case "A":
                    {
                        //homeowner before update
                        var dbProd = db.MS_UDW_HOME_OWNERS.Find(viewProd.HON_SEC_CODE);

                        if (dbProd != null)
                        {
                            //update of homeowner details
                            db.MS_UDW_HOME_OWNERS.Attach(dbProd);
                            dbProd.Map(viewProd);

                            /*-------------------------------
                             * Cover
                             *-----------------------------*/
                            foreach (var cover in viewProd.MS_UDW_HOME_OWNERS_COVERS)
                            {
                                cover.HCV_HON_SYS_ID = viewProd.HON_SYS_ID;
                                switch (cover.HCV_STATUS)
                                {
                                    case "A":
                                        //
                                        var dbcover = db.MS_UDW_HOME_OWNERS_COVERS.Find(cover.HCV_SYS_ID);
                                        db.MS_UDW_HOME_OWNERS_COVERS.Attach(dbcover);
                                        dbcover.Map(cover);
                                        break;
                                    case "U":
                                        //
                                        cover.HCV_HON_SYS_ID = viewProd.HON_SYS_ID;
                                        cover.HCV_STATUS = "A";
                                        db.MS_UDW_HOME_OWNERS_COVERS.Add(cover);
                                        break;
                                    case "D":
                                        //deletion from the database that were not in the update clauses from the view                               
                                        db.MS_UDW_HOME_OWNERS_COVERS.Attach(db.MS_UDW_HOME_OWNERS_COVERS.Find(cover.HCV_SYS_ID));
                                        break;
                                }
                            }

                        }

                    }
                    break;
                case "U":

                    {

                        viewProd.HON_STATUS = "A";
                        viewProd.HON_CRTE_DATE = DateTime.Now;
                        db.MS_UDW_HOME_OWNERS.Add(viewProd);

                        viewProd.MS_UDW_HOME_OWNERS_COVERS.ForEach(x => x.HCV_STATUS = "A");

                    }


                    break;
                case "D":
                    {
                        /*------------------------
                        * homeowner before update
                        *----------------------*/
                        //
                        var dbProd = db.MS_UDW_HOME_OWNERS.Find(viewProd.HON_SYS_ID);
                        /*------------------------
                        * update of homeowner details
                        *----------------------*/
                        //
                        if (dbProd != null)
                        {
                            db.MS_UDW_HOME_OWNERS.Attach(dbProd);
                            dbProd.HON_STATUS = "D";
                        }

                    }
                    break;
            }

            return db.SaveChanges() > 0;
        }

    }
}