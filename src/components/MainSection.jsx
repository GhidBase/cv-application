import { Fragment, useState } from "react";
import EditSection from "./EditSection";
import "../styles/main.css";
import CV from "./CV";

export default function MainSection() {
    const [userData, setUserData] = useState({});

    return (
        <Fragment>
            <EditSection></EditSection>
            <CV></CV>
        </Fragment>
    );
}
