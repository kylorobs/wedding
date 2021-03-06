import React from 'react'
import Styles from './MapStyles.module.css'
import Button from '../Button/Button';
import CPTmarkers from '../../data/CPTmarkers';
import { Layer, Feature, } from "react-mapbox-gl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
       screenSize: null,
       reactMapboxGl: null

  }

  componentDidMount(){
    let updateReactMapBox = null;
    let screenSize;
    if (ReactMapboxGl){
      updateReactMapBox = true;
      screenSize = window.innerWidth;
    }
    this.setState({
      markers: [...CPTmarkers.cpt], 
      reactMapboxGl: updateReactMapBox,
      screenSize: screenSize
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

  showInfo(e, marker){
    let zoom = e.map.getZoom();
    this.setState({
      currentMarker: marker,
      lat: marker.coords[1],
      lng: marker.coords[0],
      zoom: zoom
    })
  }

  getCoords = (e) => {
    console.log(e.getCenter())
  }

  onHover = (e, cursor) => {
    // console.log(e.map)
    e.map.getCanvas().style.cursor = cursor;
    // cssText: "position: absolute; width: 318px; height: 400px; cursor: pointer; background-color: red;"
  }



  closeMarkerWindow = () => {
    this.setState({
      currentMarker: null
    })
  }

  render(){

    let {lng, lat, zoom, currentMarker, currentArea} = this.state;

    let coords;
    let zoomValue;
    let markers;
    let mapjsx;
    let info;
    let markerLink = null;
  
    if(this.state.markers && this.state.reactMapboxGl){
      coords = [lng, lat]
      zoomValue = [zoom];

      if (!currentMarker) currentMarker = '';
      else {
        coords = currentMarker.coords;
      }

      console.log(coords)

      let area = this.state.currentArea === 'CPT' ? 'cpt' : 'country';
      let propers = {
          'marker-color': '#3bb2d0',
          'marker-size': 'large',
          'marker-symbol': 'rocket'
      }

      markers = CPTmarkers[area].map((marker, i) => {
          return <Feature coordinates={marker.coords}
                          onMouseEnter={(e)=> this.onHover(e, 'pointer')}
                          onMouseLeave={(e)=> this.onHover(e, '')}
                          key={i}
                          onClick={(e) =>this.showInfo(e, marker)}
                          properties={marker.name} />
        })

        let infoClass = [ Styles.mapInfo ];
        let windowClose = null;
        if (this.state.screenSize < 1300 && this.state.currentMarker){
          infoClass.push(Styles.infoCenter);
          windowClose = (
            <div onClick={this.closeMarkerWindow} className={Styles.closeWindow}>
               <FontAwesomeIcon
                  icon="times-circle"
                  color="#2e7f43"
                  size="lg"/>
            </div>)
        }

        if(currentMarker.url) markerLink = <a  target="_blank" href={currentMarker.url}>{currentMarker.url}</a>

        mapjsx = (
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
        );

         info = (
          <div className={infoClass.join(' ')}>
            {windowClose}
            <div className={Styles.mapSelector}>
              <h2> Fun Facts and Tips </h2>
              <p>Click on the pins in the map to see our favourite spots!</p>
              <div className={Styles.desktopButtons}>
                <Button active={currentArea === 'CPT'} clickHandler={this.clickHandler} text="Cape Town" id="CPT"  />
                <Button active={currentArea === 'SA'} clickHandler={this.clickHandler} text="South Africa" id="SA" />
              </div>
            </div>
            <h3> {currentMarker.name} </h3>
            <p> {currentMarker.text} </p>
            {markerLink}
           
        </div>
        );
    }
     
      if (!this.state.reactMapboxGl) mapjsx = 'Loading'
    
    return (
      <div className={Styles.mapContainer}>
        { mapjsx }
        { info }
      </div>
    
    )
  }
}

export default Map;
