import { API_URL } from "../constants";
import BaseService from "./baseService";

class ListFilmService extends BaseService {
  async getListFilm(queryString = "") {
    const res = await this.get(API_URL.LIST_FILM + queryString);
    return res;
  }
}
export default ListFilmService;
