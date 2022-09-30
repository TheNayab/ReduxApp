import "./App.css";
import React from "react";
import "./redux.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
import changeTheNumber from "./reducer/upDown";
function App() {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>

  
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(decNumber())}>
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={mystate}
          />
          <a className="quantity__plus" title="Increment" onClick={()=>dispatch(incNumber())}>
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
