import { clearError } from '../../application/counter/counter_slice';
import { useAppDispatch, useAppSelector } from '../../redux';
import { CounterActionsComponent } from './components/counter';

export const CounterPage = () => {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Counter { counter.counter }</h1>
      <CounterActionsComponent />
      {/* Render loading */}
      {counter.loading && <p>Loading...</p>}
      {/* Render error */}
      {counter.error && <p>{counter.error}</p>}
      {/* Clear error button */}
      {counter.error && <button onClick={() => dispatch(clearError())}>Clear error</button>}
    </div>
  );
};