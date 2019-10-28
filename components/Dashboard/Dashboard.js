import React, { Component, Fragment } from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

const Dashboard = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};
export default Dashboard;
