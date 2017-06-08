using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;
using SibaDev.Models.History_Models;
using SibaDev.JSON_Templates;

namespace SibaDev.Controllers
{
    public class PolicyGaTransitController : ApiController
    {
        // GET: PolicyGa

        [HttpGet]
        [Route("api/policygatransit/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return PolicyGATransitMdl.search_policys(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
         
        }


        [HttpPost]
        [Route("api/policygatransit/save")]
        public object Save([FromBody] INS_UWD_POLICY_HEAD ga)
        {
            try
            {
                var result = PolicyGATransitMdl.save_policy(ga);

                return new
                {
                    state = true,
                    message = "Cash/Goods in Transit Policy successfully Saved",
                    result = new
                    {
                        result.POLH_SYS_ID,
                        result.POLH_END_NO,
                        result.POLH_STATUS,
                        result.POLH_TXN_STATE,
                        result.POLH_POL_STATE,
                        result.POLH_DISPLAY_NO,
                        result.POLH_QUT_SER_NO,
                    }
                };
            }
            catch (Exception e)
            {
                return new { state = false, message = e };
            }
        }

        [HttpGet]
        [Route("api/policygatransit/endDeletion/{polSysId}/{endNo}")]
        public object EndDeletionData(int polSysId, int endNo)
        {

            try
            {
                var risk = PolicyHistoryMdl.GetHPolicyHead(polSysId, endNo);
                risk.POLH_TXN_STATE = "P";
                var result = PolicyGATransitMdl.SaveEndsmntCancl(risk);


                return new
                {
                    state = true,
                    message = "Endorsement Successfully canceled",
                    //data = motor
                };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }
    }
}