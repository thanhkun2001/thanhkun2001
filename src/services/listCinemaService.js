import { API_URL } from "../constants";
import BaseService from "./baseService";

class CinemaService extends BaseService{
    async getAllCinema(queryString = ''){
        const res = await this.get(API_URL.CINEMA_SYSTEM + queryString)
        return res
    }
    async getInfoCinema(queryString){
        const res = await this.get(API_URL.CINEMA_INFO + queryString)
        return res
    }
}
export default CinemaService