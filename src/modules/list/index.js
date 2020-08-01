import React, { useEffect, useState } from 'react';
import { useStore } from './store/store';
import useAsyncList from './hooks/fetchData';
import Episodes from './components/episodes/Episodes';

function Index() {
    const { state, dispatch } = useStore();
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
    return dataLoad && <Episodes episodes={state.episodes} />;
}

export default Index;
