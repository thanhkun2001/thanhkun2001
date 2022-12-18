import { combineReducers } from "redux";
import user from "./userReducer";
import film from './listFilmReducer'
import cinema from './listCinema'
export default combineReducers({
  user,
  film,
  cinema
});
