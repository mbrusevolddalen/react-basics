import { useState, useEffect, useMemo, useTransition } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isNegative, setIsNegative] = useState(false);
  const [history, setHistory] = useState<number[]>([]);
  const [isPending, startTransition] = useTransition();

  const increment = () => startTransition(() => setCount((prevCount) => prevCount + 1));

  const decrement = () => startTransition(() => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)));

  useEffect(() => {
    setIsNegative(count < 0);
    setHistory((prev) => [...prev, count]);
  }, [count]);

  const total = useMemo(() => history.reduce((acc, curr) => acc + curr, 0), [history]);

  return {
    count,
    isNegative,
    history,
    increment,
    decrement,
    total,
    isPending,
  };
};

export default useCounter;
