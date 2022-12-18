import { API_URL } from "../constants";
import BaseService from "./baseService";

class getListBannerService extends BaseService{
    async getBanner(){
        const res = await this.get(API_URL.BANNER)
        return res
    }
}
export default getListBannerService