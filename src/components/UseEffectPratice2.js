import React, { useState, useEffect } from 'react';

export default function UseEffectPratice2() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log(`Count1 has been updated: ${count1}`);
    }, [count1]);

    useEffect(() => {
        console.log(`Count2 has been updated: ${count2}`);
    }, [count2]);

    return (
        <div>
            <h1>Count1: {count1}</h1>
            <button onClick={() => setCount1(count1 + 1)}>點選Count1</button>
            <h1>Count2: {count2}</h1>
            <button onClick={() => setCount2(count2 + 1)}>點選Count2</button>
        </div>
    );
}