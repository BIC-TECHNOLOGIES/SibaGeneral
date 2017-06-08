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
    public class PolicyLiabilityWksCompMdl : Model
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
                    INS_UDW_LIABILITY_WKS_COMP = polh.INS_UDW_LIABILITY_WKS_COMP != null ? polh.INS_UDW_LIABILITY_WKS_COMP.Select(r => get_riskd(r.LIAWOC_SYS_ID)).ToList() : null,


                }).Single();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static INS_UDW_LIABILITY_WKS_COMP get_riskd(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.INS_UDW_LIABILITY_WKS_COMP where c.LIAWOC_SYS_ID == code select c).ToList().Select(c => new INS_UDW_LIABILITY_WKS_COMP
                {
                    LIAWOC_SYS_ID = c.LIAWOC_SYS_ID,
                    LIAWOC_OBJECT = c.LIAWOC_OBJECT,
                    LIAWOC_OBJECT_NAME = c.LIAWOC_OBJECT_NAME,
                    LIAWOC_ADDRESS = c.LIAWOC_ADDRESS,
                    LIAWOC_FLOATER = c.LIAWOC_FLOATER,
                    LIAWOC_SAL_SLAB = c.LIAWOC_SAL_SLAB,
                    LIAWOC_GEO_LIM = c.LIAWOC_GEO_LIM,
                    LIAWOC_NO_PERSONS = c.LIAWOC_NO_PERSONS,
                    LIAWOC_NO_YEARS = c.LIAWOC_NO_YEARS,
                    LIAWOC_SAL_MONTH = c.LIAWOC_SAL_MONTH,
                    LIAWOC_ADD_MONTH_BENF = c.LIAWOC_ADD_MONTH_BENF,
                    LIAWOC_LABR_TYPE = c.LIAWOC_LABR_TYPE,
                    LIAWOC_ANN_WAGES_BC = c.LIAWOC_ANN_WAGES_BC,
                    LIAWOC_ANN_WAGES_FC = c.LIAWOC_ANN_WAGES_FC,
                    LIAWOC_PREMIUM_BC = c.LIAWOC_PREMIUM_BC,
                    LIAWOC_PREMIUM_FC = c.LIAWOC_PREMIUM_FC,
                    LIAWOC_CURRENCY = c.LIAWOC_CURRENCY,
                    LIAWOC_CURRENCY_RATE = c.LIAWOC_CURRENCY_RATE,
                    LIAWOC_TOT_PREM_BC = c.LIAWOC_TOT_PREM_BC,
                    LIAWOC_TOT_PREM_FC = c.LIAWOC_TOT_PREM_FC,
                    LIAWOC_SI_BC = c.LIAWOC_SI_BC,
                    LIAWOC_SI_FC = c.LIAWOC_SI_FC,
                    LIAWOC_RISK_PREM_BC = c.LIAWOC_RISK_PREM_BC,
                    LIAWOC_RISK_PREM_FC = c.LIAWOC_RISK_PREM_FC,
                    LIAWOC_ADJ_PREM_BC = c.LIAWOC_ADJ_PREM_BC,
                    LIAWOC_ADJ_PREM_FC = c.LIAWOC_ADJ_PREM_FC,
                    LIAWOC_DISC_BC = c.LIAWOC_DISC_BC,
                    LIAWOC_DISC_FC = c.LIAWOC_DISC_FC,
                    LIAWOC_LOAD_BC = c.LIAWOC_LOAD_BC,
                    LIAWOC_LOAD_FC = c.LIAWOC_LOAD_FC,
                    LIAWOC_COMP_FEE_BC = c.LIAWOC_COMP_FEE_BC,
                    LIAWOC_COMP_FEE_FC = c.LIAWOC_COMP_FEE_FC,
                    LIAWOC_COMMISSION_BC = c.LIAWOC_COMMISSION_BC,
                    LIAWOC_COMMISSION_FC = c.LIAWOC_COMMISSION_FC,
                    LIAWOC_TXN_STATUS = c.LIAWOC_TXN_STATUS,
                    LIAWOC_RISK_STATE = c.LIAWOC_RISK_STATE,
                    LIAWOC_RISK_ID = c.LIAWOC_RISK_ID,
                    LIAWOC_POLH_END_NO = c.LIAWOC_POLH_END_NO,
                    LIAWOC_PDT_CODE = c.LIAWOC_PDT_CODE,
                    LIAWOC_CVR_CODE = c.LIAWOC_CVR_CODE,
                    LIAWOC_RENEWAL_STATUS = c.LIAWOC_RENEWAL_STATUS,
                    LIAWOC_END_TYPE = c.LIAWOC_END_TYPE,
                    LIAWOC_CRTE_BY = c.LIAWOC_CRTE_BY,
                    LIAWOC_MOD_BY = c.LIAWOC_MOD_BY,
                    LIAWOC_STATUS = c.LIAWOC_STATUS,
                    LIAWOC_PERIOD_DAYS = c.LIAWOC_PERIOD_DAYS,
                    LIAWOC_UW_YEAR = c.LIAWOC_UW_YEAR,
                    LIAWOC_RI_SI_BC = c.LIAWOC_RI_SI_BC,
                    LIAWOC_RI_SI_FC = c.LIAWOC_RI_SI_FC,
                    LIAWOC_RI_PREM_BC = c.LIAWOC_RI_PREM_BC,
                    LIAWOC_RI_PREM_FC = c.LIAWOC_RI_PREM_FC,
                    LIAWOC_START_DATE = c.LIAWOC_START_DATE,
                    LIAWOC_END_DATE = c.LIAWOC_END_DATE,
                    INS_UWD_RISK_COVERS = c.INS_UWD_RISK_COVERS != null ? c.INS_UWD_RISK_COVERS.Select(x => PolicyRiskCovers.get_riskcovers(x.RCOV_SYS_ID)).ToList() : null
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
            return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_CLASS_CODE == "LIABIL" && polh.POLH_STATUS == "A" select polh.POLH_SYS_ID).ToList().Select(get_policy_estimation);
        }

        public static IEnumerable<object> search_policys_est(string q)
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD
                    where (polh.POLH_SYS_ID.ToString().Contains(q.ToLower())) && polh.POLH_STATUS == "A" && polh.POLH_CLASS_CODE == "LIABIL"
                    select polh.POLH_SYS_ID).Select(get_policy);
        }

        public static IEnumerable<object> get_estimate_risk(int ProdCode)
        {
            var db = new SibaModel();
            try
            {
                return (from risk in db.INS_UDW_LIABILITY_WKS_COMP
                        where risk.LIAWOC_POLH_SYS_ID == ProdCode && risk.LIAWOC_STATUS == "A"
                        select new
                        {
                            CLM_RISK_STATUS = risk.LIAWOC_STATUS,
                            CLM_RISK_DESCRIPTION = risk.LIAWOC_OBJECT_NAME,
                            CLM_RISK_PRINCIPAL = risk.LIAWOC_OBJECT,
                            CLM_RISK_SI = risk.LIAWOC_SI_BC,
                            CLM_EST_CRTE_BY = risk.LIAWOC_CRTE_BY,
                            CLM_EST_CRTE_DATE = risk.LIAWOC_CRTE_DATE
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

                                    foreach (var risk in viewPolh.INS_UDW_LIABILITY_WKS_COMP)
                                    {
                                        var dbrisk = db.INS_UDW_LIABILITY_WKS_COMP.Find(risk.LIAWOC_SYS_ID);
                                        switch (risk.LIAWOC_STATUS)
                                        {
                                            case "A":
                                                if (dbrisk != null)
                                                {
                                                    db.INS_UDW_LIABILITY_WKS_COMP.Attach(dbrisk);
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
                                                                cover.RCOV_RISK_SYS_ID = risk.LIAWOC_SYS_ID;
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
                                                    * Risk Fees
                                                    *-------------------------------*/
                                                    foreach (var fees in risk.INS_UDW_LIABILITY_FEES)
                                                    {
                                                        var dbrkfees = db.INS_UDW_LIABILITY_FEES.Find(fees.LIA_FEE_SYS_ID);
                                                        switch (fees.LIA_FEE_STATUS)
                                                        {
                                                            case "A":
                                                                if (dbrkfees != null)
                                                                {
                                                                    db.INS_UDW_LIABILITY_FEES.Attach(dbrkfees);
                                                                    dbrkfees.Map(fees);
                                                                }
                                                                break;

                                                            case "U":
                                                                fees.LIA_FEE_STATUS = "A";
                                                                fees.LIA_FEE_CRTE_DATE = DateTime.Now;
                                                                fees.LIA_FEE_RK_SYS_ID = risk.LIAWOC_SYS_ID;
                                                                db.INS_UDW_LIABILITY_FEES.Add(fees);
                                                                break;

                                                            case "D":
                                                                if (dbrkfees != null)
                                                                {
                                                                    db.INS_UDW_LIABILITY_FEES.Attach(dbrkfees);
                                                                    dbrkfees.LIA_FEE_STATUS = "D";
                                                                }
                                                                break;
                                                        }
                                                    }

                                                }

                                                break;
                                            case "U":
                                                risk.LIAWOC_STATUS = "A";
                                                risk.LIAWOC_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UDW_LIABILITY_WKS_COMP.Add(risk);
                                                break;
                                            case "D":
                                                db.INS_UDW_LIABILITY_WKS_COMP.Remove(db.INS_UDW_LIABILITY_WKS_COMP.Find(risk.LIAWOC_SYS_ID));
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

                                    /*--------------------------------
                                    * Risk Fees
                                    *-------------------------------*/
                                    foreach (var fees in viewPolh.INS_UDW_BOND_FEES)
                                    {
                                        var dbrkfees = db.INS_UDW_BOND_FEES.Find(fees.BOND_FEE_SYS_ID);
                                        switch (fees.BOND_FEE_STATUS)
                                        {
                                            case "A":
                                                if (dbrkfees != null)
                                                {
                                                    db.INS_UDW_BOND_FEES.Attach(dbrkfees);
                                                    dbrkfees.Map(fees);
                                                }
                                                break;

                                            case "U":
                                                fees.BOND_FEE_STATUS = "A";
                                                fees.BOND_FEE_CRTE_DATE = DateTime.Now;
                                                fees.BOND_FEE_POL_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UDW_BOND_FEES.Add(fees);
                                                break;

                                            case "D":
                                                if (dbrkfees != null)
                                                {
                                                    db.INS_UDW_BOND_FEES.Attach(dbrkfees);
                                                    dbrkfees.BOND_FEE_STATUS = "D";
                                                }
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
                                                        var dbcover = db.INS_RI_FAC_INW_COMPANY.Find(pap.FINW_PAP_SYS_ID);

                                                        switch (pap.FINW_PAP_STATUS)
                                                        {
                                                            case "A":
                                                                if (dbcover != null)
                                                                {
                                                                    db.INS_RI_FAC_INW_COMPANY.Attach(dbcover);
                                                                    dbcover.Map(pap);
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
                            viewPolh.INS_UDW_LIABILITY_WKS_COMP.ForEach(x => {
                                x.LIAWOC_STATUS = "A";
                                x.INS_UWD_RISK_COVERS.ForEach(c => c.RCOV_STATUS = "A");
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
                foreach (var risk in viewPolh.INS_UDW_LIABILITY_WKS_COMP)
                {
                    var dbrisk = db.INS_UDW_LIABILITY_WKS_COMP.Find(risk.LIAWOC_SYS_ID);
                    switch (risk.LIAWOC_STATUS)
                    {
                        case "A":
                            if (dbrisk != null)
                            {
                                db.INS_UDW_LIABILITY_WKS_COMP.Attach(dbrisk);
                                dbrisk.Map(risk);
                            }

                            break;
                        case "U":
                            risk.LIAWOC_STATUS = "A";
                            risk.LIAWOC_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                            db.INS_UDW_LIABILITY_WKS_COMP.Add(risk);

                            break;
                        case "D":
                            db.INS_UDW_LIABILITY_WKS_COMP.Remove(db.INS_UDW_LIABILITY_WKS_COMP.Find(risk.LIAWOC_SYS_ID));
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