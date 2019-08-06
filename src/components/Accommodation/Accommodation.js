import React from 'react';
import Styles from './AccommodationStyles.module.css'
import Hotel from './Hotel'
import nearby1 from '../../images/nearby1.jpg';
import nearby2 from '../../images/nearby2.jpg';
import nearby3 from '../../images/nearby3.jpg';

const Accommodation = () => {

    return (
        <div className={Styles.accommodation}>
            <p>Natte Valleij is close to Paarl - roughly a 35 minute drive away from Cape Town city centre. If you are staying somewhere in Cape Town, we will be organising shuttle busses back to a central point, from which you can order an Uber.</p>
            <p> If you would like to stay closer to the wedding venue, we have a few suggestions below. Alternatively, if you prefer to work through a travel agent, please contact Joline from Villa's & Hotels to book your accommodation at one of the recommendations:</p>
            <p>Email: <a href="mailto:joline@villasandhotels.co.za">joline@villasandhotels.co.za</a>, Telephone: + 27 (0) 21 948 2062</p>
            <div className={Styles.hotels}>
                <Hotel image={nearby1} link="https://www.booking.com/hotel/za/marianne-estate.en-gb.html?aid=304142;label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4ARfIAQzYAQHoAQH4AQuIAgGoAgO4AvHAiOkFwAIB;sid=ee19ee53ec58a2fe29ee1d82336aa833;all_sr_blocks=28975416_128884782_4_1_0;checkin=2020-01-11;checkout=2020-01-12;dest_id=-1287082;dest_type=city;dist=0;group_adults=2;hapos=1;highlighted_blocks=28975416_128884782_4_1_0;hpos=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1562518462;srpvid=151976de17540242;type=total;ucfs=1&#hotelTmpl" name="Marianne Wine Estate" beds="2" distanceAway="0.45" />
                <Hotel image={nearby2} link="https://www.booking.com/hotel/za/joostenberg-farm.en-gb.html?aid=304142;label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4ARfIAQzYAQHoAQH4AQuIAgGoAgO4AvHAiOkFwAIB;sid=ee19ee53ec58a2fe29ee1d82336aa833;all_sr_blocks=196097101_125155624_2_0_0;checkin=2020-01-11;checkout=2020-01-12;dest_id=900051391;dest_type=city;dist=0;group_adults=2;hapos=2;highlighted_blocks=196097101_125155624_2_0_0;hpos=2;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1562521625;srpvid=4a1d7d0ce79001f2;type=total;ucfs=1&#hotelTmpl" name="Joostenberg Farm" beds="2" distanceAway="11" />
                <Hotel image={nearby3} link="https://www.booking.com/hotel/za/hoopenburg-guesthouse.en-gb.html?aid=304142;label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4ARfIAQzYAQHoAQH4AQuIAgGoAgO4AvHAiOkFwAIB;sid=ee19ee53ec58a2fe29ee1d82336aa833;all_sr_blocks=1539607_171064880_2_0_0;checkin=2020-01-11;checkout=2020-01-12;dest_id=900051391;dest_type=city;dist=0;group_adults=2;hapos=4;highlighted_blocks=1539607_171064880_2_0_0;hpos=4;room1=A%2CA;sb_price_type=total;spdest=ci%2F900051391;sr_order=popularity;srepoch=1562522030;srpvid=dcae7dd7e7e20161;type=total;ucfs=1&#hotelTmpl" name="Hoopenburg Guesthouse" beds="2" distanceAway="9.8" />
            </div>
        </div>
    )
}

export default Accommodation;
