"use client";
import { CounterProvider } from "./CounterProvider";
import Counter from "./Counter";
import CounterHistory from "./CounterHistory";
import Link from "next/link";

const UseMemoPage = () => {
    return (
        <CounterProvider>
            <Counter />
            <CounterHistory />
            <Link href="useReducer" />
        </CounterProvider>
    );
}

export default UseMemoPage;