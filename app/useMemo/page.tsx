'use client';

import Link from 'next/link';
import Counter from './Counter';

function UseMemoPage() {
  return (
    <>
      <Counter />
      <Link href="useReducer" />
    </>
  );
}

export default UseMemoPage;
