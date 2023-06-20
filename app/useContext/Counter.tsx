'use client';

import { useCounterContext } from './CounterProvider';

function Counter() {
  const { count, setCount } = useCounterContext();
  return (
    <>
      <p>
        Count:
        {count}
      </p>
      <div className="flex flex-row space-x-2">
        <button type="button" onClick={() => setCount(count - 1)}>Decrease</button>
        <button type="button" onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </>
  );
}

export default Counter;
