import React from "react";
import useForm from "react-hook-form";
import { dangNhap } from "../../../../redux/actions/KhoaHocAction";
export default function FormDangNhap(props) {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = async data => {
    let user = {
      taiKhoan: data.useName,
      matKhau: data.passWord
    };

    const userRes = await dangNhap(user);
    if (
      userRes !== "Tài khoản hoặc mật khẩu không đúng!" &&
      userRes !== undefined
    ) {
      alert("Login is success");
      // window.location.reload();
    } else {
      alert("UserName or Password is not true");
    }
    localStorage.setItem("user", JSON.stringify(userRes));

    props.login(userRes.hoTen);
  };
  return (
    <div className="dangNhap">
      <div className="dangNhap__box">
        <div className="dangNhap__box__form">
          <form className="form px-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__title text-center my-5  ">
              <h1>Login</h1>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i class="fas fa-user-circle    "></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="useName"
                ref={register({ required: true })}
              />
            </div>
            {errors.useName && errors.useName.type === "required" && (
              <p className="text-warning mx-3 px-5">UseName is required.</p>
            )}
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i class="fas fa-key    "></i>
                </span>
              </div>
              <input
                type="Password"
                className="form-control"
                placeholder="Password"
                name="passWord"
                ref={register({
                  required: true,
                  maxLength: 12
                })}
              />
            </div>
            {errors.passWord && errors.passWord.type === "required" && (
              <p className="text-warning mx-3 px-5">Password is required.</p>
            )}
            {errors.passWord && errors.passWord.type === "maxLength" && (
              <p className="text-warning mx-3 px-5">Max lenght less 12.</p>
            )}
            <div className="text-right form__forgot">
              <span>Forgot Password?</span>
            </div>
            <div className="text-center form__bottom my-3">
              <button>
                Login
                <span className="ml-2">
                  <i class="fas fa-sign-in-alt    "></i>
                </span>
              </button>
            </div>
            <div className="form__register">
              <span>Do you have account? </span>
              <span className=" btn  mx-2">Registered</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
