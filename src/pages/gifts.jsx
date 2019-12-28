import React from 'react';
import Landing from '../components/Landing/Landing';
import Footer from '../components/Footer/Footer';

class giftRegistry extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Landing>
                        <div style={{display: 'flex', flexFlow: 'column'}}>
                            <h1> Your presence is our gift</h1>
                            <p> Seeing you on our special day is more than enough, but if you would really like to give us a gift, we would greatly appreciate a small contribution to <a href="https://www.weddingshop.com/Buy/View/63803"> help start our new chapter in Australia.</a> </p>
                            <div style={{width: '15em', margin: 'auto'}}>
                            </div>
                        </div>
                </Landing>
                <Footer />
            </React.Fragment>
        )
    }
}

export default giftRegistry;