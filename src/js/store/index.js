import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from '../midware';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
