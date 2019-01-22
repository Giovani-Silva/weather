import React from 'react';
import ReactDOM from 'react-dom';
import './styles/scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('weather'));

serviceWorker.unregister();
