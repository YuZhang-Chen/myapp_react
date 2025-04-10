import { useState } from "react"

const InputText = () => {
    const types = ["text", "password", "email", "text"];
    const placeholders = ["帳號", "密碼", "Email", "手機號碼"]
    const [texts, setTexts] = useState(Array(4).fill(""));
    const handleChange = (index, value) => {
        const newTexts = [...texts];
        newTexts[index] = value;
        setTexts(newTexts);
    };

    return (
        <div>
            {types.map((type, index) => (
                <div key={index}>
                <label>
                    {placeholders[index]}：
                    <input 
                        type={type} 
                        placeholder={"請輸入" + placeholders[index]} 
                        value={texts[index]} 
                        onChange={(e) => handleChange(index, e.target.value)} 
                    />
                </label>
                </div>
            ))}
            <div>
                {texts.map((text, index) => {
                    const displayText = placeholders[index] === "密碼" 
                        ? text.length > 2 
                            ? text[0] + "*".repeat(text.length - 1) 
                            : text 
                        : text;
                    return <h3 key={index}>{placeholders[index]}：{displayText}</h3>;
                })}
            </div>
        </div>
    )
}

export { InputText };