import React from "react";
import Link from "next/link";
import Head from "./head";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import "./styles/main.scss";

const styles = {
  "text-align": "center",
  margin: "100px "
};
function Error({ statusCode }) {
  return (
    <Head title="404-page">
      <div lang="he" dir="rtl" className="app">
        <Header />
        <div style={styles}>
          {statusCode ? (
            <div>
              <h1>עמוד לא קיים</h1>
              <h2>
                העמוד שביקשת לא נמצא.
                <br />
                יתכן ששמו השתנה, מיקומו הוזז או שאינו קיים.
              </h2>
              <Link href="/">
                <button className="btn btn-blue btn-large">
                  חזרה לעמוד הראשי
                </button>
              </Link>
            </div>
          ) : (
            "An error occurred on client"
          )}
        </div>
        <Footer />
      </div>
    </Head>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
