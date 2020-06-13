import React, { useEffect, useState } from 'react';
import './App.css';
import Store from '../store/store';
import useAsyncList from '../hooks/fetchData';

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
        <div className="App">
            <header className="App-header">
                {!dataLoad && (
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                )}
                {dataLoad && (
                    <section>
                        {state.episodes.map((episode) => {
                            return (
                                <section key={episode.id}>
                                    <img
                                        src={episode.image.medium}
                                        alt={`Rick and Morty ${episode.name}`}
                                    />
                                    <div>{episode.name}</div>
                                    <section>
                                        <div>
                                            Season: {episode.season} Number:{' '}
                                            {episode.number}
                                        </div>
                                    </section>
                                </section>
                            );
                        })}
                    </section>
                )}
            </header>
        </div>
    );
};

export default App;
