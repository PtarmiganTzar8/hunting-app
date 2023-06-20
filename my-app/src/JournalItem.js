import React from "react";

function JournalItem({ excursion }) {
    const { id, date, location, mallard, widgeon, canvasback, gadwall, other, guide, image, comments } = excursion;

    return(
        <ul>
            <h2>Date: {date}</h2>
            <h3>Location: {location}</h3>
            <h4>
                Mallards: {mallard}<br></br>
                Widgeons: {widgeon}<br></br>
                Canvasback: {canvasback}<br></br>
                Gadwall: {gadwall}<br></br>
                Other: {other}<br></br>
            </h4>
            <h5>Guide: {guide}</h5>
            <img src={image} alt="duck hunter" width="300" height="300"/>
            <p>Comments: {comments}</p>
        </ul> 
    )
}

export default JournalItem; 