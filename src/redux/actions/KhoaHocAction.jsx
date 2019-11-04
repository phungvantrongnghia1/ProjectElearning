import * as types from "../contents/KhoaHocContent";
import axios from "axios";
let axiosConfig = {
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZGVtbyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkhWIiwibmJmIjoxNTcxMzkyNTQ5LCJleHAiOjE1NzEzOTYxNDl9.DkE8omtY-Ja2Sg8tg_CRdZC9k59u3oXnQ9T_lheewbU"
  }
};
export const layDanhSachKhoaHoc = () => {
  return async dispatch => {
    try {
      const result = await axios.get(
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09"
      );
      dispatch({
        type: types.LAY_DANH_SACH_KHOA_HOC,
        data: result.data
      });
    } catch (err) {
      return err.response.data;
    }
  };
};
export const layChiTietKhoaHoc = async id => {
  try {
    const result = await axios.get(
      `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
    );

    return result.data;
  } catch (err) {
    return err.response.data;
  }
};
export const dangNhap = async user => {
  try {
    const status = await axios.post(
      "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      user
    );

    return status.data;
  } catch (err) {
    return err.response.data;
  }
};
export const addCart = item => {
  return dispath => {
    dispath({
      type: types.ADD_TO_CARD,
      item: item
    });
  };
};
export const updateCart = item => {
  return dispath => {
    dispath({
      type: types.UPDATE_CART,
      item: item
    });
  };
};
export const removeItemShopping = item => {
  return dispatch => {
    dispatch({
      type: types.REMOVE__ITEM__SHOPPING,
      item: item
    });
  };
};
export const registryCourse = async item => {
  try {
    let result = await axios.post(
      "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
      item,
      axiosConfig
    );
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};
export const getDetailUser = user => {
  // không có lưu ở store
  // lưu ở localstore
};
