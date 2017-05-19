using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class SectionController : ApiController
    {
        // GET: api/Section
        public object Get()
        {
           try
            {
                return SectionMdl.get_sections();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        // GET: api/Section/
        public dynamic Get(string code)
        {
           try
            {
                return SectionMdl.get_section(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/section/lov")]
        public object lov()
        {
            try
            {
                return SectionMdl.get_lov_section();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/section/save")]
        public object save([FromBody]List<MS_SYS_SECTION> sections)
        {
           try
            {
                foreach (var cty in sections)
                {
                    SectionMdl.save_section(cty);
                }

                return new { state = true, message = "Sections Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/section/search/{query}")]
        public object search(string query)
        {
            try
            {
                return SectionMdl.search_sections(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/section/check/{code}")]
        public object Check(string code)
        {
           try
            {
                var result = SectionMdl.get_section(code);
                return result != null ? (object)new { state = true, name = result.SEC_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }
    }
}
