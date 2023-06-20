'use client';

import Link from 'next/link';
import useCounter from './useCounter';

function CustomHookPage() {
  const { count, isNegative, setCount } = useCounter();
  return (
    <section>
      <h1>Custom hooks</h1>
      <p>
        Count:
        {count}
      </p>
      <div className="flex flex-row space-x-2">
        <button type="button" onClick={() => setCount(count - 1)}>-</button>
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      </div>
      {isNegative && <p className="bg-red-400 text-white">No negative values!</p>}
      <Link href="/useContext">useContext</Link>
    </section>
  );
}

export default CustomHookPage;
