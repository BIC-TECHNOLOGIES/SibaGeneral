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
    public class PolicyGATransitMdl : Model
    {

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

                    INS_UDW_GA_TRANSIT = polh.INS_UDW_GA_TRANSIT != null ? polh.INS_UDW_GA_TRANSIT.Select(r => get_ga(r.TRANS_SYS_ID)).ToList() : null,

                }).Single();
            }
            catch (Exception e)
            {
                return null;
            }
        }


        public static INS_UDW_GA_TRANSIT get_ga(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.INS_UDW_GA_TRANSIT where c.TRANS_SYS_ID == code select c).ToList().Select(c => new INS_UDW_GA_TRANSIT
                {
                    TRANS_SYS_ID = c.TRANS_SYS_ID,
                    TRANS_RISK_ID = c.TRANS_RISK_ID,
                    TRANS_POLH_SYS_ID = c.TRANS_POLH_SYS_ID,
                    TRANS_POLH_END_NO = c.TRANS_POLH_END_NO,
                    TRANS_AREA_CODE = c.TRANS_AREA_CODE,
                    TRANS_AREA_NAME = c.TRANS_AREA_NAME,
                    TRANS_REGION_CODE = c.TRANS_REGION_CODE,
                    TRANS_REGION_NAME = c.TRANS_REGION_NAME,
                    TRANS_LOC_CODE = c.TRANS_LOC_CODE,
                    TRANS_LOC_NAME = c.TRANS_LOC_NAME,
                    TRANS_LOC_ADDRS = c.TRANS_LOC_ADDRS,
                    TRANS_LOC_DESC = c.TRANS_LOC_DESC,
                    TRANS_ADJ_PREM_BC = c.TRANS_ADJ_PREM_BC,
                    TRANS_ADJ_PREM_FC = c.TRANS_ADJ_PREM_FC,
                    TRANS_ANN_TURNOVER_BC = c.TRANS_ANN_TURNOVER_BC,
                    TRANS_ANN_TURNOVER_FC = c.TRANS_ANN_TURNOVER_FC,
                    TRANS_COMMISSION_BC = c.TRANS_COMMISSION_BC,
                    TRANS_COMMISSION_FC = c.TRANS_COMMISSION_FC,
                    TRANS_CURRENCY = c.TRANS_CURRENCY,
                    TRANS_CURR_RATE = c.TRANS_CURR_RATE,
                    TRANS_CVR_CODE = c.TRANS_CVR_CODE,
                    TRANS_DISC_BC = c.TRANS_DISC_BC,
                    TRANS_DISC_FC = c.TRANS_DISC_FC,
                    TRANS_LOAD_BC = c.TRANS_LOAD_BC,
                    TRANS_LOAD_FC = c.TRANS_LOAD_FC,
                    TRANS_PERIOD_DAYS = c.TRANS_PERIOD_DAYS,
                    TRANS_POLH_DOC_NO = c.TRANS_POLH_DOC_NO,
                    TRANS_PREMIUM_BC = c.TRANS_PREMIUM_BC,
                    TRANS_PREMIUM_FC = c.TRANS_PREMIUM_FC,
                    TRANS_RISK_PREM_BC = c.TRANS_RISK_PREM_BC,
                    TRANS_RISK_PREM_FC = c.TRANS_RISK_PREM_FC,
                    TRANS_SI_BC = c.TRANS_SI_BC,
                    TRANS_SI_FC = c.TRANS_SI_FC,
                    TRANS_RI_SI_BC = c.TRANS_RI_SI_BC,
                    TRANS_RI_SI_FC = c.TRANS_RI_SI_FC,
                    TRANS_TOT_PREM_BC = c.TRANS_TOT_PREM_BC,
                    TRANS_TOT_PREM_FC = c.TRANS_TOT_PREM_FC,
                    TRANS_RENEWAL_STATUS = c.TRANS_RENEWAL_STATUS,
                    TRANS_RISK_NO = c.TRANS_RISK_NO,
                    TRANS_RISK_STATE = c.TRANS_RISK_STATE,
                    TRANS_RI_PREM_BC = c.TRANS_RI_PREM_BC,
                    TRANS_TXN_STATUS = c.TRANS_TXN_STATUS,
                    TRANS_START_DATE = c.TRANS_START_DATE,
                    TRANS_RISK_NAME = c.TRANS_RISK_NAME,
                    TRANS_DISTANCE = c.TRANS_DISTANCE,
                    TRANS_DENT_FROM = c.TRANS_DENT_FROM,
                    TRANS_DENT_T0 = c.TRANS_DENT_T0,
                    TRANS_EARTHQ_ZONE = c.TRANS_EARTHQ_ZONE,
                    TRANS_LIMIT_LOSS_BC = c.TRANS_LIMIT_LOSS_BC,
                    TRANS_LIMIT_LOSS_FC = c.TRANS_LIMIT_LOSS_FC,
                    TRANS_PDT_CODE = c.TRANS_PDT_CODE,
                    TRANS_COMP_FEE_BC = c.TRANS_COMP_FEE_BC,
                    TRANS_COMP_FEE_FC = c.TRANS_COMP_FEE_FC,
                    TRANS_RI_PREM_FC = c.TRANS_RI_PREM_FC,
                    TRANS_SUM_INSURED_BC = c.TRANS_SUM_INSURED_BC,
                    TRANS_SUM_INSURED_FC = c.TRANS_SUM_INSURED_FC,
                    TRANS_ACCT_DATE = c.TRANS_ACCT_DATE,
                    TRANS_UW_YEAR = c.TRANS_UW_YEAR,
                    TRANS_RISK_TYPE = c.TRANS_RISK_TYPE,
                    TRANS_END_DATE = c.TRANS_END_DATE,
                    TRANS_END_TYPE = c.TRANS_END_TYPE,
                    TRANS_CRTE_BY = c.TRANS_CRTE_BY,
                    TRANS_CRTE_DATE = c.TRANS_CRTE_DATE,
                    TRANS_STATUS = c.TRANS_STATUS,
                    INS_UWD_RISK_COVERS = c.INS_UWD_RISK_COVERS != null ? c.INS_UWD_RISK_COVERS.Select(x => PolicyRiskCovers.get_riskcovers(x.RCOV_SYS_ID)).ToList() : null
                }).Single();
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
            return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_CLASS_CODE == "G/A" && polh.POLH_STATUS == "A" select polh.POLH_SYS_ID).ToList().Select(get_policy_estimation);
        }

        public static IEnumerable<object> search_policys_est(string q)
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD
                    where (polh.POLH_SYS_ID.ToString().Contains(q.ToLower())) && polh.POLH_STATUS == "A" && polh.POLH_CLASS_CODE == "G/A"
                    select polh.POLH_SYS_ID).Select(get_policy);
        }

        public static IEnumerable<object> get_estimate_risk(int ProdCode)
        {
            var db = new SibaModel();
            try
            {
                return (from risk in db.INS_UDW_GA_PROF_INDEMNITY
                        where risk.PRO_POLH_SYS_ID == ProdCode && risk.PRO_STATUS == "A"
                        select new
                        {
                            CLM_RISK_STATUS = risk.PRO_STATUS,
                            CLM_RISK_DESCRIPTION = risk.PRO_ITEM_DESC,
                            CLM_RISK_PRINCIPAL = risk.PRO_ITEM,
                            CLM_RISK_SI = risk.PRO_SI_FC,
                            CLM_EST_CRTE_BY = risk.PRO_CRTE_BY,
                            CLM_EST_CRTE_DATE = risk.PRO_CRTE_DATE
                        });

            }
            catch (Exception)
            {
                return null;
            }
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


                                    foreach (var risk in viewPolh.INS_UDW_GA_TRANSIT)
                                    {
                                        var dbrisk = db.INS_UDW_GA_TRANSIT.Find(risk.TRANS_SYS_ID);
                                        switch (risk.TRANS_STATUS)
                                        {
                                            case "A":
                                                if (dbrisk != null)
                                                {
                                                    db.INS_UDW_GA_TRANSIT.Attach(dbrisk);
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
                                                                cover.RCOV_RISK_SYS_ID = risk.TRANS_SYS_ID;
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
                                                    foreach (var fees in risk.INS_UDW_GA_RISK_FEES)
                                                    {
                                                        var dbrkfees = db.INS_UDW_GA_RISK_FEES.Find(fees.GAR_FEE_SYS_ID);
                                                        switch (fees.GAR_FEE_STATUS)
                                                        {
                                                            case "A":
                                                                if (dbrkfees != null)
                                                                {
                                                                    db.INS_UDW_GA_RISK_FEES.Attach(dbrkfees);
                                                                    dbrkfees.Map(fees);
                                                                }
                                                                break;

                                                            case "U":
                                                                fees.GAR_FEE_STATUS = "A";
                                                                fees.GAR_FEE_CRTE_DATE = DateTime.Now;
                                                                fees.GAR_FEE_RK_SYS_ID = risk.TRANS_SYS_ID;
                                                                db.INS_UDW_GA_RISK_FEES.Add(fees);
                                                                break;

                                                            case "D":
                                                                if (dbrkfees != null)
                                                                {
                                                                    db.INS_UDW_GA_RISK_FEES.Attach(dbrkfees);
                                                                    dbrkfees.GAR_FEE_STATUS = "D";
                                                                }
                                                                break;
                                                        }
                                                    }

                                                }

                                                break;
                                            case "U":
                                                risk.TRANS_STATUS = "A";
                                                risk.TRANS_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UDW_GA_TRANSIT.Add(risk);
                                                break;
                                            case "D":
                                                db.INS_UDW_GA_TRANSIT.Remove(db.INS_UDW_GA_TRANSIT.Find(risk.TRANS_SYS_ID));
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

                            viewPolh.INS_UDW_GA_TRANSIT.ForEach(x => {
                                x.TRANS_STATUS = "A";
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
                            db.SaveChanges();

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

    }
}