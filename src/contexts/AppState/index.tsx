import { createContext, Dispatch, PropsWithChildren, useMemo, useReducer } from 'react';
import { Action, appStateReducer } from '../../reducers';
import { AppState, data as initialState } from '../../seed';

interface Props {
  state: AppState;
  dispatch: Dispatch<Action>;
}

const AppStateContext = createContext<Props>({} as Props);
const AppStateProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);
  const store = useMemo(() => ({ state, dispatch }), [state]);

  return <AppStateContext.Provider value={store}>{children}</AppStateContext.Provider>;
};

export * from '../../seed';
export { AppStateContext, AppStateProvider };
