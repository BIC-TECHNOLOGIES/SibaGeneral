﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

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


    }
}