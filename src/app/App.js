import React, { useEffect, useState } from 'react';
import Store from '../store/store';
import useAsyncList from '../hooks/fetchData';
import Episodes from '../modules/list';
import Header from '../modules/header';

const App = () => {
    const { state, dispatch } = React.useContext(Store);
    const [loading, error] = useAsyncList(dispatch);
    const [dataLoad, setDataLoad] = useState(false);

    useEffect(() => {
        if (loading === true && error === false) {
            setDataLoad(true);
        }
    }, [loading, error]);

    if (dataLoad === false) {
        return null;
    }
    return (
        <>
            <Header numberEpisodes={state.episodes.length} />
            {dataLoad && <Episodes episodes={state.episodes} />}
        </>
    );
};

export default App;
