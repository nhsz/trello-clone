import { useCallback, useEffect, useRef } from 'react';

interface Params {
  mode: boolean;
  setMode: () => void;
}

const useClickOutsideRef = ({ mode, setMode }: Params) => {
  const ref = useRef(null);

  const clickOutsideListener = useCallback(
    (e: MouseEvent) => {
      if (mode && !(ref.current as any)?.contains(e.target as Node)) {
        setMode();
      }
    },
    [mode, ref, setMode]
  );

  useEffect(() => {
    // attach listener on component mount to detect clicks outside edit form area
    document.addEventListener('click', clickOutsideListener);
    // detach listener on component unmount
    return () => document.removeEventListener('click', clickOutsideListener);
  });

  return ref;
};

export { useClickOutsideRef };
