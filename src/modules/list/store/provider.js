import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Store from './store';
import Reducer from '../reducer';
import InitialState from './initialState';

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, InitialState);
    return (
        <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
    );
};

Provider.defaultProps = {
    children: null,
};

Provider.propTypes = {
    children: PropTypes.shape({}),
};
export default Provider;
