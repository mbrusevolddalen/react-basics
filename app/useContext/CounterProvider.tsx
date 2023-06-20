import {
  createContext, useContext, useState, useEffect,
} from 'react';

interface CounterContextProps {
  count: number;
  isNegative: boolean;
  history: number[];
  setCount: (count: number) => void;
}

export const CounterContext = createContext({} as CounterContextProps);

const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isNegative, setIsNegative] = useState(false);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    setIsNegative(count < 0);
    setHistory((prev) => [...prev, count]);
  }, [count]);

  return {
    count,
    isNegative,
    history,
    setCount,
  };
};

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const counter = useCounter();
  return (
    <CounterContext.Provider value={counter}>
      {children}
    </CounterContext.Provider>
  );
}

export const useCounterContext = () => useContext(CounterContext);
