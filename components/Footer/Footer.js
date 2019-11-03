import React, { Component, Fragment } from "react";
import Link from "next/link";

import "./Footer.scss";
import LogoGrey from "./../../public/icons/different_logo_white.png";
import Facebook from "./../../public/icons/facebook-icon.svg";
import Linkedin from "./../../public/icons/linkedin-icon.svg";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="section section-footer">
          <div className="footer-block">
            <div className="logo-block">
              <Link href="/">
                <div className="logo-link">
                  <img
                    className="logo logo-grey"
                    src={LogoGrey}
                    alt="DiffeRent"
                  />
                </div>
              </Link>
            </div>
            <div className="follow-block">
              <button className="icon-facebook icon-dims">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/DiffeRent-%D7%9E%D7%91%D7%98%D7%99%D7%97%D7%99%D7%9D-%D7%9C%D7%9A-%D7%90%D7%AA-%D7%A9%D7%9B%D7%A8-%D7%94%D7%93%D7%99%D7%A8%D7%94-482879752481635"
                >
                  <img src={Facebook} alt="icon facebook" />
                </a>
              </button>
              <button className="icon-linkedin icon-dims">
                <img src={Linkedin} alt="icon linkedin" />
              </button>
            </div>
            <div className="help-block">
              <Link href="/contact">
                <div className="btn btn-circle help-link">
                  אפשר
                  <br />
                  לעזור?
                </div>
              </Link>
            </div>
          </div>
          <div className="footer-container">
            <div className="links-block">
              <nav className="links-block-row">
                <span className="links-block-title">
                  <strong>החברה</strong>
                </span>
                <Link href="/about-us">
                  <a>אודותינו</a>
                </Link>
                <Link href="/contact">
                  <a>יצירת קשר</a>
                </Link>
                <Link href="/questions-and-answers">
                  <a>שאלות ותשובות</a>
                </Link>
              </nav>
              <nav className="links-block-row">
                <span className="links-block-title">
                  <strong>תנאים </strong>
                </span>
                <a
                  href="https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA+%D7%94%D7%A4%D7%A8%D7%98%D7%99%D7%95%D7%AA-DiffeRent.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  מדיניות פרטיות
                </a>
                <a
                  href="https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%AA%D7%A7%D7%A0%D7%95%D7%9F-+DiffeRent.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  תקנון החברה
                </a>
                <a
                  href="https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%91%D7%98%D7%97%D7%95%D7%9F+%D7%91%D7%A9%D7%9B%D7%99%D7%A8%D7%95%D7%AA+-+DiffeRent.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  שירות בטחון בשכירות
                </a>
              </nav>
              <nav className="links-block-row">
                <span className="links-block-title">
                  <strong>השירותים שלנו</strong>
                </span>

                <Link href="/services/tenant-eviction">
                  <a>פינוי שוכר</a>
                </Link>

                <Link href="/services/rent-check">
                  <a>בדיקת רקע של שוכרים</a>
                </Link>
                <Link href="/services/rent-guarantee">
                  <a>הבטחת שכר דירה</a>
                </Link>
                <Link href="/services/rent-payment">
                  <a>תשלום שכר דירה בכרטיס אשראי</a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
