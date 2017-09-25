using HtmlAgilityPack;
using Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;

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

            List<string> list = elems.ToList();
            for (int i = 0; i < list.Count; i++)
            {
                Image image = new Image();
                image.Url = list[i];
                imageList.Add(image);
            }
            return imageList;
        }
    }
}
