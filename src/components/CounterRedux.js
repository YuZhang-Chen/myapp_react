import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from "../counterSlice";
import { useState } from "react";

export default function CounterRedux() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(2);
    const [decrementAmount, setDecrementAmount] = useState(2);
    const [userInput, setUserInput] = useState();

    return (
        <>
        <div className="counter-container">
            <h1 className="counter-value">{count}</h1>
            <div className="counter-buttons">
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>decrement by 1</button>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>increment by 1</button>
            </div>
            <div className="counter-buttons">
                <button aria-label="Decrement Amount" onClick={() => dispatch(decrementByAmount(decrementAmount))}>Subtract Amount</button>
                <input
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => {
                      setIncrementAmount(Number(e.target.value) || 0);
                      setDecrementAmount(Number(e.target.value) || 0);
                    }} 
                />
                <button aria-label="Add Amount" onClick={() => dispatch(incrementByAmount(incrementAmount))}>Add Amount</button>
            </div>
            <input type="text" placeholder="請輸入文字" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <h1>{userInput}</h1>
        </div>
        </>
    );
}