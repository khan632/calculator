import React, { useState, useEffect } from "react";
import "./screen.css";

const Screen = () => {
  const [prevState, setPrevState] = useState(""); //it hold the answer
  const [currState, setCurrState] = useState(""); //it hold the current value
  const [input, setInput] = useState("0"); //dispaly of calculation
  const [operator, setOperator] = useState(null); //what calculation we wanted todo
  const [total, setTotal] = useState(false); //its shows that we do not want any further calculation

  const num = (e) => {
    // check for if user by mistakr click 2 time "." operator
    if (currState.includes(".") && e.target.innerText === ".") return;

    // if user click on equals button then its prev state should be blank means no further calculations
    if (total) {
      setPrevState("");
    }

    // if curr state has somehing then add with that somehing ortherwise add normally
    currState
      ? setCurrState((pre) => pre + e.target.innerText)
      : setCurrState(e.target.innerText);
    setTotal(false);
  };

  // change whenever we want to perform something
  useEffect(() => {
    setInput(currState);
  }, [currState]);

  // change on refresh 
  useEffect(() => {
    setInput("0");
  }, []);

  const OperatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (currState === "") return;
    if (prevState !== "") {
      answer();
    } else {
      setPrevState(currState);
      setCurrState("");
    }
  };

  const answer = (e) => {
    if (e?.target.innerText === "=") setTotal(true);

    let calc;
    switch (operator) {
      case "÷":
        // eslint-disable-next-line no-eval
        calc = String(parseFloat(prevState) / parseFloat(currState));
        break;
      case "+":
        calc = String(parseFloat(prevState) + parseFloat(currState));
        break;
      case "-":
        calc = String(parseFloat(prevState) - parseFloat(currState));
        break;
      case "X":
        calc = String(parseFloat(prevState) * parseFloat(currState));
        break;
      default:
        return;
    }

    setInput("");
    setPrevState(calc);
    setCurrState("");
  };

  const percent = () => {
    prevState
      ? setCurrState(String((parseFloat(currState) / 100) * prevState))
      : setCurrState(String(parseFloat(currState) / 100));
    // setCurrState(String((parseFloat(currState) / 100) * 100))
  };

  const PlusMinus = () => {
    if (currState.charAt(0) === "-") setCurrState(currState.substring(1));
    else setCurrState("-" + currState);
  };

  const reset = () => {
    setCurrState("");
    setPrevState("");
    setInput("0");
  };

  return (
    <div className="wrapper">
      <div className="ResultScreen">
        {input !== "" || input === "0" ? (
          <span>{input}</span>
        ) : (
          <span>{prevState}</span>
        )}
      </div>
      <div className="btn light-white" onClick={reset}>
        C
      </div>
      <div className="btn light-white" onClick={PlusMinus}>
        ±
      </div>
      <div className="btn light-white" onClick={percent}>
        %
      </div>
      <div className="btn light-white" onClick={OperatorType}>
        ÷
      </div>
      <div className="btn" onClick={num}>
        7
      </div>
      <div className="btn" onClick={num}>
        8
      </div>
      <div className="btn" onClick={num}>
        9
      </div>
      <div className="btn light-white" onClick={OperatorType}>
        X
      </div>
      <div className="btn" onClick={num}>
        4
      </div>
      <div className="btn" onClick={num}>
        5
      </div>
      <div className="btn" onClick={num}>
        6
      </div>
      <div className="btn light-white" onClick={OperatorType}>
        -
      </div>
      <div className="btn" onClick={num}>
        1
      </div>
      <div className="btn" onClick={num}>
        2
      </div>
      <div className="btn" onClick={num}>
        3
      </div>
      <div className="btn light-white" onClick={OperatorType}>
        +
      </div>
      <div className="btn zero" onClick={num}>
        0
      </div>
      <div className="btn" onClick={num}>
        .
      </div>
      <div className="btn green" onClick={answer}>
        =
      </div>
    </div>
  );
};

export default Screen;
