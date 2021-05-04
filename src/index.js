import React from 'react';
import ReactDom from 'react-dom';
import App from "./app.jsx";


const render = () => {
    ReactDom.render(<App />, document.querySelector('#root'));
}

render();

const m = module;
if (m.hot) {
    m.hot.accept(['./app.js'], () => {
        render('ss')
    });
}
