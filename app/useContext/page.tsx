'use client';

import Link from 'next/link';
import { CounterProvider } from './CounterProvider';
import Counter from './Counter';
import CounterHistory from './CounterHistory';

function CustomHookPage() {
  return (
    <div className="flex flex-col">
      <CounterProvider>
        <Counter />
        <CounterHistory />
        <Link href="useMemo">UseMemo</Link>
      </CounterProvider>
    </div>
  );
}

export default CustomHookPage;
