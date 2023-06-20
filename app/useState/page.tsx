'use client';

import Link from 'next/link';
import { useState } from 'react';

function UseStatePage() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h1>useState</h1>
      <p>
        Count:
        {count}
      </p>
      <div className="flex flex-row space-x-2">
        <button type="button" onClick={() => setCount(count - 1)}>-</button>
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      </div>
      <Link href="/useEffect">useEffect</Link>
    </section>
  );
}

export default UseStatePage;
