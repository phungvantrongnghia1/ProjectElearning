import React from "react";
import "./App.scss";
import { BrowserRouter, Switch } from "react-router-dom";
import HomeTemplate from "./templates/HomePageTemplate";
import Homepage from "./pages/homepage/Homepage";
import KhoaHoc from "./common/containers/KhoaHoc/KhoaHoc";
import ChiTietKhoaHoc from "./common/components/ChiTietKhoaHoc/ChiTietKhoaHoc";
import ShoppingCar from "./common/components/ShoppingCar/ShoppingCar";
import PersonalPage from "./common/components/User/PersonalPage/PersonalPage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" Component={Homepage}></HomeTemplate>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
