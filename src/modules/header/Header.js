import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const header = css`
    background-color: #282c34;
    color: white;
    align-items: center;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    position: sticky;
    top: 0;
`;

const Header = ({ numberEpisodes }) => {
    return (
        <header className={header}>
            <div>
                <h1>Rick and Morty</h1>
                <p>Pick your favourite episodes</p>
            </div>
            <div>All Episodes(s) {numberEpisodes}</div>
        </header>
    );
};
Header.defaultProps = {
    numberEpisodes: 0,
};

Header.propTypes = {
    numberEpisodes: PropTypes.number,
};

export default Header;
