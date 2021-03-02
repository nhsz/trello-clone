import { useEffect, useRef } from 'react';

const useFocus = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
};

export { useFocus };
