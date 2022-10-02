import React, {useState} from 'react';
import {buyTokensFunc, mintTokensFunc, setTokenPrice, transferFromFunc} from "../web3-connect";

const WriteList = () => {
    const [priceValue, setPriceValue] = useState("")
    const [price, setPrice] = useState("")
    const [mintedTokens, setMintedTokens] = useState(0)
    // const [amountValue, setAmount] = useState(0)
    const [toValue, setTo] = useState("")
    const [transferFrom, setTransferFrom] = useState("")
    const [transferTo, setTransferTo] = useState("")
    const [transferTokenId, setTransferTokenId] = useState("")

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

    const fetchBuyTokens = (to) => {
        buyTokensFunc(to)
            .then(res => console.log(res))
            .catch(e => {
                console.log(e)
            })
    }

    const fetchTransferFrom = (from, to, tokenId) => {
        transferFromFunc(from, to, tokenId)
            .then(res => console.log(res))
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <div className='blocks'>
            <div className='block'>
                {/*<input type="number" onChange={(e) => setAmount(e.target.value)}/>*/}
                <input type="text" onChange={(e) => setTo(e.target.value)}/>
                <button onClick={() => fetchBuyTokens(toValue)}>buyTokens</button>
                <p>{}</p>
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
                <input type="text" onChange={(e) => setTransferFrom(e.target.value)}/>
                <input type="text" onChange={(e) => setTransferTo(e.target.value)}/>
                <input type="text" onChange={(e) => setTransferTokenId(e.target.value)}/>
                <button onClick={() => fetchTransferFrom(transferFrom, transferTo, transferTokenId)}>TransferFrom</button>
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
