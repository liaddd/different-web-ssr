import React from "react";
import Head from "./../head";
import SignIn from "./SignIn";
import "./../styles/main.scss";
// import initialize from "../../utils/initialize";

const SignInPage = () => {
  return (
    <>
      <Head title="DiffeRent" ogTitle="התחברות" canonical="signin">
        <div lang="he" dir="rtl" className="app signin">
          <SignIn />
        </div>
      </Head>
    </>
  );
};

// SignInPage.getInitialProps = ctx => {
//   initialize(ctx);
// };
export default SignInPage;
