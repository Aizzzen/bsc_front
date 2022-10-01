import React, {useState} from 'react';

const Form = ({clickFunction, text, formName}) => {
    const [value, setValue] = useState("")
    const [inputValue, setInputValue] = useState("")
    return (
        <div>
            <button onClick={() => clickFunction(inputValue)}>{formName}</button>
            <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
            <p>{text}: {value}</p>
        </div>
    );
};

export default Form;
