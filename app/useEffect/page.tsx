'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

function UseEffectPage() {
  const [count, setCount] = useState(0);
  const [isNegative, setIsNegative] = useState(false);

  useEffect(() => {
    setIsNegative(count < 0);
  }, [count]);

  return (
    <section>
      <h1>useEffect</h1>
      <p>
        Count:
        {count}
      </p>
      <div className="flex flex-row space-x-2">
        <button type="button" onClick={() => setCount(count - 1)}>-</button>
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      </div>
      {isNegative && <p className="bg-red-400 text-white">No negative values!</p>}
      <Link href="/customHook">Custom Hooks</Link>
    </section>
  );
}

export default UseEffectPage;
