import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchRandomGreeting = createAsyncThunk('greeting/fetchRandomGreeting', async () => {
  try {
    const response = await axios.get('http://localhost:3000/random_greeting');
    return response.data.greeting;
  } catch (error) {
    console.error('Error fetching greeting:', error);
    throw error;
  }
});

export default fetchRandomGreeting;
