'use client';

import Link from 'next/link';
import useCounter from './useCounter';

function UseTransitionPage() {
  const {
    count, isNegative, history, increment, decrement, total, isPending,
  } = useCounter();

  return (
    <div>
      <p>
        Count:
        {count}
      </p>
      <div>
        <button type="button" onClick={increment}>Increase</button>
        <button type="button" onClick={decrement}>Decrease</button>
      </div>
      {isNegative && <p className="bg-red-400 text-white">No negative values!</p>}
      {isPending && <p>Loading...</p>}
      <p>
        Total of all counts:
        {total}
      </p>
      <p>
        History:
        {history.join(', ')}
      </p>
      <Link href="/useTransition">useContext</Link>
    </div>
  );
}

export default UseTransitionPage;
