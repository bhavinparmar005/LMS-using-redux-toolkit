import React, { useState } from "react";
import moment from "moment";

function New() {
    const [formData, setFormData] = useState({
        date: "",
        name: "",
    });
    // Handle Date Change with Validation
    const handleDateChange = (e) => {
        const rawDate = e.target.value;

        // Validate if the entered date is valid
        const isValid = moment(rawDate, "YYYY-MM-DD", true).isValid();

        if (isValid) {
            const formattedDate = moment(rawDate).format("DD-MM-YYYY");

            setFormData((prev) => ({ ...prev, date: formattedDate, }));
        } else {
            setFormData((prev) => ({ ...prev, date: "Invalid date", }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.date !== "Invalid date") {
            const apiDateFormat = moment(formData.date, "DD-MM-YYYY").format("YYYY-MM-DD");
            console.log("Formatted for API:", apiDateFormat);
        } else {
            console.log("Invalid date entered!");
        }

        console.log("Full Form Data:", formData);
    };


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Date:</label>
                        <input type="date" onChange={handleDateChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <p>Formatted Date: {formData.date}</p>
            </div>

        </>
    );
}

export default New;
