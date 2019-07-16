import React from "react";
import Layout from "../layout";
import config from "../../siteConfig/SiteConfig";
import Landing from '../components/Landing/Landing'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import Map from '../components/Map/Map'
import Invitation from '../components/Invitation/Invitation'
import Accommodation from '../components/Accommodation/Accommodation'
import Activities from '../components/Activities/Activities'
import Form from '../components/RSVP/Form/Form';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey, faTimesCircle);



class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Landing>
            <h1> Chloe and Kyle<br></br> are getting married!</h1>
          </Landing>
          <Invitation/>
          <SectionHeader title="A Guide to South Africa" />
          <Map />
          <SectionHeader title="Where to stay" />
          <Accommodation />
          <SectionHeader title="Planned activities" />
          <Activities />
          <SectionHeader title="RSVP" />
          <Form />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
