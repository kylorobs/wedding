import React from 'react';
import FooterStyles from "./FooterStyle.module.css";


export default (props) => (
  <footer>
    <div className={FooterStyles.container}>
      <hr></hr>
      <div className={FooterStyles.footer}>
        <p className={FooterStyles.madeby}> made by two Robs getting married :) </p>
        <p className={FooterStyles.email}>Contact us at <a href="mailto:matt@kyle.robinsonfilm@gmail.com"> kyle@thinktraincreate.com </a></p>
      </div>
    </div>
  </footer>
)
