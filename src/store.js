import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './slices/counterSlice';
import postReducer from "./slices/postSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
    }
})

export default store;