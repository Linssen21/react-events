import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './app/layouts/App';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        // BrowserRouter handle dynamic request
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , rootEl)
}

if(module.hot){
    module.hot.accept('./app/layouts/App', () => {
        setTimeout(render)
    })
}

render();

// ReactDOM.render(<App />,  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
