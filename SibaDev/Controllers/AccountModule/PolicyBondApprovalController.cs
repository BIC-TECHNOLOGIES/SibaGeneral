﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.JSON_Templates;
using SibaDev.Libs;
using SibaDev.Models.AccountsModel;
using SibaDev.Models.PolicyApproval_Models;

namespace SibaDev.Controllers.AccountModule
{
    public class PolicyBondApprovalController : ApiController
    {

        [HttpPost]
        [Route("api/policybondapproval")]
        public object Post([FromBody] PolicyApprovalJson paramss)
        {
            try
            {
                var acntModule = new PolicyBondApprovalMdl();
                var insuranceLedger = InsuranceLedgerMdl.GetPolicyInsuranceLedger(paramss.POL_SYS_ID);
                dynamic result = acntModule.InsuranceTransactionPosting(insuranceLedger);
                return new {state = true, message = "Policy Successfully Approved" , result };
               // result.state ? new
            }
            catch (Exception e)
            {
                return new {state = true, message = "Server Error", exception = e};
            }
        }
    }
}
