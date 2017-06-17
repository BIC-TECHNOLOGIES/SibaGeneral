using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.Entities_Models
{
    public class BuyBackExccessMdl
    {
        public static IEnumerable<MS_CLM_DED_EXCESS> GetProductExcess(string prdCode)
        {
            var db = new SibaModel();
            return (from excs in db.MS_CLM_DED_EXCESS where excs.EXS_PROD_CODE == prdCode select excs);
        }
        public static IEnumerable<object> GetProductExcessLov(string prdCode)
        {
            return GetProductExcess(prdCode).Select(x => new {CODE = x.EXS_SYS_ID, NAME = x.EXS_RATE, MIN = x.EXS_MIN_AMOUNT, MAX = x.EXS_MAX_AMOUNT, NARRATION = x.EXS_NART});
        }


    }
}