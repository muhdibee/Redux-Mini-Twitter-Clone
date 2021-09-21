import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {rootMiddleware}  from './middleware';
import rootReducer from './reducers';

const store = createStore(rootReducer, rootMiddleware);

ReactDOM.render(
    <Provider store ={ store } >
        <App />
    </Provider>,
document.getElementById('root'))