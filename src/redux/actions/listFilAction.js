import API from "../../services/API";
import {
  GET_LIST_FILM_ERROR,
  GET_LIST_FILM_REQUEST,
  GET_LIST_FILM_SUCCESS,
} from "../types";

export const getListFilm = (queryString) => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST_FILM_REQUEST });
    try {
      const res = await API.listFilm.getListFilm(queryString);
      dispatch({
        type: GET_LIST_FILM_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({ type: GET_LIST_FILM_ERROR });
    }
  };
};
