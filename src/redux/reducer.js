import { createSlice } from '@reduxjs/toolkit';
import fetchRandomGreeting from './actions';

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: { greeting: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => (
        { ...state, loading: true, error: null }))
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => (
        { ...state, greeting: action.payload, loading: false }))
      .addCase(fetchRandomGreeting.rejected, (state, action) => (
        { ...state, loading: false, error: action.error }));
  },
});

export default greetingSlice.reducer;
