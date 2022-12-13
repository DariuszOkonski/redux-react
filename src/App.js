import { useEffect, useState } from "react";
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
  incrementHistoryList,
  clearHistoryList,
  clearCounter,
} from "./actions";
import "./App.css";

function App() {
  const [historyElement, setHistoryElement] = useState();

  const counter = useSelector((state) => state.counterReducer.counter);
  const numberOfEvents = useSelector(
    (state) => state.counterReducer.numberOfEvents
  );
  const isLogged = useSelector((state) => state.loggingReducer.isLogged);
  const isDisplayed = useSelector((state) => state.counterReducer.isDisplayed);
  const historyList = useSelector((state) => state.historyReducer.historyList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!historyElement) {
      console.log(historyElement);
      dispatch(incrementHistoryList(historyElement));
    }
  }, [dispatch, historyElement, numberOfEvents]);

  const handleIncrementByNumber = (number) => {
    dispatch(incrementByNumber(number));
    setHistoryElement(number);
  };

  const handleDecrementByNumber = (number) => {
    dispatch(decrementByNumber(number));
    setHistoryElement(-number);
  };

  const handleIncrementOne = () => {
    dispatch(incrementOne());
    setHistoryElement(1);
  };

  const handleDecrementOne = () => {
    dispatch(decrementOne());
    setHistoryElement(-1);
  };

  const handleClearHistoryList = () => {
    dispatch(clearHistoryList());
    setHistoryElement(null);
  };

  const handleClearAll = () => {
    setHistoryElement(null);
    dispatch(clearHistoryList());
    dispatch(clearCounter());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux Practice</h2>

        {isDisplayed && (
          <>
            {!!historyList.length ? (
              <p>History: {historyList.join(",")}</p>
            ) : (
              <p>No History to display...</p>
            )}
            {!!historyList.length && (
              <button
                className="button"
                onClick={() => handleClearHistoryList()}
              >
                Clear history
              </button>
            )}
            <p>Number of events: {numberOfEvents}</p>
            <p>Counter: {counter}</p>
            <button className="button" onClick={() => handleClearAll()}>
              Clear All
            </button>
            <div>
              <button
                className="button"
                onClick={() => handleIncrementByNumber(5)}
              >
                +5
              </button>
              <button className="button" onClick={() => handleIncrementOne()}>
                +
              </button>
              <button className="button" onClick={() => handleDecrementOne()}>
                -
              </button>
              <button
                className="button"
                onClick={() => handleDecrementByNumber(3)}
              >
                -3
              </button>
            </div>
            <br />
            <button className="button" onClick={() => dispatch(displayOff())}>
              Display Off
            </button>
          </>
        )}
        {!isDisplayed && (
          <button className="button" onClick={() => dispatch(displayOn())}>
            Display On
          </button>
        )}
        <br />

        {isLogged ? (
          <button className="button" onClick={() => dispatch(signOut())}>
            Sign Out
          </button>
        ) : (
          <button className="button" onClick={() => dispatch(signIn())}>
            Sign In
          </button>
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
