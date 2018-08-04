import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

import CardList from './CardList'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
