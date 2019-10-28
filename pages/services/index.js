import React from "react";
import Head from "./../head";
import OurServices from "./OurServices";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./../styles/main.scss";
// import initialize from "../../utils/initialize";

const ServicesPage = () => {
  return (
    <>
      <Head title="DiffeRent">
        <div lang="he" dir="rtl" className="app services">
          <Header />
          <OurServices />
          <Footer />
        </div>
      </Head>
    </>
  );
};

export default ServicesPage;
