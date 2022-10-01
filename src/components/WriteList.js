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
            .then(price => setPrice(price))
            .catch(e => {
                setPrice("Error?")
                console.log(e)
            })
    }

    return (
        <div>
            <div>
                <button>buyTokens</button>
                <input type="text"/>
                <p></p>
            </div>
            <div>
                <button onClick={() => fetchMinting(mintedTokens)}>mintTokens</button>
                <input type="number" onChange={(e) => setMintedTokens(e.target.value)}/>
                <p></p>
            </div>
            <div>
                <button onClick={() => fetchSetPrice(priceValue)}>setPrice</button>
                <input type="text" onChange={(e) => setPriceValue(e.target.value)}/>
                <p>Price: {price}</p>
            </div>
            <div>
                <button>TransferFrom</button>
                <input type="text"/>
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
