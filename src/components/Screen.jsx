import React, {useState, useEffect} from "react";



const Screen = () => {
    const [prevState, setPrevState] = useState("");
    const [currState, setCurrState] = useState("");
    const [input, setInput] = useState("0");
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    const num = e => {

    };

    const OperatorType = e => {

    };

    const answer = e => {

    };

    const percent = () => {

    };

    const PlusMinus = () => {

    };

    const reset = () => {

    };


    return(
        <div className="wrapper">
        <div className="ResultScreen"></div>
        <div className="btn light-white" onClick={reset}>C</div>
        <div className="btn light-white" onClick={PlusMinus}>±</div>
        <div className="btn light-white" onClick={percent}>%</div>
        <div className="btn light-white" onClick={OperatorType}>÷</div>
        <div className="btn" onClick={num}>7</div>
        <div className="btn" onClick={num}>8</div>
        <div className="btn" onClick={num}>9</div>
        <div className="btn light-white" onClick={OperatorType}>×</div>
        <div className="btn" onClick={num}>4</div>
        <div className="btn" onClick={num}>5</div>
        <div className="btn" onClick={num}>6</div>
        <div className="btn light-white" onClick={OperatorType}>-</div>
        <div className="btn" onClick={num}>1</div>
        <div className="btn" onClick={num}>2</div>
        <div className="btn" onClick={num}>3</div>
        <div className="btn light-white" onClick={OperatorType}>+</div>
        <div className="btn zero" onClick={num}>0</div>
        <div className="btn" onClick={num}>.</div>
        <div className="btn green" onClick={answer}>=</div>

      </div>
    );
};

export default Screen;