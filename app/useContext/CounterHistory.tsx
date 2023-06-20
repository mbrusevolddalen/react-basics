import { useCounterContext } from './CounterProvider';

function CounterHistory() {
  const { history } = useCounterContext();

  return (
    <div>
      <h2>Counter History</h2>
      <ul className="flex">
        Count was:
        {history.map((count) => (
          <li key={count}>{`${count}, `}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterHistory;
