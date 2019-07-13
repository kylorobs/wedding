import React from 'react'
import Styles from './MapStyles.module.css'
import Button from '../Button/Button';
import CPTmarkers from '../../data/CPTmarkers';
import { Layer, Feature, } from "react-mapbox-gl";

// let mapboxgl;
let ReactMapboxGl = null;
let MapBox;

if (typeof window !== `undefined`) {
  console.log("WINDOW DEFINED")
  ReactMapboxGl = require('react-mapbox-gl');
  MapBox = ReactMapboxGl.Map({accessToken: 'pk.eyJ1Ijoia3lsZXJvYmluc29uIiwiYSI6ImNqdWd3cjZ3cDAwZnozem1vejMyM241NDYifQ.L7UNeZAlJ_its-x60b9L3Q'});
} 


class Map extends React.Component{

  state = {
       lat: -34.0207,
       lng: 18.6048,
       zoom: 9.23,
       type: null,
       currentArea: 'CPT',
       currentMarker: null,
       reactMapboxGl: null

  }

  componentDidMount(){
    let updateReactMapBox = null;
    if (ReactMapboxGl){
      updateReactMapBox = true;
    }
    this.setState({
      markers: [...CPTmarkers.interest], 
      reactMapboxGl: updateReactMapBox 
    });

  }

  

  clickHandler = (e) => {
    let btn = e.target.id;
    let area;
    let coords = {}
    switch(btn){
      case 'CPT' :
        coords.lng = 18.6048;
        coords.lat = -34.0207;
        coords.zoom = 9.23;
        area = 'CPT'
      break;
      case 'SA' :
        coords.lng = 24.4919;
        coords.lat = -30.6245;
        coords.zoom = 5.02;
        area = 'SA'
      break;
      default: console.log("Coords incorrect")
    }

    this.setState({
      lat: coords.lat,
      lng : coords.lng,
      zoom: coords.zoom,
      currentArea: area,
      currentMarker: null
    })

  }

  showInfo(marker){
    this.setState({currentMarker: marker})
  }

  getCoords = (e) => {
    console.log(e.getCenter())
  }

  render(){

    let {lng, lat, zoom, currentMarker, currentArea} = this.state;

    let coords;
    let zoomValue;
    let markers;
    let mapjsx;
  
    if(this.state.markers && this.state.reactMapboxGl){
      coords = [lng, lat]
      zoomValue = [zoom];

      console.log(MapBox)

      if (!currentMarker) currentMarker = '';
      else {
        coords = currentMarker.coords;
        zoomValue = [10];
      }

      let area = this.state.currentArea === 'CPT' ? 'cpt' : 'country';

      markers = CPTmarkers[area].map((marker, i) => {
          return <Feature coordinates={marker.coords}
                          key={i}
                          onClick={() =>this.showInfo(marker)}
                          properties={marker.name} />
        })

        mapjsx = (
          <div className={Styles.mapContainer}>
          <MapBox movingMethod='flyTo' 
                  className={Styles.map} 
                  style="mapbox://styles/mapbox/streets-v8" 
                  center={coords} 
                  zoom={zoomValue}
                  onClick={e => this.getCoords(e)}>
            <Layer type="symbol" layout={{"icon-image": "marker-15", "icon-size": 1.6}} paint={{"icon-color": "#c70202"}}>
              {markers}
            </Layer>
            <div className={Styles.controls}>
                <Button active={currentArea === 'CPT'} clickHandler={this.clickHandler} text="Cape Town" id="CPT"  />
                <Button active={currentArea === 'SA'} clickHandler={this.clickHandler} text="South Africa" id="SA" />
            </div>
          </MapBox>
          <div className={Styles.mapInfo}>
            <div className={Styles.mapSelector}>
              <h2> Let's explore </h2>
              <div className={Styles.desktopButtons}>
                <Button active={currentArea === 'CPT'} clickHandler={this.clickHandler} text="Cape Town" id="CPT"  />
                <Button active={currentArea === 'SA'} clickHandler={this.clickHandler} text="South Africa" id="SA" />
              </div>
            </div>
            <h3> {currentMarker.name} </h3>
            <p> {currentMarker.text} </p>
          </div>
        </div>
        );
    }

    

      if (!this.state.reactMapboxGl) mapjsx = 'Loading'

    return (
     mapjsx
    )
  }
}

export default Map;
