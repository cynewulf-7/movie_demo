import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

ReactDom.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App/>
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorker.unregister();