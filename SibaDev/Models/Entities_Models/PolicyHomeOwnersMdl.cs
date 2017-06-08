using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.Validation;
using SibaDev.Models;
using SibaDev.System_Contants;
using WebGrease.Css.Extensions;

namespace SibaDev.Models
{
    public class PolicyHomeOwnersMdl : Model
    {
        private static SibaModel db = new SibaModel();
        public static INS_UWD_POLICY_HEAD get_policy(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_SYS_ID == code select polh).ToList().Select(polh => new INS_UWD_POLICY_HEAD
                {
                    POLH_SYS_ID = polh.POLH_SYS_ID,
                    POLH_DOC_NO = polh.POLH_DOC_NO,
                    POLH_END_NO = polh.POLH_END_NO,
                    POLH_QUT_SER_NO = polh.POLH_QUT_SER_NO,
                    POLH_POL_SER_NO = polh.POLH_POL_SER_NO,
                    MS_SYS_COMPANY = CompanyMdl.get_company(polh.POLH_CMP_CODE),
                    MS_SYS_OFFICE = OfficeMdl.get_office(polh.POLH_OFF_CODE),
                    MS_UDW_CUSTOMERS = CustomerMdl.get_customer(polh.POLH_CUST_CODE),
                    MS_SYS_SOURCE_BUSINESS = SourceBusinessMdl.get_sourcebusiness(polh.POLH_BIZ_SOURCE),
                    INS_UDW_INSUR_SOURCE = InsuranceSourceMdl.get_insource(polh.POLH_INS_SOURCE),
                    MS_SYS_INTERMEDIARY = IntermediaryMdl.get_intermediary(polh.POLH_INTERMIDIARY),
                    MST_UWD_PRODUCT = ProductMdl.get_product(polh.POLH_SUB_CLASS_CODE),
                    MS_UDW_CLASS_OF_BUSINESS = ClassBusinessMdl.get_class(polh.POLH_CLASS_CODE),
                    MS_SYS_CHANNEL = ChannelMdl.get_channel(polh.POLH_CHANNEL_CODE),
                    POLH_CLASS_CODE = polh.POLH_CLASS_CODE,
                    POLH_SUB_CLASS_CODE = polh.POLH_SUB_CLASS_CODE,
                    POLH_CHANNEL_CODE = polh.POLH_CHANNEL_CODE,
                    POLH_CMP_CODE = polh.POLH_CMP_CODE,
                    POLH_OFF_CODE = polh.POLH_OFF_CODE,
                    POLH_CUST_CODE = polh.POLH_CUST_CODE,
                    POLH_INS_SOURCE = polh.POLH_INS_SOURCE,
                    POLH_BIZ_SOURCE = polh.POLH_BIZ_SOURCE,
                    POLH_INTERMIDIARY = polh.POLH_INTERMIDIARY,
                    POLH_POL_START_DATE = polh.POLH_POL_START_DATE,
                    POLH_POL_END_DATE = polh.POLH_POL_END_DATE,
                    POLH_POL_DAYS = polh.POLH_POL_DAYS,
                    POLH_POL_UW_YEAR = polh.POLH_POL_UW_YEAR,
                    POLH_POL_SI_FC = polh.POLH_POL_SI_FC,
                    POLH_POL_SI_BC = polh.POLH_POL_SI_BC,
                    POLH_POL_PREM_FC = polh.POLH_POL_PREM_FC,
                    POLH_POL_PREM_BC = polh.POLH_POL_PREM_BC,
                    POLH_POL_COMM_FC = polh.POLH_POL_COMM_FC,
                    POLH_POL_COMM_BC = polh.POLH_POL_COMM_BC,

                    POLH_POL_DISC_FC = polh.POLH_POL_DISC_FC,
                    POLH_POL_DISC_BC = polh.POLH_POL_DISC_BC,
                    POLH_POL_LOAD_FC = polh.POLH_POL_LOAD_FC,
                    POLH_POL_LOAD_BC = polh.POLH_POL_LOAD_BC,
                    POLH_COINS_SI_FC = polh.POLH_COINS_SI_FC,
                    POLH_COINS_SI_BC = polh.POLH_COINS_SI_BC,
                    POLH_COINS_PREM_FC = polh.POLH_COINS_PREM_FC,
                    POLH_COINS_PREM_BC = polh.POLH_COINS_PREM_BC,
                    POLH_NET_SI_FC = polh.POLH_NET_SI_FC,
                    POLH_NET_SI_BC = polh.POLH_NET_SI_BC,
                    POLH_NET_PREM_FC = polh.POLH_NET_PREM_FC,
                    POLH_NET_PREM_BC = polh.POLH_NET_PREM_BC,
                    POLH_FEE_FC = polh.POLH_FEE_FC,
                    POLH_FEE_BC = polh.POLH_FEE_BC,
                    POLH_RENEW_SER_NO = polh.POLH_RENEW_SER_NO,
                    POLH_TXN_STATE = polh.POLH_TXN_STATE,
                    POLH_POL_STATE = polh.POLH_POL_STATE,
                    POLH_END_TYPE = polh.POLH_END_TYPE,
                    POLH_APPROVE_DATE = polh.POLH_APPROVE_DATE,
                    POLH_ACCT_DATE = polh.POLH_ACCT_DATE,
                    POLH_DISPLAY_NO = polh.POLH_DISPLAY_NO,
                    POLH_CRTE_BY = polh.POLH_CRTE_BY,
                    POLH_CRTE_DATE = polh.POLH_CRTE_DATE,
                    POLH_MOD_BY = polh.POLH_MOD_BY,
                    POLH_MOD_DATE = polh.POLH_MOD_DATE,
                    POLH_STATUS = polh.POLH_STATUS,
                    POLH_CURRENCY = polh.POLH_CURRENCY,
                    POLH_CURRENCY_RATE = polh.POLH_CURRENCY_RATE,
                    INS_UDW_HOME_OWNERS = polh.INS_UDW_HOME_OWNERS != null ? polh.INS_UDW_HOME_OWNERS.Select(r => get_homeowner(r.HOP_SYS_ID)).ToList() : null,


                }).Single();
            }
            catch (Exception e)
            {
                return null;
            }
        }


        public static INS_UDW_HOME_OWNERS get_homeowner(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.INS_UDW_HOME_OWNERS where c.HOP_SYS_ID == code select c).ToList().Select(c => new INS_UDW_HOME_OWNERS
                {
                    HOP_SYS_ID = c.HOP_SYS_ID,
                    HOP_POLH_SYS_ID = c.HOP_POLH_SYS_ID,
                    HOP_SEC_CODE = c.HOP_SEC_CODE,
                    HOP_SEC_NAME = c.HOP_SEC_NAME,
                    HOP_DESC = c.HOP_DESC,
                    HOP_LOC_CODE = c.HOP_LOC_CODE,
                    HOP_LOC_NAME = c.HOP_LOC_NAME,
                    HOP_POLH_DOC_NO = c.HOP_POLH_DOC_NO,
                    HOP_GEO_LIM = c.HOP_GEO_LIM,
                    HOP_RIPML = c.HOP_RIPML,
                    HOP_PML = c.HOP_PML,
                    HOP_RISK_NO = c.HOP_RISK_NO,
                    HOP_ACCT_DATE = c.HOP_ACCT_DATE,
                    HOP_APPROVE_DATE = c.HOP_APPROVE_DATE,
                    HOP_SUM_INSURED_FC = c.HOP_SUM_INSURED_FC,
                    HOP_SUM_INSURED_BC = c.HOP_SUM_INSURED_BC,
                    HOP_PREMIUM_FC = c.HOP_PREMIUM_FC,
                    HOP_PREMIUM_BC = c.HOP_PREMIUM_BC,
                    HOP_CURRENCY = c.HOP_CURRENCY,
                    HOP_CURRENCY_RATE = c.HOP_CURRENCY_RATE,
                    HOP_TOT_PREM_FC = c.HOP_TOT_PREM_FC,
                    HOP_TOT_PREM_BC = c.HOP_TOT_PREM_BC,
                    HOP_SI_FC = c.HOP_SI_FC,
                    HOP_SI_BC = c.HOP_SI_BC,
                    HOP_RISK_PREM_FC = c.HOP_RISK_PREM_FC,
                    HOP_RISK_PREM_BC = c.HOP_RISK_PREM_BC,
                    HOP_ADJ_PREM_FC = c.HOP_ADJ_PREM_FC,
                    HOP_ADJ_PREM_BC = c.HOP_ADJ_PREM_BC,
                    HOP_DISC_FC = c.HOP_DISC_FC,
                    HOP_DISC_BC = c.HOP_DISC_BC,
                    HOP_LOAD_FC = c.HOP_LOAD_FC,
                    HOP_LOAD_BC = c.HOP_LOAD_BC,
                    HOP_COMP_FEE_FC = c.HOP_COMP_FEE_FC,
                    HOP_COMP_FEE_BC = c.HOP_COMP_FEE_BC,
                    HOP_COMMISSION_FC = c.HOP_COMMISSION_FC,
                    HOP_COMMISSION_BC = c.HOP_COMMISSION_BC,
                    HOP_TXN_STATUS = c.HOP_TXN_STATUS,
                    HOP_RISK_STATE = c.HOP_RISK_STATE,
                    HOP_RISK_ID = c.HOP_RISK_ID,
                    HOP_POLH_END_NO = c.HOP_POLH_END_NO,
                    HOP_PDT_CODE = c.HOP_PDT_CODE,
                    HOP_CVR_CODE = c.HOP_CVR_CODE,
                    HOP_RENEWAL_STATUS = c.HOP_RENEWAL_STATUS,
                    HOP_END_TYPE = c.HOP_END_TYPE,
                    HOP_CRTE_BY = c.HOP_CRTE_BY,
                    HOP_CRTE_DATE = c.HOP_CRTE_DATE,
                    HOP_MOD_BY = c.HOP_MOD_BY,
                    HOP_MOD_DATE = c.HOP_MOD_DATE,
                    HOP_STATUS = c.HOP_STATUS,
                    HOP_PERIOD_DAYS = c.HOP_PERIOD_DAYS,
                    HOP_UW_YEAR = c.HOP_UW_YEAR,
                    HOP_RI_SI_FC = c.HOP_RI_SI_FC,
                    HOP_RI_SI_BC = c.HOP_RI_SI_BC,
                    HOP_RI_PREM_FC = c.HOP_RI_PREM_FC,
                    HOP_RI_PREM_BC = c.HOP_RI_PREM_BC,
                    HOP_START_DATE = c.HOP_START_DATE,
                    HOP_END_DATE = c.HOP_END_DATE,
                    INS_UWD_RISK_COVERS = c.INS_UWD_RISK_COVERS != null ? c.INS_UWD_RISK_COVERS.Select(x => PolicyRiskCovers.get_riskcovers(x.RCOV_SYS_ID)).ToList() : null,
                    INS_UDW_HOME_OWNERS_DETAILS = c.INS_UDW_HOME_OWNERS_DETAILS != null ? c.INS_UDW_HOME_OWNERS_DETAILS.Select(x => get_homeowners_details(x.HODT_SYS_ID)).ToList() : null
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }


        public static INS_UDW_HOME_OWNERS_DETAILS get_homeowners_details(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.INS_UDW_HOME_OWNERS_DETAILS where c.HODT_SYS_ID == code select c).ToList().Select(c => new INS_UDW_HOME_OWNERS_DETAILS
                {
                    HODT_SYS_ID = c.HODT_SYS_ID,
                    HODT_HOP_SYS_ID = c.HODT_HOP_SYS_ID,
                    HODT_DESC = c.HODT_DESC,
                    HODT_ITEM_NAME = c.HODT_ITEM_NAME,
                    HODT_QTY = c.HODT_QTY,
                    HODT_SUM_INSURED = c.HODT_SUM_INSURED,
                    HODT_CRTE_BY = c.HODT_CRTE_BY,
                    HODT_CRTE_DATE = c.HODT_CRTE_DATE,
                    HODT_MOD_BY = c.HODT_MOD_BY,
                    HODT_MOD_DATE = c.HODT_MOD_DATE,
                    HODT_STATUS = c.HODT_STATUS
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }


        public static INS_UWD_POLICY_HEAD get_policy_estimation(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_SYS_ID == code select polh).ToList().Select(polh => new INS_UWD_POLICY_HEAD
                {
                    POLH_SYS_ID = polh.POLH_SYS_ID,
                    POLH_DOC_NO = polh.POLH_DOC_NO,
                    POLH_END_NO = polh.POLH_END_NO,
                    POLH_QUT_SER_NO = polh.POLH_QUT_SER_NO,
                    POLH_POL_SER_NO = polh.POLH_POL_SER_NO,
                    POLH_CLASS_CODE = polh.POLH_CLASS_CODE,
                    POLH_SUB_CLASS_CODE = polh.POLH_SUB_CLASS_CODE,
                    POLH_CHANNEL_CODE = polh.POLH_CHANNEL_CODE,
                    POLH_CMP_CODE = polh.POLH_CMP_CODE,
                    POLH_OFF_CODE = polh.POLH_OFF_CODE,
                    POLH_CUST_CODE = polh.POLH_CUST_CODE,
                    POLH_INS_SOURCE = polh.POLH_INS_SOURCE,
                    POLH_BIZ_SOURCE = polh.POLH_BIZ_SOURCE,
                    POLH_INTERMIDIARY = polh.POLH_INTERMIDIARY,
                    POLH_POL_START_DATE = polh.POLH_POL_START_DATE,
                    POLH_POL_END_DATE = polh.POLH_POL_END_DATE,
                    POLH_POL_DAYS = polh.POLH_POL_DAYS,
                    POLH_POL_UW_YEAR = polh.POLH_POL_UW_YEAR,
                    POLH_POL_SI_FC = polh.POLH_POL_SI_FC,
                    POLH_POL_SI_BC = polh.POLH_POL_SI_BC,
                    POLH_POL_PREM_FC = polh.POLH_POL_PREM_FC,
                    POLH_POL_PREM_BC = polh.POLH_POL_PREM_BC,
                    POLH_POL_COMM_FC = polh.POLH_POL_COMM_FC,
                    POLH_POL_COMM_BC = polh.POLH_POL_COMM_BC,
                    POLH_POL_DISC_FC = polh.POLH_POL_DISC_FC,
                    POLH_POL_DISC_BC = polh.POLH_POL_DISC_BC,
                    POLH_POL_LOAD_FC = polh.POLH_POL_LOAD_FC,
                    POLH_POL_LOAD_BC = polh.POLH_POL_LOAD_BC,
                    POLH_COINS_SI_FC = polh.POLH_COINS_SI_FC,
                    POLH_COINS_SI_BC = polh.POLH_COINS_SI_BC,
                    POLH_COINS_PREM_FC = polh.POLH_COINS_PREM_FC,
                    POLH_COINS_PREM_BC = polh.POLH_COINS_PREM_BC,
                    POLH_NET_SI_FC = polh.POLH_NET_SI_FC,
                    POLH_NET_SI_BC = polh.POLH_NET_SI_BC,
                    POLH_NET_PREM_FC = polh.POLH_NET_PREM_FC,
                    POLH_NET_PREM_BC = polh.POLH_NET_PREM_BC,
                    POLH_FEE_FC = polh.POLH_FEE_FC,
                    POLH_FEE_BC = polh.POLH_FEE_BC,
                    POLH_RENEW_SER_NO = polh.POLH_RENEW_SER_NO,
                    POLH_TXN_STATE = polh.POLH_TXN_STATE,
                    POLH_POL_STATE = polh.POLH_POL_STATE,
                    POLH_END_TYPE = polh.POLH_END_TYPE,
                    POLH_APPROVE_DATE = polh.POLH_APPROVE_DATE,
                    POLH_ACCT_DATE = polh.POLH_ACCT_DATE,
                    POLH_DISPLAY_NO = polh.POLH_DISPLAY_NO,
                    POLH_CRTE_BY = polh.POLH_CRTE_BY,
                    POLH_CRTE_DATE = polh.POLH_CRTE_DATE,
                    POLH_MOD_BY = polh.POLH_MOD_BY,
                    POLH_MOD_DATE = polh.POLH_MOD_DATE,
                    POLH_STATUS = polh.POLH_STATUS,
                    POLH_CURRENCY = polh.POLH_CURRENCY,
                    POLH_CURRENCY_RATE = polh.POLH_CURRENCY_RATE,

                }).Single();
            }
            catch (Exception e)
            {
                var exception = e;
                return null;
            }
        }

        public static IEnumerable<INS_UWD_POLICY_HEAD> get_policys_est()
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_CLASS_CODE == "BONDS" && polh.POLH_STATUS == "A" select polh.POLH_SYS_ID).ToList().Select(get_policy_estimation);
        }

        public static IEnumerable<object> search_policys_est(string q)
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD
                    where (polh.POLH_SYS_ID.ToString().Contains(q.ToLower())) && polh.POLH_STATUS == "A" && polh.POLH_CLASS_CODE == "BONDS"
                    select polh.POLH_SYS_ID).Select(get_policy);
        }

        public static IEnumerable<object> get_estimate_risk(int ProdCode)
        {
            var db = new SibaModel();
            try
            {
                return (from risk in db.INS_UDW_HOME_OWNERS
                        where risk.HOP_POLH_SYS_ID == ProdCode && risk.HOP_STATUS == "A"
                        select new
                        {
                            CLM_RISK_STATUS = risk.HOP_STATUS,
                            CLM_RISK_DESCRIPTION = risk.HOP_DESC,
                            CLM_RISK_PRINCIPAL = risk.HOP_SEC_NAME,
                            CLM_RISK_SI = risk.HOP_SUM_INSURED_FC,
                            CLM_EST_CRTE_BY = risk.HOP_CRTE_BY,
                            CLM_EST_CRTE_DATE = risk.HOP_CRTE_DATE
                        });

            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<INS_UWD_POLICY_HEAD> get_policys()
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_STATUS == "A" select polh.POLH_SYS_ID).ToList().Select(get_policy);
        }

        public static IEnumerable<object> search_policys(string q)
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD
                    where (polh.POLH_SYS_ID.ToString().Contains(q.ToLower())) && polh.POLH_STATUS == "A"
                    select polh.POLH_SYS_ID).ToList().Select(get_policy);
        }


        public static INS_UWD_POLICY_HEAD save_policy(INS_UWD_POLICY_HEAD viewPolh)
        {
            var db = new SibaModel();
            using (var trans = db.Database.BeginTransaction())
            {
                try
                {
                    var dbPolh = db.INS_UWD_POLICY_HEAD.Find(viewPolh.POLH_SYS_ID);
                    switch (viewPolh.POLH_STATUS)
                    {
                        case "A":
                            {
                                //policy header before update

                                if (dbPolh != null)
                                {
                                    //update of policy header details
                                    db.INS_UWD_POLICY_HEAD.Attach(dbPolh);
                                    dbPolh.Map(viewPolh);

                                    /*--------------------------------
                                     * Risk
                                     *-------------------------------*/

                                    foreach (var risk in viewPolh.INS_UDW_HOME_OWNERS)
                                    {
                                        var dbrisk = db.INS_UDW_HOME_OWNERS.Find(risk.HOP_SYS_ID);
                                        switch (risk.HOP_STATUS)
                                        {
                                            case "A":
                                                if (dbrisk != null)
                                                {
                                                    db.INS_UDW_HOME_OWNERS.Attach(dbrisk);
                                                    dbrisk.Map(risk);

                                                    /*--------------------------------
                                                    * Risk Covers
                                                    *-------------------------------*/
                                                    foreach (var cover in risk.INS_UWD_RISK_COVERS)
                                                    {
                                                        var dbcovers = db.INS_UWD_RISK_COVERS.Find(cover.RCOV_SYS_ID);
                                                        switch (cover.RCOV_STATUS)
                                                        {
                                                            case "A":
                                                                if (dbcovers != null)
                                                                {
                                                                    db.INS_UWD_RISK_COVERS.Attach(dbcovers);
                                                                    dbcovers.Map(cover);
                                                                    dbcovers.RCOV_MOD_DATE = DateTime.Now;
                                                                }
                                                                break;

                                                            case "U":
                                                                cover.RCOV_STATUS = "A";
                                                                cover.RCOV_MOD_DATE = DateTime.Now;
                                                                cover.RCOV_RISK_SYS_ID = risk.HOP_SYS_ID;
                                                                db.INS_UWD_RISK_COVERS.Add(cover);
                                                                break;

                                                            case "D":
                                                                if (dbcovers != null)
                                                                {
                                                                    db.INS_UWD_RISK_COVERS.Attach(dbcovers);
                                                                    dbcovers.RCOV_STATUS = "D";
                                                                    dbcovers.RCOV_MOD_DATE = DateTime.Now;
                                                                }
                                                                break;
                                                        }
                                                    }


                                                    /*--------------------------------
                                                    * Risk Details
                                                    *-------------------------------*/
                                                    foreach (var detail in risk.INS_UDW_HOME_OWNERS_DETAILS)
                                                    {
                                                        var dbdetails = db.INS_UDW_HOME_OWNERS_DETAILS.Find(detail.HODT_SYS_ID);
                                                        switch (detail.HODT_STATUS)
                                                        {
                                                            case "A":
                                                                if (dbdetails != null)
                                                                {
                                                                    db.INS_UDW_HOME_OWNERS_DETAILS.Attach(dbdetails);
                                                                    dbdetails.Map(detail);
                                                                    dbdetails.HODT_MOD_DATE = DateTime.Now;
                                                                }
                                                                break;

                                                            case "U":
                                                                detail.HODT_STATUS = "A";
                                                                detail.HODT_MOD_DATE = DateTime.Now;
                                                                detail.HODT_HOP_SYS_ID = risk.HOP_SYS_ID;
                                                                db.INS_UDW_HOME_OWNERS_DETAILS.Add(detail);
                                                                break;

                                                            case "D":
                                                                if (dbdetails != null)
                                                                {
                                                                    db.INS_UDW_HOME_OWNERS_DETAILS.Attach(dbdetails);
                                                                    dbdetails.HODT_STATUS = "D";
                                                                    dbdetails.HODT_MOD_DATE = DateTime.Now;
                                                                }
                                                                break;
                                                        }
                                                    }


                                                    /*--------------------------------
                                                     * Risk Fees
                                                     *-------------------------------*/
                                                    foreach (var fee in risk.INS_UDW_HOME_OWNERS_FEES)
                                                    {
                                                        var dbFee = db.INS_UDW_HOME_OWNERS_FEES.Find(fee.HOP_FEE_SYS_ID);
                                                        switch (fee.HOP_FEE_STATUS)
                                                        {
                                                            case "A":
                                                                if (dbFee != null)
                                                                {
                                                                    db.INS_UDW_HOME_OWNERS_FEES.Attach(dbFee);
                                                                    dbFee.Map(fee);
                                                                }

                                                                break;
                                                            case "U":
                                                                fee.HOP_FEE_STATUS = "A";
                                                                fee.HOP_FEE_RK_SYS_ID = risk.HOP_SYS_ID;
                                                                fee.HOP_FEE_POL_SYS_ID = viewPolh.POLH_SYS_ID;
                                                                db.INS_UDW_HOME_OWNERS_FEES.Add(fee);

                                                                break;
                                                            case "D":
                                                                db.INS_UDW_HOME_OWNERS_FEES.Remove(db.INS_UDW_HOME_OWNERS_FEES.Find(fee.HOP_FEE_SYS_ID));
                                                                break;
                                                        }

                                                    }

                                                }

                                                break;
                                            case "U":
                                                risk.HOP_STATUS = "A";
                                                risk.HOP_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UDW_HOME_OWNERS.Add(risk);
                                                break;
                                            case "D":
                                                db.INS_UDW_HOME_OWNERS.Remove(db.INS_UDW_HOME_OWNERS.Find(risk.HOP_SYS_ID));
                                                break;
                                        }

                                    }

                                    /*--------------------------------
                                    * Policy Fees
                                    *-------------------------------*/
                                    foreach (var fee in viewPolh.INS_UDW_POL_FEES)
                                    {
                                        var dbFee = db.INS_UDW_POL_FEES.Find(fee.POL_FEE_SYS_ID);
                                        switch (fee.POL_FEE_STATUS)
                                        {
                                            case "A":
                                                if (dbFee != null)
                                                {
                                                    db.INS_UDW_POL_FEES.Attach(dbFee);
                                                    dbFee.Map(fee);
                                                }

                                                break;
                                            case "U":
                                                fee.POL_FEE_STATUS = "A";
                                                fee.POL_FEE_POL_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UDW_POL_FEES.Add(fee);

                                                break;
                                            case "D":
                                                db.INS_UDW_POL_FEES.Remove(db.INS_UDW_POL_FEES.Find(fee.POL_FEE_SYS_ID));
                                                break;
                                        }

                                    }

                                    /*-------------------------------
                                    * FAC Inward/Co-insurance Member
                                    *-------------------------------*/
                                    foreach (var facIn in viewPolh.INS_RI_FAC_INWARD)
                                    {
                                        var dbFacIn = db.INS_RI_FAC_INWARD.Find(facIn.FINW_SYS_ID);
                                        switch (facIn.FINW_STATUS)
                                        {
                                            case "A":
                                                if (dbFacIn != null)
                                                {
                                                    db.INS_RI_FAC_INWARD.Attach(dbFacIn);
                                                    dbFacIn.Map(facIn);

                                                    /*----------------
                                                    * Participating Companies
                                                    *--------------*/
                                                    foreach (var pap in facIn.INS_RI_FAC_INW_COMPANY)
                                                    {
                                                        var dbcomp = db.INS_RI_FAC_INW_COMPANY.Find(pap.FINW_PAP_SYS_ID);

                                                        switch (pap.FINW_PAP_STATUS)
                                                        {
                                                            case "A":
                                                                if (dbcomp != null)
                                                                {
                                                                    db.INS_RI_FAC_INW_COMPANY.Attach(dbcomp);
                                                                    dbcomp.Map(pap);
                                                                }

                                                                break;

                                                            case "U":
                                                                pap.FINW_PAP_STATUS = "A";
                                                                db.INS_RI_FAC_INW_COMPANY.Add(pap);
                                                                break;

                                                            case "D":
                                                                db.INS_RI_FAC_INW_COMPANY.Remove(db.INS_RI_FAC_INW_COMPANY.Find(pap.FINW_PAP_SYS_ID));
                                                                break;
                                                        }

                                                    }


                                                }

                                                break;
                                            case "U":
                                                facIn.FINW_STATUS = "A";
                                                facIn.FINW_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_RI_FAC_INWARD.Add(facIn);

                                                break;
                                            case "D":
                                                db.INS_RI_FAC_INWARD.Remove(db.INS_RI_FAC_INWARD.Find(facIn.FINW_SYS_ID));
                                                break;
                                        }

                                    }


                                    /*-------------------------------
                                    * FAC Outward/Co-insurance Leader
                                    *--------------------------------*/
                                    foreach (var facout in viewPolh.INS_RI_FAC_OUTWARD)
                                    {
                                        var dbFacOut = db.INS_RI_FAC_OUTWARD.Find(facout.FOTW_SYS_ID);
                                        switch (facout.FOTW_STATUS)
                                        {
                                            case "A":
                                                if (dbFacOut != null)
                                                {
                                                    db.INS_RI_FAC_OUTWARD.Attach(dbFacOut);
                                                    dbFacOut.Map(facout);
                                                }

                                                break;
                                            case "U":
                                                facout.FOTW_STATUS = "A";
                                                facout.FOTW_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_RI_FAC_OUTWARD.Add(dbFacOut);

                                                break;
                                            case "D":
                                                db.INS_RI_FAC_OUTWARD.Remove(db.INS_RI_FAC_OUTWARD.Find(facout.FOTW_SYS_ID));
                                                break;
                                        }

                                    }

                                    //db.SaveChanges();
                                }
                            }

                            break;
                        case "U":

                            viewPolh.POLH_STATUS = "A";
                            viewPolh.POLH_DISPLAY_NO = viewPolh.POLH_CMP_CODE + viewPolh.POLH_SUB_CLASS_CODE + viewPolh.POLH_SYS_ID;
                            viewPolh.POLH_QUT_SER_NO = viewPolh.POLH_SYS_ID;

                            /*-----------------------------------------
                             * updating the status of related tables
                             *---------------------------------------*/
                            viewPolh.INS_UDW_HOME_OWNERS.ForEach(x => {
                                x.HOP_STATUS = "A";
                                x.INS_UWD_RISK_COVERS.ForEach(c => c.RCOV_STATUS = "A");
                                x.INS_UDW_HOME_OWNERS_DETAILS.ForEach(c => c.HODT_STATUS = "A");
                                x.INS_UDW_HOME_OWNERS_FEES.ForEach(c => c.HOP_FEE_STATUS = "A");
                            });

                            db.INS_UWD_POLICY_HEAD.Add(viewPolh);

                            db.SaveChanges();

                            /*---------------------------------
                             * create premium register record
                             *-------------------------------*/

                            db.INS_PREMIUM_REGISTER.Add(new INS_PREMIUM_REGISTER
                            {
                                PR_ACCT_YN = "Y",
                                PR_BC_AMOUNT = viewPolh.POLH_POL_PREM_BC,
                                PR_BUS_SOURCE = viewPolh.POLH_BIZ_SOURCE,
                                PR_COB = viewPolh.POLH_CLASS_CODE,
                                PR_CRTE_BY = viewPolh.POLH_CRTE_BY,
                                PR_CRTE_DATE = DateTime.Now.Date,
                                PR_CURRENCY = viewPolh.POLH_CURRENCY,
                                PR_CUST_ACCT = CustomerMdl.get_customer(viewPolh.POLH_CUST_CODE).CUS_TYPE_CODE,
                                PR_CUST_CODE = viewPolh.POLH_CUST_CODE,
                                PR_END_NO = (int?)viewPolh.POLH_END_NO,
                                PR_FC_AMOUNT = viewPolh.POLH_POL_PREM_FC,
                                PR_FX_RATE = viewPolh.POLH_CURRENCY_RATE,
                                PR_INS_SOURCE = viewPolh.POLH_INS_SOURCE,
                                PR_OFFICE = viewPolh.POLH_OFF_CODE,
                                PR_POL_SYS_ID = viewPolh.POLH_SYS_ID,
                                PR_POST_DATE = null,
                                PR_STATUS = "A",
                                PR_TTY_SOURCE = null,
                                PR_TXN_REF = (int)SystemConstants.UnderwritingPremium,
                                PR_UWD_ACCT_TYPE = viewPolh.POLH_INS_SOURCE
                            });                            

                            break;
                        case "D":
                            {
                                /*--------------------------
                                 * update of policy details
                                 *------------------------*/
                                //
                                if (dbPolh != null)
                                {
                                    db.INS_UWD_POLICY_HEAD.Attach(dbPolh);
                                    dbPolh.POLH_STATUS = "D";
                                }

                            }
                            break;
                    }
                    db.SaveChanges();
                    trans.Commit();
                    return new INS_UWD_POLICY_HEAD
                    {
                        POLH_SYS_ID = viewPolh.POLH_SYS_ID,
                        POLH_END_NO = viewPolh.POLH_END_NO,
                        POLH_STATUS = viewPolh.POLH_STATUS,
                        POLH_POL_STATE = viewPolh.POLH_POL_STATE,
                        POLH_TXN_STATE = viewPolh.POLH_TXN_STATE,
                        POLH_DISPLAY_NO = viewPolh.POLH_DISPLAY_NO,
                        POLH_QUT_SER_NO = viewPolh.POLH_QUT_SER_NO
                    };
                }
                catch (Exception)
                {
                    trans.Rollback();
                    throw;
                }
            }

        }


        public static INS_UWD_POLICY_HEAD SaveEndsmntCancl(INS_UWD_POLICY_HEAD viewPolh)
        {
            var db = new SibaModel();
            var dbPolh = db.INS_UWD_POLICY_HEAD.Find(viewPolh.POLH_SYS_ID);
            if (dbPolh != null)
            {
                //update of policy header details

                dbPolh.Map(viewPolh);

                /*----------------
                 * risk update
                 *--------------*/
                foreach (var risk in viewPolh.INS_UDW_HOME_OWNERS)
                {
                    var dbrisk = db.INS_UDW_HOME_OWNERS.Find(risk.HOP_SYS_ID);
                    switch (risk.HOP_STATUS)
                    {
                        case "A":
                            if (dbrisk != null)
                            {
                                db.INS_UDW_HOME_OWNERS.Attach(dbrisk);
                                dbrisk.Map(risk);
                            }

                            break;
                        case "U":
                            risk.HOP_STATUS = "A";
                            risk.HOP_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                            db.INS_UDW_HOME_OWNERS.Add(risk);

                            break;
                        case "D":
                            db.INS_UDW_HOME_OWNERS.Remove(db.INS_UDW_HOME_OWNERS.Find(risk.HOP_SYS_ID));
                            break;
                    }

                }

                foreach (var fee in viewPolh.INS_UDW_POL_FEES)
                {
                    var dbFee = db.INS_UDW_POL_FEES.Find(fee.POL_FEE_SYS_ID);
                    switch (fee.POL_FEE_STATUS)
                    {
                        case "A":
                            if (dbFee != null)
                            {
                                db.INS_UDW_POL_FEES.Attach(dbFee);
                                dbFee.Map(fee);
                            }

                            break;
                        case "U":
                            fee.POL_FEE_STATUS = "A";
                            fee.POL_FEE_POL_SYS_ID = viewPolh.POLH_SYS_ID;
                            db.INS_UDW_POL_FEES.Add(fee);

                            break;
                        case "D":
                            db.INS_UDW_POL_FEES.Remove(db.INS_UDW_POL_FEES.Find(fee.POL_FEE_SYS_ID));
                            break;
                    }


                }

            }
            db.SaveChanges();
            return viewPolh;
        }

    }
}