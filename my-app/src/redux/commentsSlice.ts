import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type Comments = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

type CommentsState = {
  commentsList: Comments[];
  loading: boolean;
  error: string | null;
};

const initialState: CommentsState = {
  commentsList: [],
  loading: false,
  error: null,
};

export const fetchComments = createAsyncThunk<
  Comments[],
  undefined,
  { rejectValue: string }
>("comments/fetchComments", async (_, { rejectWithValue }) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );

  if (!response) {
    return rejectWithValue("error fetchComments");
  }

  return response.data;
});

export const deleteComments = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("comments/deleteComments", async (id, { rejectWithValue }) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );

  if (!response) {
    return rejectWithValue("error delete comments");
  }

  return id;
});

export const addComments = createAsyncThunk<
  Comments,
  string,
  { rejectValue: string }
>("comments/addComments", async (body, { rejectWithValue }) => {
  const response = await axios.post(
    `https://jsonplaceholder.typicode.com/comments`,
    {
      id: Date.now(),
      body: body,
    }
  );
  if (!response) {
    return rejectWithValue("error addComments");
  }
  return response.data as Comments;
});

export const addName = createAsyncThunk<
  Comments,
  string,
  { rejectValue: string }
>("comments/addName", async (name, { rejectWithValue }) => {
  const response = await axios.post(
    `https://jsonplaceholder.typicode.com/comments`,
    {
      id: Date.now(),
      name: name,
    }
  );
  if (!response) {
    return rejectWithValue("error addComments");
  }
  return response.data as Comments;
});

export const addEmail = createAsyncThunk<
  Comments,
  string,
  { rejectValue: string }
>("comments/addEmail", async (email, { rejectWithValue }) => {
  const response = await axios.post(
    `https://jsonplaceholder.typicode.com/comments`,
    {
      id: Date.now(),
      body: body,
      email: email,
    }
  );
  if (!response) {
    return rejectWithValue("error addComments");
  }
  return response.data as Comments;
});

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.commentsList = action.payload;
        state.loading = false;
      })
      .addCase(deleteComments.fulfilled, (state, action) => {
        state.commentsList = state.commentsList.filter(
          (e) => e.id !== action.payload
        );
      })
      .addCase(addComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addComments.fulfilled, (state, action) => {
        state.commentsList.push(action.payload);
        state.loading = false;
      })
      .addCase(addEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEmail.fulfilled, (state, action) => {
        state.commentsList.push(action.payload);
        state.loading = false;
      })
      .addCase(addName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addName.fulfilled, (state, action) => {
        state.commentsList.push(action.payload);
        state.loading = false;
      }),
});

export default commentsSlice.reducer;
