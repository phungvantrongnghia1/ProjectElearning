import { combineReducers } from "redux";
import KhoaHocReducer from "./reducers/KhoaHocStore";
import UserReducer from "./reducers/UserReducer";
const rootStore = combineReducers({
  KhoaHocReducer,
  UserReducer
});
export default rootStore;
