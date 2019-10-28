import React from "react";
import Head from "../head";
import PrivacyPolicy from "./PrivacyPolicy";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./../styles/main.scss";
// import initialize from "../../utils/initialize";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head title="DiffeRent">
        <div lang="he" dir="rtl" className="app privacy-policy">
          <Header />
          <PrivacyPolicy />
          <Footer />
        </div>
      </Head>
    </>
  );
};

// PrivacyPolicyPage.getInitialProps = ctx => {
//   initialize(ctx);
// };
export default PrivacyPolicyPage;
