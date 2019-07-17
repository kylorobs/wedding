import React from 'react';
import Landing from '../components/Landing/Landing'

class thankyou extends React.Component {
    render(){
        return (
            <Landing>
                    <div style={{display: 'flex', flexFlow: 'column'}}>
                        <h1> Thanks for the RSVP!</h1>
                        <p>If you're able to make it, we cannot wait to see you!</p>
                        <p> All we can possibly ask for is your presence on our special day, but if you would really like to give us a gift, we would greatly appreciate a small contribution to <a href="/"> help start our new chapter in Australia.</a> </p>
                        <p> portion of this will be donated to Cancer Research UK.</p>
                    </div>
            </Landing>
        )
    }
}

export default thankyou;