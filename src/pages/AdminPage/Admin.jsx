/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AdminTemplate from "../../templates/AdminTemplate";
import HomeAdmin from "../../common/components/Admin/HomeAdmin/HomeAdmin";
import ListCourseAd from "../../common/components/Admin/ListCourseAd/ListCourseAd";
export default function Admin() {
  return (
    <Fragment>
      <AdminTemplate exact path="/admin" Component={HomeAdmin}></AdminTemplate>
      <AdminTemplate
        exact
        path="/course-list"
        Component={ListCourseAd}
      ></AdminTemplate>
    </Fragment>
  );
}
