import React, { useEffect, useState } from 'react';
import { css } from 'emotion';
import Store from '../store/store';
import useAsyncList from '../hooks/fetchData';
import Episodes from '../modules/list';

const header = css`
    background-color: #282c34;
    color: white;
    align-items: center;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    position: sticky;
    top: 0;
`;

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
            <header className={header}>
                {dataLoad && <Episodes episodes={state.episodes} />}
            </header>
        </>
    );
};

export default App;
