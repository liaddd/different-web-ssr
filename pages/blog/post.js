import React, { Component, Fragment } from "react";
import "./PostItem/Post.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Head from "../head";
import PageHeader from "../../components/PageHeader/PageHeader";
import Butter from "buttercms";

const butter = Butter("8a5fd9fe559d9c892ade6dfef4614676deb5d08c");

class PostDetails extends Component {
  static async getInitialProps({ query }) {
    const resp = await butter.post.retrieve(query.title);
    return resp.data;
  }
  render() {
    const post = this.props.data;

    return (
      <Head title="DiffeRent" ogTitle="בלוג" canonical="blog">
        <Header />
        <PageHeader PageHeaderTitle={`${post.title}`} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
        <Footer />
      </Head>
    );
  }
}

export default PostDetails;
