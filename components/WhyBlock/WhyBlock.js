import React, { Component, Fragment } from "react";
import "./WhyBlock.scss";

class WhyBlock extends Component {
  render() {
    return (
      <Fragment>
        <section className="section section-why">
          <div className="container">
            <h2 className="section-heading section-heading-line">
              למה DiffeRent?
            </h2>
            <div className="why-block">
              <div className="why">
                <div className="why-icon" />
                <h3>שותפים לדרך</h3>
                <p>
                  DiffeRent מלווה אתכם עוד משלב חיפוש הדייר והחתימה על החוזה,
                  <br />
                  גם ובמיוחד כשיש בעיות ועד שהן נפתרות.
                </p>
              </div>
              <div className="why">
                <div className="why-icon" />
                <h3>פשוט ומיידי</h3>
                <p>תהליך פשוט, ברור והכי חשוב בטוח. בלי אותיות קטנות.</p>
              </div>
              <div className="why">
                <div className="why-icon" />
                <h3>רווח גדול במחיר קטן</h3>
                <p>
                  בעבור 2.5% בלבד משכר הדירה החודשי,
                  <br />
                  תבטיחו לכם את שכר הדירה שישולם בזמן, כל הזמן.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default WhyBlock;
