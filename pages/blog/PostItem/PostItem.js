import React, { Component, Fragment } from "react";
import "./Post.scss";
import Link from "next/link";

const PostItem = props => {
  return (
    <a
      className="wrapper"
      style={{
        backgroundImage: `url(${props.postData.featured_image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
      href={`/blog/post?title=${props.postData.title}/${props.postData.slug}`}
    >
      <div className="wrapper-item">
        <h2 className="order-title">{props.postData.title}</h2>
        <p>{/* props.postData.summary */}</p>
        <p className="order-text">תאריך פרסום</p>
        <p className="order-text">
          {new Date(props.postData.published).toLocaleString()}
        </p>
      </div>
    </a>
  );
};

export default PostItem;
