import React from 'react';
import Episodes from '../modules/list-episodes';
import Header from '../modules/header';
import EpisodesProvider from '../context/episodes/episodesProvider';
import FavoritesProvider from '../context/favorites/favoritesProvider';

const App = () => {
    return (
        <EpisodesProvider>
            <FavoritesProvider>
                <Header />
                <Episodes />
            </FavoritesProvider>
        </EpisodesProvider>
    );
};

export default App;
