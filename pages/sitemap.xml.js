import React from "react";

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://www.diffe-rent.co.il/</loc><lastmod>2019-11-17</lastmod></url>
  </urlset>`;

export default class Sitemap extends React.Component {
  static getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemapXml);
    res.end();
  }
}
