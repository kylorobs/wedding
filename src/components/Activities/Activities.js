import React from 'react';
import ImageText from '../ImageText/ImageText'
import './ActivitiesStyles.css'
import Img from '../../../images/natte.jpg'

const Activities = () => {
    
    return (
        <div className='imageText'>
            <p>As many of us are travelling from all over the world to be at our wedding, we have planned a few get-togetheres before and after to experience Cape Town together. There is no obligation to be at present at any of these, and feel free to pick and choose whatever takes your fancy.</p>
            <ImageText 
                 image={Img} 
                 date="3rd January"
                 header="Cricket in Newlands"
                 text=""
            />
             <ImageText 
                 image={Img} 
                 date="7th January"
                 header="Sundowners on Lions Head"
                 text=""
            /> 
            <ImageText 
                 image={Img} 
                 date="12th January"
                 header="Clifton/Camps Bay evening drinks"
                 text=""
            />
            <ImageText 
                 image={Img} 
                 date="14th January"
                 header="Simonstown Beach and Braai"
                 text=""
            />
            <ImageText 
                 image={Img} 
                 date="16th January"
                 header="Hike up Skeleton Gorge and Table Mountain"
                 text=""
            />
        </div>
    )
}

export default Activities