import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  data: {
    email: "",
    name: "",
    role_id: 0,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      return (state = {
        token: action.payload.data.token,
        data: {
          email: action.payload.data.email,
          name: action.payload.data.name,
          role_id: action.payload.data.role_id,
        },
      });
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const loginData = (state) => state.auth;

export default authSlice.reducer;
