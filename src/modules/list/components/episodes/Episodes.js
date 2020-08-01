import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import ImageContainer from '../imageContainer/ImageContainer';

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

function Episodes({ episodes }) {
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

Episodes.defaultProps = {
    episodes: [],
};

Episodes.propTypes = {
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

export default Episodes;

/*

<img
                            src={episode.image.medium}
                            alt={`Rick and Morty ${episode.name}`}
                        />

*/
