import React from 'react';
import Styles from './AccommodationStyles.module.css'
import Hotel from './Hotel'
import Natte from '../../../images/natte.jpg'

const Accommodation = () => {

    return (
        <div className={Styles.accommodation}>
            <p>Natte Valleij is close to Paarl - roughly a 35 minute drive away from Cape Town city centre. If you are staying somewhere in Cape Town, we will be organising shuttle busses back to a central point, from which you can order an Uber.</p>
            <p> If you would like to stay closer to the wedding venue, we have a few suggestions below. Alternatively, if you prefer to work through a travel agent, email Natalie Swart, and she will be able to assist you.</p>
            <div className={Styles.hotels}>
                <Hotel image={Natte} link="" name="This Place" beds="2" distanceAway="0.5" />
                <Hotel image={Natte} link="" name="This Pale" beds="2" distanceAway="0.5" />
                <Hotel image={Natte} link="" name="flat" beds="2" distanceAway="0.5" />
                <Hotel image={Natte} link="" name="House" beds="2" distanceAway="0.5" />
                <Hotel image={Natte} link="" name="Bro" beds="2" distanceAway="0.5" />
                <Hotel image={Natte} link="" name="Seriously" beds="2" distanceAway="0.5" />
            </div>
        </div>
    )
}

export default Accommodation
