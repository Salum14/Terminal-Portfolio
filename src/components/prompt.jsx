import { useState } from "react";

function Prompt(props) {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            props.onCommand(text);
            setText("");
        }
    }

    return (
        <div className="prompt">
            <span>&gt;</span>
            <input 
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default Prompt;