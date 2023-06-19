import React from "react";

function JournalItem({ excursion }) {
    const { id, date, location, bag, guide, image, comments } = excursion;

    return(
        <ul>
            <h2>Date: {date}</h2>
            <h3>Location: {location}</h3>
            <h4>
                Mallards: {bag.Mallard}<br></br>
                Widgeons: {bag.Widgeon}<br></br>
                Canvasback: {bag.Canvasback}<br></br>
                Gadwall: {bag.Gadwall}<br></br>
                Other: {bag.Other}<br></br>
            </h4>
            <h5>Guide: {guide}</h5>
            <img src={image} alt="duck hunter" width="300" height="300"/>
            <p>Comments: {comments}</p>
        </ul> 
    )
}

export default JournalItem; 