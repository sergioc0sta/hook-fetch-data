import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import ImageContainer from '../image-container';
import Button from '../../favorite-episodes';
import { useStoreFavorites } from '../../../context/favorites/favoritesContext';

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
    justifycontent: 'space-between';
`;

const containerInfo = css`
    display: flex;
    flex-wrap: rwap;
    justify-content: space-around;
`;

const button = css`
    align-items: center;
    justify-content: center;
    width: 100%;
    display: grid;
`;

const infoEpisode = css`
    align-items: center;
    justify-content: center;
    width: 100%;
`;

function List({ episodes }) {
    const { addEpisode, removeEpisode } = useStoreFavorites();
    return (
        <div className={episodeLayout}>
            {episodes.map((episode) => {
                return (
                    <section key={episode.id} className={episodeBox}>
                        <ImageContainer
                            src={episode.image.medium}
                            alt={`Rick and Morty ${episode.name}`}
                        />
                        <div className={containerInfo}>
                            <div className={infoEpisode}>
                                <div>{episode.name}</div>
                                <div className={episodeSeason}>
                                    Season: {episode.season} Number:{' '}
                                    {episode.number}
                                </div>
                            </div>

                            <div className={button}>
                                <Button onClick={() => addEpisode()}>
                                    {' '}
                                    👍
                                </Button>
                                <Button onClick={() => removeEpisode()}>
                                    {' '}
                                    👎
                                </Button>
                            </div>
                        </div>
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
