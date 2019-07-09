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
            <p>As many of us are travelling from all over the world to be at our wedding, we have planned a few get-togetheres before and after to experience Cape Town together. There is no obligation to be at present at any of these, and feel free to pick and choose whatever takes your fancy.</p>
            <ImageText 
                 image={kirst} 
                 date="9th January TBC"
                 header="Evening picnic / Foodmarket"
                 text="Cape Point Vineyards"
            />
            <ImageText 
                 image={parkrun} 
                 date="11th January TBC"
                 header="Paarl park run"
                 text="For the energetic, chloe will be doing a park run (yep, on the day of the wedding)."
            />
             <ImageText 
                 image={lions} 
                 date="13th January TBC"
                 header="Sundowners on Lions Head"
                 text="Lions Head offers spectacular views of the cape town city and coastline, especially with it being full moon. It's even beter with a drink in hand! The walk takes approx 2 hours - and is very dependant on weather."
            /> 
            <ImageText 
                 image={clifton} 
                 date="14th January TBC"
                 header="Clifton/Camps Bay AM"
                 text="We will be having a morning beach session, followed by drinks in Camps Bay. Beware the nudists!"
            />
            <ImageText 
                 image={table} 
                 date="15th January TBC"
                 header="Hike up Table Mountain"
                 text="Now one of the 7 Natural Wonders of the World, the best way to experience Table Mountain is to walk up it! This will take 3-4 hours, and we will come down via cable car."
            />
            <ImageText 
                 image={penguins} 
                 date="19th January TBCs"
                 header="Boulder's Beach Penguins"
                 text="Just a short walk from Kyle's Simon's Town home, be prepared to mingle with some penguins. Drinks and snacks at Kyle's house will follow."
            />
        </div>
    )
}

export default Activities;