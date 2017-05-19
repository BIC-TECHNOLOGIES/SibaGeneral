using SibaDev.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models.History_Entities;
using WebGrease.Css.Extensions;


namespace SibaDev.Models.PolicyApproval_Models
{
    public class PolicyTravelApprovalMdl : Model
    {
        // Policy Confirmations
        
        public object ForwardTransaction(INS_UWD_POLICY_HEAD polHead, List<INS_UDW_TRAVEL_RISK> prodrisk, INS_PREMIUM_REGISTER premRegister, MS_ACCTS_INTEGRATION acntInt, List<INS_UDW_POL_FEES> polFees, List<INS_UWD_INTERMEDIARY_COMM> commissions)
        {
            //obtain total amount of premium and police fees
            var accountTotalBc = (premRegister.PR_BC_AMOUNT ?? 0) + (polFees == null ? 0 : polFees.Sum(x => x.POL_FEE_BC_AMOUNT));
            var accountTotalFc = (premRegister.PR_FC_AMOUNT ?? 0) + (polFees == null ? 0 : polFees.Sum(x => x.POL_FEE_FC_AMOUNT));
            var db = new SibaModel();
            using (var trans = db.Database.BeginTransaction())
            {
                try
                {
                    if (premRegister.PR_ACCT_YN == "Y" && accountTotalBc > 0 && accountTotalFc > 0)
                    {
                        var ledgerHead = new INSURANCE_LEDGER
                        {
                            IGL_ACCOUNT_CODE = polHead.MS_UDW_CUSTOMERS.MS_SYS_CUST_TYPES.MS_CUSTOMER_CATEGORY.MS_ACCT_MAIN_ACCOUNT.ACCT_CODE,
                            IGL_ACCT_DATE = acntInt.INT_CRTE_DATE ?? DateTime.Now,
                            IGL_ACCT_PERIOD_REF = "",
                            IGL_ACCT_REF = 0,
                            IGL_AMOUNT_BC = accountTotalBc,
                            IGL_AMOUNT_FC = accountTotalFc,
                            IGL_CRTE_BY = "System",
                            IGL_CRTE_DATE = DateTime.Now,
                            IGL_CURRENCY = premRegister.PR_CURRENCY,
                            IGL_CUST_CODE = polHead.POLH_CUST_CODE,
                            IGL_DOC_NUMBER = "",
                            IGL_DR_CR = "DR",
                            IGL_FX_RATE = premRegister.PR_FX_RATE,
                            IGL_NARRATION = "",
                            IGL_POL_END_NO = premRegister.PR_END_NO,
                            IGL_POL_NUMBER = polHead.POLH_DISPLAY_NO,
                            IGL_POL_SYS_ID = premRegister.PR_POL_SYS_ID,
                            IGL_POSTED_DATE = null,
                            IGL_TXN_DOC_TYPE = acntInt.INT_FWD_DEBIT_DOC_TYPE,
                            IGL_TXN_SOURCE = acntInt.INT_TXN_SOURCE,
                            IG_REF_DOC = polHead.POLH_DISPLAY_NO,
                            IGL_STATUS = "U"
                        };
                       
                        //premium insurance ledger insertion
                        db.INSURANCE_LEDGER.Add(ledgerHead);
                                                            

                        db.SaveChanges();

                        //premium total amount for customer account insurance sub ledger insertion
                        db.INSURANCE_SUB_LEDGER.Add(new INSURANCE_SUB_LEDGER
                        {
                            ISL_AMOUNT_BC = accountTotalBc,
                            ISL_ACCT_DATE = DateTime.Now,
                            ISL_ACCT_NUMBER = polHead.MS_UDW_CUSTOMERS.MS_SYS_CUST_TYPES.MS_CUSTOMER_CATEGORY.MS_ACCT_MAIN_ACCOUNT.ACCT_CODE,
                            ISL_AMOUNT_FC = accountTotalFc,
                            ISL_COB = premRegister.PR_COB,
                            ISL_CONTROL_ACT_YN = "",
                            ISL_CRTE_BY = "System",
                            ISL_CRTE_DATE = DateTime.Now,
                            ISL_CURRENCY = premRegister.PR_CURRENCY,
                            ISL_DR_CR = "DR",
                            ISL_FX_RATE = premRegister.PR_FX_RATE,
                            ISL_IGL_SYS_ID = ledgerHead.IGL_SYS_ID,
                            ISL_NARRATION = "",
                            ISL_OFFICE = polHead.POLH_OFF_CODE,
                            ISL_SUB_LEDGER = polHead.POLH_CUST_CODE //todo:convert to subledger sublevel2
                        });


                        //premium  amount for premium account insurance sub ledger insertion
                        db.INSURANCE_SUB_LEDGER.Add(new INSURANCE_SUB_LEDGER
                        {
                            ISL_AMOUNT_BC = premRegister.PR_BC_AMOUNT,
                            ISL_ACCT_DATE = DateTime.Now,
                            ISL_ACCT_NUMBER = acntInt.INT_FWD_CREDIT_ACCT,
                            ISL_AMOUNT_FC = premRegister.PR_FC_AMOUNT,
                            ISL_COB = premRegister.PR_COB,
                            ISL_CONTROL_ACT_YN = "",
                            ISL_CRTE_BY = "System",
                            ISL_CRTE_DATE = DateTime.Now,
                            ISL_CURRENCY = premRegister.PR_CURRENCY,
                            ISL_DR_CR = "CR",
                            ISL_FX_RATE = premRegister.PR_FX_RATE,
                            ISL_IGL_SYS_ID = ledgerHead.IGL_SYS_ID,
                            ISL_NARRATION = "",
                            ISL_OFFICE = polHead.POLH_OFF_CODE,
                            ISL_SUB_LEDGER = premRegister.PR_COB //todo:convert to  subledger level 2
                        });

                        //premium amount for policy fee account insurance sub ledger insertion
                        polFees.ForEach(x =>
                        {
                            var compFee = CompulsoryFeesMdl.get_CompFees(x.POL_FEE_CODE);
                            if (compFee != null)
                            {
                                db.INSURANCE_SUB_LEDGER.Add(new INSURANCE_SUB_LEDGER
                                {
                                    ISL_AMOUNT_BC = x.POL_FEE_BC_AMOUNT,
                                    ISL_ACCT_DATE = DateTime.Now,
                                    ISL_ACCT_NUMBER = compFee.MS_ACCT_MAIN_ACCOUNT.ACCT_CODE,
                                    ISL_AMOUNT_FC = x.POL_FEE_FC_AMOUNT,
                                    ISL_COB = premRegister.PR_COB,
                                    ISL_CONTROL_ACT_YN = "",
                                    ISL_CRTE_BY = "System",
                                    ISL_CRTE_DATE = DateTime.Now,
                                    ISL_CURRENCY = premRegister.PR_CURRENCY,
                                    ISL_DR_CR = "CR",
                                    ISL_FX_RATE = premRegister.PR_FX_RATE,
                                    ISL_IGL_SYS_ID = ledgerHead.IGL_SYS_ID,
                                    ISL_NARRATION = "",
                                    ISL_OFFICE = polHead.POLH_OFF_CODE,
                                    ISL_SUB_LEDGER = compFee.MS_ACCT_SUB_ACCOUNT.SUB_ACCT_CODE
                                });
                            }

                        });

                        commissions.ForEach(x =>
                        {
                            if (x != null)
                            {
                                var commLedger = new INSURANCE_LEDGER
                                {
                                    IGL_ACCOUNT_CODE = acntInt.INT_FWD_CREDIT_ACCT,
                                    IGL_ACCT_DATE = acntInt.INT_CRTE_DATE ?? DateTime.Now,
                                    IGL_ACCT_PERIOD_REF = "",
                                    IGL_ACCT_REF = 0,
                                    IGL_AMOUNT_BC = x.CMM_COM_AMT_BC,
                                    IGL_AMOUNT_FC = x.CMM_COM_AMT_FC,
                                    IGL_CRTE_BY = "System",
                                    IGL_CRTE_DATE = DateTime.Now,
                                    IGL_CURRENCY = polHead.POLH_CURRENCY,
                                    IGL_CUST_CODE = polHead.POLH_CUST_CODE,
                                    IGL_DOC_NUMBER = "",
                                    IGL_DR_CR = "CR",
                                    IGL_FX_RATE = polHead.POLH_CURRENCY_RATE,
                                    IGL_NARRATION = "",
                                    IGL_POL_END_NO = x.CMM_END_NO,
                                    IGL_POL_NUMBER = polHead.POLH_DISPLAY_NO,
                                    IGL_POL_SYS_ID = x.CMM_POL_SYS_ID,
                                    IGL_POSTED_DATE = null,
                                    IGL_TXN_DOC_TYPE = acntInt.INT_FWD_CREDIT_DOC_TYPE,
                                    IGL_TXN_SOURCE = acntInt.INT_TXN_SOURCE,
                                    IG_REF_DOC = polHead.POLH_DISPLAY_NO,
                                    IGL_STATUS = "U"
                                };
                                //premium insurance ledger insertion
                                db.INSURANCE_LEDGER.Add(commLedger);
                                db.SaveChanges();

                                //Total commission amount into insurance Commission Account (50)
                                db.INSURANCE_SUB_LEDGER.Add(new INSURANCE_SUB_LEDGER
                                {
                                    ISL_AMOUNT_BC = x.CMM_COM_AMT_BC,
                                    ISL_ACCT_DATE = DateTime.Now,
                                    ISL_ACCT_NUMBER = acntInt.INT_FWD_CREDIT_ACCT,
                                    ISL_AMOUNT_FC = x.CMM_COM_AMT_FC,
                                    ISL_COB = x.CMM_COB_CODE,
                                    ISL_CONTROL_ACT_YN = "",
                                    ISL_CRTE_BY = "System",
                                    ISL_CRTE_DATE = DateTime.Now,
                                    ISL_CURRENCY = polHead.POLH_CURRENCY,
                                    ISL_DR_CR = "CR",
                                    ISL_FX_RATE = polHead.POLH_CURRENCY_RATE,
                                    ISL_IGL_SYS_ID = commLedger.IGL_SYS_ID,
                                    ISL_NARRATION = "",
                                    ISL_OFFICE = polHead.POLH_OFF_CODE,
                                    ISL_SUB_LEDGER = polHead.POLH_CUST_CODE
                                });

                                // Commission less Tax into Intermediary account (45)
                                //obtain tax data
                                var interm = IntermediaryMdl.get_intermediary(x.CMM_INT_CODE);
                                var custTypes = CustomerTypesMdl.get_customertype(interm.INT_CTP_CODE);
                                var custCategory = custTypes.MS_CUSTOMER_CATEGORY;
                                var tax = db.MS_ACCT_SERVICE_TAX.Where(t => t.TX_CUST_CAT_CODE == custCategory.CUS_CAT_CODE);
                                if (tax.Count() == 1)
                                {
                                    var taxPerc = tax.Single().TX_TAX_PERC / 100;
                                    // Math.Round((double)(() *  (decimal)taxPerc), 2)
                                    db.INSURANCE_SUB_LEDGER.Add(new INSURANCE_SUB_LEDGER
                                    {
                                        ISL_AMOUNT_BC = Math.Round((decimal)(x.CMM_COM_AMT_BC - (x.CMM_COM_AMT_BC * taxPerc)), 2),
                                        ISL_ACCT_DATE = DateTime.Now,
                                        ISL_ACCT_NUMBER = custCategory.MS_ACCT_MAIN_ACCOUNT.ACCT_CODE,
                                        ISL_AMOUNT_FC = Math.Round((decimal)(x.CMM_COM_AMT_FC - (x.CMM_COM_AMT_FC * taxPerc)), 2),
                                        ISL_COB = x.CMM_COB_CODE,
                                        ISL_CONTROL_ACT_YN = "",
                                        ISL_CRTE_BY = "System",
                                        ISL_CRTE_DATE = DateTime.Now,
                                        ISL_CURRENCY = polHead.POLH_CURRENCY,
                                        ISL_DR_CR = "DR",
                                        ISL_FX_RATE = polHead.POLH_CURRENCY_RATE,
                                        ISL_IGL_SYS_ID = commLedger.IGL_SYS_ID,
                                        ISL_NARRATION = "",
                                        ISL_OFFICE = polHead.POLH_OFF_CODE,
                                        ISL_SUB_LEDGER = custCategory.MS_ACCT_SUB_ACCOUNT.SUB_ACCT_CODE
                                    });

                                    //commission tax into Tax Account (5)
                                    db.INSURANCE_SUB_LEDGER.Add(new INSURANCE_SUB_LEDGER
                                    {
                                        ISL_AMOUNT_BC = Math.Round((decimal)(x.CMM_COM_AMT_BC * taxPerc), 2),
                                        ISL_ACCT_DATE = DateTime.Now,
                                        ISL_ACCT_NUMBER = custCategory.MS_ACCT_MAIN_ACCOUNT.ACCT_CODE,
                                        ISL_AMOUNT_FC = Math.Round((decimal)(x.CMM_COM_AMT_FC * taxPerc), 2),
                                        ISL_COB = x.CMM_COB_CODE,
                                        ISL_CONTROL_ACT_YN = "",
                                        ISL_CRTE_BY = "System",
                                        ISL_CRTE_DATE = DateTime.Now,
                                        ISL_CURRENCY = polHead.POLH_CURRENCY,
                                        ISL_DR_CR = "DR",
                                        ISL_FX_RATE = polHead.POLH_CURRENCY_RATE,
                                        ISL_IGL_SYS_ID = commLedger.IGL_SYS_ID,
                                        ISL_NARRATION = "",
                                        ISL_OFFICE = polHead.POLH_OFF_CODE,
                                        ISL_SUB_LEDGER = custCategory.MS_ACCT_SUB_ACCOUNT.SUB_ACCT_CODE
                                    });
                                }
                            }



                        });

                        //update  Policy Transaction state after confirmation 
                        var dbPolTxn = db.INS_UWD_POLICY_HEAD.Find(polHead.POLH_SYS_ID);
                        db.INS_UWD_POLICY_HEAD.Attach(dbPolTxn);
                        dbPolTxn.POLH_TXN_STATE = "C";

                    }
                    else
                    {
                        return new { state = false, message = "Error inserting into Insurance Ledger" };
                    }



                    db.SaveChanges();
                    trans.Commit();

                    var polhed = db.INS_UWD_POLICY_HEAD.Find(polHead.POLH_SYS_ID);
                    var POLH_TXN_STATE = polhed.POLH_TXN_STATE;
                    return new { state = true, message = "Successfully Inserted into the ledger", POLH_TXN_STATE };
                }
                catch (Exception e)
                {
                    trans.Rollback();
                    throw;
                }
            }

        }

        //Policy Approval and posting to accounts
        public object InsuranceTransactionPosting(IEnumerable<INSURANCE_LEDGER> ledger)
        {
            var db = new SibaModel();
            using (var trans = db.Database.BeginTransaction())
            {
                try
                {
                    int polSysID;
                    var policy = db.INS_UWD_POLICY_HEAD.Find(ledger.FirstOrDefault().IGL_POL_SYS_ID);

                    //save policy header history
                    var historyPolicy = new INS_UWD_HPOLICY_HEAD();
                    historyPolicy.Map(policy);
                    historyPolicy.POLH_TXN_STATE = "P";
                    db.INS_UWD_HPOLICY_HEAD.Add(historyPolicy);

                    //insert policy fee history
                    policy.INS_UDW_POL_FEES.ForEach(f =>
                    {
                        var historyPolFee = new INS_UDW_HPOL_FEES();
                        historyPolFee.Map(f);
                        db.INS_UDW_HPOL_FEES.Add(historyPolFee);
                    });


                    policy.INS_UDW_TRAVEL_RISK.ForEach(b =>
                    {
                        var historyrisk = new INS_UDW_HTRAVEL_RISK();
                        historyrisk.Map(b);
                        db.INS_UDW_HTRAVEL_RISK.Add(historyrisk);

                        //save risk cover history
                        b.INS_UWD_RISK_COVERS.ForEach(c =>
                        {
                            var historyCovers = new INS_UWD_HRISK_COVERS();
                            historyCovers.Map(c);
                            db.INS_UWD_HRISK_COVERS.Add(historyCovers);
                        });
                      

                    });

                    //todo: insert other product risk history

                    ledger.ForEach(l =>
                    {
                        polSysID = (int)l.IGL_POL_SYS_ID;

                        if (l.IGL_STATUS.Equals("U"))
                        {

                            //insurance ledger head to general ledger head mapping
                            var glHeader = new ACCT_GL_HEAD
                            {
                                TH_ACCT_YEAR = (short)l.IGL_ACCT_DATE.Value.Year,
                                TH_ANALYSIS_01 = null,
                                TH_BATCH_ID = l.IGL_SYS_ID,
                                TH_COMP_CODE = null,
                                TH_CRTE_BY = "System",
                                TH_CRTE_DATE = DateTime.Now,
                                TH_DEPT_CODE = null,
                                TH_DOC_CAL_MONTH = (byte)l.IGL_ACCT_DATE.Value.Month,
                                TH_DOC_CAL_YEAR = (short)l.IGL_ACCT_DATE.Value.Year,
                                TH_DOC_DATE = l.IGL_ACCT_DATE,
                                TH_DOC_NO = l.IGL_DOC_NUMBER,
                                TH_DOC_TYPE = l.IGL_TXN_DOC_TYPE,
                                TH_MOD_BY = "",
                                TH_MOD_DATE = null,
                                TH_OFFICE_CODE = null,
                                TH_STATUS = "A",
                                TH_TXN_REF = l.IG_REF_DOC,
                                TH_TXN_REF_DT = l.IGL_ACCT_DATE,
                                TH_NARRATION = l.IGL_NARRATION
                            };

                            db.ACCT_GL_HEAD.Add(glHeader);
                            db.SaveChanges();

                            //insurance sub ledger to general ledger detail mapping
                            l.INSURANCE_SUB_LEDGER.ForEach(s =>
                            {
                                db.ACCT_GL_DETAIL.Add(new ACCT_GL_DETAIL
                                {
                                    TD_AMT_BC = s.ISL_AMOUNT_BC,
                                    TD_AMT_FC = s.ISL_AMOUNT_FC,
                                    TD_ANNALYSIS_1 = s.ISL_SUB_LEDGER,
                                    TD_CRTE_BY = "System",
                                    TD_CRTE_DATE = DateTime.Now,
                                    TD_CURR_CODE = s.ISL_CURRENCY,
                                    TD_CURR_RATE = s.ISL_FX_RATE,
                                    TD_DEPT_CODE = s.ISL_OFFICE,
                                    TD_DOC_DATE = s.ISL_ACCT_DATE,
                                    TD_DOC_NO = null,//glHeader.TH_DOC_NO,
                                    TD_DOC_REF = null,
                                    TD_LINE_NARRATION = s.ISL_NARRATION,
                                    TD_DRCR_FLAG = s.ISL_DR_CR,
                                    TD_OFFICE_CODE = s.ISL_OFFICE,
                                    TD_SEQ_NO = 0,
                                    TD_TH_SYS_ID = glHeader.TH_SYS_ID,
                                    TD_STATUS = "A",
                                    TD_SUB_ACCT_LV1 = s.ISL_SUB_LEDGER,
                                    TD_SUB_ACCT_LV2 = s.ISL_SUB_LEDGER,
                                    TD_MAIN_ACCT_CODE = s.ISL_ACCT_NUMBER

                                });
                            });


                            //insurance ledger header to open entry mapping
                            db.ACCT_TXN_OPEN_ENTRY.Add(new ACCT_TXN_OPEN_ENTRY
                            {
                                OE_TXN_REF_ID = (int?)l.IGL_SYS_ID,
                                //OE_TXN_REF_ID = l.IGL_SYS_ID.ToString(),
                                OE_R_BATCH_ID = null,
                                OE_DOC_TYPE = l.IGL_TXN_DOC_TYPE,
                                OE_DOC_NO = l.IGL_DOC_NUMBER,
                                OE_LINE_NO = null,
                                OE_DOC_DATE = l.IGL_ACCT_DATE,
                                OE_DUE_DATE = l.IGL_ACCT_DATE,
                                OE_CUST_CODE = l.IGL_CUST_CODE,
                                OE_MAIN_ACCT_CODE = l.IGL_ACCOUNT_CODE,
                                OE_SUB_ACCT_CODE = null,
                                OE_DR_CR = l.IGL_DR_CR,
                                OE_OFFICE_CODE = null,
                                OE_CURR_CODE = l.IGL_CURRENCY,
                                OE_CURR_RATE = l.IGL_FX_RATE,
                                OE_ORGNL_FC_AMT = l.IGL_AMOUNT_FC,
                                OE_ORGNL_BC_AMT = l.IGL_AMOUNT_BC,
                                OE_ADJ_FC_AMT = null,
                                OE_ADJ_BC_AMT = null,
                                OE_UNPOST_ADJ_FC_AMT = null,
                                OE_UNPOST_ADJ_BC_AMT = null,
                                OE_ACCT_YEAR = (short)l.IGL_ACCT_DATE.Value.Year,
                                OE_DOC_CAL_MONTH = (byte)l.IGL_ACCT_DATE.Value.Month,
                                OE_CRTE_BY = "System",
                                OE_CRTE_DATE = DateTime.Now,
                            });

                            //update  insurance ledger status to posted(P)
                            var dbLedger = db.INSURANCE_LEDGER.Find(l.IGL_SYS_ID);
                            db.INSURANCE_LEDGER.Attach(dbLedger);
                            dbLedger.IGL_STATUS = "P";


                            //update  Policy Transaction state after Approval (P)
                            var dbPolTxn = db.INS_UWD_POLICY_HEAD.Find(l.IGL_POL_SYS_ID);
                            db.INS_UWD_POLICY_HEAD.Attach(dbPolTxn);
                            dbPolTxn.POLH_TXN_STATE = "P";

                        }
                    });


                    db.SaveChanges();
                    trans.Commit();

                    //return policy status
                    var POLH_TXN_STATE = "P";
                    return new { POLH_TXN_STATE };
                }
                catch (Exception e)
                {
                    trans.Rollback();
                    throw;
                }
            }
        }
    }
}