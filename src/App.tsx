import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";
import { useState } from "react";
import "./App.css";

function App() {
const count = useSelector((state: RootState) => state.counter.value)
const dispatch = useDispatch();
const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>ー</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加
      </button>
    </div>
  );
}

export default App;
