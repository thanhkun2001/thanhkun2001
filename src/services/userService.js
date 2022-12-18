import { API_URL } from "../constants";
import BaseService from "./baseService";

class UserService extends BaseService {
  async login(params) {
    const res = await this.post(API_URL.LOGIN, params);
    return res;
  }
  async register(params) {
    const res = await this.post(API_URL.REGISTER, params);
    return res;
  }
  //   async getAllUser(params) {
  //     const res = await this.get(API_URL.USERS, params);
  //     return res;
  //   }
  //   async searchUser(queryString = "") {
  //     const res = await this.get(API_URL.SEARCH + queryString);
  //     return res;
  //   }
  //   async getDetails(id) {
  //     const res = await this.get(API_URL.USERS + "/" + id);
  //     return res;
  //   }
}
export default UserService;
