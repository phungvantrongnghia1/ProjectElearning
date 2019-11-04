import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../../../redux/actions/UserAction";
import { layDanhSachKhoaHoc } from "../../../../redux/actions/KhoaHocAction";
export default function PersonalPage() {
  const [keyRender, setKeyRender] = useState("Profile");
  const [listCourse, setListCourse] = useState([]);
  const tagProfile = useRef("");
  const tagCourse = useRef("");
  const tagAcount = useRef("");

  const dispatch = useDispatch();
  const UserReducer = useSelector(state => state.UserReducer.User);
  const KhoaHocReducer = useSelector(state => state.KhoaHocReducer.DSKH);
  const renderCourse = () => {
    return listCourse.map((item, index) => {
      return (
        <div className="row course__item m-2">
          <div className="col-3 col-lg-3">
            <img className="w-100" src={item.hinhAnh} alt="course" />
          </div>
          <div className="col-7 col-lg-7">
            <p>{item.tenKhoaHoc}</p>
            <p>Authour: Noname</p>
            <p>{item.moTa}</p>
            <div className="rate__icon">
              <span>
                <i class="fas fa-star    "></i>
              </span>
              <span>
                <i class="fas fa-star    "></i>
              </span>
              <span>
                <i class="fas fa-star    "></i>
              </span>
              <span>
                <i class="fas fa-star    "></i>
              </span>
              <span>
                <i class="fas fa-star    "></i>
              </span>
            </div>
          </div>
          <div className="col-2 col-lg-2">
            <div>
              <span>
                <i class="fas fa-book-open    "></i>
              </span>
              <p className="m-0">Learn</p>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderIF = () => {
    if (keyRender === "Profile") {
      return (
        <div className=" profile container">
          <div className="text-center">
            <h3>Public profile</h3>
            <p>Add information about yourself</p>
          </div>
          <h5 className="text-left">Basics:</h5>
          <form action="" className="form__IFor">
            <div className="text-center my-4 item__form my-3">
              <input className="w-75 py-2 pl-2 " type="text" value="Demo" />
            </div>
            <div className="text-center my-4 item__form my-3">
              <input
                className="w-75 pl-2 py-2"
                type="text"
                value="Demo@gmail.com"
              />
            </div>
            <div className="text-center my-4 item__form my-3">
              <input className="w-75 py-2 pl-2" type="text" value="123456789" />
            </div>
            <div className="text-center my-4 item__form my-3">
              <input className="w-75 py-2 pl-2" type="text" value="Học Viên" />
            </div>
          </form>
        </div>
      );
    } else if (keyRender === "Account") {
      return (
        <div className="tiitle text-center">
          <div className="account container p-0">
            <div className="title">
              <h3>Account</h3>
              <p>Edit your account settings and change your password here.</p>
            </div>
            <form action="">
              <div className="email w-100 item__form my-3">
                <span>
                  <input
                    className=" py-3 "
                    type="text"
                    value="Your email address is demo@gmail.com"
                  />
                </span>
                <span className="email__edit">
                  <i class="fas fa-edit    "></i>
                </span>
              </div>
              <div className="password item__form my-3">
                <input
                  className="w-75 py-3"
                  type="text"
                  placeholder="Enter Current Password"
                />
              </div>
              <div className="item__form">
                <input
                  className="w-75 py-3 "
                  type="text"
                  placeholder="Enter New Password"
                />
              </div>
              <div className="item__form">
                <input
                  className="w-75 py-3 "
                  type="text"
                  placeholder="Re-type New Password"
                />
              </div>
            </form>
            <div className="text-right">
              <button className="edit__submit btn btn-success ">
                Save edit
              </button>
            </div>
          </div>
        </div>
      );
    } else if (keyRender === "Course") {
      return (
        <div className="story container my-5">
          <div className="story__course mb-5">
            <div className="text-center">
              <h3>The course you have subscribed to </h3>
            </div>
          </div>
          {renderCourse()}
        </div>
      );
    }
  };
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    let userID = {
      taiKhoan: user.taiKhoan,
      matKhau: "123456"
    };

    let getUser = () => {
      dispatch(getDetail(userID));
    };
    getUser();
  }, []);
  useEffect(() => {
    let temp = [];
    UserReducer.map((item, index) => {
      KhoaHocReducer.find(Element => {
        if (Element.maKhoaHoc === item.maKhoaHoc) {
          temp = [...temp, Element];
        }
      });
    });
    setListCourse(temp);
  }, [UserReducer.length]);
  useEffect(() => {
    if (KhoaHocReducer.length === 0) {
      dispatch(layDanhSachKhoaHoc());
    }
  }, []);

  let chonseMenu = value => {
    tagProfile.current.classList.remove("active");
    tagCourse.current.classList.remove("active");
    tagAcount.current.classList.remove("active");
    if (value === "Profile") {
      tagProfile.current.classList.add("active");
      setKeyRender("Profile");
    } else if (value === "Course") {
      tagCourse.current.classList.add("active");
      setKeyRender("Course");
    } else if (value === "Account") {
      tagAcount.current.classList.add("active");
      setKeyRender("Account");
    }
  };
  return (
    <div className="Profile container-fluid  h-100">
      <div className="container  h-100">
        <div className="row h-100">
          <div className="col-3 col-lg-3 Profile__left m-0 px-4">
            <div className="avatar text-center mt-2">
              <span>
                <i class="fas fa-user-graduate    "></i>
              </span>
              <h3>Demo</h3>
            </div>
            <ul className="menu m-0">
              <li
                className="active"
                ref={tagProfile}
                onClick={() => chonseMenu("Profile")}
              >
                Profile
              </li>
              <li ref={tagCourse} onClick={() => chonseMenu("Course")}>
                Course was Registed
              </li>
              <li ref={tagAcount} onClick={() => chonseMenu("Account")}>
                Acount
              </li>
              <li>Exit</li>
            </ul>
          </div>
          <div className="col-9 col-lg-9 Profile__right p-0">{renderIF()}</div>
        </div>
      </div>
    </div>
  );
}
