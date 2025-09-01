export default function CV({ data }) {
    // console.log(data["Full Name"]);
    return (
        <div className="cv-section">
            <div className="cv-body">
                <div className="personal-details">
                    <h1>{data["Full Name"]}</h1>
                    <p>{data["Email"]}</p>
                </div>

                <div className="separator"></div>
            </div>
        </div>
    );
}
