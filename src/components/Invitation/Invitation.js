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
          <p> Find it on Google Maps</p>
        </div>
      </div>
    </div>
  )
}

export default Invitation;
