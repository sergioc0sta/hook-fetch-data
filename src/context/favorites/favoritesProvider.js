import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './favoritesContext';

const FavoritesProvider = ({ children }) => {
    const [favorite, setFavorite] = useState(0);
    const addEpisode = () => {
        setFavorite((prev) => prev + 1);
    };

    const removeEpisode = () => {
        setFavorite((prev) => prev - 1);
    };

    const checkEpisode = () => {
        console.log('check');
        return true;
    };

    const context = useMemo(() => {
        return { addEpisode, removeEpisode, checkEpisode, favorite };
    }, [favorite]);

    useEffect(() => {
        console.log('number favorites', favorite);
    }, [favorite]);
    return <Context.Provider value={context}>{children}</Context.Provider>;
};

FavoritesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FavoritesProvider;
