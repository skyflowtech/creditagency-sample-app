import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home/index';
import { Router, HashRouter } from 'react-router-dom';
import { history } from './components/history/index';

ReactDOM.render(
    <HashRouter history={history}>
        <App />
    </HashRouter>
    , document.getElementById('app'));
