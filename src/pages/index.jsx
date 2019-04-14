import React from "react";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Landing from '../components/Landing/Landing'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import Map from '../components/Map/Map'
import Invitation from '../components/Invitation/Invitation'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <SEO />
          <Landing />
          <Invitation/>
          <SectionHeader title="A Guide to South Africa" />
          <Map />
          <SectionHeader title="Where to stay" />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
