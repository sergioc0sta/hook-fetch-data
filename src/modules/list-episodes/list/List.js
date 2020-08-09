import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import ImageContainer from '../image-container';

const episodeBox = css`
    padding: 0.5rem;
`;

const episodeLayout = css`
    color: white;
    padding: 0.5rem;
    display: grid;
    flex-wrap: wrap;
    justify-content: center;
`;

const episodeSeason = css`
    display: flex;
    justifycontent: 'space-between';
`;

function List({ episodes }) {
    return (
        <div className={episodeLayout}>
            {episodes.map((episode) => {
                return (
                    <section key={episode.id} className={episodeBox}>
                        <ImageContainer
                            src={episode.image.medium}
                            alt={`Rick and Morty ${episode.name}`}
                        />
                        <div>{episode.name}</div>
                        <section className={episodeSeason}>
                            <div>
                                Season: {episode.season} Number:{' '}
                                {episode.number}
                            </div>
                        </section>
                    </section>
                );
            })}
        </div>
    );
}

List.defaultProps = {
    episodes: [],
};

List.propTypes = {
    episodes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            image: PropTypes.shape({
                medium: PropTypes.string,
            }),
            name: PropTypes.string,
            season: PropTypes.number,
            number: PropTypes.number,
        })
    ),
};

export default List;

/*

<img
                            src={episode.image.medium}
                            alt={`Rick and Morty ${episode.name}`}
                        />

*/
