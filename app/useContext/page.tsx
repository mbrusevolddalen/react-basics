"use client";
import { CounterProvider } from "./CounterProvider";
import Counter from "./Counter";
import CounterHistory from "./CounterHistory";
import Link from "next/link";

const CustomHookPage = () => {
    return (
        <CounterProvider>
            <Counter />
            <CounterHistory />
            <Link href="useMemo" />
        </CounterProvider>
    );
}

export default CustomHookPage;