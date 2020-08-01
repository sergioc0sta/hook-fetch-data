async function FetchEpisodes(setLoading, setError, dispatch, URL) {
    try {
        const data = await fetch(URL);
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

export default FetchEpisodes;
