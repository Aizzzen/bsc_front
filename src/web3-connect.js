import Web3 from "web3";
import abi from './abi.json';

let provider = window.ethereum
let web3
let account
let contract
let initialized = false

// Connection to Metamask
export const connect = async () => {
    if(typeof provider !== "undefined") {
        provider
            .request({method: "eth_requestAccounts"})
            .then(accounts => account = accounts[0])
            .catch(e => console.log(e))
        window.ethereum.on("accountsChanged", function (accounts) {
            account = accounts[0]
        })
    }
    web3 = new Web3(provider)
    const networkId = await web3.eth.net.getId()
    contract = new web3.eth.Contract(
        abi,
        "0xF47955e9e3a1712D9e3Ec0E91593e1FA6D09E22e"
    )
    initialized = true
}

// Read Contract Functions
export const getBalance = async (address) => {
    if (!initialized) {
        await connect()
    }
    return contract.methods.balanceOf(address).call()
}

export const getOwner = async (id) => {
    if (!initialized) {
        await connect()
    }
    return contract.methods.ownerOf(id).call()
}

export const getTokenURI = async (tokenId) => {
    if (!initialized) {
        await connect()
    }
    return contract.methods.tokenURI(tokenId).call()
}

export const getTokenPrice = async () => {
    if (!initialized) {
        await connect()
    }
    return contract.methods.price().call()
}

// Write Contract Functions
export const mintTokensFunc = async (tokens) => {
    if (!initialized) {
        await connect()
    }
    return contract.methods.mintTokens(account, tokens).send({from: account})
}

export const setTokenPrice = async (price) => {
    if (!initialized) {
        await connect()
    }
    return contract.methods.setPrice(price).call()
}

export const buyTokensFunc = async (to) => {
    if (!initialized) {
        await connect()
    }
    return contract.methods.buyTokens(to).send({from: account})
}

export const transferFromFunc = async (from, to, tokenId) => {
    if (!initialized) {
        await connect()
    }
    return contract.methods.transferFrom(from, to, tokenId).send({from: account})
}
