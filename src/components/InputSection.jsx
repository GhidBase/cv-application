import { Fragment } from "react";

export default function InputSection({
    inputs,
    inputChangeHandler,
    sectionKey,
    type,
    handleRemoveButtonPress,
}) {
    function listInputs(inputs) {
        if (!inputs) {
            return <input></input>;
        }

        return inputs.map((input) => {
            return (
                <div key={sectionKey + input} className="input-component">
                    <p>{input}</p>
                    <input
                        onChange={(e) => {
                            inputChangeHandler(e, input, sectionKey, type);
                        }}
                    />
                </div>
            );
        });
    }

    function RemoveButton({ children }) {
        // console.log(id);
        return (
            <button onClick={(e) => handleRemoveButtonPress(e, sectionKey)}>
                {children}
            </button>
        );
    }

    return (
        <div className="input-section" id={sectionKey}>
            {listInputs(inputs)}
            <p>{sectionKey}</p>
            {type != "General" && <RemoveButton>Remove</RemoveButton>}
        </div>
    );
}
