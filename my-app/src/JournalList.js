import React from "react";
import JournalItem from "./JournalItem";

function JournalList({ excursions }) {
    return(
        <section>
            <h1>Your Hunting Journal</h1>
            <ul>
            {excursions.map((excursion) =>
            <JournalItem 
                key={excursion.id} 
                excursion={excursion}
                />)}
            </ul>
        </section>
    )
}

export default JournalList; 