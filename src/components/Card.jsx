import React from "react";

const Card = (props) => {
    return(
        <div className="card">
            <img className="card-img" src={props.imgURL} alt={props.altText}/>
            <p className="card-name">{props.name}</p>
            <div className="info-container">
                <p className="info-p">📍{props.location}</p>
                <button className="info-button"><a className="card-url" href={props.videoURL}>Watch Video</a></button>
        
            </div>
        </div>
    )
};

export default Card;