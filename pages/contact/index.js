import React from "react";
// import initialize from "../../utils/initialize";
import Head from "./../head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "./Contact";
import "./../index.scss";
import "./../styles/main.scss";

const ContactPage = () => {
  return (
    <>
      <Head title="DiffeRent" ogTitle="יצירת קשר" canonical="contact">
        <div lang="he" dir="rtl" className="app contact">
          <Header />
          <Contact />
          <Footer />
        </div>
      </Head>
    </>
  );
};

// ContactPage.getInitialProps = ctx => {
//   initialize(ctx);
// };
export default ContactPage;
