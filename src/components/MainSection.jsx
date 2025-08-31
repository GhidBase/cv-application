import { Fragment, useState } from "react";
import EditSection from "./EditSection";
import "../styles/main.css";
import InputSection from "./InputSection";

import CV from "./CV";

export default function MainSection() {
    const [userData, setUserData] = useState({});

    function inputChangeHandler(e, key) {
        const newData = { ...userData };

        newData[key] = e.target.value;
        setUserData(newData);
    }

    return (
        <Fragment>
            <div className="edit-section">
                <InputSection
                    title="General Information"
                    inputs={["Full Name", "Email"]}
                    inputChangeHandler={inputChangeHandler}
                ></InputSection>

                <InputSection
                    title="Educational Experience"
                    inputs={["School Name", "Title of Study", "Date of Study"]}
                    inputChangeHandler={inputChangeHandler}
                ></InputSection>

                <InputSection
                    title="Practical Experience"
                    inputs={[
                        "Company Name",
                        "Position Title",
                        "Main Responsibilities",
                        "From",
                        "To",
                    ]}
                    inputChangeHandler={inputChangeHandler}
                ></InputSection>

                {/* End of edit-section */}
            </div>
            <CV data={userData}></CV>
        </Fragment>
    );
}
