import { Fragment, useState } from "react";
import EditSection from "./EditSection";
import "../styles/main.css";
import InputSection from "./InputSection";

import CV from "./CV";

export default function MainSection() {
    const [userData, setUserData] = useState([
        { type: "General", id: 0 },
    ]);

    const [nextID, setNextID] = useState(userData.length);

    function inputChangeHandler(e, field, key, type) {
        const newData = [...userData];

        if (newData[key] == null) {
            newData[key] = [];
            newData[key]["type"] = type;
        }

        newData[key][field] = e.target.value;
        setUserData(newData);
    }

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
        console.log(type);
        console.log(e.target);

        const newData = [...userData];
        newData[nextID] = { type: type };
        newData[nextID].id = nextID;

        setNextID(nextID + 1);
        setUserData(newData);
    }

    function handleRemoveButtonPress(e, id) {
        const newData = userData.filter((data) => data.id != id);
        setUserData(newData);
    }

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
