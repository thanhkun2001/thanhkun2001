import { GET_LIST_FILM_ERROR, GET_LIST_FILM_REQUEST, GET_LIST_FILM_SUCCESS } from "../types";

const INITIAL_STATE = {
    isLoading:false,
    listFilm:null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST_FILM_REQUEST:
      return {
        ...state,
        isLoading:true,
        listFilm:null
      };
    case GET_LIST_FILM_SUCCESS:
      return {
        ...state,
        isLoading:false,
        listFilm:action.payload
      };
    case GET_LIST_FILM_ERROR:
      return {
        ...state,
        isLoading:false,
        listFilm:null
      };

    default:
      return state;
  }
};
