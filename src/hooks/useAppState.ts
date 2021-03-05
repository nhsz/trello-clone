import { useContext } from 'react';
import { AppStateContext } from '../context';

export const useAppState = () => useContext(AppStateContext);
