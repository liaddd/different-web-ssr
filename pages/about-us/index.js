import React from "react";
import Head from "../head";
import AboutUs from "./AboutUs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./../styles/main.scss";
// import initialize from "../../utils/initialize";
const AboutUsPage = () => {
  return (
    <>
      <Head title="DiffeRent" ogTitle="אודותינו" canonical="about-us" description="חברת DiffeRent מבטיחה לכם שקט נפשי בכל הקשור להשכרת דירות על ידי פלטפורמה דיגיטלית חדשה - בואו להכיר אותנו וליהנות משירות מקצועי ואמין">
        <div lang="he" dir="rtl" className="app about-us">
          <Header />
          <AboutUs />
          <Footer />
        </div>
      </Head>
    </>
  );
};

// AboutUsPage.getInitialProps = ctx => {
//   initialize(ctx);
// };
export default AboutUsPage;
