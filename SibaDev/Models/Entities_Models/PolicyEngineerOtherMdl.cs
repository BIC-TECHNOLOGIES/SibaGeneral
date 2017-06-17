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
    public class PolicyEngineerOtherMdl : Model
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
                    INS_UDW_ENGINEER = polh.INS_UDW_ENGINEER != null ? polh.INS_UDW_ENGINEER.Select(r => get_engineer(r.ENG_SYS_ID)).ToList() : null,
                    INS_UDW_ENG_OTHER = polh.INS_UDW_ENG_OTHER != null ? polh.INS_UDW_ENG_OTHER.Select(x => get_risk(x.ENG_OTHER_SYS_ID)).ToList() : null
                }).Single();
            }
            catch (Exception e)
            {
                return null;
            }
        }


        public static INS_UDW_ENGINEER get_engineer(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.INS_UDW_ENGINEER where c.ENG_SYS_ID == code select c).ToList().Select(c => new INS_UDW_ENGINEER
                {
                    ENG_SYS_ID = c.ENG_SYS_ID,
                    ENG_POLH_SYS_ID = c.ENG_POLH_SYS_ID,
                    ENG_POLH_DOC_NO = c.ENG_POLH_DOC_NO,
                    ENG_POLH_END_NO = c.ENG_POLH_END_NO,
                    ENG_ACCT_DATE = c.ENG_ACCT_DATE,
                    ENG_ADJ_PREM_BC = c.ENG_ADJ_PREM_BC,
                    ENG_ADJ_PREM_FC = c.ENG_ADJ_PREM_FC,
                    ENG_APPROVE_DATE = c.ENG_APPROVE_DATE,
                    ENG_AREA_CODE = c.ENG_AREA_CODE,
                    ENG_AREA_NAME = c.ENG_AREA_NAME,
                    ENG_COMMISSION_BC = c.ENG_COMMISSION_BC,
                    ENG_COMMISSION_FC = c.ENG_COMMISSION_FC,
                    ENG_COMP_FEE_BC = c.ENG_COMP_FEE_BC,
                    ENG_COMP_FEE_FC = c.ENG_COMP_FEE_FC,
                    ENG_CURRENCY = c.ENG_CURRENCY,
                    ENG_CURRENCY_RATE = c.ENG_CURRENCY_RATE,
                    ENG_DESC = c.ENG_DESC,
                    ENG_DISC_BC = c.ENG_DISC_BC,
                    ENG_DISC_FC = c.ENG_DISC_FC,
                    ENG_EARTHQ_ZONE = c.ENG_EARTHQ_ZONE,
                    ENG_EML = c.ENG_EML,
                    ENG_END_DATE = c.ENG_END_DATE,
                    ENG_END_TYPE = c.ENG_END_TYPE,
                    ENG_LOAD_BC = c.ENG_LOAD_BC,
                    ENG_LOAD_FC = c.ENG_LOAD_FC,
                    ENG_LOC_ADDRS = c.ENG_LOC_ADDRS,
                    ENG_LOC_CODE = c.ENG_LOC_CODE,
                    ENG_LOC_NAME = c.ENG_LOC_NAME,
                    ENG_LOP_SI_BC = c.ENG_LOP_SI_BC,
                    ENG_LOP_SI_FC = c.ENG_LOP_SI_FC,
                    ENG_MAIN_DAYS = c.ENG_MAIN_DAYS,
                    ENG_MAIN_ENDDATE = c.ENG_MAIN_ENDDATE,
                    ENG_MAIN_STDATE = c.ENG_MAIN_STDATE,
                    ENG_OCCUP_CODE = c.ENG_OCCUP_CODE,
                    ENG_OCCUP_NAME = c.ENG_OCCUP_NAME,
                    ENG_OCCUP_SECTION = c.ENG_OCCUP_SECTION,
                    ENG_PDT_CODE = c.ENG_PDT_CODE,
                    ENG_PROJ_CODE = c.ENG_PROJ_CODE,
                    ENG_PROJ_NAME = c.ENG_PROJ_NAME,
                    ENG_REGION_CODE = c.ENG_REGION_CODE,
                    ENG_REGION_NAME = c.ENG_REGION_NAME,
                    ENG_RENEWAL_STATUS = c.ENG_RENEWAL_STATUS,
                    ENG_RIEML = c.ENG_RIEML,
                    ENG_RISK_ID = c.ENG_RISK_ID,
                    ENG_RISK_NO = c.ENG_RISK_NO,
                    ENG_RISK_PREM_BC = c.ENG_RISK_PREM_BC,
                    ENG_RISK_PREM_FC = c.ENG_RISK_PREM_FC,
                    ENG_RI_PREM_BC = c.ENG_RI_PREM_BC,
                    ENG_RI_PREM_FC = c.ENG_RI_PREM_FC,
                    ENG_RISK_STATE = c.ENG_RISK_STATE,
                    ENG_RI_SI_BC = c.ENG_RI_SI_BC,
                    ENG_RI_SI_FC = c.ENG_RI_SI_FC,
                    ENG_SI_BC = c.ENG_SI_BC,
                    ENG_SI_FC = c.ENG_SI_FC,
                    ENG_TOT_PREM_BC = c.ENG_TOT_PREM_BC,
                    ENG_TOT_PREM_FC = c.ENG_TOT_PREM_FC,
                    ENG_TPL_SI_BC = c.ENG_TPL_SI_BC,
                    ENG_TPL_SI_FC = c.ENG_TPL_SI_FC,
                    ENG_START_DATE = c.ENG_START_DATE,
                    ENG_STATUS = c.ENG_STATUS,
                    ENG_TXN_STATUS = c.ENG_TXN_STATUS,
                    ENG_TYPE = c.ENG_TYPE,
                    ENG_CRTE_BY = c.ENG_CRTE_BY,
                    ENG_CRTE_DATE = c.ENG_CRTE_DATE,
                    ENG_MOD_BY = c.ENG_MOD_BY,
                    ENG_MOD_DATE = c.ENG_MOD_DATE,
                    ENG_UW_YEAR = c.ENG_UW_YEAR,
                    
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }


        public static INS_UDW_ENG_OTHER get_risk(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.INS_UDW_ENG_OTHER where c.ENG_OTHER_SYS_ID == code select c).ToList().Select(c => new INS_UDW_ENG_OTHER
                {
                    ENG_OTHER_SYS_ID = c.ENG_OTHER_SYS_ID,
                    ENG_OTHER_POLH_SYS_ID = c.ENG_OTHER_POLH_SYS_ID,
                    ENG_OTHER_POLH_DOC_NO = c.ENG_OTHER_POLH_DOC_NO,
                    ENG_OTHER_POLH_END_NO = c.ENG_OTHER_POLH_END_NO,
                    ENG_OTHER_ACCT_DATE = c.ENG_OTHER_ACCT_DATE,
                    ENG_OTHER_ADJ_PREM_BC = c.ENG_OTHER_ADJ_PREM_BC,
                    ENG_OTHER_ADJ_PREM_FC = c.ENG_OTHER_ADJ_PREM_FC,
                    ENG_OTHER_CAP = c.ENG_OTHER_CAP,
                    ENG_OTHER_APPROVE_DATE = c.ENG_OTHER_APPROVE_DATE,
                    ENG_OTHER_COMMISSION_BC = c.ENG_OTHER_COMMISSION_BC,
                    ENG_OTHER_COMMISSION_FC = c.ENG_OTHER_COMMISSION_FC,
                    ENG_OTHER_COMP_FEE_BC = c.ENG_OTHER_COMP_FEE_BC,
                    ENG_OTHER_COMP_FEE_FC = c.ENG_OTHER_COMP_FEE_FC,
                    ENG_OTHER_CRTE_BY = c.ENG_OTHER_CRTE_BY,
                    ENG_OTHER_CRTE_DATE = c.ENG_OTHER_CRTE_DATE,
                    ENG_OTHER_CURRENCY = c.ENG_OTHER_CURRENCY,
                    ENG_OTHER_CURRENCY_RATE = c.ENG_OTHER_CURRENCY_RATE,
                    ENG_OTHER_CVR_CODE = c.ENG_OTHER_CVR_CODE,
                    ENG_OTHER_DESC = c.ENG_OTHER_DESC,
                    ENG_OTHER_DISC_BC = c.ENG_OTHER_DISC_BC,
                    ENG_OTHER_DISC_FC = c.ENG_OTHER_DISC_FC,
                    ENG_OTHER_END_DATE = c.ENG_OTHER_END_DATE,
                    ENG_OTHER_END_TYPE = c.ENG_OTHER_END_TYPE,
                    ENG_OTHER_ESCL = c.ENG_OTHER_ESCL,
                    ENG_OTHER_FUNDT_BC = c.ENG_OTHER_FUNDT_BC,
                    ENG_OTHER_FUNDT_FC = c.ENG_OTHER_FUNDT_FC,
                    ENG_OTHER_LOAD_BC = c.ENG_OTHER_LOAD_BC,
                    ENG_OTHER_LOAD_FC = c.ENG_OTHER_LOAD_FC,
                    ENG_OTHER_LOC = c.ENG_OTHER_LOC,
                    ENG_OTHER_MANUF = c.ENG_OTHER_MANUF,
                    ENG_OTHER_MANUF_YR = c.ENG_OTHER_MANUF_YR,
                    ENG_OTHER_MK_MODEL = c.ENG_OTHER_MK_MODEL,
                    ENG_OTHER_MOD_BY = c.ENG_OTHER_MOD_BY,
                    ENG_OTHER_MOD_DATE = c.ENG_OTHER_MOD_DATE,
                    ENG_OTHER_OBJECT = c.ENG_OTHER_OBJECT,
                    ENG_OTHER_OBJECT_NAME = c.ENG_OTHER_OBJECT_NAME,
                    ENG_OTHER_PDT_CODE = c.ENG_OTHER_PDT_CODE,
                    ENG_OTHER_PERIOD_DAYS = c.ENG_OTHER_PERIOD_DAYS,
                    ENG_OTHER_PREMIUM_BC = c.ENG_OTHER_PREMIUM_BC,
                    ENG_OTHER_PREMIUM_FC = c.ENG_OTHER_PREMIUM_FC,
                    ENG_OTHER_RENEWAL_STATUS = c.ENG_OTHER_RENEWAL_STATUS,
                    ENG_OTHER_RISK_ID = c.ENG_OTHER_RISK_ID,
                    ENG_OTHER_RISK_NO = c.ENG_OTHER_RISK_NO,
                    ENG_OTHER_RISK_PREM_BC = c.ENG_OTHER_RISK_PREM_BC,
                    ENG_OTHER_RISK_PREM_FC = c.ENG_OTHER_RISK_PREM_FC,
                    ENG_OTHER_RISK_STATE = c.ENG_OTHER_RISK_STATE,
                    ENG_OTHER_RI_PREM_BC = c.ENG_OTHER_RI_PREM_BC,
                    ENG_OTHER_RI_PREM_FC = c.ENG_OTHER_RI_PREM_FC,
                    ENG_OTHER_RI_SI_BC = c.ENG_OTHER_RI_SI_BC,
                    ENG_OTHER_RI_SI_FC = c.ENG_OTHER_RI_SI_FC,
                    ENG_OTHER_SERL_NO = c.ENG_OTHER_SERL_NO,
                    ENG_OTHER_SI_BC = c.ENG_OTHER_SI_BC,
                    ENG_OTHER_SI_FC = c.ENG_OTHER_SI_FC,
                    ENG_OTHER_START_DATE = c.ENG_OTHER_START_DATE,
                    ENG_OTHER_STATUS = c.ENG_OTHER_STATUS,
                    ENG_OTHER_STND_BY = c.ENG_OTHER_STND_BY,
                    ENG_OTHER_SUM_INSURED_BC = c.ENG_OTHER_SUM_INSURED_BC,
                    ENG_OTHER_SUM_INSURED_FC = c.ENG_OTHER_SUM_INSURED_FC,
                    ENG_OTHER_TOT_PREM_BC = c.ENG_OTHER_TOT_PREM_BC,
                    ENG_OTHER_TOT_PREM_FC = c.ENG_OTHER_TOT_PREM_FC,
                    ENG_OTHER_TRANSF_BC = c.ENG_OTHER_TRANSF_BC,
                    ENG_OTHER_TRANSF_FC = c.ENG_OTHER_TRANSF_FC,
                    ENG_OTHER_TXN_STATUS = c.ENG_OTHER_TXN_STATUS,
                    ENG_OTHER_UW_YEAR = c.ENG_OTHER_UW_YEAR,
                                    
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

                                    foreach (var engineer in viewPolh.INS_UDW_ENGINEER)
                                    {
                                        var dbengineer = db.INS_UDW_ENGINEER.Find(engineer.ENG_SYS_ID);
                                        switch (engineer.ENG_STATUS)
                                        {
                                            case "A":
                                                if (dbengineer != null)
                                                {
                                                    db.INS_UDW_ENGINEER.Attach(dbengineer);
                                                    dbengineer.ENG_MOD_DATE = DateTime.Now;
                                                    dbengineer.Map(engineer);

                                                }

                                                break;
                                            case "U":
                                                engineer.ENG_STATUS = "A";
                                                engineer.ENG_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UDW_ENGINEER.Add(engineer);

                                                break;

                                            case "D":
                                                db.INS_UDW_ENGINEER.Remove(db.INS_UDW_ENGINEER.Find(engineer.ENG_SYS_ID));
                                                break;
                                                    
                                        }
                                    }


                                    foreach (var risk in viewPolh.INS_UDW_ENG_OTHER)
                                    {
                                        var dbrisk = db.INS_UDW_ENG_OTHER.Find(risk.ENG_OTHER_SYS_ID);
                                        switch (risk.ENG_OTHER_STATUS)
                                        {
                                            case "A":
                                                if (dbrisk != null)
                                                {
                                                    db.INS_UDW_ENG_OTHER.Attach(dbrisk);
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
                                                                cover.RCOV_RISK_SYS_ID = risk.ENG_OTHER_SYS_ID;
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
                                                    foreach (var fees in risk.INS_UDW_ENGINEER_FEES)
                                                    {
                                                        var dbrkfees = db.INS_UDW_PA_FEES.Find(fees.ENG_FEE_SYS_ID);
                                                        switch (fees.ENG_FEE_STATUS)
                                                        {
                                                            case "A":
                                                                if (dbrkfees != null)
                                                                {
                                                                    db.INS_UDW_PA_FEES.Attach(dbrkfees);
                                                                    dbrkfees.Map(fees);
                                                                }
                                                                break;

                                                            case "U":
                                                                fees.ENG_FEE_STATUS = "A";
                                                                fees.ENG_FEE_CRTE_DATE = DateTime.Now;
                                                                fees.ENG_FEE_RK_SYS_ID = risk.ENG_OTHER_SYS_ID;
                                                                fees.ENG_FEE_POL_SYS_ID = viewPolh.POLH_SYS_ID;
                                                                db.INS_UDW_ENGINEER_FEES.Add(fees);
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
                                                risk.ENG_OTHER_STATUS = "A";
                                                risk.ENG_OTHER_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UDW_ENG_OTHER.Add(risk);
                                                break;

                                            case "D":
                                                db.INS_UDW_ENG_OTHER.Remove(db.INS_UDW_ENG_OTHER.Find(risk.ENG_OTHER_SYS_ID));
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