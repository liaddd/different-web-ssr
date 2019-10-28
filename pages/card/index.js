import React from "react";
// import initialize from "../../utils/initialize";
import Head from "../head";
import Header from "../../components/Header/Header";
import Card from "./Card";
import Footer from "../../components/Footer/Footer";
import "./../styles/main.scss";

const CardPage = props => {
  return (
    <>
      <Head title="DiffeRent">
        <div lang="he" dir="rtl" className="app card">
          <Header />
          <Card />
          <Footer store={props} />
        </div>
      </Head>
    </>
  );
};

// CardPage.getInitialProps = ctx => {
//   initialize(ctx);
// };
export default CardPage;
