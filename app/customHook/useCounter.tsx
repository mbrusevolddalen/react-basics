import { useState, useEffect } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);
    const [isNegative, setIsNegative] = useState(false);

    useEffect(() => {
        setIsNegative(count < 0);
    }, [count]);

    return {
        count,
        isNegative,
        setCount,
    };
}

export default useCounter;