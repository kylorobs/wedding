import React from 'react';
import Landing from '../components/Landing/Landing';
import Button from '../components/Button/Button';
import { navigate } from 'gatsby';

class thankyou extends React.Component {
    render(){
        return (
            <Landing>
                    <div style={{display: 'flex', flexFlow: 'column'}}>
                        <h1> Thanks for the RSVP!</h1>
                        <p>If you're able to make it, we cannot wait to see you!</p>
                        <p> All we can possibly ask for is your presence on our special day, but if you would really like to give us a gift, we would greatly appreciate a small contribution to <a href="https://www.weddingshop.com/Buy/View/63803"> help start our new chapter in Australia.</a> </p>
                        <div style={{width: '15em', margin: 'auto'}}>
                        </div>
                    </div>
            </Landing>
        )
    }
}

export default thankyou;