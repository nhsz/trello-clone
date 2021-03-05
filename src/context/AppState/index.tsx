import { createContext, PropsWithChildren } from 'react';
import { AppState, data } from './data';

interface Props {
  state: AppState;
}

const AppStateContext = createContext<Props>({} as Props);
const AppStateProvider = ({ children }: PropsWithChildren<{}>) => {
  return <AppStateContext.Provider value={{ state: data }}>{children}</AppStateContext.Provider>;
};

export { AppStateProvider };
