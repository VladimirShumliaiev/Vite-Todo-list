import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Users = {
  id: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

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

const fetchUser = createAsyncThunk<Users[], undefined, { rejectValue: string }>(
  "Users/fetchUser",
  async (_, { rejectWithValue }) => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");

    if (!response) {
      return rejectWithValue("error fetch");
    }
    return await response.data;
  }
);

const usersSlice = createSlice({
  name: "Users",
  initialState: initialState,
  reducers: {},
});

export default usersSlice.reducer;
