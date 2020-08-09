async function FetchEpisodes(setEpisodes, setError, URL) {
    try {
        const data = await fetch(URL);
        const dataJSON = await data.json();
        // eslint-disable-next-line no-underscore-dangle
        setEpisodes(dataJSON._embedded.episodes);
    } catch (err) {
        setEpisodes(false);
        setError(true);
    }
}

export default FetchEpisodes;
