import React, { Component, Fragment } from "react";

import "./ContactBlock.scss";
import contactIcon1 from "./../../public/img/envelope-icon-coral.svg";
import contactIcon2 from "./../../public/img/telephone-ring-icon-coral.svg";
import contactIcon3 from "./../../public/img/location-icon-coral.svg";

class ContactBlock extends Component {
  render() {
    return (
      <Fragment>
        <section className="section section-contact">
          <div className="container">
            <h2 className="section-small-heading">רוצה לדבר איתנו?</h2>
            <div className="contact-block-container">
              <div className="contact-block">
                <img src={contactIcon1} alt="" />
                <h3>מייל :</h3>
                <p>
                  <a href="mailto:service@diffe-rent.co.il">
                    service@diffe-rent.co.il
                  </a>
                </p>
              </div>
              <div className="contact-block">
                <img src={contactIcon2} alt="" />
                <h3>טלפון :</h3>
                <p>
                  <a href="tel:050-2192570">050-2192570</a>
                </p>
              </div>
              <div className="contact-block">
                <img src={contactIcon3} alt="" />
                <h3>כתובת :</h3>
                <p>ארלוזורוב 111, תל אביב</p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ContactBlock;
