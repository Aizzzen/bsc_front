import React, {useRef, useState} from 'react';

const Form = ({header, func, placeholder, text, value, isInput, textValue, button}) => {
    const [clicked, setClicked] = useState(false)
    const [inputValue, setInputValue] = useState(null)
    const [inputValue2, setInputValue2] = useState(null)
    const [inputValue3, setInputValue3] = useState(null)
    const ref = useRef()

    const changeVisibility = () => {
        setClicked(!clicked)
        // ref.current.style.minHeight = "100px";
    }
    return (
        <div className='block' ref={ref}>
            <div onClick={changeVisibility} className='header'>
                {header}
            </div>
            {clicked &&
            <>
                {isInput === 0 &&
                    <button onClick={() => func(inputValue)}>{button}</button>
                }
                {isInput === 1 &&
                    <>
                        <input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder={placeholder}/>
                        <button onClick={() => func(inputValue)}>{button}</button>
                    </>
                }
                {isInput === 3 &&
                    <>
                        <input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder={placeholder[1]}/>
                        <input type="text" onChange={(e) => setInputValue2(e.target.value)} placeholder={placeholder[2]}/>
                        <input type="text" onChange={(e) => setInputValue3(e.target.value)} placeholder={placeholder[3]}/>
                        <button onClick={() => func(inputValue, inputValue2, inputValue3)}>{button}</button>
                    </>
                }
                {textValue && <p>{text}: {value}</p>}
            </>
            }
        </div>
    );
};

export default Form;
