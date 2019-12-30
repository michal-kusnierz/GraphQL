import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { Provider, Client, defaultExchanges } from 'urql'

ReactDOM.render(<App />, document.getElementById('root'));
