import { useCounterContext } from './CounterProvider';

function CounterHistory() {
  const { history } = useCounterContext();
  if (history.length === 0) return null;
  return (
    <>
      <h2>Counter History</h2>
      <ul className="flex">
        Count was:
        {history.map((count, i) => (
          <li key={i}>{`${count}, `}</li>
        ))}
      </ul>
    </>
  );
}

export default CounterHistory;
