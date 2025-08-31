import InputSection from "./InputSection";

export default function EditSection() {
    return (
        <div className="edit-section">
            <InputSection
                title="General Information"
                inputs={["Full Name", "Email"]}
            ></InputSection>
            <InputSection title="Educational Experience"></InputSection>
            <InputSection title="Practical Experience"></InputSection>
        </div>
    );
}
