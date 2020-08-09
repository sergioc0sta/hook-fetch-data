import React, { useState, useEffect } from 'react';
import List from './list';
import { useStoreEpisodes } from '../../context/episodes/episodesContext';

function Index() {
    const [dataLoad, setDataLoad] = useState(false);
    const { error, episodes } = useStoreEpisodes();

    useEffect(() => {
        if (episodes !== false && error === false) {
            setDataLoad(true);
        }
    }, [episodes, error]);

    if (dataLoad === false) {
        return null;
    }
    return dataLoad && <List episodes={episodes} />;
}

export default Index;
