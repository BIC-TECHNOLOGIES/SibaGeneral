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
    public class PolicyPaMdl : Model
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
                    INS_UDW_PERSONAL_ACCIDENT = polh.INS_UDW_PERSONAL_ACCIDENT != null ? polh.INS_UDW_PERSONAL_ACCIDENT.Select(r => get_risk(r.PA_SYS_ID)).ToList() : null,
                }).Single();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static INS_UDW_PERSONAL_ACCIDENT get_risk(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.INS_UDW_PERSONAL_ACCIDENT where c.PA_SYS_ID == code select c).ToList().Select(c => new INS_UDW_PERSONAL_ACCIDENT
                {
                    PA_SYS_ID = c.PA_SYS_ID,
                    PA_POLH_SYS_ID = c.PA_POLH_SYS_ID,
                    PA_POLH_DOC_NO = c.PA_POLH_DOC_NO,
                    PA_POLH_END_NO = c.PA_POLH_END_NO,
                    PA_ACCT_DATE = c.PA_ACCT_DATE,
                    PA_ADJ_PREM_BC = c.PA_ADJ_PREM_BC,
                    PA_ADJ_PREM_FC = c.PA_ADJ_PREM_FC,
                    PA_AGE = c.PA_AGE,
                    PA_ANN_BENCOV = c.PA_ANN_BENCOV,
                    PA_ANN_SALARY = c.PA_ANN_SALARY,
                    PA_APPROVE_DATE = c.PA_APPROVE_DATE,
                    PA_COMMISSION_BC = c.PA_COMMISSION_BC,
                    PA_COMMISSION_FC = c.PA_COMMISSION_FC,
                    PA_COMP_FEE_BC = c.PA_COMP_FEE_BC,
                    PA_COMP_FEE_FC = c.PA_COMP_FEE_FC,
                    PA_CURRENCY = c.PA_CURRENCY,
                    PA_CURRENCY_RATE = c.PA_CURRENCY_RATE,
                    PA_DAYS = c.PA_DAYS,
                    PA_DESCRIPTION = c.PA_DESCRIPTION,
                    PA_DISC_BC = c.PA_DISC_BC,
                    PA_DISC_FC = c.PA_DISC_FC,
                    PA_DOB = c.PA_DOB,
                    PA_CVR_CODE = c.PA_CVR_CODE,
                    PA_EARNING = c.PA_EARNING,
                    PA_END_DATE = c.PA_END_DATE,
                    PA_END_TYPE = c.PA_END_TYPE,
                    PA_EXCLUSIONS = c.PA_EXCLUSIONS,
                    PA_GENDER = c.PA_GENDER,
                    PA_GRP_ID = c.PA_GRP_ID,
                    PA_GRP_NAME = c.PA_GRP_NAME,
                    PA_JOB_TYPE = c.PA_JOB_TYPE,
                    PA_ISSUE_DATE = c.PA_ISSUE_DATE,
                    PA_LIM_EVENTS = c.PA_LIM_EVENTS,
                    PA_LIM_LIFE = c.PA_LIM_LIFE,
                    PA_LOAD_BC = c.PA_LOAD_BC,
                    PA_LOAD_FC = c.PA_LOAD_FC,
                    PA_MONTHLY_INCOME = c.PA_MONTHLY_INCOME,
                    PA_NAME_INSURED = c.PA_NAME_INSURED,
                    PA_NAME_NOMINEE = c.PA_NAME_NOMINEE,
                    PA_NUM_PERSONS = c.PA_NUM_PERSONS,
                    PA_OCCUPATION = c.PA_OCCUPATION,
                    PA_PDT_CODE = c.PA_PDT_CODE,
                    PA_RATE = c.PA_RATE,
                    PA_RELATION = c.PA_RELATION,
                    PA_RENEWAL_STATUS = c.PA_RENEWAL_STATUS,
                    PA_RISK_CLASSCODE = c.PA_RISK_CLASSCODE,
                    PA_RISK_CLASSNAME = c.PA_RISK_CLASSNAME,
                    PA_RISK_ID = c.PA_RISK_ID,
                    PA_RISK_NO = c.PA_RISK_NO,
                    PA_RISK_PREM_BC = c.PA_RISK_PREM_BC,
                    PA_RISK_PREM_FC = c.PA_RISK_PREM_FC,
                    PA_RISK_STATE = c.PA_RISK_STATE,
                    PA_RISK_TYPE = c.PA_RISK_TYPE,
                    PA_RI_PREM_BC = c.PA_RI_PREM_BC,
                    PA_RI_PREM_FC = c.PA_RI_PREM_FC,
                    PA_RI_SI_BC = c.PA_RI_SI_BC,
                    PA_RI_SI_FC = c.PA_RI_SI_FC,
                    PA_SI_BC = c.PA_SI_BC,
                    PA_SI_FC = c.PA_SI_FC,
                    PA_TFE_SALARY = c.PA_TFE_SALARY,
                    PA_TOT_PREM_BC = c.PA_TOT_PREM_BC,
                    PA_TOT_PREM_FC = c.PA_TOT_PREM_FC,
                    PA_TXN_STATUS = c.PA_TXN_STATUS,
                    PA_WEEKLY_BENEFIT = c.PA_WEEKLY_BENEFIT,
                    PA_UW_YEAR = c.PA_UW_YEAR,
                    PA_WEEKS = c.PA_WEEKS,
                    PA_RETRO_DATE = c.PA_RETRO_DATE,
                    PA_START_DATE = c.PA_START_DATE,
                    PA_CRTE_BY = c.PA_CRTE_BY,
                    PA_CRTE_DATE = c.PA_CRTE_DATE,
                    PA_MOD_BY = c.PA_MOD_BY,
                    PA_MOD_DATE = c.PA_MOD_DATE,
                    PA_STATUS = c.PA_STATUS,
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


                                    foreach (var risk in viewPolh.INS_UDW_PERSONAL_ACCIDENT)
                                    {
                                        var dbrisk = db.INS_UDW_PERSONAL_ACCIDENT.Find(risk.PA_SYS_ID);
                                        switch (risk.PA_STATUS)
                                        {
                                            case "A":
                                                if (dbrisk != null)
                                                {
                                                    db.INS_UDW_PERSONAL_ACCIDENT.Attach(dbrisk);
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
                                                                cover.RCOV_RISK_SYS_ID = risk.PA_SYS_ID;
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
                                                    foreach (var fees in risk.INS_UDW_PA_FEES)
                                                    {
                                                        var dbrkfees = db.INS_UDW_PA_FEES.Find(fees.PA_FEE_SYS_ID);
                                                        switch (fees.PA_FEE_STATUS)
                                                        {
                                                            case "A":
                                                                if (dbrkfees != null)
                                                                {
                                                                    db.INS_UDW_PA_FEES.Attach(dbrkfees);
                                                                    dbrkfees.Map(fees);
                                                                }
                                                                break;

                                                            case "U":
                                                                fees.PA_FEE_STATUS = "A";
                                                                fees.PA_FEE_CRTE_DATE = DateTime.Now;
                                                                fees.PA_FEE_RK_SYS_ID = risk.PA_SYS_ID;
                                                                db.INS_UDW_PA_FEES.Add(fees);
                                                                break;

                                                            case "D":
                                                                if (dbrkfees != null)
                                                                {
                                                                    db.INS_UDW_PA_FEES.Attach(dbrkfees);
                                                                    dbrkfees.PA_FEE_STATUS = "D";
                                                                }
                                                                break;
                                                        }
                                                    }

                                                }

                                                break;
                                            case "U":
                                                risk.PA_STATUS = "A";
                                                risk.PA_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UDW_PERSONAL_ACCIDENT.Add(risk);
                                                break;
                                            case "D":
                                                db.INS_UDW_PERSONAL_ACCIDENT.Remove(db.INS_UDW_PERSONAL_ACCIDENT.Find(risk.PA_SYS_ID));
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
                            viewPolh.INS_UDW_PERSONAL_ACCIDENT.ForEach(x => {
                                x.PA_STATUS = "A";
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
                //update of policy header details;
                dbPolh.Map(viewPolh);

                /*----------------
                 * risk update
                 *--------------*/
                foreach (var risk in viewPolh.INS_UDW_PERSONAL_ACCIDENT)
                {
                    var dbrisk = db.INS_UDW_PERSONAL_ACCIDENT.Find(risk.PA_SYS_ID);
                    switch (risk.PA_STATUS)
                    {
                        case "A":
                            if (dbrisk != null)
                            {
                                db.INS_UDW_PERSONAL_ACCIDENT.Attach(dbrisk);
                                dbrisk.Map(risk);
                            }

                            break;
                        case "U":
                            risk.PA_STATUS = "A";
                            risk.PA_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                            db.INS_UDW_PERSONAL_ACCIDENT.Add(risk);

                            break;
                        case "D":
                            db.INS_UDW_PERSONAL_ACCIDENT.Remove(db.INS_UDW_PERSONAL_ACCIDENT.Find(risk.PA_SYS_ID));
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