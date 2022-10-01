import {useEffect, useState} from "react";
import {connect, getBalance, getOwner, getTokenURI} from "./bsc-connect";

const App = () => {
  const [view, setView] = useState("read")

  const [balanceValue, setBalanceValue] = useState("")
  const [balance, setBalance] = useState("")

  const [ownerValue, setOwnerValue] = useState("")
  const [owner, setOwner] = useState("")

  const [URIValue, setURIValue] = useState("")
  const [URI, setURI] = useState("")

  const ChangeView = (type) => {
      setView(type)
  }

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
    <div className="App">
        <button onClick={() => ChangeView("read")}>Read</button>
        <button onClick={() => ChangeView("write")}>Write</button>
        {view === "read" ? <div>
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
        :
            <div>
                <button>buyTokens</button>
                <button>mintTokens</button>
                <button>setPrice</button>
                <button>TransferFrom</button>
            </div>
        }
    </div>
  );
}

export default App;
