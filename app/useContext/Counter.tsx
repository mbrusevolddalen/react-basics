'use client';

import { useCounterContext } from './CounterProvider';

function Counter() {
  const { count, setCount } = useCounterContext();
  return (
    <div>
      <h1>UseContextPage</h1>
      <p>
        Count:
        {count}
      </p>
      <div className="flex flex-row space-x-2">
        <button type="button" onClick={() => setCount(count + 1)}>Increase</button>
        <button type="button" onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;
