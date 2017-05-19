using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class HomeOwnersController : ApiController
    {
        // GET: api/HomeOwners
        public object Get()
        {
            try
            {
                return HomeOwnersMdl.get_homeowners();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }         
        }

        // GET: api/HomeOwners/
        public dynamic Get(string code)
        {
            try
            {
                return HomeOwnersMdl.get_homeowner(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }          
        }


        [HttpGet]
        [Route("api/homeowners/lov")]
        public object lov()
        {
            try
            {
                return HomeOwnersMdl.get_lov_homeowners();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }          
        }


        [HttpGet]
        [Route("api/homeowners/search/{q}")]
        public object Search([FromUri] string q) => HomeOwnersMdl.search_homeowners(q);


        [HttpPost]
        [Route("api/homeowners/save")]
        public object Save([FromBody] MS_UDW_HOME_OWNERS product)
        {
            try
            {
                HomeOwnersMdl.save_homeowners(product);
                return new { state = true, message = "Home Owners Setup successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = e };
            }
        }


        [HttpGet]
        [Route("api/homeowners/check/{code}")]
        public object Check(string code)
        {
            var result = HomeOwnersMdl.get_sub_homeowner(code);
            return result != null ? (object)new { state = true, name = result.HON_SEC_NAME } : new { state = false };
        }
    }
}
