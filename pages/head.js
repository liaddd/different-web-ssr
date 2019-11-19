import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

let defaultDescription =
  "הכירו את דיפרנט - DiffeRent - פלטפורמה דיגיטלית המבטיחה לכם תשלום של שכר הדירה ומטפלת בפתרונות לדיירים סרבנים ומציאת דיירים חלופיים לדירה";
let defaultTitle = "DiffeRent - מבטיחים לך את שכר הדירה";
let ogTitle = "";
let internalPages = "משכירים דירות בראש שקט";
let canonical = "https://www.diffe-rent.co.il/";

const Head = props => {
  ogTitle =
    props.ogTitle != null
      ? `DiffeRent | ${props.ogTitle} - ${internalPages}`
      : defaultTitle;
  defaultDescription =
    props.defaultDescription != null
      ? props.defaultDescription
      : defaultDescription;
  canonical = `https://www.diffe-rent.co.il/${props.canonical || ""}`;
  return (
    <>
      <NextHead>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/img/home-banner-small.png" />
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content="https://www.diffe-rent.co.il" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ogTitle} />
        <meta
          property="og:description"
          content={props.description || defaultDescription}
        />
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
        {/* <script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=01c76c6a-b643-4fa7-9a06-11d8c9ef03f5"
      ></script> */}
        <title>{ogTitle || props.title}</title>
        <meta
          name="description"
          content={props.description || defaultDescription}
        />
      </NextHead>
      {props.children}
    </>
  );
};

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
