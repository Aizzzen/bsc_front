import React, {useState} from 'react';
import {getBalance, getOwner, getTokenPrice, getTokenURI} from "../web3-connect";
import {click} from "@testing-library/user-event/dist/click";

const ReadList = () => {
    const [clicked, setClicked] = useState(false)
    const [balanceValue, setBalanceValue] = useState("")
    const [balance, setBalance] = useState("")

    const [ownerValue, setOwnerValue] = useState("")
    const [owner, setOwner] = useState("")

    const [URIValue, setURIValue] = useState("")
    const [URI, setURI] = useState("")

    const [price, setPrice] = useState("")

    const fetchBalance = (address) => {
        getBalance(address)
            .then(balance => setBalance(balance))
            .catch(e => {
                setBalance("Error: something went wrong")
                console.log(e)
            })
    }

    const fetchOwner = (id) => {
        getOwner(id)
            .then(owner => setOwner(owner))
            .catch(e => {
                setOwner("Error: something went wrong")
                console.log(e)
            })
    }

    const fetchURI = (tokenId) => {
        getTokenURI(tokenId)
            .then(URI => setURI(URI))
            .catch(e => {
                setURI("Error: something went wrong")
                console.log(e)
            })
    }

    const fetchPrice = () => {
        getTokenPrice()
            .then(price => setPrice(price))
            .catch(e => {
                setPrice("Error: something went wrong")
                console.log(e)
            })
    }

    const changeVisibility = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setClicked(!clicked)
        console.log(e)
    }

    return (
        <div className="blocks">
            <div className="block">
                <div onClick={(e) => changeVisibility(e)} className='header'>
                    balanceOf
                </div>
                {clicked &&
                    <>
                        <input type="text" onChange={(e) => setBalanceValue(e.target.value)}/>
                        <button onClick={() => fetchBalance(balanceValue)}>Query</button>
                        <p>Your balance: {balance}</p>
                    </>
                }
            </div>
            <div className="block">
                <div onClick={(e) => changeVisibility(e)} className='header'>
                    ownerOf
                </div>
                {clicked &&
                    <>
                        <input type="text" onChange={(e) => setOwnerValue(e.target.value)}/>
                        <button onClick={() => fetchOwner(ownerValue)}>Query</button>
                        <p>Owner: {owner}</p>
                    </>
                }
            </div>
            <div className="block">
                <div onClick={(e) => changeVisibility(e)} className='header'>
                    tokenURI
                </div>
                {clicked &&
                    <>
                        <input type="text" onChange={(e) => setURIValue(e.target.value)}/>
                        <button onClick={() => fetchURI(URIValue)}>Query</button>
                        <p>URI: {URI}</p>
                    </>
                }
            </div>
            <div className="block">
                <div onClick={(e) => changeVisibility(e)} className='header'>
                    Price
                </div>
                {clicked &&
                    <>
                        <button onClick={() => fetchPrice()}>Query</button>
                        <p>Price: {price}</p>
                    </>
                }
            </div>
        </div>
    );
};

export default ReadList;
