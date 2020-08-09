import { useEffect, useState } from 'react';
import constants from '../../constants';
import FetchEpisodes from '../../services/episodes';

function useAsyncList() {
    const [episodes, setEpisodes] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (episodes === false && error === false) {
            FetchEpisodes(
                setEpisodes,
                setError,
                constants.URL_RICK_MORTY_EPISODES
            );
        }
    }, [episodes]);
    return { episodes, error };
}

export default useAsyncList;
