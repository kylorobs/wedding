import React from 'react'
import VineBlock from './VineBlock/VineBlock.js'
import LandingStyles from './LandingStyles.module.css'

const Landing = (props) => {

  return (
    <div className={LandingStyles.vineGrid}>
        <VineBlock position="Left"/>
        <VineBlock position="Right"/>
        <VineBlock position="Top"/>
        <VineBlock position="Bottom"/>
        <div className={LandingStyles.vineCenter}>
          <h1> Chloe and Kyle<br></br> are getting married!</h1>
        </div>
   </div>
 )

}

export default Landing
