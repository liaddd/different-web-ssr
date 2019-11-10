import React, { useEffect } from "react";
import Router from "next/router";
import Head from "./../head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Info from "./InfoPage";
import "./../styles/main.scss";
import { getCookie } from "../../utils/cookie";

const InfoPage = () => {
  useEffect(() => {
    const global_token = getCookie("global_token");
    if (!global_token) {
      Router.push("/");
    }
  }, []);
  return (
    <>
      <Head title="DiffeRent" ogTitle="תודה" canonical="info">
        <div lang="he" dir="rtl" className="app info">
          <Header />
          <Info />
          <Footer />
        </div>
      </Head>
    </>
  );
};

// InfoPage.getInitialProps = ctx => {
//   initialize(ctx);
// };
export default InfoPage;
