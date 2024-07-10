import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';

const rootReducer = combineReducers({
    posts: postsReducer
});
const store = configureStore({
    reducer: rootReducer
});

export default store;