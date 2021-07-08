import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// root reducer
import rootReducer from './reducers/index';
// react redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// create redux store
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));