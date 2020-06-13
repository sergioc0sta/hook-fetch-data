import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Store from './store';
import Reducer from '../reducer/rickyAndMorty';
import InitialState from './initialState';

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, InitialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
};

Provider.defaultProps = {
    children: null,
};

Provider.propTypes = {
    children: PropTypes.shape({}),
};
export default Provider;
