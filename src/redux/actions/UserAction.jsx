import axios from "axios";
import * as types from "../contents/UserContent";
let axiosConfig = {
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZGVtbyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkhWIiwibmJmIjoxNTcxMzkyNTQ5LCJleHAiOjE1NzEzOTYxNDl9.DkE8omtY-Ja2Sg8tg_CRdZC9k59u3oXnQ9T_lheewbU"
  }
};
export const getDetail = user => {
  return async dispath => {
    try {
      let result = await axios.post(
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        user,
        axiosConfig
      );
      dispath({
        type: types.GET_DETAIL_USER,
        data: result.data
      });
    } catch (err) {
      return err.response;
    }
  };
};
