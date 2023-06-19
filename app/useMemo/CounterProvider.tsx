import { createContext, useContext, useState, useEffect, useMemo } from "react";

interface CounterContext {
    count: number;
    isNegative: boolean;
    history: number[];
    setCount: (count: number) => void;
}

export const CounterContext = createContext({} as CounterContext);

const useCounter = () => {
    const [count, setCount] = useState(0);
    const [isNegative, setIsNegative] = useState(false);
    const [history, setHistory] = useState<number[]>([]);

    useEffect(() => {
        setIsNegative(count < 0);
        setHistory(prev => [...prev, count] );
    }, [count]);

    const total = useMemo(() => {
        return history.reduce((acc, curr) => acc + curr, 0);
    }, [history]);

    return {
        count,
        isNegative,
        history,
        setCount,
        total
    };
}

export const CounterProvider = ({ children }: { children: React.ReactNode }) => {
    const counter = useCounter();
    return (
        <CounterContext.Provider value={counter}>
            {children}
        </CounterContext.Provider>
    );
}

export const useCounterContext = () => useContext(CounterContext);