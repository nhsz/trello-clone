import { useContext } from 'react';
import { AppStateContext } from '../contexts';

export const useAppState = () => useContext(AppStateContext);
