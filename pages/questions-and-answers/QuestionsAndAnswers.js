import React, { Component, Fragment } from "react";
import ClassName from "classnames";

import "./QuestionsAndAnswers.scss";
import PageHeader from "../../components/PageHeader/PageHeader";

const FAQBlock1 = 1;
const FAQBlock2 = 2;
const FAQBlock3 = 3;

class QuestionsAndAnswers extends Component {
  state = {
    activeBlock: 1
  };

  onClickHandler = (e, activeBlock) => {
    this.setState({ activeBlock });
  };

  render() {
    const { activeBlock } = this.state;
    return (
      <Fragment>
        <PageHeader PageHeaderTitle={`שאלות ותשובות`} />
        <section className="section section-page-content">
          <div className="container">
            <div className="faq-page content">
              <div className="faq-link-container">
                <div
                  className={ClassName("faq-link", {
                    "faq-link-is-active": activeBlock === FAQBlock1
                  })}
                  onClick={e => this.onClickHandler(e, FAQBlock1)}
                >
                  <strong className="faq-link-text">אודות DiffeRent</strong>
                </div>
                <div
                  className={ClassName("faq-link", {
                    "faq-link-is-active": activeBlock === FAQBlock2
                  })}
                  onClick={e => this.onClickHandler(e, FAQBlock2)}
                >
                  <strong className="faq-link-text">
                    מהו שירות בטחון בשכירות
                    {/* <br />
                    של DiffeRent? */}
                  </strong>
                </div>
                {/*<div className={ClassName("faq-link", {"faq-link-is-active": activeBlock === FAQBlock3})}*/}
                {/*onClick={(e)=> this.onClickHandler(e, FAQBlock3)}>*/}
                {/*<strong className="faq-link-text">*/}
                {/*שאלות משפטיות<br />בנושא שכירות*/}
                {/*</strong>*/}
                {/*</div>*/}
              </div>
              <div className="faq-block-container">
                <div
                  className={ClassName("faq-block", {
                    "faq-block-is-active": activeBlock === FAQBlock1
                  })}
                >
                  <h3 className="faq-block-title">מהו החזון של DiffeRent?</h3>
                  <div className="block-content">
                    <p>
                      {" "}
                      היא פלטפורמה דיגיטלית מעולמות הפרופטק (Property Tech),
                      המבטיחה לכם בטחון ושקט נפשי בכל הנוגע לשכר הדירה שלכם. היא
                      נולדה מתוך המציאות של בעלי דירות רבים אשר גילו ששכר הדירה
                      רחוק מלהיות דבר מובטח. כשמשהו משתבש, היכולת של בעל הדירה
                      לקבל את המגיע לו ולצאת מכך ללא נזק וללא בזבוז זמן מיותר,
                      שואפת לאפס. DiffeRent משנה את הדרך בה אנשים משכירים דירות
                      ע״י הפיכת החוויה לדיגיטלית, יעילה והכי חשוב, בטוחה. מהיום
                      הכל קורה במקום אחד, בלחיצת כפתור, בזמן אמת ובאחריות. לא
                      עוד דאגה מתמדת ובזבוז זמן. בעבור רק 2.5% מדמי השכירות
                      החודשיים, מקבל בעל הנכס את הבטחת דמי השכירות עד תום החוזה,
                      מציאת דייר חלופי במקרה הצורך ואף פינוי דייר סרבן, והכל
                      בפשטות של לחיצת כפתור - diffe-rent.co.il
                    </p>
                  </div>
                  <h3 className="faq-block-title">מי עומד מאחורי DiffeRent?</h3>
                  <div className="block-content">
                    <p>
                      DiffeRent נמצאת בבעלות חברת ג'יי.אל פיתוח ויזמות בע"מ,
                      שמניותיה מוחזקות בידי משפחת משקיעים פרטית.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    האם DiffeRent פועלת רק בישראל?
                  </h3>
                  <div className="block-content">
                    <p>
                      נכון להיום פועלת DiffeRent בישראל בלבד. בעתיד תצא לשיווק
                      בשווקים נוספים.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    האם DiffeRent היא חברת ביטוח?
                  </h3>
                  <div className="block-content">
                    <p>לא.</p>
                    <p>
                      ישנם 2 הבדלים עיקריים בין פעילותה של DiffeRent לזו של חברת
                      ביטוח:
                    </p>
                    <p>
                      חברת ביטוח מוגבלת בפעילותה ע"י מערכת רגולציה מורכבת,
                      ומנועה מלעסוק בנושאים שונים בהם DiffeRent רשאית לפעול.
                    </p>
                    <p>
                      תפקידה של חברת ביטוח הוא לשלם בעת נזק. DiffeRent פועלת
                      לתיקון הנזק (פינוי שוכר סרבן, השמת שוכר חדש) ומשלמת פיצוי
                      כספי רק כל עוד לא הצליחה לעשות כן.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    אתם שומרים אצלכם את פרטי האשראי שלי?
                  </h3>
                  <div className="block-content">
                    <p>
                      ברגע שהכנסתם כרטיס אשראי למערכת, מספר הכרטיס מוצפן. אנחנו
                      משתמשים בטכנולוגיה PCI 1 - המאושרת ע”י חברות האשראי
                      בישראל- על מנת לבצע הצפנה ובכך שומרים על פרטי כרטיס האשראי
                      שלכם.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    איך אני אדע שלא תעבירו מידע אישי שלי לחברות אחרות?
                  </h3>
                  <div className="block-content">
                    <p>
                      באתר, במסמך "מדיניות הפרטיות", מוסבר לאילו צרכים אנו
                      מחזיקים במידע זה. לעולם לא נעשה שימוש במידע שלא בהתאם לחוק
                      ולמדיניות הפרטיות.
                    </p>
                  </div>
                  {/* <h3 className="faq-block-title">האם יש אפליקציות דומות בעולם?</h3>
                  <div className="block-content">
                    <p>בעולם ישנן אפליקציות המציעות שירותים שונים בעולם השכירות אך אין אפליקציות המציעות מוצר זהה.</p>
                  </div>

                  <h3 className="faq-block-title">מה ההבדל בין DiffeRent לבין מתווך?</h3>
                  <div className="block-content">
                    <p>תפקידו של מתווך לחבר בין שוכר ובעל נכס, ולשדלם להגיע לעמק השווה על מנת שתיווצר עסקה. משבוצעה- סיים המתווך את תפקידו.</p>
                    <p>לוקחת אחריות על השוכר ועל בעל הנכס, ערבה לתשלומי השוכר כלפי בעל הנכס ומאפשרת לשניהם לבצע את כל שלבי ההשכרה בקלות ובמהירות ע"ג האפליקציה.</p>
                  </div>

                  <h3 className="faq-block-title">מה קורה בתום תקופת הסכם ההבטחה?</h3>
                  <div className="block-content">
                    <p>כאשר יתקרב מועד הסיום נפנה אליך ונשאל אותך מה תרצה לעשות: האם להמשיך (למשל, לשנת שכירות נוספת, או לגבי שוכר חדש) או להפסיק.</p>
                  </div>

                  <h3 className="faq-block-title">מאיזה שלב השוכר נקרא שוכר שלא משלם ואתם תשלמו במקומו?</h3>
                  <div className="block-content">
                    <p>
                      בחוזה השכירות בינך לבין המשכיר יש סעיף המגדיר כמה זמן "מותר" לאחר בתשלום. מרגע שהמועד חלף- השוכר הפר את החוזה, ואתה יכול לפנות אלינו. כמובן שאם בינתיים השוכר שילם, לא יהיה צורך
                      בתשלום מצידנו.
                    </p>
                  </div> */}
                </div>
                <div
                  className={ClassName("faq-block", {
                    "faq-block-is-active": activeBlock === FAQBlock2
                  })}
                >
                  <h3 className="faq-block-title">
                    מה שירות בטחון בשכירות כולל?
                  </h3>
                  <div className="block-content">
                    <p>
                      <strong>1. בדיקת רקע לדייר:</strong> DiffeRent מאפשרת לך
                      לבדוק עד 5 דיירים פוטנציאליים בחינם ובאופן מיידי. כל מה
                      שאתם זקוקים לו הוא שם, מספר ת.ז ומספר טלפון של הדייר ותוך
                      פחות מ- 2 שניות DiffeRent תעדכן את בעל הדירה האם הדייר עבר
                      את הבדיקה.
                      <br /> <strong>
                        2. הדייר לא משלם את שכר הדירה:
                      </strong>{" "}
                      DiffeRent מבטיחה את תשלום שכר הדירה לבעל הנכס עד תום החוזה
                      או עד מציאת דייר חלופי. <br />
                      <strong>3. יציאה פתאומית מהנכס:</strong> במקרים כגון פרידה
                      מבן/בת הזוג, פיטורים, מחלה (לא עלינו), דיירים מסויימים
                      נאלצים לצאת מהנכס בפתאומיות. DiffeRent תשלם את שכר הדירה
                      לבעל הדירה עד תום החוזה או עד למציאת דייר חלופי וכך תמנע
                      פגיעה בהכנסתו.
                      <br /> <strong>4. סירוב להתפנות (דייר סרבן):</strong>{" "}
                      הדייר מסרב להתפנות מהדירה? DiffeRent תדאג לייצוג המשפטי
                      ולכיסוי כלל ההוצאות המשפטיות, תמשיך לשלם לבעל הדירה את שכר
                      הדירה עד תום החוזה ותמצא לו דייר חלופי.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    מתי DiffeRent משלמת? תוך כמה זמן?
                  </h3>
                  <div className="block-content">
                    <p>
                      אנחנו נזכה את חשבונו של בעל הדירה תוך 14 יום מהרגע בו
                      הוכחה זכאותו לפיצוי.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    איך מתבצע התשלום? העברה בנקאית/צ'קים/כרטיס אשראי?
                  </h3>
                  <div className="block-content">
                    <p>התשלום לבעל הנכס יבוצע באמצעות העברה בנקאית.</p>
                  </div>

                  <h3 className="faq-block-title">
                    DiffeRent תשלם בדיוק מה שהשוכר שילם לי?
                  </h3>
                  <div className="block-content">
                    <p>
                      נכון. אנחנו נשלם את שכר הדירה כפי שהוא מופיע בהסכם השכירות
                      עליו אתה והדייר חתומים.
                    </p>
                  </div>

                  <h3 className="faq-block-title">ואם השוכר הבא ישלם פחות?</h3>
                  <div className="block-content">
                    <p>
                      יתכן מצב בו מצאנו דייר חליף בשכר דירה נמוך מזה ששילם הדייר
                      המקורי. במקרה כזה נשלים את ההפרש.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    תוך כמה זמן DiffeRent תאתר לי שוכר?
                  </h3>
                  <div className="block-content">
                    <p>
                      אין התחייבות כזאת, אך כל עוד לא מצאנו שוכר (ועד תום תקופת
                      החוזה המקורי שנחתם עם הדייר הסרבן) נשלם לך את שכר הדירה,
                      בזמן.
                    </p>
                  </div>

                  <h3 className="faq-block-title">ואם אני רוצה שוכר אחר?</h3>
                  <div className="block-content">
                    <p>
                      כל שוכר שנציע לך עבר את בדיקתנו, ואנו ערבים לו ולתשלומיו.
                      אתה רשאי לפסול כמובן מועמדות של שוכר שאינו מוצא חן בעיניך
                      מכל סיבה שהיא. אם פסלת 2 מועמדים או יותר שהיצענו, תפוג
                      התחייבותנו לתשלום.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    מה קורה בתום תקופת בטחון בשכירות?
                  </h3>
                  <div className="block-content">
                    <p>
                      לפני תום מועד סיום הסכם השכירות, אנו נצור איתך קשר כדי
                      לוודא שהסכם השכירות פג או חודש.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    מאיזה שלב הדייר נקרא דייר שלא משלם ואתם תשלמו במקומו?
                  </h3>
                  <div className="block-content">
                    <p>
                      בחוזה השכירות בינך לבין הדייר יש סעיף המגדיר כמה זמן
                      "מותר" לאחר בתשלום. מרגע שהמועד חלף והדייר הפר את החוזה,
                      אתה יכול לפנות אלינו. כמובן שאם בינתיים השוכר שילם, לא
                      יהיה צורך בתשלום מצידנו.
                    </p>
                  </div>
                  {/* <h3 className="faq-block-title">האם "בטחון בשכירות" הוא ביטוח?</h3>
                  <div className="block-content">
                    <p>לא. בטחון בשכירות הוא אינו ביטוח. "בטחון בשכירות" הוא הסכם מסחרי בין בעל נכס להשכרה ל- DiffeRent.</p>
                  </div>

                  <h3 className="faq-block-title">מה מכוסה במסגרת "בטחון בשכירות"?</h3>
                  <div className="block-content">
                    <p>השירותים הניתנים בבטחון בשכירות הם:</p>
                    <p>1. הבטחת תשלום שכר הדירה החודשי לבעל הנכס עד תום החוזה או עד מציאת דייר חלופי.</p>
                    <p>2. פינוי דייר סרבן.</p>
                    <p>3. תשלום ההשתתפות העצמית במקרה של נזק לדירה מתוקף הפינוי.</p>
                  </div>

                  <h3 className="faq-block-title">באילו מקרים DiffeRent לא תשלם?</h3>
                  <div className="block-content">
                    <p>1. במקרה בו בעל הנכס לא הוכיח שנגרם לו הפסד שכר דירה.</p>
                    <p>2. במקרה בו הבעל הנכס שיקר בתצהיריו אלינו. למשל:</p>
                    <p>* אין בידיו הזכות להשכיר את הנכס.</p>
                    <p>* אין לו פוליסת ביטוח דירה תקפה.</p>
                    <p>* ההפרה של חוזה השכירות נעשתה על ידי בעל הנכס ולא ע"י השוכר.</p>
                  </div>

                  <h3 className="faq-block-title">ואם אין לי ביטוח דירה?</h3>
                  <div className="block-content">
                    <p>קיומו של ביטוח דירה תקף הוא תנאי יסודי לקיומו של בטחון בשכירות.</p>
                  </div>

                  <h3 className="faq-block-title">ואם אין לי ביטוח תכולה?</h3>
                  <div className="block-content">
                    <p>ביטוח הדירה צריך להתאים לחוזה ההשכרה: דירה שהושכרה ללא תכולה, אינה זקוקה לביטוח תכולה.</p>
                  </div>

                  <h3 className="faq-block-title">מתי DiffeRent משלמת? תוך כמה זמן?</h3>
                  <div className="block-content">
                    <p>אנחנו משלמים מייד כאשר הוכחה זכאות בעל הנכס לפיצוי.</p>
                  </div>

                  <h3 className="faq-block-title">איך מתבצע התשלום? העברה בנקאית/צ'קים/כרטיס אשראי?</h3>
                  <div className="block-content">
                    <p>ההעברה תעשה לחשבון בעל הנכס בהעברה בנקאית או בכרטיס אשראי.</p>
                  </div>

                  <h3 className="faq-block-title">DiffeRent תשלם בדיוק מה שהשוכר שילם לי?</h3>
                  <div className="block-content">
                    <p>אם הוכחה זכאותך, אנחנו נשלם את שכר הדירה כפי שהצהרת עליו באפליקציה, וכפי ששילמת עבורו את דמי "הסכם ההבטחה".</p>
                  </div>

                  <h3 className="faq-block-title">ואם השוכר הבא ישלם פחות?</h3>
                  <div className="block-content">
                    <p>יתכן מצב בו מצאנו דייר חליף בשכר דירה נמוך מזה ששילם הדייר המקורי. במקרה כזה נשלים את ההפרש.</p>
                  </div>

                  <h3 className="faq-block-title">מה קורה בתום תקופת הסכם ההבטחה?</h3>
                  <div className="block-content">
                    <p>כאשר יתקרב מועד הסיום נפנה אליך ונשאל אותך מה תרצה לעשות: האם להמשיך (למשל, לשנת שכירות נוספת, או לגבי שוכר חדש) או להפסיק.</p>
                  </div>

                  <h3 className="faq-block-title">מאיזה שלב השוכר נקרא שוכר שלא משלם ואתם תשלמו במקומו?</h3>
                  <div className="block-content">
                    <p>
                      בחוזה השכירות בינך לבין המשכיר יש סעיף המגדיר כמה זמן "מותר" לאחר בתשלום. מרגע שהמועד חלף- השוכר הפר את החוזה, ואתה יכול לפנות אלינו. כמובן שאם בינתיים השוכר שילם, לא יהיה צורך
                      בתשלום מצידנו.
                    </p>
                  </div> */}
                </div>
                <div
                  className={ClassName("faq-block", {
                    "faq-block-is-active": activeBlock === FAQBlock3
                  })}
                >
                  <h3 className="faq-block-title">
                    מהו "סעיף מהותי" או "סעיף עיקרי" בחוזה השכירות?
                  </h3>
                  <div className="block-content">
                    <p>הסעיפים שהפרתם מהווה עילה לביטול חוזה השכירות.</p>
                    <p>
                      ב"חוזה" חכם", בגלל שהוא קצר וממצה, כל הסעיפים מהווים סעיף
                      "מהותי" לעניין זה.
                    </p>
                  </div>
                  <h3 className="faq-block-title">
                    יש לי דייר שהפסיק לשלם. האם אני רשאי לפנותו מהדירה? איך
                    עושים את זה?
                  </h3>
                  <div className="block-content">
                    <p>השירותים הניתנים בבטחון בשכירות הם:</p>
                    <p>
                      הבטחת תשלום שכר הדירה החודשי לבעל הנכס עד תום החוזה או עד
                      מציאת דייר חלופי.פינוי דייר סרבן.
                    </p>
                    <p>
                      תשלום ההשתתפות העצמית במקרה של נזק לדירה מתוקף הפינוי.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    הדייר האחרון השאיר נזקים בדירה. מה אני יכול לעשות?
                  </h3>
                  <div className="block-content">
                    <p>
                      על פי חוזה השכירות, באם קיימים ערבויות או בטחונות, ניתן
                      לעשות בהם שימוש לשם תיקון הנזקים. במידה ואין, מכוח הוראות
                      הסכם השכירות, ניתן להגיש תביעה בסדר דין מקוצר.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    שכרתי דירה, ועכשיו החלו עבודות שיפוץ בבניין. האם אני רשאי
                    להפסיק את חוה השכירות?
                  </h3>
                  <div className="block-content">
                    <p>
                      נושא זה תלוי בתוכנו של הסכם השכירות ובסעיפיו (יתכנו מצבים
                      בהם ההסכם מתיר יציאה, ומקרים בהם לא). באם ההסכם שותק, על
                      פי חוק השכירות החדש, קיימת קביעה כי באם הנכס אינו ראוי
                      למגורים, רשאי השוכר להפסיק את השכירות עצמה, ובמקרה זה צריך
                      לבחון כל מצב לגופו.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    בדירה ששכרתי התגלו פגמים רבים. בעל הבית מסרב לתקן. מה הן
                    זכויותי?
                  </h3>
                  <div className="block-content">
                    <p>
                      על פי חוק השכירות החדש באם קיימים פגמים רבים בדירה, רשאי
                      השוכר, לאחר שנתן התראה למשכיר, לתקן את הליקויים בעצמו
                      ולהפחית אותם מדמי השכירות– ובלבד והדבר לא נשלל במפורש מכוח
                      ההסכם.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    האם איחור בתשלום שכר דירה מהווה הפרה של חוזה השכירות?
                  </h3>
                  <div className="block-content">
                    <p>
                      ברוב רובם של הסכמי השכירות סעיף זה מהווה הפרה יסודית – אך
                      יש להסתכל על הסכמי השכירות באופן פרטני לשם מתן תשובה
                      החלטית.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    הדייר שלי מייצר רעש בדירה, שהביא לתלונות של שכנים. האם זו
                    הפרה של הסכם השכירות? מה אני יכול לעשות?
                  </h3>
                  <div className="block-content">
                    <p>
                      ברוב במקרים רעש אינו מהווה הפרה יסודית (תלוי בכמות הרעש
                      ובתדירות שלו), ועל כן, אין הדבר מביא לביטול הסכם השכירות.
                      יצוין ויודגש כי תשובה זו תלויה בכמות הרעש, בתדירותו,
                      באמצעים בו הוא נוצר וכיוצ"ב.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    מהי הרבית המרבית שמותר למשכיר לגבות במקרה של פיגור מצד השוכר
                    בתשלומים?
                  </h3>
                  <div className="block-content">
                    <p>
                      הריבית המקסימלית הינה מכוח הסכם השכירות, ובלבד שאינה עולה
                      על ריבית חריגה בבנקים המסחריים בישראל.
                    </p>
                  </div>

                  <h3 className="faq-block-title">
                    מי חייב לעירייה, לתאגיד המים ולחברת כסף בגין חשבון שלא שולם
                    ע"י השוכר?
                  </h3>
                  <div className="block-content">
                    <p>
                      הרשויות מחייבות בתשלום את הגורם הרשום בפועל כמחזיק בנכס,
                      אף אם בפועל לא כך הדבר, ועל כן רצוי כי המחזיק בפועל ירשם
                      מיום קבלת החזקה במושכר ועד ליציאתו, כמחזיק בכל הגופים
                      הרלוונטים. למען הסר ספק, עיריות מסויימות, אינן מוכנות
                      לרשום מחזיק בנכס אם הסכם השכירות קצר מ 9-8 חודשים.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default QuestionsAndAnswers;
