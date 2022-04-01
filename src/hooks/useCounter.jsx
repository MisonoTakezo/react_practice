import { useState, useCallback, useMemo } from "react";
const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const doubleCount = useMemo(() => count * 2, [count]);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  const handleDisplay = useCallback(() => {
    setIsShown((prevIsShown) => !prevIsShown);
  }, []);

  return { count, doubleCount, isShown, handleClick, handleDisplay };
};

export { useCounter };
