import React from 'react';
import ImageText from '../ImageText/ImageText'
import './ActivitiesStyles.css'
import lions from '../../images/lions.jpg';
import clifton from '../../images/clifton.jpg';
import penguins from '../../images/penguins.jpg';
import table from '../../images/table.jpeg';
import kirst from '../../images/kirst.jpg';
import parkrun from '../../images/parkrun.jpg';


const Activities = () => {
    
    return (
        <div className='imageText'>
            <p>As many of us are travelling from all over the world to be at our wedding, we have planned a few get-togethers before and after to experience Cape Town. There is no obligation to be at present at any of these, and feel free to pick and choose whatever takes your fancy.</p><p style={{color: 'green'}}><strong> We will email you in December with more information about each activity.</strong></p>
            <ImageText 
                 image={kirst} 
                 date="9th January"
                 header="Evening picnic / foodmarket"
                 text="Cape Point Vineyards has some of the best views in Cape Town. It overlooks the beach and has beautiful sunsets - the perfect picnic spot. This will be a very relaxed and informal gathering while we enjoy the food stalls and live music."
            />
            <ImageText 
                 image={parkrun} 
                 date="11th January"
                 header="Paarl park run"
                 text="For the energetic, chloe will be doing a park run (yep, on the day of the wedding)."
            />
             <ImageText 
                 image={lions} 
                 date="13th January"
                 header="Sundowners on Signal Hill"
                 text="Signal Hill offers spectacular views of the Cape Town city and coastline, especially with it being full moon. It's even beter with a drink in hand! You can drive there or walk up, and we will book a picnic spot from 5pm."
            /> 
            <ImageText 
                 image={clifton} 
                 date="14th January"
                 header="Clifton/Camps Bay AM"
                 text="We will be having a morning beach session, followed by drinks in Camps Bay. Beware the nudists!"
            />
            <ImageText 
                 image={penguins} 
                 date="19th January"
                 header="Boulder's Beach Penguins"
                 text="Just a short walk from Kyle's Simon's Town home, be prepared to mingle with some penguins. Drinks and snacks at Kyle's house will follow."
            />
        </div>
    )
}

export default Activities;