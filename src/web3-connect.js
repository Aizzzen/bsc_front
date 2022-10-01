import Web3 from "web3";
import abi from './abi.json';

let provider = window.ethereum
let web3
let account
let contract
let initialized = false

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

export const getBalance = async (address) => {
    if (!initialized) {
        await connect()
    }
    contract = new web3.eth.Contract(
        abi,
        address
    )
    return contract.methods.balanceOf(account).call()
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
    return contract.methods.tokenURI("_" + `${tokenId}`).call()
}
