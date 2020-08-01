import { useEffect, useState } from 'react';
import constants from '../constants';
import FetchEpisodes from '../service';

function useAsyncList(dispatch = false) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (loading === false && error === false && dispatch !== false) {
            FetchEpisodes(
                setLoading,
                setError,
                dispatch,
                constants.URL_RICK_MORTY_EPISODES
            );
        }
    }, [dispatch]);
    return [loading, error];
}

export default useAsyncList;
