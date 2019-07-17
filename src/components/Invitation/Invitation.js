import React from 'react';
import Styles from './InvitationStyles.module.css';
import coupleImage from '../../images/couple.jpg'

const Invitation = (props) => {

  return (
    <div className={Styles.Container}>
      <div className={Styles.ImageContainer} style={{backgroundImage: `url(${coupleImage})`}}>
         {/* <img src={coupleImage} /> */}
      </div>
      <div className={Styles.invitationContainer}>
        <h3> You are invited </h3>
        <div className={Styles.heading}>
          <h4> WHERE </h4>
          <p>Natte Valleij, Cape Town, South Africa</p>
        </div>
        <div className={Styles.heading}>
          <h4> WHEN </h4>
          <p>11 January 2020 </p>
        </div>
        <div className={Styles.heading}>
        <h4> WHAT TIME </h4>
        <p>15:30</p>
        </div> 
        <div className={Styles.heading}>
          <h4> DIRECTIONS </h4>
          <p> Find it on <a target="_blank" href="https://www.google.com/maps/place/Natte+Valleij/@-33.833882,18.8767487,17z/data=!3m1!4b1!4m8!3m7!1s0x1dcdac6d52d0d2cf:0x52d7792a0f0790cb!5m2!4m1!1i2!8m2!3d-33.833882!4d18.8789374" >Google Maps</a></p>
        </div>
      </div>
    </div>
  )
}

export default Invitation;
