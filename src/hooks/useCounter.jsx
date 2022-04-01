import { useState, useCallback } from "react";
const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  const handleDisplay = useCallback(() => {
    setIsShown((prevIsShown) => !prevIsShown);
  }, []);

  return { count, isShown, handleClick, handleDisplay };
};

export { useCounter };
