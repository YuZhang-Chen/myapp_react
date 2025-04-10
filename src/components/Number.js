import { useState } from "react";

const Number = () => {
    const [number, setNumber] = useState(10);

    return (
        <>
        <button onClick={() => setNumber(number + 1)}>增加</button>
        <button onClick={() => setNumber(number - 1)}>減少</button>
        <h1>Current Number: {number}</h1>
        </>
    )    
}

const NumbersWithLimitByHTML = () => {
    const [number, setNumber] = useState(0);
    return (    
        <>
        {number > 0 && <button onClick={() => setNumber(number-1)}>－</button>}
        <input text="number" value={number}/>
        {number < 15 && <button onClick={() => setNumber(number+1)}>＋</button>}
        </>
    )
}

const NumbersWithLimitByCss = () => {
    const [number, setNumber] = useState(1);
    const hiddenStyle = { display: "none" };

    return (
        <>
        <button style={number >= 15 ? hiddenStyle : {}} onClick={() => setNumber(number + 1)}>增加</button>
        <input text="number" value={number}/>
        <button style={number <= 0 ? hiddenStyle : {}} onClick={() => setNumber(number - 1)}>減少</button>
        </>
    );
};

export { Number, NumbersWithLimitByHTML, NumbersWithLimitByCss }; 