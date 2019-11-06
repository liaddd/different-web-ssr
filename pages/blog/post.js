
import React, { Component, Fragment } from "react";
import "./PostItem/Post.scss";
import { useRouter } from 'next/router';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Head from '../head'
import PageHeader from '../../components/PageHeader/PageHeader'
import Butter from 'buttercms'

const butter = Butter('8a5fd9fe559d9c892ade6dfef4614676deb5d08c')

class PostDetails extends Component{  
  static async getInitialProps({query}) {
    //console.log(query)
    query = encodeURI(query.title)
    const resp = await butter.post.retrieve("dyrvg-shry");  // TODO get query.slug dynamically
    //console.log(resp)
    return resp.data;
  }
  render(){
    
    const post = this.props.data;

    return (
      <Head title="DiffeRent" ogTitle="בלוג" canonical="blog">
        <Header />
        <PageHeader PageHeaderTitle={`${post.title}`} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.body }}/>
        </div>
        <Footer />
    </Head>
    );
  }
}

export default PostDetails;
