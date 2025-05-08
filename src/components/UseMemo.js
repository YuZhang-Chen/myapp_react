import { useMemo, useState } from "react";

export default function UseMemo() {

    const [state, setState] = useState(0);

    const memoizedValue = useMemo(() => {
        return Math.floor(Math.random() * 100) + 1;
    }, []);

    return (
        <>
        {console.log("rendering")};
        <h1>Random Value: {memoizedValue}</h1>;
        <h1>state: {state}</h1>
        <button onClick={() => { setState(state+1)}}>Change state</button>
        </>
    );
}