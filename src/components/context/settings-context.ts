import { createContext, useContext } from 'react';

export const SettingsContext = createContext({ currency: 'CZK' });
export const useSettings = () => useContext(SettingsContext);
