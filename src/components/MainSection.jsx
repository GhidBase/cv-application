import { Fragment, useState } from "react";
import EditSection from "./EditSection";
import "../styles/main.css";
import "../styles/cv-side.css";
import "../styles/input-side.css";
import InputSection from "./InputSection";

import CV from "./CV";

export default function MainSection() {
    const [userData, setUserData] = useState([
        {
            type: "General",
            id: 0,
            "Full Name": "Dylan Simon",
            Email: "grvdylans@gmail.com",
        },
        {
            type: "Educational",
            id: 1,
            "School Name": "White Pine High School",
            "Title of Study": "General Diploma",
            "Date of Study": "2010-2014",
        },
        {
            type: "Job",
            id: 2,
            "Company Name": "Productive Computing",
            "Position Title": "Database Engineer",
            From: "2024",
            To: "2025",
            "Main Responsibilities":
                "Building and maintaining databases for clients",
        },
    ]);
    const [nextID, setNextID] = useState(userData.length);

    /* Input Sections Description:
        These are the types of inputSections there are
        all user data has a type that matches up with one
        of these sections. It uses that match to decide
        what fields to give an input section
    */
    const inputSections = {
        General: ["Full Name", "Email"],
        Educational: ["School Name", "Title of Study", "Date of Study"],
        Job: [
            "Company Name",
            "Position Title",
            "Main Responsibilities",
            "From",
            "To",
        ],
    };

    /* Input Section Listing Function
        This function lists all the input sections 
     */
    function listInputSections(type) {
        return userData.map((inputSection) => {
            if (inputSection.type == type) {
                return (
                    <InputSection
                        key={inputSection.id}
                        sectionKey={inputSection.id}
                        title={inputSection.title}
                        inputs={inputSections[inputSection.type]}
                        type={inputSection.type}
                        inputChangeHandler={inputChangeHandler}
                        handleRemoveButtonPress={handleRemoveButtonPress}
                        inputData={inputSection}
                    ></InputSection>
                );
            }
        });
    }

    function AddButton({ children, type }) {
        return (
            <button onClick={(e) => handleAddButtonPress(e, type)}>
                {children}
            </button>
        );
    }

    function handleAddButtonPress(e, type) {
        const newData = [...userData];
        newData.push({ type: type });
        newData[newData.length - 1].id = nextID;

        setNextID(nextID + 1);
        setUserData(newData);
    }

    function handleRemoveButtonPress(e, id) {
        const newData = userData.filter((data) => data.id != id);
        setUserData(newData);
    }

    function inputChangeHandler(e, field, key) {
        const newData = [...userData];

        // find the key

        const index = newData.findIndex((element) => element.id == key);
        newData[index][field] = e.target.value;
        setUserData(newData);
    }

    // console.log(userData);

    return (
        <Fragment>
            <div className="edit-section">
                <h1>General Information</h1>
                {listInputSections("General")}

                <h1>Educational Experience</h1>
                {listInputSections("Educational")}
                <AddButton type="Educational">Add Education</AddButton>

                <h1>Practical Experience</h1>
                {listInputSections("Job")}
                <AddButton type="Job">Add Work</AddButton>

                {/* End of edit-section */}
            </div>
            <CV data={userData}></CV>
        </Fragment>
    );
}
