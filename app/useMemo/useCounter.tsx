import { useState, useEffect, useMemo } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isNegative, setIsNegative] = useState(false);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    setIsNegative(count < 0);
    setHistory((prev) => [...prev, count]);
  }, [count]);

  const total = useMemo(() => history.reduce((acc, curr) => acc + curr, 0), [history]);

  return {
    count,
    isNegative,
    history,
    setCount,
    total,
  };
};

export default useCounter;
