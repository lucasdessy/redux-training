import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './counter_state';


// Equivalent of Flutter's BLoC logic
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
  // Async stuff needs to be registered here
  extraReducers: (builder) => {
    // incrementAsync
    builder.addCase(incrementAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.counter += action.payload.value;
      state.loading = false;
    });
    builder.addCase(incrementAsync.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    // throwError
    builder.addCase(throwError.pending, (state) => {
      state.loading = true;
    });
    // This should never be called
    builder.addCase(throwError.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(throwError.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

// Async stuff here
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: {value: number}) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);


export const throwError = createAsyncThunk(
  'counter/throwError',
  async () => {
    try {
      await new Promise((resolve, reject) => setTimeout(reject, 1000));
    } catch (error) {
      throw new Error('Erritos momento');
    }
  }
);

// Default boilerplate
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;