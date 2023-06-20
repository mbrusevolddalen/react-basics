'use client';

import Link from 'next/link';
import Counter from './Counter';

function UseMemoPage() {
  return (
    <section>
      <h1>useMemo</h1>
      <Counter />
      <Link href="useReducer">useReducer</Link>
    </section>
  );
}

export default UseMemoPage;
