export default function CV({ data }) {
    // console.log(data["Full Name"]);
    console.log(data)
    return (
        <div className="cv-section">
            <div className="cv-body">
                <div className="personal-details">
                    <h1>{data[0]["Full Name"]}</h1>
                    <p>{data[0]["Email"]}</p>
                </div>

                <div className="separator"></div>
            </div>
        </div>
    );
}
