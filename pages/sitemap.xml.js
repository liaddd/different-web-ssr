import React from "react";

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">


<url>
  <loc>https://www.diffe-rent.co.il/</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/signin</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/about-us</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/articles-of-association</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/contact</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/terms</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/privacy-policy</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/use-policy</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/questions-and-answers</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/services/tenant-eviction</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/services/rent-check</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/services/rent-guarantee</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/services/rent-payment</loc>
  <lastmod>2019-11-16T19:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/blog/post?title=%D7%A6%D7%9E%D7%A6%D7%95%D7%9D%20%D7%A0%D7%96%D7%A7%D7%99%D7%9D/tsmtsvm-nzqym</loc>
  <lastmod>2019-11-19T14:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.diffe-rent.co.il/blog/post?title=%D7%A4%D7%99%D7%A0%D7%95%D7%99%20%D7%93%D7%99%D7%99%D7%A8/pynvy-dyyr</loc>
  <lastmod>2019-11-19T14:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>

</urlset>`;

export default class Sitemap extends React.Component {
  static getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemapXml);
    res.end();
  }
}
