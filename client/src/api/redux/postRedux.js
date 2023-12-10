import { createSlice } from '@reduxjs/toolkit';

const postlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    post: {},
    isFetching: false,
    error: true
  },
  reducers: {
    createPostStart: (state) => {
      state.isFetching = true;
      state.error = false; // Reset error to false when starting login
    },
    createPostSuccess: (state) => {
      state.isFetching = false;
      state.error = false; // Reset error to false on successful login
    },
    createPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updatePostStart: (state) => {
      state.isFetching = true;
      state.error = false; // Reset error to false when starting update
    },
    updatePostSuccess: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload.id) {
          return action.payload;
        }
        return post;
      });
      state.isFetching = false;
    },
    updatePostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getPostsStart: (state) => {
      state.isFetching = true;
      state.error = false; // Reset error to false when starting find
    },
    getPostsSuccess: (state, action) => {
      state.isFetching = false;
      state.posts = action.payload;
      state.error = false; // Reset error to false on successful find
    },
    getPostByIdSuccess: (state, action) => {
      state.isFetching = false;
      state.post = action.payload;
      state.error = false; // Reset error to false on successful find
    },
    getPostsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deletePostStart: (state) => {
      state.isFetching = true;
      state.error = false; // Reset error to false when starting delete
    },
    deletePostSuccess: (state, action) => {
      const removedIds = action.payload;
      state.posts = state.post.filter((post) => {
        return !removedIds.includes(post.id);
      });
    },
    deletePostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const {
  updatePostStart,
  updatePostSuccess,
  updatePostFailure,
  getPostsStart,
  getPostsSuccess,
  createPostFailure,
  createPostStart,
  createPostSuccess,
  getPostsFailure,
  getPostByIdSuccess,
  deletePostStart,
  deletePostSuccess,
  deletePostFailure
} = postlice.actions;

export default postlice.reducer;
