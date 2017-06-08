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
    public class PolicyHomeOwnersController : ApiController
    {

        [HttpGet]
        [Route("api/policyhomeowners/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return PolicyHomeOwnersMdl.search_policys(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
       
        }

        [HttpPost]
        [Route("api/policyhomeowners/save")]
        public object Save([FromBody] INS_UWD_POLICY_HEAD policy)
        {
            try
            {
                var result = PolicyHomeOwnersMdl.save_policy(policy);

                return new { state = true, message = "Home Owners Policy successfully Saved", result = new {
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

        public object Get()
        {
            try
            {
                return PolicyHomeOwnersMdl.get_policys_est();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        [HttpGet]
        [Route("api/policyhomeowners/searchest/{q}")]
        public object Searchest(string q)
        {
            try
            {
                return PolicyHomeOwnersMdl.search_policys_est(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        [HttpPost]
        [Route("api/policyhomeowners/clmrisk")]
        public IEnumerable<object> get_estimate_risk(ProductsRisksCoversJSON riskJson)
        {
            var riskLst = PolicyHomeOwnersMdl.get_estimate_risk(riskJson.CLM_EST_RISK).ToList();

            return riskLst;
        }

        [HttpGet]
        [Route("api/policyhomeowners/endDeletion/{polSysId}/{endNo}")]
        public object EndDeletionData(int polSysId, int endNo)
        {

            try
            {
                var risk = PolicyHistoryMdl.GetHPolicyHead(polSysId, endNo);
                risk.POLH_TXN_STATE = "P";
                var result = PolicyHomeOwnersMdl.SaveEndsmntCancl(risk);

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