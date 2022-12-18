import API from "../../services/API";
import {
  GET_INFO_CINEMA_ERROR,
  GET_INFO_CINEMA_REQUEST,
  GET_INFO_CINEMA_SUCCESS,
  GET_LIST_CINEMA_ERROR,
  GET_LIST_CINEMA_REQUEST,
  GET_LIST_CINEMA_SUCCESS,
} from "../types";

export const getListCinema = (queryString) => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST_CINEMA_REQUEST });
    try {
      const res = await API.cinema.getAllCinema(queryString);
      dispatch({
        type: GET_LIST_CINEMA_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({ type: GET_LIST_CINEMA_ERROR });
    }
  };
};
export const getAllInfoCinema = (queryString) => {
  return async (dispatch) => {
    dispatch({ type: GET_INFO_CINEMA_REQUEST });
    try {
      const res = await API.cinema.getInfoCinema(queryString);
      dispatch({
        type: GET_INFO_CINEMA_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({ type: GET_INFO_CINEMA_ERROR });
    }
  };
};
