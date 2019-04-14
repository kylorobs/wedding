import React from 'react'
import mapboxgl from 'mapbox-gl'
import Styles from './MapStyles.module.css'
import Button from '../Button/Button'
mapboxgl.accessToken = 'pk.eyJ1Ijoia3lsZXJvYmluc29uIiwiYSI6ImNqdWd3cjZ3cDAwZnozem1vejMyM241NDYifQ.L7UNeZAlJ_its-x60b9L3Q';

class Map extends React.Component{
  // mapRef = React.createRef();
  map;
  state = {
    lat: -34.0906,
    lng: 18.5474,
    zoom: 9.23
  }

  componentDidMount(){
    let {lng, lat, zoom} = this.state;
    console.log("MOUNTED AGAIN")
    console.log(lng)
    this.map = new mapboxgl.Map({
          container: this.mapContainer, // container id
          style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
          center: [lng, lat], // starting position [lng, lat]
          zoom: zoom // starting zoom
          });

    this.map.on("move", () => {
      let {lng, lat} = this.map.getCenter();
      this.setState({
        lat: lat.toFixed(4),
        lng : lng.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      })

      console.log("COORDS")
      console.log(lng.toFixed(4) + " - " + lat.toFixed(4))
      console.log(this.map.getZoom().toFixed(2))
    })

  }

  clickHandler = (e) => {
    let btn = e.target.id;
    let coords = {}
    switch(btn){
      case 'CPT' :
        coords.lng = 18.5474;
        coords.lat = -34.0906;
        coords.zoom = 9.23;
      break;
      case 'SA' :
        coords.lng = 24.4919;
        coords.lat = -30.6245;
        coords.zoom = 5.02;
      break;
      default: console.log("Coords incorrect")
    }
    console.log("updated coords")
    console.log(coords)

    this.setState({
      lat: coords.lat,
      lng : coords.lng,
      zoom: coords.zoom
    })

    this.map.flyTo({center: [coords.lng, coords.lat], zoom: coords.zoom});

  }



  render(){
    return (
      <div className={Styles.mapContainer}>
        <div className={Styles.map} ref={el => this.mapContainer = el}></div>
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
