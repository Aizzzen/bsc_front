import React, {useState} from 'react';
import {getBalance, getOwner, getTokenURI} from "../web3-connect";

const ReadList = () => {
    const [balanceValue, setBalanceValue] = useState("")
    const [balance, setBalance] = useState("")

    const [ownerValue, setOwnerValue] = useState("")
    const [owner, setOwner] = useState("")

    const [URIValue, setURIValue] = useState("")
    const [URI, setURI] = useState("")

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

    return (
        <div>
            <div>
                <button onClick={() => fetchBalance(balanceValue)}>balanceOf</button>
                <input type="text" onChange={(e) => setBalanceValue(e.target.value)}/>
                <p>Your balance: {balance}</p>
            </div>
            <div>
                <button onClick={() => fetchOwner(ownerValue)}>ownerOf</button>
                <input type="text" onChange={(e) => setOwnerValue(e.target.value)}/>
                <p>Owner: {owner}</p>
            </div>
            <div>
                <button onClick={() => fetchURI(URIValue)}>tokenURI</button>
                <input type="text" onChange={(e) => setURIValue(e.target.value)}/>
                <p>URI: {URI}</p>
            </div>
        </div>
    );
};

export default ReadList;
