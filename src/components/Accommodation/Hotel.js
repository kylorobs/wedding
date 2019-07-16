import React from 'react'
import Styles from '../Accommodation/AccommodationStyles.module.css'

const Hotel = (props) => {

    return (
        <div className={Styles.hotelContainer}>
            <div className={Styles.imageContainer}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className={Styles.name}><h3>{props.name}</h3></div>
            <div className={Styles.flex}>
              <h4 className={Styles.infoBlock}>{props.beds} bed</h4>
              <h4 className={[Styles.infoBlock, Styles.distance].join(' ')}>{props.distanceAway} km</h4>
              <h4 className={Styles.infoBlock}><a href={props.link}>View on Booking.com</a></h4>
            </div>
        </div>
    )
}

export default Hotel



