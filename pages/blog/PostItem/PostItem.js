
import React, { Component, Fragment } from "react";
import "./Post.scss";
import Link from "next/link"

const PostItem = (props) => {  

    return (
      <Fragment>
        <Link href={`/blog/post?title=${props.postData.title}/${props.postData.slug}`}>

         <div className="order-block"
          style={{backgroundImage : `url(${props.postData.featured_image})`,
          backgroundRepeat : 'no-repeat',
          backgroundSize: 'cover'}}>
        <div className="order-block-content">
          <div className="order-inner-content">
            <div className="order-content">
              <h1 className="order-title">{props.postData.title}</h1>
              <p>
                {/* props.postData.summary */}
              </p>
            </div>
          </div>
          <div className="order-inner-content">
            <div className="order-content">
              <p className="order-text">תאריך פרסום</p>
              <p className="order-text">{new Date(props.postData.published).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </Fragment>
    );
}

export default PostItem;
