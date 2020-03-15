import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/index';
import {saveToLocalStorage,loadFromLocalStorage} from './reducers/storageManager';

const middleware = [thunk,logger]

const persistedStore = loadFromLocalStorage()

const store = createStore(rootReducer, persistedStore,  composeWithDevTools(
    applyMiddleware(...middleware)
))

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;