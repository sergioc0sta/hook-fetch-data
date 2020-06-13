import { useEffect, useState } from 'react';
import constants from '../constants/constants';

function useAsyncList(dispatch = false) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchEpisodes() {
            try {
                const data = await fetch(constants.URL_RICK_MORTY_EPISODES);
                const dataJSON = await data.json();
                setLoading(true);
                return dispatch({
                    type: 'FETCH_DATA',
                    // eslint-disable-next-line no-underscore-dangle
                    payload: dataJSON._embedded.episodes,
                });
            } catch (err) {
                setLoading(false);
                setError(true);
                return false;
            }
        }
        if (loading === false && error === false && dispatch !== false) {
            fetchEpisodes();
        }
    }, [dispatch]);
    return [loading, error];
}

export default useAsyncList;
