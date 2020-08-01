import React from 'react';
import Episodes from '../modules/list';
import Header from '../modules/header';
import Provider from '../modules/list/store/provider';

const App = () => {
    return (
        <Provider>
            <Header />
            <Episodes />
        </Provider>
    );
};

export default App;
