"use client";
import useCounter from "./useCounter";
import Link from "next/link";

const UseContextPage = () => {
    const { count, isNegative, dispatch } = useCounter();
    return (
        <div>
            <h1>Custom hooks</h1>
            <p>Count: {count}</p>
            <div className="flex flex-row space-x-2">
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>
            </div>
            {isNegative && <p className="bg-red-400 text-white">No negative values!</p>}
            <Link href="/useContext">useContext</Link>
        </div>
    );
}

export default UseContextPage;