'use client';

import Link from 'next/link';
import { CounterProvider } from './CounterProvider';
import Counter from './Counter';
import CounterHistory from './CounterHistory';

function UseContextPage() {
  return (
    <div className="flex flex-col">
      <CounterProvider>
        <section>
          <h1>useContext</h1>
          <Counter />
          <CounterHistory />
          <Link href="useMemo">UseMemo</Link>
        </section>
      </CounterProvider>
    </div>
  );
}

export default UseContextPage;
