import React from "react";
import Head from "./../head";
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./../styles/main.scss";
// import initialize from "../../utils/initialize";

const QuestionsAndAnswersPage = () => {
  return (
    <>
      <Head title="DiffeRent" ogTitle="שאלות ותשובות" canonical="questions-and-answers">
        <div lang="he" dir="rtl" className="app questions-and-answers">
          <Header />
          <QuestionsAndAnswers />
          <Footer />
        </div>
      </Head>
    </>
  );
};

// QuestionsAndAnswersPage.getInitialProps = ctx => {
//   initialize(ctx);
// };
export default QuestionsAndAnswersPage;
