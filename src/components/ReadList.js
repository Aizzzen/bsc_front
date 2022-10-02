import React, {useState} from 'react';
import {
    getBalance,
    getOwner,
    getTokenPrice,
    getTokenURI
} from "../web3-connect";
import Form from "./Form";

const ReadList = () => {
    const [balance, setBalance] = useState("")
    const [owner, setOwner] = useState("")
    const [URI, setURI] = useState("")
    const [price, setPrice] = useState("")

    const fetchBalance = (address) => {
        getBalance(address)
            .then(balance => setBalance(balance))
            .catch(e => {
                setBalance("Error: something went wrong")
                console.log("Error message: " + e)
            })
    }

    const fetchOwner = (id) => {
        getOwner(id)
            .then(owner => setOwner(owner))
            .catch(e => {
                setOwner("Error: something went wrong")
                console.log("Error message: " + e)
            })
    }

    const fetchURI = (tokenId) => {
        getTokenURI(tokenId)
            .then(URI => setURI(URI))
            .catch(e => {
                setURI("Error: something went wrong")
                console.log("Error message: " + e)
            })
    }

    const fetchPrice = () => {
        getTokenPrice()
            .then(price => setPrice(price))
            .catch(e => {
                setPrice("Error: something went wrong")
                console.log("Error message: " + e)
            })
    }

    return (
        <div className="blocks">
            <Form
                header="balanceOf"
                func={fetchBalance}
                placeholder="address"
                text="Your balance"
                value={balance}
                isInput={1}
                textValue={true}
                button="Query"
            />
            <Form
                header="ownerOf"
                func={fetchOwner}
                placeholder="tokenId"
                text="Owner"
                value={owner}
                isInput={1}
                textValue={true}
                button="Query"
            />
            <Form
                header="tokenURI"
                func={fetchURI}
                placeholder="tokenId"
                text="URI"
                value={URI}
                isInput={1}
                textValue={true}
                button="Query"
            />
            <Form
                header="price"
                func={fetchPrice}
                text="Price"
                value={price}
                isInput={0}
                textValue={true}
                button="Query"
            />
        </div>
    );
};

export default ReadList;
