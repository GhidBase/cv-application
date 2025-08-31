import { Fragment } from "react";

export default function InputSection({ title, inputs }) {
    function listInputs(inputs) {
        if(!inputs) {
            return <input></input>
        }
        return inputs.map((input) => {
            return (
                <Fragment key={input}>
                    <p>{input}</p>
                    <input />
                </Fragment>
            );
        });
    }

    return (
        <div>
            <h1>{title}</h1>
            {listInputs(inputs)}
        </div>
    );
}
