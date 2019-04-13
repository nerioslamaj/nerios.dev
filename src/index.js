import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import ReactGA from 'react-ga';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

ReactGA.initialize('UA-102725917-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
