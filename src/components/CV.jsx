export default function CV({ data }) {
    const educationalExists =
        data.filter((d) => d.type == "Educational").length > 0;

    return (
        <div className="cv-section">
            <div className="cv-body">
                <div className="personal-details">
                    <h1>{data[0]["Full Name"]}</h1>
                    <p>{data[0]["Email"]}</p>
                </div>

                <div className="separator"></div>

                <div className="details">
                    {educationalExists && <p>Educational Experience</p>}

                    {data.map((currentData) => {
                        if (currentData.type == "Educational") {
                            return (
                                <div>
                                    <p>School: {currentData["School Name"]}</p>
                                    <p>
                                        Title: {currentData["Title of Study"]}
                                    </p>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
}
