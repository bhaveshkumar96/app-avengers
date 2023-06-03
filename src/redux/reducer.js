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

const initialState = {
  isLoading: false,
  blogs: [],
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BLOGS_REQUEST:
      return { ...state, isLoading: true };
    case GET_BLOGS_SUCCESS:
      return { ...state,blogs: payload,isLoading:false };
    case GET_BLOGS_FAILURE:
      return { ...state, isError: true };
    case UPDATE_BLOGS_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_BLOGS_SUCCESS:
      return { ...state, payload,isLoading:false };
    case UPDATE_BLOGS_FAILURE:
      return { ...state, isError: true };
    case DELETE_BLOGS_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_BLOGS_SUCCESS:
      return { ...state, payload,isLoading:false };
    case DELETE_BLOGS_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
