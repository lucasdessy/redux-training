import { useState } from 'react';

// Actions from slice
import { decrement, increment, incrementAsync, incrementByAmount, throwError } from '../../../application/counter/counter_slice';
// Boilerplate hooks
import { useAppDispatch, useAppSelector } from '../../../redux';

export const CounterComponent = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <>
      <h2>Counter: {counter.counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* Increment by amount */}
      <input
        type="number"
       
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
        Increment by amount
      </button>
      {/* Increment asynchronously */}
      <button onClick={() => dispatch(incrementAsync({value:incrementAmount}))}>
        Increment asynchronously
      </button>
      {/* Throw error button */}
      <button onClick={() => dispatch(throwError())}>
        Throw error
      </button>
      {/* Render loading */}
      {counter.loading && <p>Loading...</p>}
      {/* Render error */}
      {counter.error && <p>{counter.error}</p>}
    </>
  );
};