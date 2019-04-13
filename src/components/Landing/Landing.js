import React from 'react'
import VineBlock from './VineBlock/VineBlock.js'

const Landing = (props) => {

  return (
    <div className="vine-grid">
        <VineBlock position="Left"/>
        <VineBlock position="Right"/>
        <VineBlock position="Top"/>
        <VineBlock position="Bottom"/>
        <div className="vineCenter">
          <h1> Join us for the marriage of <br></br>Chloe and Kyle</h1>
        </div>
   </div>
 )

}

export default Landing
