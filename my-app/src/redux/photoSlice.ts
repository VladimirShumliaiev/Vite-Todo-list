import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type PhotoState = {
  photoList: Photo[];
  loading: boolean;
  error: string | null;
};

const initialState: PhotoState = {
  photoList: [],
  loading: false,
  error: null,
};

export const fetchPhotos = createAsyncThunk<
  Photo[],
  undefined,
  { rejectValue: string }
>("Photo/fetchPhotos", async (_, { rejectWithValue }) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );

  if (!response) {
    return rejectWithValue("Error");
  }

  return await response.data;
});

const photoSlice = createSlice({
  name: "Photo",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.photoList = action.payload;
      }),
});

export default photoSlice.reducer;
