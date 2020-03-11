import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './app/redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app/assets/scss/global.scss';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.register();
