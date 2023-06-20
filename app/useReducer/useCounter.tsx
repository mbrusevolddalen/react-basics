import { useReducer, useEffect, useMemo } from 'react';

type State = {
  count: number;
  history: number[];
  isNegative: boolean;
};

  type Action =
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    | { type: 'SET_IS_NEGATIVE'; payload: boolean };

const initialState: State = {
  count: 0,
  history: [],
  isNegative: false,
};

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        history: [...state.history, state.count + 1],
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        history: [...state.history, state.count - 1],
      };
    case 'SET_IS_NEGATIVE':
      return {
        ...state,
        isNegative: action.payload,
      };
    default:
      return state;
  }
}

const useCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_IS_NEGATIVE', payload: state.count < 0 });
  }, [state.count]);

  const total = useMemo(() => state.history.reduce((acc, curr) => acc + curr, 0), [state.history]);

  return {
    count: state.count,
    isNegative: state.isNegative,
    history: state.history,
    total,
    dispatch,
  };
};

export default useCounter;
