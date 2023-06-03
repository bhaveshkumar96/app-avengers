import axios from "axios";
import {
  DELETE_BLOGS_FAILURE,
  DELETE_BLOGS_REQUEST,
  DELETE_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  UPDATE_BLOGS_FAILURE,
  UPDATE_BLOGS_REQUEST,
  UPDATE_BLOGS_SUCCESS,
} from "./actionTypes";

export const getBlogsRequest = () => {
  return { type: GET_BLOGS_REQUEST };
};
export const getBlogsSuccess = (payload) => {
  return { type: GET_BLOGS_SUCCESS, payload };
};
export const getBlogsFailure = () => {
  return { type: GET_BLOGS_FAILURE };
};

export const updateBlogsRequest = () => {
  return { type: UPDATE_BLOGS_REQUEST };
};
export const updateBlogsSuccess = (payload) => {
  return { type: UPDATE_BLOGS_SUCCESS, payload };
};
export const updateBlogsFailure = () => {
  return { type: UPDATE_BLOGS_FAILURE };
};

export const deleteBlogsRequest = () => {
  return { type: DELETE_BLOGS_REQUEST };
};
export const deleteBlogsSuccess = (payload) => {
  return { type: DELETE_BLOGS_SUCCESS, payload };
};
export const deleteBlogsFailure = () => {
  return { type: DELETE_BLOGS_FAILURE };
};

export const getAllBlogs = async (dispatch) => {
  dispatch(getBlogsRequest());
  try {
    let res = await axios.get("https://frail-pear-swordfish.cyclic.app/blogs");
    dispatch(getBlogsSuccess(res.data));
  } catch (error) {
    dispatch(getBlogsFailure(error));
    console.log(error);
  }
};
