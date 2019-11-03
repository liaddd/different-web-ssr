import React from "react";
// import initialize from "../../utils/initialize";
import Header from "../../components/Header/Header";
import Head from "./../head";
import PersonalInfo from "./PersonalInfo";
import "./../styles/main.scss";

const PersonalInfoPage = () => {
  return (
    <>
      <Head title="DiffeRent" ogTitle="הצטרפות לשירות">
        <div lang="he" dir="rtl" className="app personal-info">
          <Header />
          <PersonalInfo />
        </div>
      </Head>
    </>
  );
};

// PersonalInfoPage.getInitialProps = ctx => {
//   initialize(ctx);
// };
export default PersonalInfoPage;
