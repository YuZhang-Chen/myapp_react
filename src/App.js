import React, { createContext, useState } from 'react';
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
import { TraditionCss } from './components/TraditionCss';
import Card from './components/Card';
import UseRef from './components/UseRef';
import UseState from './components/UseState';
import MyText from './components/MyText';
import UseEffectExample from './components/UseEffectExample';
import UseEffectPratice from './components/UseEffectPratice';
import UseEffectPratice2 from './components/UseEffectPratice2';
import UseMemo from './components/UseMemo';
import CounterRedux from './components/CounterRedux';
import AntIndex from './components/ui';
import Translation from './components/Translation';
import FormikForm from './components/formik/formikFoem';


export const AppContext = createContext();
export const ColorContext = createContext();
export const CountContext = createContext();
export const SizeContext = createContext();

export default function App() {
    const [activeSection, setActiveSection] = useState('welcome');
    const [myMoney, setMyMoney] = useState(100);
    const [username, setUsername] = useState("null");
    const [color, setColor] = useState();
    const [count, setCount] = useState(0);
    const [size, setSize] = useState(20);

    const studentNumber = ["001","002","003","004","005"];
    const studentName = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
    
    const addCount = () => {
        setCount(count+1);
    }

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
            
            case 'TraditionCss':
                return (
                    <Card title="傳統CSS">
                        <TraditionCss />
                    </Card>
                )
            
            case 'UseRef':
                return (
                    <Card title="UseRef 練習">
                        <UseRef />
                    </Card>
                )
            
            case 'UseState':
                return (
                    <Card title="UseState 練習">
                        <InputText />
                        <UseState />
                    </Card>
                )
            
            case 'userContext':
                return (
                    <Card title="Context 練習">
                        <div className='App'>
                            <ColorContext.Provider value={color}>
                              <AppContext.Provider value={username}>
                                <CountContext.Provider value={count}>
                                  <SizeContext.Provider value={size}>
                                    <MyText />
                                  </SizeContext.Provider>
                                </CountContext.Provider>
                              </AppContext.Provider>
                            </ColorContext.Provider>
                            <button onClick={()=>{setUsername("Chen"); setColor("blue"); addCount(); setSize(10)}}>Chen</button>
                            <button onClick={()=>{setUsername("YuZhang"); setColor("pink"); addCount(); setSize(30)}}>YuZhang</button>
                        </div>
                    </Card>
                );
            
                case 'UseEffectExample':
                    return (
                      <Card title="UseEffect 範例">
                        <UseEffectExample />
                      </Card>
                    );
                
                case 'UseEffectPratice':
                    return (
                        <Card title="UseEffect 練習">
                            <UseEffectPratice />
                        </Card>
                    );
                
                case 'UseEffectPratice2':
                    return (
                      <Card title="UseEffect 練習2">
                        <UseEffectPratice2 />
                      </Card>
                    );
                
                case 'UseMemo':
                    return (
                        <Card title="UseMemo 練習">
                            <UseMemo />
                        </Card>
                    );
                
                case 'CounterRedux':
                    return (
                        <Card title="計數器">
                            <CounterRedux />
                        </Card>
                    );
                case 'ant':
                    return (
                        <AntIndex />
                    );
                
                case 'translation':
                    return (
                        <Card title="語言翻譯">
                            <Translation />
                        </Card>
                    );
                case 'formik':
                    return (
                        <Card title="Formik 表單練習">
                            <FormikForm />
                        </Card>
                    );
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
                        <option value="TraditionCss">傳統css</option>
                        <option value="UseRef">UseRef hook</option>
                        <option value="UseState">UseState hook</option>
                        <option value="userContext">Context 練習</option>
                        <option value="UseEffectExample">useEffect 範例</option>
                        <option value="UseEffectPratice">useEffect 練習</option>
                        <option value="UseEffectPratice2">useEffect 練習2</option>
                        <option value="UseMemo">UseMemo 練習</option>
                        <option value="CounterRedux">計數器</option>
                        <option value="ant">ant design 練習</option>
                        <option value="translation">語言翻譯</option>
                        <option value="formik">Formik 表單練習</option>
                    </select>
                </div>
                
                <div className="component-display">
                    {renderSection()}
                </div>
            </div>
        </Layout>
    );
}