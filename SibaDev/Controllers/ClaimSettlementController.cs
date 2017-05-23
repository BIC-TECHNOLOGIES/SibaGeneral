using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;
using SibaDev.Models.Claim_Models;

namespace SibaDev.Controllers
{
    public class ClaimSettlementController : ApiController
    {
        // GET: api/ClaimSettlement
        public object Get()
        {
           try
            {
                return CountryMdl.get_countries();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        // GET: api/ClaimSettlement/
        public dynamic Get(string code)
        {
           try
            {
                return CountryMdl.get_country(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/ClaimSettlement/lov")]
        public object lov()
        {
            try
            {
                return CountryMdl.get_lov_country();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/ClaimSettlement/save")]
        public object save([FromBody]List<INS_CLM_PAYMENT_HEAD> countries)
        {
           try
            {
                foreach (var cty in countries)
                {
                    ClaimSettlementMdl.save_claim_settlement(cty);
                }

                return new { state = true, message = "Claim Settlement Successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/ClaimSettlement/search/{query}")]
        public object search(string query)
        {
            try
            {
                return CountryMdl.search_countries(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/ClaimSettlement/check/{code}")]
        public object Check(string code)
        {
           try
            {
                var result = CountryMdl.get_country(code);
                return result != null ? (object)new { state = true, name = result.CNT_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }
    }
}
