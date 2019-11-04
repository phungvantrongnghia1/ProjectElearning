import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../common/components/Header/Header";
const HomeTemplate = ({ Component, ...res }) => {
  return (
    <Fragment>
      <Route
        {...res}
        render={props => {
          return (
            <Fragment>
              <Header></Header>
              <Component {...props}></Component>
            </Fragment>
          );
        }}
      ></Route>
    </Fragment>
  );
};
export default HomeTemplate;
