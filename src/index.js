import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import Provider from './store/provider';

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
