import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw '';
  } else {
    const data = await res.json();
    if (data) {
      return data;
    }
  }
});

const initialState = {
  postList: [],
  fetchingPosts: false,
  errorMessage: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.postList = action.payload;
      state.fetchingPosts = false;
    },
    [fetchPosts.pending]: (state) => {
      state.fetchingPosts = true;
    },
    [fetchPosts.rejected]: (state) => {
      state.fetchingPosts = false;
      state.errorMessage = "Sorry, Somthing is wrong ...";
    },
  },
});

export default postSlice.reducer;
