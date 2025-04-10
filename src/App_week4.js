import { useState } from 'react';
import './App.css';
import { Accept, Hello } from './components/Money.js';
import Compon from './components/Compon.js';


function App() {
  // const [myMoney, addMoney] = useState(100);
  const compons = Array.from({length:5});
  const studentNumber = ["001","002","003","004","005"];
  const studentName = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  return (
    <div>
      {compons.map((_, index) => (
        <Compon key={index} item={`${studentNumber[index]}的學生是${studentName[index]}`} />
      ))}

      {/* {compons.map((_, index) => (
        <Compon key={index} item={"第"+(index+1)+'項'} />
      ))} */}
      {/* <Welcome name='Yu-Zhang' me='Lin' /> */}
      {/* <Greeting user={{ firstName: 'Yu-Zhang', lastName: 'Chen' }} /> */}
      {/* <Operation /> */}
      {/* <Gallery /> */}
      {/* <Gallery1 /> */}
      {/* <Hello name='YuZhang' />
      <Accept money={myMoney}/>
      <button onClick={
        () => {
          let currentMoney = myMoney+100; addMoney(currentMoney);
        }
      }>按下取得更多錢</button>
      <button onClick={
        () => {
          let currentMoney = myMoney - 100;
          currentMoney < 0 ? alert('警告: 錢不夠了') : addMoney(currentMoney);
        }
      }>按下失去更多錢</button> */}
      
    </div>
  );
}

export default App;