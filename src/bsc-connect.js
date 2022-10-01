import Web3 from "web3";

let account
let contract
let initialized = false

export const connect = async () => {
    let provider = window.ethereum
    if(typeof provider !== "undefined") {
        provider
            .request({method: "eth_requestAccounts"})
            .then(accounts => {
                account = accounts[0]
                console.log(account)
            })
            .catch(e => console.log(e))
        window.ethereum.on("accountsChanged", function (accounts) {
            account = accounts[0]
            console.log(account)
        })
    }

    const web3 = new Web3(provider)

    const networkId = await web3.eth.net.getId()
    const contractAbi = [
        {
            "inputs":[
                {
                    "internalType":"uint256",
                    "name":"tokenId",
                    "type":"uint256"
                }],
            "name":"ownerOf",
            "outputs":[
                {
                    "internalType":"address",
                    "name":"",
                    "type":"address"
                }],
            "stateMutability":"view",
            "type":"function"
        }
        ,{
            "inputs":[
                {
                    "internalType": "address",
                    "name":"owner",
                    "type":"address"
                }
                ],
            "name": "balanceOf",
            "outputs":[
                    {
                        "internalType":"uint256",
                        "name":"",
                        "type":"uint256"
                    }],
            "stateMutability":"view",
            "type":"function"
        },
    ]
    contract = new web3.eth.Contract(
        contractAbi,
        "0xF47955e9e3a1712D9e3Ec0E91593e1FA6D09E22e"
    )

    console.log(contract)
    initialized = true
}

export const getBalance = async () => {
    if (!initialized) {
        await connect()
    }
    return contract.methods.balanceOf(account).call()
}

export const getOwner = async () => {
    if (!initialized) {
        await connect()
    }
    return contract.methods.ownerOf(account).call()
}
