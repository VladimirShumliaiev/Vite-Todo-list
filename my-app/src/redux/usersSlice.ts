import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import UserType from "../components/Users/UserType";

type Users = UserType;

type UserState = {
  userList: Users[];
  error: string | null;
  loading: boolean;
};

const initialState: UserState = {
  userList: [],
  error: null,
  loading: false,
};

export const fetchUser = createAsyncThunk<
  Users[],
  undefined,
  { rejectValue: string }
>("Users/fetchUser", async (_, { rejectWithValue }) => {
  const response = await axios(
    "https://jsonplaceholder.typicode.com/users/?_limit=15"
  );

  if (!response) {
    return rejectWithValue("error fetch");
  }
  return await response.data;
});

export const deleteUser = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("Users/deleteUser", async (id, { rejectWithValue }) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!response) {
    return rejectWithValue("error delete user");
  }

  return id;
});

const usersSlice = createSlice({
  name: "Users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userList = action.payload;
        state.loading = false;
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        if (window.confirm("delete todo")) {
          state.userList = state.userList.filter(
            (e) => e.id !== action.payload
          );
        }
      }),
});

export default usersSlice.reducer;
