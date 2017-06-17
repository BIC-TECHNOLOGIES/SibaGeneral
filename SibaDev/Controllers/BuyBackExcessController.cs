using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models.Entities_Models;

namespace SibaDev.Controllers
{
    public class BuyBackExcessController : ApiController
    {

        [HttpGet]
        [Route("api/BuyBackExcess/product/rates/{prdCode}")]
        public object ProductExcessRates([FromUri] string prdCode)
        {
            try
            {
                return BuyBackExccessMdl.GetProductExcess(prdCode);
            }
            catch (Exception e)
            {
                return new {state = false, message = e.Message, exception = e};
            }
        }

        [HttpGet]
        [Route("api/BuyBackExcess/product/rates/lov/{prdCode}")]
        public object ProductExcessRatesLov([FromUri] string prdCode)
        {
            try
            {
                return BuyBackExccessMdl.GetProductExcessLov(prdCode);
            }
            catch (Exception e)
            {
                return new {state = false, message = e.Message, exception = e};
            }
        }
    }
}
