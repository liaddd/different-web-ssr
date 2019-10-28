import React from "react";
import Head from "../head";
import Terms from "./Terms";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./../styles/main.scss";
// import initialize from "../../utils/initialize";

const TermsPage = () => {
  return (
    <>
      <Head title="DiffeRent">
        <div lang="he" dir="rtl" className="app terms">
          <Header />
          <Terms />
          <Footer />
        </div>
      </Head>
    </>
  );
};

// TermsPage.getInitialProps = ctx => {
//   initialize(ctx);
// };
export default TermsPage;
