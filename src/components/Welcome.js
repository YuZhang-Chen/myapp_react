import React from 'react';
import NowDate from './NowDate';

function Welcome(props) {
    return (
        <div className="welcome-container">
            <div className="welcome-section">
                <h1>你好，{props.name}！</h1>       
                <h2>歡迎來到 React 元件展示網站</h2>
                <p>這個網站展示了各種 React 元件和功能的示例</p>
            </div>
            <div className="welcome-section">
                <h3>目前時間</h3>
                <NowDate />
            </div>
        </div>
    );
}

export default Welcome;