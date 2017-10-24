using CavsAssignment.Extentions;
using CavsAssignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CavsAssignment.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [AllowCrossSiteJson]
        public JsonResult GetPlayerInformation(HomeModel model)
        {
            var response = new ResponseModel();
            response.PlayerNumber = model.PlayerNumber;

            if (model.PlayerNumber == 23)
            {
                response.PlayerName = "Lebron James";
            }
            else if (model.PlayerNumber == 2)
            {
                response.PlayerName = "Kyrie Irving";
            }
            else if (model.PlayerNumber == 17)
            {
                response.PlayerName = "Anderson Varejão";
            }
            else
            {
                response.PlayerName = "Player Not Found";
            }

            return new JsonResult().SerializeObject(response);
        }
    }
}
    
