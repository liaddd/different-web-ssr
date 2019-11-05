import React from "react";
// import initialize from "../../utils/initialize";
import Head from "./../head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Info from "./InfoPage";
import "./../styles/main.scss";

const InfoPage = () => {
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
