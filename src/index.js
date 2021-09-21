import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {rootMiddleware}  from './middleware';
import combineReducers from './reducers';

const store = createStore(combineReducers, rootMiddleware);

ReactDOM.render(
    <Provider store ={ store } >
        <App />
    </Provider>,
document.getElementById('root'))