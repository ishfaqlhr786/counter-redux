import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { IncNUmber, DecNUmber } from "./actions/CounterAction";
function App() {
  const myState = useSelector((state) => state.CountReducer);
  console.log(myState);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>redux counter</h2>
      <a title="increment" onClick={() => dispatch(IncNUmber())}>
        <span style={{ fontSize: "50px", fontWeight: "bold" }}>+</span>
      </a>
      <input type="text" value={myState.count} />
      <a title="deccrement" onClick={() => dispatch(DecNUmber())}>
        <span style={{ fontSize: "50px", fontWeight: "bold" }}>-</span>
      </a>
    </div>
  );
}

export default App;
