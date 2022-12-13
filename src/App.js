import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, sighOut, signIn } from "./actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux Practice</h2>
        <h3>Counter: {counter}</h3>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(3))}>-</button>

        <br />

        {isLogged ? (
          <button onClick={() => dispatch(sighOut())}>Sign Out</button>
        ) : (
          <button onClick={() => dispatch(signIn())}>Sign In</button>
        )}
        {isLogged ? <h4>Valuable InformationI shouldn't see</h4> : null}
      </header>
    </div>
  );
}

export default App;
