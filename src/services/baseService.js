import axios from 'axios';
import { ACCESS_TOKEN, BASE_URL, PROFILE, ROUTES } from '../constants';
import { history } from '../Utils/history';


export default class BaseService {
  configApi(headers, baseUrl) {
    const globalAxios = axios.create({
      // baseUrl ? BASE_URL : window.THANHKUN,
      baseURL: BASE_URL,
      'Content-Type': 'application/json',
    });
    globalAxios.interceptors.request.use((config) => {
      if (headers) {
        config.headers = headers;
      }
      config.headers.Authorization  = 'Bearer ' + `${localStorage.getItem(ACCESS_TOKEN)}`;
      return config;
    });
    globalAxios.interceptors.response.use((response) => {
      if (response.status === 401 || response.status === 403) {
        console.log('cc');
        history.push(ROUTES.LOGIN);
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(PROFILE);
      }
      if(response.status === 400){
        debugger
      }
      return response.data;
    });
    return globalAxios;
  }
  async post(url, data,headers ) {
    const api = this.configApi(headers);
    const res = await api.post(url, data);
    if (res && res.data) {
      return res.data;
    }
    return res;
  }
  async get(url, params) {
    const res = await this.configApi().get(url, { params: params });
    if (res && res.data) {
      return res.data;
    }
    return res;
  }
  async put(url, data) {
    const res = await this.configApi().put(url, data);
    if (res && res.data) {
      return res.data;
    }
    return res;
  }
  async delete(url, data) {
    const res = await this.configApi().delete(url, data);
    if (res && res.data) {
      return res.data;
    }
    return res;
  }
}
