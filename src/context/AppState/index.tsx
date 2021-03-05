import { createContext, PropsWithChildren } from 'react';
import { AppState, data } from './data';

interface Props {
  data: AppState;
}

const AppStateContext = createContext<Props>({} as Props);
const AppStateProvider = ({ children }: PropsWithChildren<{}>) => {
  return <AppStateContext.Provider value={{ data }}>{children}</AppStateContext.Provider>;
};

export { AppStateContext, AppStateProvider };
