import React, {useState} from 'react';
import {
    buyTokensFunc,
    mintTokensFunc,
    setTokenPrice,
    transferFromFunc
} from "../web3-connect";
import Form from "./Form";

const WriteList = () => {
    const [price, setPrice] = useState("")
    // const [amountValue, setAmount] = useState(0)
    // const [toValue, setTo] = useState("")

    // const fetchBuyTokens = (to) => {
    //     buyTokensFunc(to)
    //         .then(res => console.log(res))
    //         .catch(e => {
    //             console.log(e)
    //         })
    // }

    const fetchSetPrice = (newPrice) => {
        setTokenPrice(newPrice)
            .then(price => setPrice(price))
            .catch(e => {
                setPrice("Only owner can change price")
                console.log("Error message: " + e)
            })
    }

    const fetchMinting = (tokens) => {
        mintTokensFunc(tokens)
            .then(res => console.log(res))
            .catch(e => {
                console.log("Error message: " + e)
            })
    }

    const fetchTransferFrom = (from, to, tokenId) => {
        transferFromFunc(from, to, tokenId)
            .then(res => console.log(res))
            .catch(e => {
                console.log("Error message: " + e)
            })
    }

    return (
        <div className='blocks'>
            {/*<div className='block'>*/}
            {/*    <input type="number" onChange={(e) => setAmount(e.target.value)}/>*/}
            {/*    <input type="text" onChange={(e) => setTo(e.target.value)}/>*/}
            {/*    <button onClick={() => fetchBuyTokens(amountValue, toValue)}>buyTokens</button>*/}
            {/*    <p>{}</p>*/}
            {/*</div>*/}
            <Form
                header="mintTokens"
                func={fetchMinting}
                placeholder="amount"
                isInput={1}
                textValue={false}
                button="Write"
            />
            <Form
                header="setPrice"
                func={fetchSetPrice}
                placeholder="price"
                text="Price"
                value={price}
                isInput={1}
                textValue={true}
                button="Write"
            />
            <Form
                header="transferFrom"
                func={fetchTransferFrom}
                placeholder={
                    {
                        1: 'from',
                        2: 'to',
                        3: 'tokenId',
                    }
                }
                isInput={3}
                textValue={false}
                button="Write"
            />
        </div>
    );
};

export default WriteList;
