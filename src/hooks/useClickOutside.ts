import { Dispatch, MutableRefObject, SetStateAction, useCallback } from 'react';

interface Props {
  mode: boolean;
  setMode: Dispatch<SetStateAction<boolean>>;
  ref: MutableRefObject<HTMLDivElement | null>;
}

const useClickOutside = ({ mode, setMode, ref }: Props) =>
  useCallback(
    (e: MouseEvent) => {
      if (mode && !ref.current?.contains(e.target as Node)) {
        setMode(false);
      }
    },
    [mode, ref, setMode]
  );

export { useClickOutside };
