import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <SEO />
          <h1> Join us for the marriage of <br></br>Chloe and Kyle</h1>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
