import React, { Component, Fragment } from "react";

import "./WeDoBlock.scss";
import wedoIcon1 from "./../../public/icons/wedo-icon-1.svg";
import wedoIcon2 from "./../../public/icons/wedo-icon-2.svg";
import wedoIcon3 from "./../../public/icons/wedo-icon-3.svg";
import wedoIcon4 from "./../../public/icons/wedo-icon-4.svg";
import hotAirBalloon from "./../../public/icons/hot-air-balloon.svg";

class WeDoBlock extends Component {
  render() {
    return (
      <Fragment>
        <section className="section section-wedo">
          <div className="hot-air-balloon-building" />
          <img className="hot-air-balloon" src={hotAirBalloon} alt="" />
          <div className="container">
            <h2 className="section-heading section-heading-line">
              באילו מצבים אנחנו נכנסים לתמונה?
            </h2>
            <div className="wedo-block">
              <div className="wedo">
                <img src={wedoIcon1} alt="" />
                <h3>בדיקת רקע לדייר</h3>
                <p>
                  DiffeRent מאפשרת לך לבדוק עד 5 דיירים פוטנציאלים בחינם ובאופן
                  מיידי. כל מה שאתה זקוק לו הוא שם,
                  <br />
                  מספר ת.ז ומספר טלפון של הדייר
                  <br />
                  ותוך פחות מ-2 שניות, נעדכן אותך האם הדיייר עבר את הבדיקה.
                </p>
              </div>
              <div className="wedo">
                <img src={wedoIcon2} alt="" />
                <h3>הדייר לא משלם את שכר הדירה</h3>
                <p>
                  DiffeRent מבטיחה את תשלום שכר הדירה לבעל הדירה עד תום החוזה או
                  עד מציאת דייר חלופי.
                </p>
              </div>
              <div className="wedo">
                <img src={wedoIcon3} alt="" />
                <h3>יציאה פתאומית מהנכס</h3>
                <p>
                  במקרים כגון פרידה מבן/בת הזוג, פיטורים, מחלה (לא עלינו),
                  דיירים מסויימים נאלצים לצאת מהנכס בפתאומיות.
                  <br />
                  DiffeRent תשלם את שכר הדירה לבעל הדירה עד תום החוזה או עד
                  למציאת דייר חלופי ותמנע פגיעה בהכנסתו.
                </p>
              </div>
              <div className="wedo">
                <img src={wedoIcon4} alt="" />
                <h3>סירוב להתפנות (דייר סרבן)</h3>
                <p>
                  הדייר מסרב להתפנות מהדירה? DiffeRent תדאג לייצוג משפטי ולכיסוי
                  כלל ההוצאות המשפטיות, תמשיך לשלם לבעל הדירה את שכר הדירה ותמצא
                  לו דייר חלופי.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default WeDoBlock;
