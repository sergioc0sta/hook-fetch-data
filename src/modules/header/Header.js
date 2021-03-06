import React from 'react';
import { css } from 'emotion';
import { useStoreEpisodes } from '../../context/episodes/episodesContext';

const header = css`
    background-color: #282c34;
    color: white;
    align-items: center;
    border-bottom: 3px solid black;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    position: sticky;
    top: 0;
`;

function Header() {
    const { episodes } = useStoreEpisodes();
    const numberEpisodes = episodes?.length || 0;

    return (
        <header className={header}>
            <div>
                <h1>Rick and Morty</h1>
                <p>Pick your favourite episodes</p>
            </div>
            <div>All Episodes(s) {numberEpisodes}</div>
        </header>
    );
}

export default Header;
