"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const UseEffectPage = () => {
    const [count, setCount] = useState(0);
    const [isNegative, setIsNegative] = useState(false);

    useEffect(() => {
        setIsNegative(count < 0);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <div className="flex flex-row space-x-2">
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>
            {isNegative && <p className="bg-red-400 text-white">No negative values!</p>}
            <Link href="/customHook">Custom Hooks</Link>
        </div>
    );
}

export default UseEffectPage;