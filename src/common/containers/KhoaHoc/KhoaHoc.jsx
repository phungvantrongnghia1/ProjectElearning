import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  Fragment
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachKhoaHoc } from "../../../redux/actions/KhoaHocAction";
import ItemPhim from "../../components/ItemPhim/ItemPhim";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import DongHo from "../../components/DongHo/DongHo";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import ItemPimSlide from "../../components/itemPhimSlide/ItemPhimSlide";
export default function KhoaHoc() {
  const KhoaHocReducer = useSelector(state => state.KhoaHocReducer);
  const [, setDSRender] = useState([]);
  const [itemCarou, setItemCarou] = useState(5);
  const dispatch = useDispatch();
  const danhMuc = useRef("Development");
  const mangChon = useRef("");
  const timKiem = useRef("");
  const courseRef = useRef(null);
  const authorRef = useRef(null);
  const blogone = useRef(null);
  const blogtwo = useRef(null);
  const blogthree = useRef(null);
  const [keyLoad, setKeyLoad] = useState(true);

  useEffect(() => {
    if (keyLoad) {
      console.log("vo");
      window.addEventListener("scroll", () => {
        let y = window.pageYOffset;

        if (y > 380) {
          courseRef.current.classList.add("activeCourse");
        }
        if (y > 2852) {
          authorRef.current.classList.add("activeAuthor");
        }
        if (y > 3324) {
          blogone.current.classList.add("activeBog");
          setTimeout(() => {
            blogtwo.current.classList.add("activeBog");
          }, 500);
          setTimeout(() => {
            blogthree.current.classList.add("activeBog");
          }, 1000);
        }
      });
    } else {
      console.log("wrong!");
    }
    return () => {
      window.removeEventListener("scroll", () => {
        setKeyLoad(false);
        console.log("false roi");
      });
    };
  }, []);
  const reducer = (state, action) => {
    switch (action) {
      case "All": {
        let ds = KhoaHocReducer.DSKH.reduce((temp, item) => {
          return [...temp, item];
        }, []);
        return ds;
      }
      case "front-end": {
        let ds = KhoaHocReducer.DSKH.reduce((temp, item) => {
          if (item.biDanh === "front-end") {
            return [...temp, item];
          }
          return [...temp];
        }, []);
        return ds;
      }
      case "back-end": {
        let ds = KhoaHocReducer.DSKH.reduce((temp, item) => {
          if (item.biDanh === "back-end") {
            return [...temp, item];
          }
          return [...temp];
        }, []);
        return ds;
      }
      case "full-stack": {
        let ds = KhoaHocReducer.DSKH.reduce((temp, item) => {
          if (item.biDanh === "full-stack") {
            return [...temp, item];
          }
          return [...temp];
        }, []);
        return ds;
      }
      case "programming-c-language": {
        let ds = KhoaHocReducer.DSKH.reduce((temp, item) => {
          if (item.biDanh === "programming-c-language") {
            return [...temp, item];
          }
          return [...temp];
        }, []);
        return ds;
      }
      case "null": {
        return null;
      }
      default:
        return KhoaHocReducer.DSKH;
    }
  };

  const [dsRender, dispatchDSrender] = useReducer(reducer, []);
  const onChangeChonse = () => {
    if (danhMuc.current.value === "Development") {
      dispatchDSrender(mangChon.current.value);
    } else {
      dispatchDSrender("null");
    }
  };
  useEffect(() => {
    if (window.innerWidth < 576) {
      setItemCarou(2);
    } else if (window.innerWidth > 912) {
      setItemCarou(5);
    } else if (window.innerWidth > 576) {
      setItemCarou(3);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 576) {
        setItemCarou(2);
      } else if (window.innerWidth < 912) {
        setItemCarou(3);
      } else if (window.innerWidth < 768) {
        setItemCarou(2);
      } else if (window.innerWidth > 912) {
        setItemCarou(5);
      }
    });
  }, []);
  useEffect(() => {
    dispatch(layDanhSachKhoaHoc());
  }, [dispatch]);
  useEffect(() => {
    dispatchDSrender("All");
    setDSRender(KhoaHocReducer.DSKH);
  }, [KhoaHocReducer.DSKH]);

  const renderKhoaHoc = () => {
    if (dsRender !== "" && dsRender !== undefined && dsRender !== null) {
      return dsRender.map((item, index) => {
        if ((index + 1) % 4 === 0) {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 pb-4" key={index}>
              <ItemPhim item={item} sendKey="specail"></ItemPhim>
            </div>
          );
        }
        return (
          <div className="col-sm-6 col-md-4 col-lg-3 pb-4" key={index}>
            <ItemPhim item={item}></ItemPhim>
          </div>
        );
      });
    } else if (dsRender === null) {
      return (
        <div className="w-100 my-5 text-center">
          <p className="h3">
            <i>Không có khóa học tương ứng !</i>
          </p>
          <i class="fas fa-search-minus  my-5 icon__search-minus "></i>
        </div>
      );
    }
    return KhoaHocReducer.DSKH.map((item, index) => {
      return (
        <div className="col-lg-3 pb-4" key={index}>
          <ItemPhim item={item}></ItemPhim>
        </div>
      );
    });
  };

  return (
    <div className="khoahoc ">
      {KhoaHocReducer.DSKH.length === 0 ? (
        <LoadingPage></LoadingPage>
      ) : (
        <Fragment>
          <div className="khoahoc__title ">
            <div className="khoahoc__title__form  container">
              <div className="">
                <h1 className="text-white">LEARN FROM THE BEST. ANYWHERE.</h1>
                <h4 className="text-white mb-3">
                  Learn technology, creative and business skills you can use
                  today.
                </h4>
              </div>
              <div className="row w-100 mt-5 mx-0">
                <div className="col-lg-3 col-md-3 col-sm-4 w-100">
                  <select
                    className="w-100 khoahoc__title__section"
                    ref={danhMuc}
                    onChange={() => onChangeChonse()}
                  >
                    <option value="Development">Development</option>
                    <option value="Design">Design</option>
                    <option value="Business">Business</option>
                    <option value="English">English</option>
                  </select>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 w-100">
                  <select
                    className="w-100 khoahoc__title__section"
                    ref={mangChon}
                    onChange={() => onChangeChonse()}
                  >
                    <option value="All">All </option>
                    <option value="front-end">Font End </option>
                    <option value="back-end">Back End</option>
                    <option value="full-stack">Full Stack</option>
                    <option value="programming-c-language">
                      Thinking Programming
                    </option>
                  </select>
                </div>
                <div className=" col-lg-3 col-md-3 col-sm-4 w-100">
                  <input
                    ref={timKiem}
                    className="w-100 khoahoc__title__section"
                    placeholder="Key Search"
                    type="text"
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 mx-auto w-100">
                  <button className="btn w-100 btn-warning btn__search">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="khoahoc__content container-fluid mb-5 m-0 p-0 ">
            <div className="khoahoc__carousel pt-5 container-fluid p-0">
              <div className="container p-0 ">
                <h1>Featured courses</h1>
                <OwlCarousel
                  className="owl-theme mt-5"
                  autoplay={true}
                  rtlClass="owl-rtl"
                  autoplayTimeout={5000}
                  items={itemCarou}
                  loop
                  margin={10}
                  nav={false}
                >
                  {KhoaHocReducer.DSKH.map((item, index) => {
                    return (
                      <div className="item" key={index}>
                        <ItemPimSlide item={item}></ItemPimSlide>
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
            </div>

            <div className="khoahoc__content__all container  pt-2 ">
              <div className="my-5 content__title">
                <span className=" h1  mr-3">Courses</span>
                <span className="box">
                  <span className="mr-1 content__title__icon">
                    <i className="fas fa-home    " />
                  </span>
                  <span className="mx-1 content__title__icon">
                    <i className="fas fa-chevron-right    " />
                  </span>
                  <span className="content__title__text">
                    {danhMuc.current.value}
                  </span>
                  <span className="mx-1 content__title__icon">
                    <i className="fas fa-chevron-right    " />
                  </span>
                  <span className="content__title__text">
                    {mangChon.current.value}
                  </span>
                </span>
              </div>
              <div className=" row content__box" ref={courseRef}>
                {renderKhoaHoc()}
              </div>
            </div>
          </div>
          <div className="container mb-5">
            <DongHo></DongHo>
          </div>

          <div className="container tacgia  mb-5">
            <div className="row mb-3">
              <h3>Top Rating Instructors</h3>
            </div>
            <div className="row mx-5 px-5 tacgia__box" ref={authorRef}>
              <div className="col-lg-2 col-sm-4 pb-5 tacgia__item text-center">
                <div className="">
                  <img
                    className="tacgia__item__img"
                    src="https://cyberlearn-21.web.app/img/teacher.jpg"
                    alt=""
                  />
                  <h5 className="pt-3">George Richards</h5>
                  <span className="tacgia__item__danhgia">
                    <div>
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                    </div>

                    <span>4.67</span>
                  </span>
                  <p className="tacgia__item__review">3 Reviews</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 pb-5 tacgia__item text-center">
                <div className="">
                  <img
                    className="tacgia__item__img"
                    src="https://cyberlearn-21.web.app/img/teacher2.jpg "
                    alt=""
                  />
                  <h5 className="pt-3">Namrata Parmar</h5>
                  <span className="tacgia__item__danhgia">
                    <div>
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                    </div>

                    <span>5</span>
                  </span>
                  <p className="tacgia__item__review">25 Reviews</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 pb-5 tacgia__item text-center">
                <div className="">
                  <img
                    className="tacgia__item__img"
                    src="https://cyberlearn-21.web.app/img/teacher3.jpg"
                    alt=""
                  />
                  <h5 className="pt-3">Robert Richards</h5>
                  <span className="tacgia__item__danhgia">
                    <div>
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                    </div>

                    <span>4.5</span>
                  </span>
                  <p className="tacgia__item__review">6 Reviews</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 pb-5 tacgia__item text-center">
                <div className="">
                  <img
                    className="tacgia__item__img"
                    src="https://cyberlearn-21.web.app/img/teacher4.jpg"
                    alt=""
                  />
                  <h5 className="pt-3">Robert Bolovan</h5>
                  <span className="tacgia__item__danhgia">
                    <div>
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                    </div>

                    <span>3.2</span>
                  </span>
                  <p className="tacgia__item__review">1 Reviews</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 pb-5 tacgia__item text-center">
                <div className="">
                  <img
                    className="tacgia__item__img"
                    src="https://cyberlearn-21.web.app/img/teacher5.jpg"
                    alt=""
                  />
                  <h5 className="pt-3">George Clintony</h5>
                  <span className="tacgia__item__danhgia">
                    <div>
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                    </div>

                    <span>4</span>
                  </span>
                  <p className="tacgia__item__review">2 Reviews</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-3 col-md-4  pb-5 tacgia__item text-center">
                <div className="">
                  <img
                    className="tacgia__item__img"
                    src="https://cyberlearn-21.web.app/img/teacher6.jpg"
                    alt=""
                  />
                  <h5 className="pt-3">Barbara Doleyara</h5>
                  <span className="tacgia__item__danhgia">
                    <div>
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                    </div>

                    <span>5</span>
                  </span>
                  <p className="tacgia__item__review">6 Reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="khoahoc__log my-5 container  mx-auto">
            <h3 className="my-5 khoahoc__log__title">Our log</h3>
            <div className="row ">
              <div
                className="col-lg-4 col-md-4 col-sm-6 khoahoc__log__item"
                ref={blogone}
              >
                <div className="card ">
                  <img
                    className="https://cyberlearn-21.web.app/img/blog5.jpeg"
                    src="https://cyberlearn-21.web.app/img/blog5.jpeg"
                    alt=""
                  />
                  <div className="card-body px-0">
                    <h4 className="card-title p-2">
                      100% compatible WPML plugin
                    </h4>
                    <div className="row w-100 mx-0 py-2">
                      <div className="col-lg-2 mx-0">
                        <p className="mb-0">25</p>
                        <p className="mb-0">Oct</p>
                      </div>
                      <div className="col-lg-10 px-0">
                        <span className="span__box">
                          <span className="pl-1">
                            <i className="fas fa-comment    "></i>02
                          </span>
                          <span className="px-3">
                            <i className="fas fa-eye    "></i>05
                          </span>
                          <span className="float-right px-2 span__box__tacgia">
                            Post By <i>join Dea</i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <p className="px-2">
                      Solve challenges Action Against Hunger citizenry Martin
                      Luther King Jr. Combat malaria, mobilize lasting change
                      billionaire philanthropy revitalize
                    </p>
                    <button className="btn button">Read more</button>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-6 khoahoc__log__item"
                ref={blogtwo}
              >
                <div className="card ">
                  <img
                    className="https://cyberlearn-21.web.app/img/blog5.jpeg"
                    src="https://cyberlearn-21.web.app/img/blog4.jpeg"
                    alt="https://cyberlearn-21.web.app/img/blog4.jpeg"
                  />
                  <div className="card-body px-0">
                    <h4 className="card-title p-2">
                      Responsive and retina ready
                    </h4>
                    <div className="row w-100 mx-0 py-2">
                      <div className="col-lg-2 mx-0">
                        <p className="mb-0">20</p>
                        <p className="mb-0">Sep</p>
                      </div>
                      <div className="col-lg-10 px-0">
                        <span className="span__box">
                          <span className="pl-1">
                            <i className="fas fa-comment    "></i>02
                          </span>
                          <span className="px-3">
                            <i className="fas fa-eye    "></i>05
                          </span>
                          <span className="float-right px-2 span__box__tacgia">
                            Post By <i>join Dea</i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <p className="px-2">
                      Solve challenges Action Against Hunger citizenry Martin
                      Luther King Jr. Combat malaria, mobilize lasting change
                      billionaire philanthropy revitalize
                    </p>
                    <button className="btn button">Read more</button>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-12 khoahoc__log__item"
                ref={blogthree}
              >
                <div className="card ">
                  <img
                    className="https://cyberlearn-21.web.app/img/blog5.jpeg"
                    src="https://cyberlearn-21.web.app/img/blog2.jpeg"
                    alt=""
                  />
                  <div className="card-body px-0">
                    <h4 className="card-title p-2">Use HTML5 and CSS3</h4>
                    <div className="row w-100 mx-0 py-2">
                      <div className="col-lg-2 mx-0">
                        <p className="mb-0">01</p>
                        <p className="mb-0">Nov</p>
                      </div>
                      <div className="col-lg-10 px-0">
                        <span className="span__box">
                          <span className="pl-1">
                            <i className="fas fa-comment    "></i>02
                          </span>
                          <span className="px-3">
                            <i className="fas fa-eye    "></i>05
                          </span>
                          <span className="float-right px-2 span__box__tacgia">
                            Post By <i>join Dea</i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <p className="px-2">
                      Solve challenges Action Against Hunger citizenry Martin
                      Luther King Jr. Combat malaria, mobilize lasting change
                      billionaire philanthropy revitalize
                    </p>
                    <button className="btn button">Read more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </Fragment>
      )}
    </div>
  );
}
