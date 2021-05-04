import React from 'react';
import './index.css';
import style from './app.less';
import ImgHeader from '../static/images/header.jpg';

const App = () => (
  <div className={style.myApp} style={{ width: 300, height: 300, background: 'gray' }}>
    <span>
      hello2
    </span>
    <h1>霓虹</h1>
    <img src={ImgHeader} alt="" />
    <i className="iconfont">&#xe60a;</i>

  </div>
);
export default App;
