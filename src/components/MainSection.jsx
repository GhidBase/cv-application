import { Fragment, useState } from "react";
import EditSection from "./EditSection";
import "../styles/main.css";
import InputSection from "./InputSection";

import CV from "./CV";

export default function MainSection() {
    const [userData, setUserData] = useState({});

    function inputChangeHandler(e, field, key) {
        const newData = { ...userData };

        if (newData[key] == null) {
            newData[key] = [];
        }
        newData[key][field] = e.target.value;
        setUserData(newData);
        console.clear();
        console.log(newData);
    }

    const [inputSections, setInputSections] = useState([
        {
            type: "General",
            id: 0,
            title: "General Information",
            inputs: ["Full Name", "Email"],
        },
        {
            type: "Educational",
            id: 1,
            title: "Educational Experience",
            inputs: ["School Name", "Title of Study", "Date of Study"],
        },
        {
            type: "Job",
            id: 2,
            title: "Practical Experience",
            inputs: [
                "Company Name",
                "Position Title",
                "Main Responsibilities",
                "From",
                "To",
            ],
        },
    ]);

    return (
        <Fragment>
            <div className="edit-section">
                {inputSections.map((inputSection) => {
                    return (
                        <InputSection
                            key={inputSection.id}
                            sectionKey={inputSection.id}
                            title={inputSection.title}
                            inputs={inputSection.inputs}
                            inputChangeHandler={inputChangeHandler}
                        ></InputSection>
                    );
                })}

                {/* End of edit-section */}
            </div>
            <CV data={userData}></CV>
        </Fragment>
    );
}
