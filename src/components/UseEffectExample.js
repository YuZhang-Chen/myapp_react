import { useEffect } from "react";

export default function UseEffectExample() {
    console.log('creating function component');

    useEffect(() => {
        console.log('useEffect excuted');
    });

    return (
        <>
        {console.log('rending')};
        <h1>Hello Effect</h1>
        </>
    );
    
}