using MFFStats.Models.Responses;
using Models.Domain;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Scraper.Web.Controllers.Api
{
    [RoutePrefix("api/scrape")]
    public class ScrapeApiController : ApiController
    {
        ScraperService svc = new ScraperService();

        [Route(),HttpPost]
        public HttpResponseMessage Post(Image model)
        {
            try
            {
                ItemsResponse<Image> response = new ItemsResponse<Image>();
                response.Items = svc.Scrape(model);
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}