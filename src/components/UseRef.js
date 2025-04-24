import React, { useRef } from 'react';

export default function UseRef() {
  const txtTitle = useRef();
  const txtContent = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();

    const title = txtTitle.current.value;
    const content = txtContent.current.value;
    const color = hexColor.current.value;

    console.log("submit");
    console.log("title: " + title + ", content:" + content + ", color:" + color);

    // 清空輸入框
    txtTitle.current.value = "";

    hexColor.current.value = "#000000";
  };

  return (
    <div className='App'>
      <form onSubmit={submit}>
        <label>
          標題：
          <input ref={txtTitle} type="text" required />
        </label><br />
        <label>
          內容：
          <textarea ref={txtContent} type="textArea" required />
        </label><br />
        <label>
          顏色：
          <input ref={hexColor} type="color" required />
        </label><br />
        <input type="submit" value="送出" />
      </form>
    </div>
  );
}