import InputSection from "./InputSection";

export default function EditSection() {
    return (
        <div className="edit-section">
            <InputSection
                title="General Information"
                inputs={["Full Name", "Email"]}
            ></InputSection>
            <InputSection
                title="Educational Experience"
                inputs={["School Name", "Title of Study", "Date of Study"]}
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
            ></InputSection>
        </div>
    );
}
