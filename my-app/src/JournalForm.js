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

    return(
        <section>
            hi
        </section>
    )
}

export default JournalForm; 