import { useContext } from 'react';
import { AppStateContext } from '../contexts';

const useAppState = () => useContext(AppStateContext);

export { useAppState };
