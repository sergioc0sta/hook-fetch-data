import { createContext, useContext } from 'react';

const Store = createContext(null);
const useStore = () => useContext(Store);

export { Store as default, useStore };
