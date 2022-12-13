import { useDispatch, useSelector } from "react-redux";
import {
  decrementByNumber,
  decrementOne,
  incrementByNumber,
  incrementOne,
  signIn,
  signOut,
  displayOff,
  displayOn,
} from "./actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counterReducer.counter);
  const numberOfEvents = useSelector(
    (state) => state.counterReducer.numberOfEvents
  );
  const isLogged = useSelector((state) => state.loggingReducer.isLogged);
  const isDisplayed = useSelector((state) => state.counterReducer.isDisplayed);
  const dispatch = useDispatch();

  console.log(isDisplayed);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux Practice</h2>

        {isDisplayed && (
          <>
            <h3>Number of events: {numberOfEvents}</h3>
            <h3>Counter: {counter}</h3>
            <button onClick={() => dispatch(incrementOne())}>+</button>
            <button onClick={() => dispatch(decrementOne())}>-</button>
            <button onClick={() => dispatch(incrementByNumber(5))}>+5</button>
            <button onClick={() => dispatch(decrementByNumber(3))}>-3</button>

            <button onClick={() => dispatch(displayOff())}>Display Off</button>
          </>
        )}
        {!isDisplayed && (
          <button onClick={() => dispatch(displayOn())}>Display On</button>
        )}
        <br />

        {isLogged ? (
          <button onClick={() => dispatch(signOut())}>Sign Out</button>
        ) : (
          <button onClick={() => dispatch(signIn())}>Sign In</button>
        )}

        {isLogged ? (
          <h4>Your winning number is: 78-34-97-92-47</h4>
        ) : (
          <h4>Secret information here...</h4>
        )}
      </header>
    </div>
  );
}

export default App;
