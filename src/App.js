import {useState} from "react";
import './App.scss';
import ReadList from "./components/ReadList";
import WriteList from "./components/WriteList";

const App = () => {
  const [view, setView] = useState("read")

  const changeView = (type) => {
      setView(type)
  }

  return (
    <div className="App">
        <div className="buttons">
            <button onClick={() => changeView("read")}>Read</button>
            <button onClick={() => changeView("write")}>Write</button>
        </div>
        {view === "read" ? <ReadList/> : <WriteList/>}
    </div>
  );
}

export default App;
