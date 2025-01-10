import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: {},
  user: {},
};

export const userSlice = createSlice({
  name: 'userNow',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      console.log(payload)
      state.token = {...state.token, ...payload}
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    resetUser: (state) => {
      state.user = {};
    },
    resetToken: (state) => {
      state.token = '';
    },
  },
});

export const { setToken, setUser, resetToken, resetUser } = userSlice.actions;

export default userSlice.reducer;
