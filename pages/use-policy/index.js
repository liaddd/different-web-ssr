import React from "react";
import Head from "../head";
import UsePolicy from "./UsePolicy";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./../styles/main.scss";
// import initialize from "../../utils/initialize";

const UsePolicyPage = () => {
  return (
    <>
      <Head title="DiffeRent">
        <div className="app use-policy">
          <Header />
          <UsePolicy />
          <Footer />
        </div>
      </Head>
    </>
  );
};

// UsePolicyPage.getInitialProps = ctx => {
//   initialize(ctx);
// };
export default UsePolicyPage;
