import * as types from "../contents/UserContent";
const stateDefault = {
  keyLogin: false,
  User: []
};
const UserReducer = (state = stateDefault, action) => {
  console.log(action);
  switch (action.type) {
    case types.GET_DETAIL_USER: {
      state.User = [...action.data.chiTietKhoaHocGhiDanh];

      return { ...state };
    }
    case "SetKeyLogin": {
      console.log(action.data);
      state.keyLogin = action.data;
      return { ...state };
    }
    default: {
    }
  }
  return { ...state };
};
export default UserReducer;
