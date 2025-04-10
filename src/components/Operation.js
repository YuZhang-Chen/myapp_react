import React, { useState } from 'react';
import '../App.css';

const Operation = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);
    const [operator, setOperator] = useState('+');

    const handleAdd = (operator) => {
        switch (operator) {
            case '+':
                setSum(Number(num1) + Number(num2));
                break;
            case '-':
                setSum(Number(num1) - Number(num2));
                break;
            case '*':
                setSum(Number(num1) * Number(num2));
                break;
            default:
                setSum((Number(num1) / Number(num2)).toFixed(2));
                break;
        }
    };
    return (
        <div className="calculator">
            <input
                type="text"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
                className="input-field"
            />
            <select value={operator} onChange={(e) => setOperator(e.target.value)} className="operator-select">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input
                type="text"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
                className="input-field"
            /> <span className="operator-select">=</span> <span className="result">{sum}</span>
            <p><button onClick={() => handleAdd(operator)} className="calculate-button">加總</button></p>
        </div>
    );
};

export default Operation;