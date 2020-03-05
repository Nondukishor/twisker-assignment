import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import storageManager from './middleware/storeManager'
const middleware =[thunk]

const store = createStore(rootReducer,  composeWithDevTools(
    applyMiddleware(...middleware)
))

store.subscribe(() => storageManager(store.getState()));

export default store;