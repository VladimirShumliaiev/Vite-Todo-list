import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Comments = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

type CommentsState = {
  commentsList: Comments[];
};

const initialState: CommentsState = {
  commentsList: [],
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
  { rejetValue: string }
>(
  "comments/addComments",
  async (name, email, body, id, postId, { rejectWithValue }) => {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/comments`,
      {
        postId: postId,
        id: id,
        name: name,
        email: email,
        body: body,
      }
    );
    if (!response) {
      return rejectWithValue("error addComments");
    }
    return (await response.data) as Comments;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {},
});

export default commentsSlice.reducer;
