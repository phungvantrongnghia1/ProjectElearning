import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormDangNhap from "../User/FormDangNhap/FormDangNhap";
import { Link } from "react-router-dom";
import { updateCart } from "../../../redux/actions/KhoaHocAction";
export default function Header() {
  const CartReducer = useSelector(state => state.KhoaHocReducer.Cart);

  const UserReducer = useSelector(state => state.UserReducer.keyLogin);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const [widthPage, setWidthPage] = useState(0);
  const [countCart, setCountCart] = useState(0);
  const [keyLogin, setLogin] = useState("Login");

  const [key, setKey] = useState(false);
  const [classLogin, setClassLogin] = useState(
    "font-user   form-inline my-2 my-lg-0"
  );
  useEffect(() => {
    setCountCart(CartReducer.length);
  }, [CartReducer.length]);
  window.addEventListener("scroll", () => {
    let y = window.pageYOffset;

    if (menuRef !== null) {
      if (y > 80) {
        menuRef.current.classList.remove("unactiveHeader");
        menuRef.current.classList.add("activeHeader");
        navRef.current.classList.add("activeNavHeader");
        // menuRef.current.style = "position: fixed;";
      } else {
        // menuRef.current.style = "position:  relative;";
        menuRef.current.classList.remove("activeHeader");
        navRef.current.classList.remove("activeNavHeader");
        menuRef.current.classList.add("unactiveHeader");
      }
    }
  });
  window.addEventListener("resize", () => {
    setWidthPage(window.innerWidth);
  });
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user !== null) {
      setLogin(user.hoTen);
      setClassLogin("font-user dangXuat form-inline my-2 my-lg-0");
      let localCart = JSON.parse(
        localStorage.getItem(`Cart__${user.taiKhoan}`)
      );
      if (localCart !== null) {
        dispatch(updateCart(localCart));
      }
    }
  }, []);
  // call dangNhap model
  const dangNhap = () => {
    if (keyLogin === "Login") {
      setKey(!key);
      dispatch({
        type: "SetKeyLogin",
        data: !UserReducer
      });
    }
  };
  const renderDangNhap = () => {
    if (UserReducer) return <FormDangNhap login={login}></FormDangNhap>;
    return "";
  };

  const login = value => {
    // console.log(value);
    setLogin(value);
    setClassLogin("font-user dangXuat form-inline my-2 my-lg-0");
    setKey(false);
  };
  const logout = () => {
    localStorage.removeItem("user");
    setClassLogin("font-user  form-inline my-2 my-lg-0");
    setLogin("Login");
    window.location.reload();
  };
  const scrollCourse = () => {
    window.scrollTo({
      top: 836,
      left: 0,
      behavior: "smooth"
    });
  };
  const scrollAsk = () => {
    console.log(window.pageYOffset);

    console.log(window.innerWidth);
    if (window.innerWidth > 968 && window.innerWidth < 1024) {
      window.scrollTo({
        top: 5519,
        left: 0,
        behavior: "smooth"
      });
    } else if (window.innerWidth > 1024 && window.innerWidth < 1200) {
      window.scrollTo({
        top: 4000,
        left: 0,
        behavior: "smooth"
      });
    } else if (window.innerWidth < 968 && window.innerWidth > 768) {
      window.scrollTo({
        top: 5520,
        left: 0,
        behavior: "smooth"
      });
    } else if (window.innerWidth < 768 && window.innerWidth > 576) {
      window.scrollTo({
        top: 6435,
        left: 0,
        behavior: "smooth"
      });
    } else if (window.innerWidth <= 576) {
      window.scrollTo({
        top: 7357,
        left: 0,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({
        top: 3800,
        left: 0,
        behavior: "smooth"
      });
    }
  };
  return (
    <div className="Header " ref={menuRef}>
      <nav className="navbar navbar-expand-sm navbar-light  " ref={navRef}>
        <a className="Header__brank navbar-brand" href="/#">
          <i className="fas fa-graduation-cap    " />

          <p className="h5"> DeVDeep</p>
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="Header__nav navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/#">
                <i className="fas fa-home" />
                Home <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle btn"
                onClick={() => scrollCourse()}
              >
                <i className="fas fa-book-open    " />
                Courses
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link btn" onClick={() => scrollAsk()}>
                <i className="fas fa-question-circle    " />
                Question
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                <i className="fas fa-file-code    " />
                DOC
              </a>
            </li>
          </ul>
          <div className="Header__cart mr-4">
            <Link to="/shoppingcar">
              <span>{countCart}</span>
              <span>
                <i className="fas fa-shopping-cart    " />
              </span>
            </Link>
          </div>
          <form className={classLogin}>
            <i className="fas fa-user-graduate" />

            <button
              className="btn  my-2 my-sm-0"
              type="button"
              onClick={() => dangNhap()}
            >
              {keyLogin}
            </button>
            <div className="dangNhap__sub">
              <div className="sub__box">
                <ul className="my-2">
                  <li className="my-2 px-2">
                    <span>
                      <i className="fas fa-address-card    " />
                    </span>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="my-2 px-2" onClick={() => logout()}>
                    <span>
                      <i className="fas fa-sign-in-alt    " />
                    </span>
                    <Link to="/">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </nav>
      {renderDangNhap()}
    </div>
  );
}
