import React, {useState} from 'react';

const Form = ({clickFunction, text, formName}) => {
    const [clicked, setClicked] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const changeVisibility = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setClicked(!clicked)
        console.log(e)
    }
    return (
        <div>
            <div onClick={(e) => changeVisibility(e)} className='header'>
                balanceOf
            </div>
            {clicked &&
            <>
                <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={() => fetchBalance(inputValue)}>Query</button>
                <p>Your balance: {balance}</p>
            </>
            }
        </div>
    );
};

export default Form;
