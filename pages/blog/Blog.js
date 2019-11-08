import React, { Component, Fragment } from "react";
import "./Blog.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Butter from "buttercms";
import PostItem from "./PostItem/PostItem";

const butter = Butter("8a5fd9fe559d9c892ade6dfef4614676deb5d08c");

class Blog extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    butter.post.list({ page: 1, page_size: 10 }).then(response => {
      this.setState({ posts: response.data.data });
    });
  }

  render() {
    return (
      <Fragment>
        <PageHeader PageHeaderTitle={"הבלוג שלנו"} />
        <div className="section section-page-content">
          <div className="container blog-wrapper">
            {this.state.posts &&
              this.state.posts.map((postData, index) => (
                <PostItem key={index + 1} postData={postData}></PostItem>
              ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Blog;
