import { clearError } from '../../application/counter/counter_slice';
// Boilerplate hooks
import { useAppDispatch, useAppSelector } from '../../redux';
import { CounterActionsComponent } from './components/counter';

export const CounterPage = () => {
  // Selects which part of the global state we're interested in
  const counter = useAppSelector((state) => state.counter);
  // Provides access to the dispatch function
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