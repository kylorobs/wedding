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
          <h4> LOCATION </h4>
          <p><a target="_blank" href="https://www.google.com/maps/place/Natte+Valleij/@-33.833882,18.8767487,17z/data=!3m1!4b1!4m8!3m7!1s0x1dcdac6d52d0d2cf:0x52d7792a0f0790cb!5m2!4m1!1i2!8m2!3d-33.833882!4d18.8789374" >Natte Valleij </a>, Cape Town, South Africa </p>
        </div>
        <div className={Styles.heading}>
          <h4> DATE </h4>
          <p>11 January 2020 </p>
        </div>
        <div className={Styles.heading}>
          <h4> TIME </h4>
          <p>Arrive 15:30. Ceremony at 16:00</p>
        </div> 
        <div className={Styles.heading}>
          <h4> DRESS </h4>
          <p> Summer Smart</p>
        </div> 
      </div>
    </div>
  )
}

export default Invitation;
