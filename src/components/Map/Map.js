import React from 'react'
import mapboxgl from 'mapbox-gl'
import Styles from './MapStyles.module.css'
import Button from '../Button/Button'
import Marker from './Marker'
import CPTmarkers from '../../../data/CPTmarkers.js'
mapboxgl.accessToken = 'pk.eyJ1Ijoia3lsZXJvYmluc29uIiwiYSI6ImNqdWd3cjZ3cDAwZnozem1vejMyM241NDYifQ.L7UNeZAlJ_its-x60b9L3Q';

class Map extends React.Component{
  // mapRef = React.createRef();

  markers = [];
  map;
  Ref10;
  state = {
    lat: -34.0906,
    lng: 18.5474,
    zoom: 9.23,
    interest: true,
    wedding: false,
    data: null
  }

  componentDidMount(){
      this.tooltipContainer = document.createElement('div');
      this.tooltipContainer.classList.add(Styles.marker)

    let {lng, lat, zoom, interest, wedding, ids} = this.state;
    console.log("MOUNTED AGAIN")
    this.tooltipContainer = document.createElement('div');


    this.map = new mapboxgl.Map({
          container: this.mapContainer, // container id
          style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
          center: [lng, lat], // starting position [lng, lat]
          zoom: zoom // starting zoom
          });

      let data = CPTmarkers.interest;
      let newData=[];
      data.forEach(ob => {
        newData.push(ob);
        var marker = new mapboxgl.Marker()
            .setLngLat(ob.coords)
            .addTo(this.map);
        this.markers.push(marker)
    })


    this.map.on("move", () => {
      let {lng, lat} = this.map.getCenter();
      this.setState({
        lat: lat.toFixed(4),
        lng : lng.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      })
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

    this.setState({
      lat: coords.lat,
      lng : coords.lng,
      zoom: coords.zoom
    })

    this.map.flyTo({center: [coords.lng, coords.lat], zoom: coords.zoom});

  }



  render(){
    let markers;
    if(this.markers.length){
     this.markers.map(marker => {
         let bel = marker.getElement();
         console.log("HERE IS THE EL")
         console.log(bel)
         return bel
     })
    }

    let  teste = () => {
        console.log("yay")
        return <p> Helloooo </p>
      }


    return (
      <div className={Styles.mapContainer}>
        <div className={Styles.map} ref={el => this.mapContainer = el}>
          {markers}
        </div>
        <div className={Styles.mapInfo}>
          <h3> Let's explore </h3>
          <div className={Styles.flexCenterCenter}>
            <Button clickHandler={this.clickHandler} text="Cape Town" id="CPT"  />
            <Button clickHandler={this.clickHandler} text="South Africa" id="SA" />
            {teste()}
          </div>
        </div>
      </div>
    )
  }
}

export default Map
