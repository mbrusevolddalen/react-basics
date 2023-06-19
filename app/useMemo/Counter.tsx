"use client";
import Link from "next/link";
import { useCounterContext } from "./CounterProvider";

const Counter = () => {
    const { count, isNegative, setCount } = useCounterContext();
    return (
        <div>
            <h1>Custom hooks</h1>
            <p>Count: {count}</p>
            <div className="flex flex-row space-x-2">
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>
            {isNegative && <p className="bg-red-400 text-white">No negative values!</p>}
            <Link href="/useContext">useContext</Link>
        </div>
    );
}

export default Counter;