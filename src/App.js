import {useEffect, useState} from "react";
import {connect, getBalance, getOwner} from "./bsc-connect";

const App = () => {
  const [balance, setBalance] = useState(5)
  const [owner, setOwner] = useState("0x000000")
  const [URI, setURI] = useState("yhuihiulhsdbi")

  const fetchBalance = () => {
    getBalance()
        .then(balance => setBalance(balance))
        .catch(e => console.log(e))
  }

  const fetchOwner = () => {
      getOwner()
          .then(owner => setOwner(owner))
          .catch(e => console.log(e))
  }

  return (
    <div className="App">
        <div>
            <button onClick={() => fetchBalance()}>balanceOf</button>
            <p>Your balance: {balance}</p>
        </div>
        <div>
            <button onClick={() => fetchOwner()}>ownerOf</button>
            <p>Owner: {owner}</p>
        </div>
        <div>
            <button>tokenURI</button>
            <p>URI: {URI}</p>
        </div>
    </div>
  );
}

export default App;
