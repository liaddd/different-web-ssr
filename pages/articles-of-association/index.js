import React from "react";
import Head from "../head";
import ArticlesOfAssociation from "./ArticlesOfAssociation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./../styles/main.scss";
// import initialize from "../../utils/initialize";

const ArticlesPage = () => {
  return (
    <>
      <Head title="DiffeRent">
        <div lang="he" dir="rtl" className="app articles-of-association">
          <Header />
          <ArticlesOfAssociation />
          <Footer />
        </div>
      </Head>
    </>
  );
};

// ArticlesPage.getInitialProps = ctx => {
//   initialize(ctx);
// };
export default ArticlesPage;
