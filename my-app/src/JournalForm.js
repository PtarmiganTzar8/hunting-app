import React, { useState } from "react";

function JournalForm() {
    const [formData, setFormData] = useState({
        id: "",
        date: "",
        location: "",
        bag: {
                Mallard: "",
                Widgeon: "",
                Canvasback: "",
                Gadwall: "",
                Other: ""
            },
        guide: "",
        image: "",
        comments: ""
    })

    function handleChange(event) {
        console.log({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return(
        <section>
            <h1>We hope you had a great hunt! Please submit your hunting information below.</h1>
            <form>
                <label>
                    Today's Date:
                    <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    />
                </label><br></br>
                <label>
                    Hunt Location:
                    <select name="location" onChange={handleChange}>
                        <option>North Pond</option>
                        <option>South Pond</option>
                        <option>Richard's Field</option>
                        <option>Austin's Cannal</option>
                        <option>Eucalyptus Orchard</option>
                        <option>Disabled Blind</option>
                    </select>
                </label><br></br>
                <label>
                    What was your take for today?<br></br>
                    Mallard: <input type="number" min="0" max="7" /><br></br>
                    Widgeon: <input type="number" min="0" max="7" /><br></br>
                    Canvasback: <input type="number" min="0" max="7" /><br></br>
                    Gadwall: <input type="number" min="0" max="7" /><br></br>
                    Other: <input type="number" min="0" max="7" />
                </label><br></br>
                <label>
                    Your Guide:
                    <select 
                        name="guide" 
                        onChange={handleChange}
                        value={formData.guide}
                    >
                        <option>Paul Jones</option>
                        <option>Dan Heeler</option>
                        <option>Richard Marcillac</option>
                        <option>Emily Resler</option>
                        <option>Taylor Xanar</option>
                        <option>Unguided</option>
                    </select>
                </label><br></br>
                <label>
                    Give us the best photo you took today!
                    <input
                    type="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    />
                </label><br></br>
                <label>
                    Anything else we should know?
                    <input
                    type="text"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    />
                </label>
            </form>
        </section>
    )
}

export default JournalForm; 