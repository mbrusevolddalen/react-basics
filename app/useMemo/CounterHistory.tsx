import { useCounterContext } from "./CounterProvider";

const CounterHistory = () => {
    const { history } = useCounterContext();
    return (
        <div>
            <h2>Counter History</h2>
            <ul>
                {history.map((count, index) => (
                    <li key={index}>Count was: {count}</li>
                ))}
            </ul>
        </div>
    );
}

export default CounterHistory;
