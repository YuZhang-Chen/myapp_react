import { useState } from "react";

export default function UseState() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = (e) => {
        e.preventDefault();
        console.log("submit");
        console.log("title: " + title + ", content:" + content + ", color:" + color);

        setTitle("");
        setContent("");
        setColor("#000000");
        };

    return (
      <form onSubmit={submit}>
        <label>
          標題：
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required
          />
        </label><br />

        <label>
          內容：
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label><br />

        <label>
          顏色：
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            type="color"
            required
          />
        </label><br />

        <input type="submit" value="送出" />
      </form>

    );
}