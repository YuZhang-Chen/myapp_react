import React, { useState } from 'react';
import Layout from './components/Layout';
import Welcome from './components/Welcome';
import { InputText } from './components/InputText';
import { Lists } from './components/Lists';
import { Number, NumbersWithLimitByHTML, NumbersWithLimitByCss } from './components/Number';
import StarRating from './components/StarRating';
import Operation from './components/Operation';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Gallery1 from './components/Gallery1';
import { Hello, Accept } from './components/Money';
import Greeting from './components/Greeting';
import Profile from './components/Profile';
import Compon from './components/Compon';
import { ProductList } from './components/ProductList';
import { Tradition_css } from './components/Tradition_css';
import Card from './components/Card';

export default function App() {
    const [activeSection, setActiveSection] = useState('welcome');
    const [myMoney, setMyMoney] = useState(100);
    
    const studentNumber = ["001","002","003","004","005"];
    const studentName = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
    
    const handleNavClick = (section) => {
        setActiveSection(section);
        document.querySelector('.component-display').scrollIntoView({ 
            behavior: 'smooth' 
        });
    };
    
    const renderSection = () => {
        switch (activeSection) {
            case 'welcome':
                return <Welcome name='訪客' />;
            
            case 'form':
                return (
                    <Card title="表單與輸入控制">
                        <InputText />
                    </Card>
                );
                
            case 'counter':
                return (
                    <div className="counter-container">
                        <Card title="計數器元件">
                            <div className="counter-box">
                                <h3>基本計數器</h3>
                                <Number />
                            </div>
                            <div className="counter-box">
                                <h3>HTML 限制的計數器</h3>
                                <NumbersWithLimitByHTML />
                            </div>
                            <div className="counter-box">
                                <h3>CSS 限制的計數器</h3>
                                <NumbersWithLimitByCss />
                            </div>
                        </Card>
                    </div>
                );
                
            case 'lists':
                return (
                    <Card title="清單元件">
                        <Lists />
                    </Card>
                );
                
            case 'money':
                return (
                    <Card title="金錢操作元件">
                        <Hello name='訪客' />
                        <Accept money={myMoney}/>
                        <div style={{ marginTop: '20px' }}>
                            <button onClick={() => setMyMoney(myMoney + 100)}>
                                增加 100 元
                            </button>
                            <button onClick={() => {
                                if (myMoney >= 100) {
                                    setMyMoney(myMoney - 100);
                                } else {
                                    alert('警告: 餘額不足！');
                                }
                            }}>
                                減少 100 元
                            </button>
                        </div>
                    </Card>
                );
                
            case 'rating':
                return (
                    <Card title="評價元件">
                        <StarRating />
                    </Card>
                );
                
            case 'calculator':
                return (
                    <Card title="計算機">
                        <Operation />
                    </Card>
                );
                
            case 'blog':
                return (
                    <Card title="部落格貼文">
                        <Blog />
                    </Card>
                );
                
            case 'gallery':
                return (
                    <Card title="圖片展示">
                        <Gallery />
                    </Card>
                );
                
            case 'gallery1':
                return (
                    <Card title="個人檔案展示">
                        <Gallery1 />
                    </Card>
                );
                
            case 'profile':
                return (
                    <Card title="個人檔案">
                        <Profile />
                    </Card>
                );
                
            case 'greeting':
                return (
                    <Card title="個人介紹">
                        <Greeting user={{ firstName: 'Yu-Zhang', lastName: 'Chen' }} />
                    </Card>
                );
                
            case 'component':
                return (
                    <Card title="學生列表">
                        {Array.from({length: 5}).map((_, index) => (
                            <Compon key={index} item={`${studentNumber[index]}的學生是${studentName[index]}`} />
                        ))}
                    </Card>
                );

            case 'productList':
                return (
                    <Card title="商品列表">
                        <ProductList /> 
                    </Card>
                )
            
            case 'Tradition_css':
                return (
                    <Tradition_css />
                )
            
            default:
                return <Welcome name='訪客' />;
        }
    };
    
    return (
        <Layout>
            <div className="app-container">
                <div className="component-nav">
                    <select value={activeSection} onChange={(e) => handleNavClick(e.target.value)} className="section-selector"                    >
                        <option value="welcome">首頁</option>
                        <option value="greeting">個人介紹</option>
                        <option value="blog">部落格</option>
                        <option value="money">金錢操作</option>
                        <option value="component">學生列表</option>
                        <option value="calculator">計算機</option>
                        <option value="gallery">圖庫</option>
                        <option value="gallery1">個人圖庫</option>
                        <option value="profile">大頭照</option>
                        <option value="counter">計數器</option>
                        <option value="form">表單元件</option>
                        <option value="lists">清單</option>
                        <option value="rating">評分</option>
                        <option value="productList">商品列表</option>
                        <option value="Tradition_css">傳統css</option>
                    </select>
                </div>
                
                <div className="component-display">
                    {renderSection()}
                </div>
            </div>
        </Layout>
    );
}