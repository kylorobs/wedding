import React from 'react'
import mapboxgl from 'mapbox-gl'
import ReactMapGL from 'react-map-gl';
import Styles from './MapStyles.module.css'
import Button from '../Button/Button'
import Marker from './Marker'
import CPTmarkers from '../../../data/CPTmarkers.js'
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const MapBox = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoia3lsZXJvYmluc29uIiwiYSI6ImNqdWd3cjZ3cDAwZnozem1vejMyM241NDYifQ.L7UNeZAlJ_its-x60b9L3Q'})

class Map extends React.Component{

  state = {
     viewport: {
       width: 400,
       height: 400,
       lat: -34.0906,
       lng: 18.5474,
       zoom: 9.23,
     }
  }

  render(){

    return (
      <div className={Styles.mapContainer}>
        <MapBox style="mapbox://styles/mapbox/streets-v8" center=[18.5474, -340906] zoom=[9.23] />
        <div className={Styles.mapInfo}>
          <h3> Let's explore </h3>
          <div className={Styles.flexCenterCenter}>
            <Button clickHandler={this.clickHandler} text="Cape Town" id="CPT"  />
            <Button clickHandler={this.clickHandler} text="South Africa" id="SA" />
          </div>
        </div>
      </div>
    )
  }
}

export default Map
