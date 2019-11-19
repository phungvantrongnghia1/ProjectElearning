import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  layDanhSachKhoaHoc,
  editCourseDitpatch,
  addCourse,
  removeCourse
} from "../../../../redux/actions/KhoaHocAction";
import useForm from "react-hook-form";

export default function ListCourseAd() {
  const [courseEdit, setCourseEdit] = useState("");
  const dispath = useDispatch();
  const { register, handleSubmit } = useForm();
  const CourseReducer = useSelector(state => state.KhoaHocReducer);
  console.log(CourseReducer);
  useEffect(() => {
    dispath(layDanhSachKhoaHoc());
  }, []);
  const editCourse = async data => {
    const temp = {
      maKhoaHoc: courseEdit.maKhoaHoc,
      biDanh: courseEdit.biDanh,
      tenKhoaHoc: data.nameCourse,
      moTa: data.des,
      luotXem: data.views,
      danhGia: data.rate,
      hinhAnh: data.img,
      maNhom: courseEdit.maNhom,
      ngayTao: data.day,
      maDanhMucKhoaHoc: courseEdit.danhMucKhoaHoc.maDanhMucKhoahoc,
      taiKhoanNguoiTao: courseEdit.nguoiTao.taiKhoan
    };
    let result = dispath(editCourseDitpatch(temp));
    if (result !== "") {
      alert("Edit course successed!");
    }
  };
  const AddCourse = async item => {
    console.log(item);
    let temp = {
      maKhoaHoc: item.idCourse,
      biDanh: item.aliases,
      tenKhoaHoc: item.name,
      moTa: item.description,
      luotXem: item.addviews,
      danhGia: item.addrate,
      hinhAnh: item.addimg,
      maNhom: item.idGroupd,
      ngayTao: item.addday,
      maDanhMucKhoaHoc: item.idTopicGroupd,
      taiKhoanNguoiTao: item.username
    };
    let result = await dispath(addCourse(temp));
    if (result !== "Mã khóa học đã tồn tại!") alert("Add course was successed");

    console.log(temp);
    // console.log(result);
  };
  const RemoveCourse = async item => {
    console.log("Remove nè");
    let result = await dispath(removeCourse(item));
    console.log(result);
  };
  const setItemCourseEdit = item => {
    setCourseEdit(item);
  };
  console.log(courseEdit);
  const renderListCourse = () => {
    return CourseReducer.DSKH.map((item, index) => {
      return (
        <tr>
          <td>
            <img className="imgCourse" src={item.hinhAnh} alt="" />
          </td>
          <td>{item.maKhoaHoc}</td>
          <td>{item.tenKhoaHoc}</td>
          <td>{item.soLuongHocVien}</td>
          <td>{item.danhMucKhoaHoc.maDanhMucKhoahoc}</td>
          <td>
            <button
              className="btn btn-warning mr-2 "
              data-toggle="modal"
              data-target="#myModal"
              onClick={() => setItemCourseEdit(item)}
            >
              Edit
            </button>
            <button
              className="btn btn-success"
              onClick={() => RemoveCourse(item.maKhoaHoc)}
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="courseList container-fluid h-100">
      <div className="courseList__title text-center">
        <h1> Course management</h1>
        <form action="">
          <input className="w-75" type="text" placeholder="Search" />
        </form>
      </div>
      <div className="courseList__content  ">
        <div className="row mt-2">
          <div className="col-6 left">
            <span className="mr-3">
              <i class="fas fa-stream    "></i>
            </span>
            <span className="h1">Courses List</span>
          </div>
          <div className="col-6 text-right right">
            <button
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#addModal"
            >
              Add Course
            </button>
          </div>
        </div>
        <div className="table__list">
          <table class="table table-dark">
            <thead>
              <tr>
                <th>Image</th>
                <th>ID</th>
                <th>Name</th>
                <th>Student</th>
                <th>Topic</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{renderListCourse()}</tbody>
          </table>
          <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header text-center">
                  <h4 class="modal-title">Edit course</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div class="modal-body">
                  <form
                    className="editForm"
                    action=""
                    onSubmit={handleSubmit(editCourse)}
                  >
                    <div className="box">
                      <input
                        className="input form-control"
                        name="id"
                        type="text"
                        placeholder={courseEdit.maKhoaHoc}
                        readOnly="true"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        name="nameCourse"
                        className="input"
                        type="text"
                        placeholder="Course name"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        name="des"
                        className="input"
                        type="text"
                        placeholder="Description"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        name="views"
                        className="input"
                        type="text"
                        placeholder="Views"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        className="input"
                        name="rate"
                        type="text"
                        placeholder="Rate"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        name="img"
                        className="input"
                        type="text"
                        placeholder="URL Image"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        className="input"
                        name="day"
                        type="date"
                        ref={register}
                      />
                    </div>
                    <div>
                      <button className="btn btn-success float-right">
                        submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="modal" id="addModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header text-center">
                  <h4 class="modal-title">Edit course</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div class="modal-body">
                  <form
                    className="editForm"
                    action=""
                    onSubmit={handleSubmit(AddCourse)}
                  >
                    <div className="box">
                      <input
                        className="input form-control"
                        name="idCourse"
                        type="text"
                        placeholder="ID Course"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        name="aliases"
                        className="input"
                        type="text"
                        placeholder="aliases"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        name="name"
                        className="input"
                        type="text"
                        placeholder="Course name"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        name="description"
                        className="input"
                        type="text"
                        placeholder="Description"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        name="addviews"
                        className="input"
                        type="text"
                        placeholder="Views"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        className="input"
                        name="addrate"
                        type="text"
                        placeholder="Rate"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        name="addimg"
                        className="input"
                        type="text"
                        placeholder="URL Image"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        className="input"
                        name="idGroupd"
                        placeholder="ID Group"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        className="input"
                        name="addday"
                        type="date"
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        className="input"
                        name="idTopicGroupd"
                        placeholder="ID Topic "
                        ref={register}
                      />
                    </div>
                    <div className="box">
                      <input
                        className="input"
                        name="username"
                        placeholder="user create"
                        ref={register}
                      />
                    </div>
                    <div>
                      <button className="btn btn-success float-right">
                        submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
