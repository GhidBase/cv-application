import { Fragment } from "react";

export default function InputSection({
    title,
    inputs,
    inputChangeHandler,
    sectionKey,
    type
}) {
    // console.log(inputs)
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

    return (
        <div className="input-section" id={title}>
            <h1>{title}</h1>
            {listInputs(inputs)}
        </div>
    );
}
