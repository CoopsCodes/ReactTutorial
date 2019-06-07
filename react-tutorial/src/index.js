import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<h1>HelloWORLD</h1>, document.getElementById("root"));

serviceWorker.unregister();
