import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
  async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async data => {
  const response = await axios.post('/contacts', data);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
});
