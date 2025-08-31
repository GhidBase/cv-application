import { Fragment } from "react";

export default function InputSection({ title, inputs }) {
    function listInputs(inputs) {
        if (!inputs) {
            return <input></input>;
        }

        return inputs.map((input) => {
            return (
                <div key={input} className="input-component">
                    <p>{input}</p>
                    <input />
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
