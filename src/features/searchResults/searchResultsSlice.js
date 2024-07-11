import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../../api/redditApi";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (subreddit, thunkAPI) => {
        try {
            const postsToAdd = await getSubredditPosts(subreddit);
            return postsToAdd;
        } catch (error) {
            throw new Error('failed to fetch posts: ' + error.message);
        }
    }
)

const postsOptions = {
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }
};

const postsSlice = createSlice(postsOptions);

export const selectPosts = state => state.posts.posts;
export const selectPostsStatus = state => state.posts.status;
export const selectPostsError = state => state.posts.error;

export default postsSlice.reducer;