import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeTemplate from "./templates/HomePageTemplate";
import KhoaHoc from "./common/containers/KhoaHoc/KhoaHoc";
import ChiTietKhoaHoc from "./common/components/ChiTietKhoaHoc/ChiTietKhoaHoc";
import ShoppingCar from "./common/components/ShoppingCar/ShoppingCar";
import PersonalPage from "./common/components/User/PersonalPage/PersonalPage";
import ListCourseAd from "./common/components/Admin/ListCourseAd/ListCourseAd";
import AdminTemplate from "./templates/AdminTemplate";
import HomeAdmin from "./common/components/Admin/HomeAdmin/HomeAdmin";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" Component={KhoaHoc}></HomeTemplate>
        <HomeTemplate exact path="/khoahoc" Component={KhoaHoc}></HomeTemplate>
        <HomeTemplate
          exact
          path="/khoahoc/chitiet/:maKhoaHoc"
          Component={ChiTietKhoaHoc}
        ></HomeTemplate>
        <HomeTemplate
          exact
          path="/shoppingcar"
          Component={ShoppingCar}
        ></HomeTemplate>
        <HomeTemplate
          exact
          path="/profile"
          Component={PersonalPage}
        ></HomeTemplate>
        // eslint-disable-next-line react/jsx-no-comment-textnodes // //{" "}
        <AdminTemplate
          exact
          path="/admin"
          Component={HomeAdmin}
        ></AdminTemplate>
        <AdminTemplate
          exact
          path="/course-list"
          Component={ListCourseAd}
        ></AdminTemplate>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
