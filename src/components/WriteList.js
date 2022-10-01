import React, {useState} from 'react';
import {mintTokensFunc, setTokenPrice} from "../web3-connect";

const WriteList = () => {
    const [priceValue, setPriceValue] = useState("")
    const [price, setPrice] = useState("")
    const [mintedTokens, setMintedTokens] = useState(0)

    const fetchSetPrice = (newPrice) => {
        setTokenPrice(newPrice)
            .then(price => setPrice(price))
            .catch(e => {
                setPrice("Only owner can change price")
                console.log(e)
            })
    }

    const fetchMinting = (tokens) => {
        mintTokensFunc(tokens)
            .then(res => console.log(res))
            .catch(e => {
                console.log(e)
            })
    }

    const fetchBuyTokens = (amount, to) => {
        mintTokensFunc(amount, to)
            .then(price => setPrice(price))
            .catch(e => {
                setPrice("Error?")
                console.log(e)
            })
    }

    return (
        <div className='blocks'>
            <div className='block'>
                <input type="text"/>
                <button onClick={() => fetchBuyTokens()}>buyTokens</button>
                <p></p>
            </div>
            <div className='block'>
                <input type="number" onChange={(e) => setMintedTokens(e.target.value)}/>
                <button onClick={() => fetchMinting(mintedTokens)}>mintTokens</button>
                <p></p>
            </div>
            <div className='block'>
                <input type="text" onChange={(e) => setPriceValue(e.target.value)}/>
                <button onClick={() => fetchSetPrice(priceValue)}>setPrice</button>
                <p>Price: {price}</p>
            </div>
            <div className='block'>
                <input type="text"/>
                <button>TransferFrom</button>
                <p></p>
            </div>
        </div>
    );
};

export default WriteList;


// <div>
//     <button onClick={() => fetchBalance(balanceValue)}>balanceOf</button>
//     <input type="text" onChange={(e) => setBalanceValue(e.target.value)}/>
//     <p>Your balance: {balance}</p>
// </div>
