import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import midware from './midware';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(rootReducer, applyMiddleware(midware));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
