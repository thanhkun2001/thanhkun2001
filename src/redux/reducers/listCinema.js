import { GET_INFO_CINEMA_ERROR, GET_INFO_CINEMA_REQUEST, GET_INFO_CINEMA_SUCCESS, GET_LIST_CINEMA_ERROR, GET_LIST_CINEMA_REQUEST, GET_LIST_CINEMA_SUCCESS } from "../types";

const INITIAL_STATE = {
    isLoading:false,
    listCinema:null,
    infoCinema:null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST_CINEMA_REQUEST:
      return {
        ...state,
        isLoading:true,
        listCinema:null
      };
    case GET_LIST_CINEMA_SUCCESS:
      return {
        ...state,
        isLoading:false,
        listCinema:action.payload
      };
    case GET_LIST_CINEMA_ERROR:
      return {
        ...state,
        isLoading:false,
        listCinema:null
      };
      case GET_INFO_CINEMA_REQUEST:
        return {
          ...state,
          isLoading:true,
          infoCinema:null
        };
      case GET_INFO_CINEMA_SUCCESS:
        return {
          ...state,
          isLoading:false,
          infoCinema:action.payload
        };
      case GET_INFO_CINEMA_ERROR:
        return {
          ...state,
          isLoading:false,
          infoCinema:null
        };
  
    default:
      return state;
  }
};
