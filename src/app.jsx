import React from 'react';
import style from './app.less';

const App = () => {
    return (
        <div className={style.myApp} style={{ width: 300, height: 300, background: 'gray' }}>
            <span>
                hello
            </span>
            <h1>霓虹</h1>
        </div>
    );
}

export default App;
