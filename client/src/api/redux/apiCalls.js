import { publicRequest, userRequest } from '../../requestMethods';
import {
  findUserFailure,
  findUserStart,
  findUserSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  registrationFailure,
  registrationStart,
  registrationSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess
} from './userRedux';

import {
  createPostFailure,
  createPostStart,
  createPostSuccess,
  deletePostFailure,
  deletePostStart,
  deletePostSuccess,
  getPostByIdSuccess,
  getPostsFailure,
  getPostsStart,
  getPostsSuccess,
  updatePostFailure,
  updatePostStart,
  updatePostSuccess
} from './postRedux';

// *User API Calls*

export const login = async (dispatch, userCredentials) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', userCredentials);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Invalid email or password'); // Throw an error for incorrect password
    }
    dispatch(loginFailure());
    throw error;
  }
};

export const register = async (dispatch, user) => {
  dispatch(registrationStart());
  try {
    const res = await publicRequest.post('/auth/register', user);
    setTimeout(() => {
      dispatch(registrationSuccess());
    }, 3000);
  } catch (error) {
    if (error.response && error.response.status === 409) {
      throw new Error('Email already exists'); // Throw an error for invalid email or password
    }
    dispatch(registrationFailure());
    throw error;
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await publicRequest.get('/users');
    await dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await userRequest.put(`/users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

export const findUser = async (id, dispatch) => {
  dispatch(findUserStart());
  try {
    const res = await publicRequest.get(`/users/find/${id}`);
    await dispatch(findUserSuccess(res.data));
  } catch (err) {
    dispatch(findUserFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(updateStart());
  try {
    await userRequest.delete(`/users/${id}`);
    dispatch(remove(id));
  } catch (err) {
    dispatch(updateFailure());
  }
};

// *Post API Calls*

export const createPost = async (post, dispatch) => {
  dispatch(createPostStart());
  try {
    const res = await userRequest().post('/posts', post);
    dispatch(createPostSuccess(res.data));
  } catch (error) {
    dispatch(createPostFailure());
  }
};

export const getPosts = async (dispatch) => {
  dispatch(getPostsStart());
  try {
    const res = await publicRequest.get('/posts');
    dispatch(getPostsSuccess(res.data));
  } catch (error) {
    dispatch(getPostsFailure());
  }
};

export const getPostById = async (id, dispatch) => {
  dispatch(getPostsStart());
  try {
    const res = await publicRequest.get(`/posts/${id}`);
    dispatch(getPostByIdSuccess(res.data));
  } catch (error) {
    dispatch(getPostsFailure());
  }
};

export const updatePost = async (id, post, dispatch) => {
  dispatch(updatePostStart());
  try {
    const res = await userRequest().put(`/posts/${id}`, post);
    dispatch(updatePostSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(updatePostFailure());
  }
};

export const applyToPost = async (id, dispatch) => {
  dispatch(updatePostStart());
  try {
    const res = await userRequest().put(`/posts/${id}/apply`);
    dispatch(updatePostSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(updatePostFailure());
  }
};

export const deletePost = async (id, dispatch) => {
  dispatch(deletePostStart());
  try {
    const res = await userRequest().delete(`/posts/${id}`);
    dispatch(deletePostSuccess(res.data));
  } catch (error) {
    dispatch(deletePostFailure());
  }
};

// **Chat API Calls**

export const createChat = async (chatName) => {
  try {
    const res = await userRequest().post('/group', chatName);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
