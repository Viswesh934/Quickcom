import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false, // initial state for authentication
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;  // handle login
    },
    logout: (state) => {
      state.isAuthenticated = false; // handle logout
    },
  },
});

export const { login, logout } = authSlice.actions; // export actions
export default authSlice.reducer; // export reducer
