import React from "react";
// import initialize from "../../utils/initialize";
import Head from "../head";
import Header from "../../components/Header/Header";
import MyProfile from "./MyProfile";
import "./../styles/main.scss";

const CabinetPage = () => {
  return (
    <>
      <Head title="DiffeRent">
        <div lang="he" dir="rtl" className="app cabinet">
          <Header />
          <MyProfile />
        </div>
      </Head>
    </>
  );
};

// CabinetPage.getInitialProps = ctx => {
//   initialize(ctx);
// };
export default CabinetPage;
