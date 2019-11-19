import React from "react";
import { useDispatch } from "react-redux";
import useForm from "react-hook-form";
import { dangNhap } from "../../../../redux/actions/KhoaHocAction";
export default function LoginAdmin() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const dispath = useDispatch();
  const login = async data => {
    console.log(data);
    let user = {
      taiKhoan: data.Name,
      matKhau: data.Password
    };
    const userRes = await dangNhap(user);
    if (
      userRes !== "Tài khoản hoặc mật khẩu không đúng!" &&
      userRes !== undefined
    ) {
      dispath({
        type: "SetKeyLogin",
        data: false
      });
      alert("Login is success");
      window.location.reload("/admin");
    } else {
      alert("UserName or Password is not true");
    }
    localStorage.setItem("user", JSON.stringify(userRes));
  };
  return (
    <div className="center-container loginAdmin w-100 h-100">
      <div className="header-w3l">
        <h1>Admin Login Form</h1>
      </div>

      <div className="main-content-agile">
        <div className="sub-main-w3">
          <div className="wthree-pro">
            <h2>Login Quick</h2>
          </div>
          <form onSubmit={handleSubmit(login)}>
            <div className="pom-agile">
              <input
                placeholder="Username"
                name="Name"
                className="user"
                type="text"
                ref={register}
              />
              <span className="icon1">
                <i className="fa fa-user" aria-hidden="true" />
              </span>
            </div>
            <div className="pom-agile">
              <input
                placeholder="Password"
                name="Password"
                className="pass"
                type="password"
                ref={register}
              />
              <span className="icon2">
                <i className="fa fa-unlock" aria-hidden="true" />
              </span>
            </div>
            <div className="sub-w3l">
              <h6>
                <a href="#">Forgot Password?</a>
              </h6>
              <div className="right-w3l">
                <input type="submit" defaultValue="Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
