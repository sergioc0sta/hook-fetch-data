import React from 'react';
import Episodes from '../modules/list-episodes';
import Header from '../modules/header';
import EpisodesProvider from '../context/episodes/episodesProvider';

const App = () => {
    return (
        <EpisodesProvider>
            <Header />
            <Episodes />
        </EpisodesProvider>
    );
};

export default App;
