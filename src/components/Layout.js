import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <header className="app-header">
        <h1>前端網頁框架課堂練習</h1>
        <p>113-2智慧商務系選修</p>
        {/* <nav className="nav-links">
          <a href="#" className="nav-link">首頁</a>
          <a href="#" className="nav-link">組件庫</a>
          <a href="#" className="nav-link">關於我們</a>
          <a href="#" className="nav-link">聯絡我們</a>
        </nav> */}
      </header>
      
      <main className="main-content">
        {children}
      </main>
      
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} React 元件展示網站</p>
        <div>
          <small>使用 React {React.version} 開發 | 設計與實現：C112156205 陳禹璋</small>
        </div>
      </footer>
    </>
  );
};

export default Layout;
