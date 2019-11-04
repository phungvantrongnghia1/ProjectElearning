import * as types from "../contents/KhoaHocContent";

const stateDefault = {
  DSKH: [],
  Cart: []
};
const KhoaHocReducer = (state = stateDefault, action) => {
  if (state.DSKH !== null || state.Cart !== null) {
    switch (action.type) {
      case types.LAY_DANH_SACH_KHOA_HOC: {
        state.DSKH = action.data;
        return { ...state };
      }
      case types.ADD_TO_CARD: {
        let cartUpdate = [...state.Cart, action.item]; // write dispatch name update Cart
        state.Cart = cartUpdate; // C2: Check action.item

        let user = JSON.parse(localStorage.getItem("user"));

        localStorage.setItem(
          `Cart__${user.taiKhoan}`,
          JSON.stringify(cartUpdate)
        );

        return { ...state };
      }
      case types.UPDATE_CART: {
        let cartUpdate = [...state.Cart, ...action.item]; // write dispatch name update Cart
        state.Cart = cartUpdate; // C2: Check action.item

        let user = JSON.parse(localStorage.getItem("user"));

        localStorage.setItem(
          `Cart__${user.taiKhoan}`,
          JSON.stringify(cartUpdate)
        );

        return { ...state };
      }
      case types.REMOVE__ITEM__SHOPPING: {
        let CartUpDate = [...state.Cart];
        let index = CartUpDate.findIndex(item => {
          return item.maKhoaHoc === action.item.maKhoaHoc;
        });
        CartUpDate.splice(index, 1);
        let user = JSON.parse(localStorage.getItem("user"));

        localStorage.setItem(
          `Cart__${user.taiKhoan}`,
          JSON.stringify(CartUpDate)
        );
        state.Cart = CartUpDate;
        return { ...state };
      }
      default: {
      }
    }
    return { ...state };
  }
};
export default KhoaHocReducer;
