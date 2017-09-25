using HtmlAgilityPack;
using Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class ScraperService
    {
        public List<Image> Scrape(Image model)
        {
            string url = model.Url;

            List<Image> imageList = new List<Image>();
            var webClient = new WebClient();
            var html = webClient.DownloadString(url);

            var htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(html);

            var elems =
                htmlDoc
                .DocumentNode
                .Descendants("img")
                .Select(x => x.GetAttributeValue("src", null))
                .Where(y => !String.IsNullOrEmpty(y));

            Image image = new Image();
            foreach (var elem in elems)
            {
                image.Url = elem;
                imageList.Add(image);
            }

            return imageList;
        }
    }
}
