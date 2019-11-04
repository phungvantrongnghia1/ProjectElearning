import * as types from "../contents/UserContent";
const stateDefault = {
  User: []
};
const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case types.GET_DETAIL_USER: {
      state.User = [...action.data.chiTietKhoaHocGhiDanh];

      return { ...state };
    }
    default: {
    }
  }
  return { ...state };
};
export default UserReducer;
