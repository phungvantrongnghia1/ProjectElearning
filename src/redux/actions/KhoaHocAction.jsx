import * as types from "../contents/KhoaHocContent";
import axios from "axios";
let axiosConfig = {
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaG9haW5pZW0iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJHViIsIm5iZiI6MTU3MzcxOTk5NiwiZXhwIjoxNTczNzIzNTk2fQ.dQXt0QI3qjnYf0AfLr8E_YV4Ic6IOH7K77EWtBRQNyw"
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
export const editCourseDitpatch = item => {
  return async dispath => {
    try {
      let result = await axios.put(
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc",
        item,
        axiosConfig
      );
      console.log(result.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
export const addCourse = item => {
  return async () => {
    try {
      let result = await axios.post(
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc",
        item,
        axiosConfig
      );
      return result.data;
    } catch (err) {
      console.log(err.response.data);
      return err.response.data;
    }
  };
};
export const removeCourse = item => {
  return async () => {
    try {
      let result = await axios.delete(
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc",
        item,
        axiosConfig
      );
      return result.data;
    } catch (err) {
      console.log(err.response.data);
      return err.response.data;
    }
  };
};
