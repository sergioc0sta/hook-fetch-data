import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const episodeBox = css`
    padding: 0.5rem;
`;

const episodeLayout = css`
    background-color: #282c34;
    color: white;
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const episodeSeason = css`
    display: flex;
    justifycontent: 'space-between';
`;

const Episodes = ({ episodes }) => {
    return (
        <div className={episodeLayout}>
            {episodes.map((episode) => {
                return (
                    <section key={episode.id} className={episodeBox}>
                        <img
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
};

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
