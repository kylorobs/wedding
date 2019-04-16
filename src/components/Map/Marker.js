import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1Ijoia3lsZXJvYmluc29uIiwiYSI6ImNqdWd3cjZ3cDAwZnozem1vejMyM241NDYifQ.L7UNeZAlJ_its-x60b9L3Q';
import Styles from './MapStyles.module.css'

const Marker = (props) => {

  return (
    <div className={Styles.marker}></div>
  )
}

export default Marker
