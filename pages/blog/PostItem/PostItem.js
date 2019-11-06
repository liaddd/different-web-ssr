
import React, { Component, Fragment } from "react";
import "./Post.scss";
import Link from "next/link"

const PostItem = (props) => {  

    return (
      <Fragment>
        <Link href={`/blog/post?title=${props.postData.title}`}>

         <div className="order-block"
          style={{backgroundImage : `url(${props.postData.featured_image})`,
          backgroundRepeat : 'no-repeat',
          backgroundSize: '120%'}}>
        <div className="order-block-content">
          <div className="order-inner-content">
            <div className="order-content">
              <h3 className="order-title">{props.postData.title}</h3>
              <p className="order-text">
                {/* props.fName} {props.lName */}
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
