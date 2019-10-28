import React from "react";
import Head from "./head";
import MainPage from "./../components/MainPage/index";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import "./styles/main.scss";

const IndexPage = () => {
  return (
    <>
      <Head title="DiffeRent">
        <div className="app home">
          <Header />
          <MainPage />
          <Footer />
        </div>
      </Head>
    </>
  );
};

export default IndexPage;
