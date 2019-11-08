import React from "react";
import Head from "../head";
import Blog from "./Blog";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./../styles/main.scss";
const BlogIndex = () => {
  return (
    <>
      <Head title="DiffeRent" ogTitle="בלוג" canonical="blog">
        <div lang="he" dir="rtl" className="app">
          <Header />
          <Blog />
          <Footer />
        </div>
      </Head>
    </>
  );
};

export default BlogIndex;
