import { Fragment } from "react";

export default function InputSection({
    title,
    inputs,
    inputChangeHandler,
    sectionKey,
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
                        // value={}
                        onChange={(e) => {
                            inputChangeHandler(e, input, sectionKey);
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
