import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";


const defaultDescription =
  "היא פלטפורמה דיגיטלית המבטיחה לכם בטחון ושקט נפשי בכל הנוגע לשכר הדירה שלכם. בעבור רק 2.5% מדמי השכירות החודשיים, מקבל בעל הדירה את הבטחת דמי השכירות עד תום החוזה, פינוי דייר סרבן ומציאת דייר חלופי במקרה הצורך DiffeRent";
const defaultTitle = "DiffeRent - מבטיחים לך את שכר הדירה";
const Head = props => (
  <>
    <NextHead>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/img/home-banner-small.png" />
      <link rel="canonical" href="https://www.diffe-rent.co.il/" />
      <meta property="og:url" content="https://www.diffe-rent.co.il" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta
        property="og:image"
        itemprop="image"
        content="https://www.diffe-rent.co.il/img/home-banner-small-test.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="google-site-verification"
        content="_kVAnQarUqnT7UKA321avgTWpBMJelwbfAfHfr69XrM"
      />
      <script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=01c76c6a-b643-4fa7-9a06-11d8c9ef03f5"
      ></script>
      <title>{props.title || defaultTitle}</title>
      <meta
        name="description"
        content={props.description || defaultDescription}
      />
    </NextHead>
    {props.children}
  </>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
