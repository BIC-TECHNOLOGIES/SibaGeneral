using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class PolicyLiabilityController : ApiController
    {
        // GET: PolicyPa
        public object Get()
        {
            try
            {
                return PolicyPaMdl.get_policys();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        public dynamic Get(int code)
        {
            try
            {
                return PolicyPaMdl.get_policy(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/policyliability/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return PolicyLiabilityMdl.search_policys(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpPost]
        [Route("api/policyliability/save")]
        public object Save([FromBody] INS_UWD_POLICY_HEAD liability)
        {
            try 
            {
                var result = PolicyLiabilityMdl.save_policy(liability);

                return new
                {
                    state = true,
                    message = "Liability Policy successfully Saved",
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

    }
}