import React from 'react';
import { css } from 'emotion';
import { useStore } from '../list/store/store';

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

function Header() {
    const { state } = useStore();
    const numberEpisodes = state?.episodes?.length || 0;

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
