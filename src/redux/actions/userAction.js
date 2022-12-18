import { toast } from "react-toastify";
import { ACCESS_TOKEN, PROFILE } from "../../constants";
import API from "../../services/API";
import { history } from "../../Utils/history";
import {
  CLEAR_STORE_FILTER,
  GET_LIST_USER_DETAIL_ERROR,
  GET_LIST_USER_DETAIL_REQUEST,
  GET_LIST_USER_DETAIL_SUCCESS,
  GET_LIST_USER_ERROR,
  GET_LIST_USER_REQUEST,
  GET_LIST_USER_SUCCESS,
  LOGIN_STATE_ERROR,
  LOGIN_STATE_REQUEST,
  LOGIN_STATE_SUCCESS,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  STORE_FILTER,
} from "../types";

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_STATE_REQUEST });
    try {
      const res = await API.user.login({
        taiKhoan: username,
        matKhau: password,
      });
      dispatch({
        type: LOGIN_STATE_SUCCESS,
        payload: res,
      });
      localStorage.setItem(ACCESS_TOKEN, res.content.accessToken);
      const profile = {
        account: res.content.taiKhoan,
        email: res.content.email,
        phone: res.content.soDT ? res.content.soDT : "",
        fullName: res.content.hoTen ? res.content.hoTen : "",
        group: res.content.maNhom ? res.content.maNhom : "",
        typeMember: res.content.maLoaiNguoiDung
          ? res.content.maLoaiNguoiDung
          : "",
      };
      localStorage.setItem(PROFILE, JSON.stringify(profile));
      history.push("/");
    } catch (error) {
      dispatch({ type: LOGIN_STATE_ERROR });
      console.log(error);
      toast.error(error?.response?.data?.content, {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };
};
export const register = (username, password, email, phone, fullName) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      debugger;
      const res = await API.user.register({
        taiKhoan: username,
        matKhau: password,
        email: email,
        soDt: phone || null,
        hoTen: fullName || null,
      });
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res,
      });
      toast.success("Dang ky tai khoan thanh cong", {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (error) {
      dispatch({ type: REGISTER_ERROR });
      toast.error(error?.response?.data?.content, {
        position: "top-right",
        autoClose: 1000,
      });
      console.log(error?.response?.data?.content);
    }
  };
};

// export const getListUser = (params) => {
//   return async (dispatch) => {
//     dispatch({ type: GET_LIST_USER_REQUEST });
//     try {
//       const res = await API.user.getAllUser(params);
//       dispatch({
//         type: GET_LIST_USER_SUCCESS,
//         payload: res,
//       });
//     } catch (error) {
//       dispatch({ type: GET_LIST_USER_ERROR });
//       console.log(error);
//     }
//   };
// };
// export const getUserDetail = (id) => {
//   return async (dispatch) => {
//     dispatch({ type: GET_LIST_USER_DETAIL_REQUEST });
//     try {
//       const res = await API.user.getDetails(id);
//       dispatch({
//         type: GET_LIST_USER_DETAIL_SUCCESS,
//         payload: res,
//       });
//     } catch (error) {
//       dispatch({ type: GET_LIST_USER_DETAIL_ERROR });
//       console.log(error);
//     }
//   };
// };
// export const storeFilter = (filter) => {
//   return (dispatch) => {
//     dispatch({ type: STORE_FILTER, payload: filter });
//   };
// };
// export const removeStoredFilter = () => {
//   return (dispatch) => {
//     dispatch({ type: CLEAR_STORE_FILTER });
//   };
// };
