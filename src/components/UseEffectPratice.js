import { useEffect, useState } from "react";

export default function UseEffectPratice() {
    console.log('creating function component');
    
    const [count1, setCount] = useState(0);
    let num = 20000;
    
    const randomFunction = () => {
        return Math.floor(Math.random() * 100) + 1;
    };
    
    useEffect(() => {
        let timer;
        console.log('useEffect excuted');
        if (count1 < num) {
            timer = setTimeout(() => {
                setCount(count1 + 1);
            }, 2);
        }
        return () => clearTimeout(timer);
    }, [count1, num]);

    const addCount = () => {
        if (count1 >= num) {
            console.log('button1 be clicked.');
            setCount(count1+randomFunction());
        }
    };

    return (
        <>  
          {console.log('rending')};
          <h1>count1: {count1}</h1>;
          <button onClick={addCount}>addCount1</button>
        </>
    );
}