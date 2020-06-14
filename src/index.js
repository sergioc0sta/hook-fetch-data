import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/core';
import App from './app/App';
import Provider from './store/provider';

const mainStyle = css`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 10px;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;
ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <Global styles={mainStyle} />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
