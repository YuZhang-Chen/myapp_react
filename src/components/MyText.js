import { useContext } from "react";
import { AppContext, ColorContext, CountContext, SizeContext } from "../App";

export default function MyText() {
    const color = useContext(ColorContext);
    const username = useContext(AppContext);
    const count = useContext(CountContext);
    const size = useContext(SizeContext)+"px";

    return (
        <h1 style={{color: color, fontSize: size}}>{ username } {count}</h1>
    )
}