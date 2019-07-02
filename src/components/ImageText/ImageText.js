import React from 'react';
import './ImageTextStyles.css'

const ImageStrip = (props) => {

    return (
        <div className="content-strip">
            <div className="content-image flex-center-center">
                <img src={props.image} />
            </div>

            <div className="content-description">
                <h3>{props.header}</h3>
                <h4>{props.date}</h4>
                <p>{props.text}</p>
            </div>
        </div>

    )
}

export default ImageStrip