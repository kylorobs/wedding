import React from 'react';
import Styles from './InvitationStyles.module.css'

const Invitation = (props) => {

  return (
    <div className={Styles.invitationContainer}>
      <h3> You are invited </h3>
      <h4> WHERE </h4>
      <h4> WHEN </h4>
      <h4> WHAT TIME </h4>
      <h4> DIRECTIONS </h4>
    </div>
  )
}

export default Invitation
