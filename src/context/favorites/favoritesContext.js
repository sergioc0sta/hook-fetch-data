import { createContext, useContext } from 'react';

const Context = createContext({
    addEpisode: () => null,
    removeEpisode: () => null,
    checkEpisode: () => null,
});
const useStoreFavorites = () => useContext(Context);

export { Context as default, useStoreFavorites };
