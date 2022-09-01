import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('post/fetch', 
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        return data;
    }
)

const initialState = {
    postList: [],
    isPending: false,
    errorMessage: null,
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            state.postList = action.payload;
            state.isPending = false;
        },
        [fetchPosts.pending]: (state) => {
            state.isPending = true;
        },
        [fetchPosts.rejected]: (state) => {
            state.isPending = false;
            state.errorMessage = 'Sorry, Somthing is wrong...';
        }
    }
})

export default postSlice.reducer;