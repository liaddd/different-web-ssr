import React, { Component, Fragment } from "react";
import "./PostItem/Post.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Head from "../head";
import PageHeader from "../../components/PageHeader/PageHeader";
import Butter from "buttercms";
import ErrorPage from "../_error";

const butter = Butter("8a5fd9fe559d9c892ade6dfef4614676deb5d08c");

class PostDetails extends Component {
  static async getInitialProps({ query, res }) {
    try {
      const resp = await butter.post.retrieve(query.title.split("/")[1]);
      return resp.data;
    } catch (e) {
      console.error("ERROR! blog not found");
      return { err: { statusCode: 404 } };
    }
  }
  render() {
    const { data, err } = this.props;
    if (err) {
      return <ErrorPage statusCode={err.statusCode} />;
    }
    return (
      <Head title="DiffeRent" ogTitle="בלוג" canonical="blog">
        <Header />
        <PageHeader PageHeaderTitle={`${data.title}`} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
        <Footer />
      </Head>
    );
  }
}

export default PostDetails;
