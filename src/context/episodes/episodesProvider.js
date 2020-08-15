import React from 'react';
import PropTypes from 'prop-types';
import Context from './episodesContext';
import useAsyncList from '../../hooks/fetch-data';

const EpisodesProvider = ({ children }) => {
    const { error, episodes } = useAsyncList();
    return (
        <Context.Provider value={{ error, episodes }}>
            {children}
        </Context.Provider>
    );
};

EpisodesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default EpisodesProvider;
