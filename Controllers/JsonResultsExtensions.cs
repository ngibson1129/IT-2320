using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace CavsAssignment.Extentions
{
    public static class JsonResultsExtensions
    {
        public static JsonResult SerializeObject(this JsonResult result, object rawObject)
        {
            result.Data = new JavaScriptSerializer().Serialize(rawObject);
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            return result;
        }
    }
}