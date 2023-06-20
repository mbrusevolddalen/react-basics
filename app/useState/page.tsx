'use client';

import Link from 'next/link';
import { useState } from 'react';

function UseStatePage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>useState</h1>
      <p>
        Count:
        {count}
      </p>
      <div className="flex flex-row space-x-2">
        <button type="button" onClick={() => setCount(count + 1)}>Increase</button>
        <button type="button" onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
      <Link href="/useEffect">useEffect</Link>
    </div>
  );
}

export default UseStatePage;
