import { createSlice } from "@reduxjs/toolkit";

type Comments = {
  postId: string;
  id: string;
  email: string;
  body: string;
};

type CommentsState = {
  commentsList: Comments[];
};

const initialState: CommentsState = {
  commentsList: [],
};

const comments = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {},
});

export default comments.reducer;
