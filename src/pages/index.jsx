import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Landing from '../components/Landing/Landing'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <SEO />
          <Landing />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
