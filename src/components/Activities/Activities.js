import React from 'react';
import ImageText from '../ImageText/ImageText';
import './ActivitiesStyles.css';
import kirst from '../../images/kirst.jpg';
import parkrun from '../../images/parkrun.jpg';
import signal2 from '../../images/signal2.jpg';


const Activities = () => {
    
    return (
        <div className='imageText'>
            <p>As many of us are travelling from all over the world to be at our wedding, we have planned a few get-togethers before and after to experience Cape Town. There is no obligation to be present at any of these, and feel free to pick and choose whatever takes your fancy.</p><p style={{color: 'green'}}><strong> We will email you in December with more information about each activity.</strong></p>
            <ImageText 
                 image={kirst} 
                 date="9th January 5pm"
                 header="Evening picnic / foodmarket"
                 text="Cape Point Vineyards has some of the best views in Cape Town. It overlooks the beach and has beautiful sunsets - the perfect picnic spot. This will be a very relaxed and informal gathering while we enjoy the food stalls and live music."
            />
            <ImageText 
                 image={parkrun} 
                 date="11th January 7.30am for 8am start"
                 header="Paarl park run"
                 text="For the energetic, chloe will be doing a park run (yep, on the day of the wedding)."
            />
             <ImageText 
                 image={signal2} 
                 date="13th January 6pm"
                 header="Sundowners on Signal Hill"
                 text="Signal Hill offers spectacular views of the Cape Town city and coastline, especially with it being full moon. It's even beter with a drink in hand! You can drive there or walk up, and we will book a picnic spot from 5pm."
            /> 
        </div>
    )
}

export default Activities;