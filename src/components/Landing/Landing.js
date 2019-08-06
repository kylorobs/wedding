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
          {props.children}
        </div>
   </div>
 )

}

export default Landing
