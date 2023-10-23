import { useEffect, useRef, DependencyList } from 'react';

const useDidUpdatingEffect = (func: () => void, deps: DependencyList) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      console.log("첫 랜더링")
      didMount.current = true;
    }
  }, deps);
};

export default useDidUpdatingEffect;
