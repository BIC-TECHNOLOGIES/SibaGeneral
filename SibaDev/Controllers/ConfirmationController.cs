using SibaDev.Libs;
using SibaDev.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models.PolicyApproval_Models;
using SibaDev.Libs.ReInsurance;

namespace SibaDev.Controllers
{
    public class ConfirmationController : ApiController
    {
        [HttpGet]
        [Route("api/Confirmation/confirmPolicy/{polId}")]
        public object Confirm(int polId)
        {
            var db = new SibaModel();
            try
            {

                var polHead = PolicyMotorMdl.get_policy(polId);
                            
                var premRegs = (from pr in db.INS_PREMIUM_REGISTER where pr.PR_POL_SYS_ID == polId select pr);
                if (premRegs.Any())
                {
                    var premReg = premRegs.Single();
                    var acntInts = (from a in db.MS_ACCTS_INTEGRATION where a.INT_PRODUCT == premReg.PR_COB && a.INT_TXN_SOURCE == premReg.PR_TXN_REF select a);
                    if (acntInts.Any())
                    {
                        var acntInt = acntInts.SingleOrDefault();
                        var polFees = (from f in db.INS_UDW_POL_FEES where f.POL_FEE_POL_SYS_ID == polId select f).ToList();
                        var commissions = (from c in db.INS_UWD_INTERMEDIARY_COMM where c.CMM_POL_SYS_ID == polId select c).ToList();
                        var vehrisk = (from u in db.INS_UWD_VEHICLE_RISK where u.VEH_POLH_SYS_ID == polId select u).ToList();
                        var acntMod = new PolicyApprovalMdl();
                        var result = acntMod.ForwardTransaction(polHead, vehrisk, premReg, acntInt, polFees, commissions);
                        return result;
                    }
                    
                    else return new { state = false, message = "The Account is not properly setup" };
                }

                else
                    return new {state = false, message = "No record found in the premium register" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/Confirmation/confirmBondPolicy/{polId}")]
        public object ConfirmBond(int polId)
        {
            var db = new SibaModel();
            try
            {

                var polHead = PolicyBondMdl.get_policy(polId);

                var premRegs = (from pr in db.INS_PREMIUM_REGISTER where pr.PR_POL_SYS_ID == polId select pr);
                if (premRegs.Any())
                {
                    var premReg = premRegs.Single();
                    var acntInts = (from a in db.MS_ACCTS_INTEGRATION where a.INT_PRODUCT == premReg.PR_COB && a.INT_TXN_SOURCE == premReg.PR_TXN_REF select a);
                    if (acntInts.Any())
                    {
                        var acntInt = acntInts.SingleOrDefault();
                        var polFees = (from f in db.INS_UDW_POL_FEES where f.POL_FEE_POL_SYS_ID == polId select f).ToList();
                        var commissions = (from c in db.INS_UWD_INTERMEDIARY_COMM where c.CMM_POL_SYS_ID == polId select c).ToList();
                        var bondrisk = (from u in db.INS_UDW_BONDS where u.BOND_POLH_SYS_ID == polId select u).ToList();
                        var acntMod = new PolicyBondApprovalMdl();
                        var result = acntMod.ForwardTransaction(polHead, bondrisk, premReg, acntInt, polFees, commissions);
                        return result;
                    }

                    else return new { state = false, message = "The Account is not properly setup" };
                }

                else
                    return new { state = false, message = "No record found in the premium register" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/Confirmation/confirmTravelPolicy/{polId}")]
        public object ConfirmTravel(int polId)
        {
            var db = new SibaModel();
            try
            {

                var polHead = PolicyTravelMdl.get_policy(polId);

                var premRegs = (from pr in db.INS_PREMIUM_REGISTER where pr.PR_POL_SYS_ID == polId select pr);
                if (premRegs.Any())
                {
                    var premReg = premRegs.Single();
                    var acntInts = (from a in db.MS_ACCTS_INTEGRATION where a.INT_PRODUCT == premReg.PR_COB && a.INT_TXN_SOURCE == premReg.PR_TXN_REF select a);
                    if (acntInts.Any())
                    {
                        var acntInt = acntInts.SingleOrDefault();
                        var polFees = (from f in db.INS_UDW_POL_FEES where f.POL_FEE_POL_SYS_ID == polId select f).ToList();
                        var commissions = (from c in db.INS_UWD_INTERMEDIARY_COMM where c.CMM_POL_SYS_ID == polId select c).ToList();
                        var prodrisk = (from u in db.INS_UDW_TRAVEL_RISK where u.TRA_POLH_SYS_ID == polId select u).ToList();
                        var acntMod = new PolicyTravelApprovalMdl();
                        var result = acntMod.ForwardTransaction(polHead, prodrisk, premReg, acntInt, polFees, commissions);
                        return result;
                    }

                    else return new { state = false, message = "The Account is not properly setup" };
                }

                else
                    return new { state = false, message = "No record found in the premium register" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/Confirmation/confirmFirePolicy/{polId}")]
        public object ConfirmFire(int polId)
        {
            var db = new SibaModel();
            try
            {

                var polHead = PolicyFireMdl.get_policy(polId);

                var premRegs = (from pr in db.INS_PREMIUM_REGISTER where pr.PR_POL_SYS_ID == polId select pr);
                if (premRegs.Any())
                {
                    var premReg = premRegs.Single();
                    var acntInts = (from a in db.MS_ACCTS_INTEGRATION where a.INT_PRODUCT == premReg.PR_COB && a.INT_TXN_SOURCE == premReg.PR_TXN_REF select a);
                    if (acntInts.Any())
                    {
                        var acntInt = acntInts.SingleOrDefault();
                        var polFees = (from f in db.INS_UDW_POL_FEES where f.POL_FEE_POL_SYS_ID == polId select f).ToList();
                        var commissions = (from c in db.INS_UWD_INTERMEDIARY_COMM where c.CMM_POL_SYS_ID == polId select c).ToList();
                        var firerisk = (from u in db.INS_UWD_FIRE_LOCRISK where u.PLOC_POLH_SYS_ID == polId select u).ToList();
                        var acntMod = new PolicyFireApprovalMdl();
                        var result = acntMod.ForwardTransaction(polHead, firerisk, premReg, acntInt, polFees, commissions);
                        return result;
                    }

                    else return new { state = false, message = "The Account is not properly setup" };
                }

                else
                    return new { state = false, message = "No record found in the premium register" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/Confirmation/confirmTransitPolicy/{polId}")]
        public object ConfirmTransit(int polId)
        {
            var db = new SibaModel();
            try
            {

                var polHead = PolicyGATransitMdl.get_policy(polId);

                var premRegs = (from pr in db.INS_PREMIUM_REGISTER where pr.PR_POL_SYS_ID == polId select pr);
                if (premRegs.Any())
                {
                    var premReg = premRegs.Single();
                    var acntInts = (from a in db.MS_ACCTS_INTEGRATION where a.INT_PRODUCT == premReg.PR_COB && a.INT_TXN_SOURCE == premReg.PR_TXN_REF select a);
                    if (acntInts.Any())
                    {
                        var acntInt = acntInts.SingleOrDefault();
                        var polFees = (from f in db.INS_UDW_POL_FEES where f.POL_FEE_POL_SYS_ID == polId select f).ToList();
                        var commissions = (from c in db.INS_UWD_INTERMEDIARY_COMM where c.CMM_POL_SYS_ID == polId select c).ToList();
                        var prodrisk = (from u in db.INS_UDW_GA_TRANSIT where u.TRANS_POLH_SYS_ID == polId select u).ToList();
                        var acntMod = new PolicyTransitApprovalMdl();
                        var result = acntMod.ForwardTransaction(polHead, prodrisk, premReg, acntInt, polFees, commissions);
                        return result;
                    }

                    else return new { state = false, message = "The Account is not properly setup" };
                }

                else
                    return new { state = false, message = "No record found in the premium register" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/Confirmation/confirmProfIndemnityPolicy/{polId}")]
        public object ConfirmProfIndemnity(int polId)
        {
            var db = new SibaModel();
            try
            {

                var polHead = PolicyGAProfIndemnityMdl.get_policy(polId);

                var premRegs = (from pr in db.INS_PREMIUM_REGISTER where pr.PR_POL_SYS_ID == polId select pr);
                if (premRegs.Any())
                {
                    var premReg = premRegs.Single();
                    var acntInts = (from a in db.MS_ACCTS_INTEGRATION where a.INT_PRODUCT == premReg.PR_COB && a.INT_TXN_SOURCE == premReg.PR_TXN_REF select a);
                    if (acntInts.Any())
                    {
                        var acntInt = acntInts.SingleOrDefault();
                        var polFees = (from f in db.INS_UDW_POL_FEES where f.POL_FEE_POL_SYS_ID == polId select f).ToList();
                        var commissions = (from c in db.INS_UWD_INTERMEDIARY_COMM where c.CMM_POL_SYS_ID == polId select c).ToList();
                        var prodrisk = (from u in db.INS_UDW_GA_PROF_INDEMNITY where u.PRO_POLH_SYS_ID == polId select u).ToList();
                        var acntMod = new PolicyProfIndemnityApprovalMdl();
                        var result = acntMod.ForwardTransaction(polHead, prodrisk, premReg, acntInt, polFees, commissions);
                        return result;
                    }

                    else return new { state = false, message = "The Account is not properly setup" };
                }

                else
                    return new { state = false, message = "No record found in the premium register" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/Confirmation/confirmPaPolicy/{polId}")]
        public object ConfirmPa(int polId)
        {
            var db = new SibaModel();
            try
            {

                var polHead = PolicyPaMdl.get_policy(polId);

                var premRegs = (from pr in db.INS_PREMIUM_REGISTER where pr.PR_POL_SYS_ID == polId select pr);
                if (premRegs.Any())
                {
                    var premReg = premRegs.Single();
                    var acntInts = (from a in db.MS_ACCTS_INTEGRATION where a.INT_PRODUCT == premReg.PR_COB && a.INT_TXN_SOURCE == premReg.PR_TXN_REF select a);
                    if (acntInts.Any())
                    {
                        var acntInt = acntInts.SingleOrDefault();
                        var polFees = (from f in db.INS_UDW_POL_FEES where f.POL_FEE_POL_SYS_ID == polId select f).ToList();
                        var commissions = (from c in db.INS_UWD_INTERMEDIARY_COMM where c.CMM_POL_SYS_ID == polId select c).ToList();
                        var prodrisk = (from u in db.INS_UDW_PERSONAL_ACCIDENT where u.PA_POLH_SYS_ID == polId select u).ToList();
                        var acntMod = new PolicyPaApprovalMdl();
                        var result = acntMod.ForwardTransaction(polHead, prodrisk, premReg, acntInt, polFees, commissions);
                        return result;
                    }

                    else return new { state = false, message = "The Account is not properly setup" };
                }

                else
                    return new { state = false, message = "No record found in the premium register" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/Confirmation/confirmHomeOwnersPolicy/{polId}")]
        public object ConfirmHomeOwners(int polId)
        {
            var db = new SibaModel();
            try
            {
                var polHead = PolicyHomeOwnersMdl.get_policy(polId);

                var premRegs = (from pr in db.INS_PREMIUM_REGISTER where pr.PR_POL_SYS_ID == polId select pr);
                if (premRegs.Any())
                {
                    var premReg = premRegs.Single();
                    var acntInts = (from a in db.MS_ACCTS_INTEGRATION where a.INT_PRODUCT == premReg.PR_COB && a.INT_TXN_SOURCE == premReg.PR_TXN_REF select a);
                    if (acntInts.Any())
                    {
                        var acntInt = acntInts.SingleOrDefault();
                        var polFees = (from f in db.INS_UDW_POL_FEES where f.POL_FEE_POL_SYS_ID == polId select f).ToList();
                        var commissions = (from c in db.INS_UWD_INTERMEDIARY_COMM where c.CMM_POL_SYS_ID == polId select c).ToList();
                        var prodrisk = (from u in db.INS_UDW_HOME_OWNERS where u.HOP_POLH_SYS_ID == polId select u).ToList();
                        var acntMod = new PolicyHomeOwnersApprovalMdl();
                        var result = acntMod.ForwardTransaction(polHead, prodrisk, premReg, acntInt, polFees, commissions);
                        return result;
                    }

                    else return new { state = false, message = "The Account is not properly setup" };
                }

                else
                    return new { state = false, message = "No record found in the premium register" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


    }

}
