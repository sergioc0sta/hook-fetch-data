import { createContext, useContext } from 'react';

const Context = createContext({ favorites: [] });
const useStoreFavorites = () => useContext(Context);

export { Context as default, useStoreFavorites };
