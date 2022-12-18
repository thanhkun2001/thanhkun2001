import {
  CLEAR_STORE_FILTER,
  GET_LIST_USER_DETAIL_ERROR,
  GET_LIST_USER_DETAIL_REQUEST,
  GET_LIST_USER_DETAIL_SUCCESS,
  GET_LIST_USER_ERROR,
  GET_LIST_USER_REQUEST,
  GET_LIST_USER_SUCCESS,
  LOGIN_STATE_ERROR,
  LOGIN_STATE_REQUEST,
  LOGIN_STATE_SUCCESS,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  STORE_FILTER,
} from "../types";

const INITIAL_STATE = {
  isLoggedIn: false,
  isLoading: false,
  listUser: null,
  storedFilter: null,
  details: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_STATE_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case LOGIN_STATE_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    case LOGIN_STATE_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case GET_LIST_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        listUser: null,
      };
    case GET_LIST_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listUser: action.payload,
      };
    case GET_LIST_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        listUser: null,
      };
    case GET_LIST_USER_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        details: null,
      };
    case GET_LIST_USER_DETAIL_SUCCESS:
      return { ...state, isLoading: false, details: action.payload };
    case GET_LIST_USER_DETAIL_ERROR:
      return { ...state, isLoading: false, details: null };
    case STORE_FILTER:
      return {
        ...state,
        storedFilter: action.payload,
      };
    case CLEAR_STORE_FILTER:
      return {
        ...state,
        storedFilter: null,
      };
    default:
      return state;
  }
};
