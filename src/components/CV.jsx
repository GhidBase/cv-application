export default function CV({ data }) {
    const educationalExists =
        data.filter((d) => d.type == "Educational").length > 0;

    const workExists = data.filter((d) => d.type == "Job").length > 0;

    return (
        <div className="cv-section">
            <div className="cv-body">
                <div className="personal-details">
                    <h1>{data[0]["Full Name"]}</h1>
                    <p>{data[0]["Email"]}</p>
                </div>

                <div className="separator"></div>

                <div className="details">
                    {workExists && <h2>Work Experience</h2>}
                    {workExists && <div className="separator"></div>}

                    {data.map((currentData) => {
                        if (currentData.type == "Job") {
                            return (
                                <div key={currentData.type + currentData.id}>
                                    <h3>{currentData["Position Title"]}</h3>
                                    <p>
                                        Company: {currentData["Company Name"]}
                                    </p>
                                    <p>
                                        Main Responsibilities:{" "}
                                        {currentData["Main Responsibilities"]}
                                    </p>
                                    <p>From: {currentData["From"]}</p>
                                    <p>To: {currentData["To"]}</p>
                                </div>
                            );
                        }
                    })}

                </div>

                <div className="details">
                    {educationalExists && <p>Educational Experience</p>}

                    {data.map((currentData) => {
                        if (currentData.type == "Educational") {
                            return (
                                <div key={currentData.type + currentData.id}>
                                    <p>School: {currentData["School Name"]}</p>
                                    <p>
                                        Title: {currentData["Title of Study"]}
                                    </p>
                                    <p>Date: {currentData["Date of Study"]}</p>
                                </div>
                            );
                        }
                        return null;
                    })}

                    {educationalExists && <div className="separator"></div>}
                </div>
            </div>
        </div>
    );
}
