import { createContext, useContext } from 'react';

const Context = createContext({ error: false, episodes: false });
const useStoreEpisodes = () => useContext(Context);

export { Context as default, useStoreEpisodes };
