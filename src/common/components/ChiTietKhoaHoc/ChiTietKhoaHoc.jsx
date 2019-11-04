/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layChiTietKhoaHoc } from "../../../redux/actions/KhoaHocAction";
import Footer from "../Footer/Footer";
import { async } from "q";
export default function detailKhoalearn(props) {
  const [chiTiet, setChiTiet] = useState("");
  let [userCourse, setUserCourse] = useState({});
  const dispatch = useDispatch("");
  const likeIcon = useRef("");

  let key = true;
  useEffect(() => {
    //FE_GP09
    let idCourse = props.match.params.maKhoaHoc;
    let layChiTiet = async () => {
      let a = await layChiTietKhoaHoc(idCourse);
      setChiTiet(a);
    };
    layChiTiet();
  }, []);
  useEffect(() => {
    setUserCourse({ ...chiTiet.nguoiTao });
  }, [chiTiet]);
  console.log(userCourse);
  const btnLike = () => {
    key = !key;
    if (!key) {
      likeIcon.current.style = "color:red;";
    } else {
      likeIcon.current.style = "color:gray;";
    }
    likeIcon.current.className = "fas fa-heart  add";
    console.log(likeIcon.current);
  };
  return (
    <div className="container-fluid detail w-100 h-100 mx-0 px-0">
      <div className="detail__title ">
        <div className="container mx-auto">
          <h2>Course details</h2>
          <div>HOME/COURSE/{chiTiet.tenKhoaHoc}</div>
        </div>
      </div>
      <div className="detail__content ">
        <div className="content mx-5 px-5  row">
          <div className="col-8 col-sm-8 col-lg-7 px-0">
            <h1 className="content__name mt-5">{chiTiet.tenKhoaHoc}</h1>
            <div className="row content__info mx-0">
              <div className="col-lg-3 author px-0">
                <div className="row w-100 m-0">
                  <div className="col-lg-4 author__info px-0">
                    <img
                      src="https://cyberlearn-21.web.app/img/teacher3.jpg"
                      alt="a"
                    />
                  </div>
                  <div className="col-lg-7 px-0">
                    <p className="mb-0">Teacher</p>
                    <h5>{userCourse.hoTen}</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 author__section px-0">
                <div className="row w-100 m-0">
                  <div className="col-lg-2 px-0">
                    <span className="section__icon">
                      <i class="fas fa-book-open    "></i>
                    </span>
                  </div>
                  <div className="col-lg-10 px-0">
                    <p className="mb-0">Category</p>
                    <h5>Apache, Computer Science, PHP, CSS, JS</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 author__rate px-0">
                <div>
                  <span>
                    <i className="fas fa-star    " />
                    <i className="fas fa-star    " />
                    <i className="fas fa-star    " />
                    <i className="fas fa-star-half-alt    " />
                    <i class="far fa-star"></i>
                  </span>
                  <span>3.9</span>
                </div>
                <div>395 reviews</div>
              </div>
            </div>
            <div className="content__introduce">
              <p className="py-3">
                Hi! Welcome to the Web Developer Bootcamp, the only course you
                need to learn web development. There are a lot of options for
                online developer training, but this course is without a doubt
                the most comprehensive and effective on the market.
              </p>
            </div>
            <div className="content__learn ">
              <p className="mb-0 content__learn__title">
                <h4 className="mt-2 ml-2">
                  <span className="mx-2">
                    <i className="fas fa-snowflake    " />
                  </span>
                  What you'll learn
                </h4>
              </p>
              <div className="row px-3">
                <div className="col-lg-6">
                  <div className="content__learn__item">
                    <span className="mr-3 content__learn__icon">
                      <i className="fas fa-check-double    " />
                    </span>
                    <span>
                      Learn to use Python professionally, learning both Python 2
                      and Python 3!
                    </span>
                  </div>
                  <div className="content__learn__item">
                    <span className="mr-3 content__learn__icon">
                      <i className="fas fa-check-double    " />
                    </span>
                    <span>
                      Learn advanced Python features, like the collections
                      module and how to work with timestamps!
                    </span>
                  </div>
                  <div className="content__learn__item">
                    <span className="mr-3 content__learn__icon">
                      <i className="fas fa-check-double    " />
                    </span>
                    <span>Understand complex topics, like decorators.</span>
                  </div>
                  <div className="content__learn__item">
                    <span className="mr-3 content__learn__icon">
                      <i className="fas fa-check-double    " />
                    </span>
                    <span>
                      Get an understanding of how to create GUIs in the Jupyter
                      Notebook system!
                    </span>
                  </div>
                  <div className="content__learn__item">
                    <span className="mr-3 content__learn__icon">
                      <i className="fas fa-check-double    " />
                    </span>
                    <span>
                      Create games with Python, like Tic Tac Toe and Blackjack!
                    </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="content__learn__item">
                    <span className="mr-3 content__learn__icon">
                      <i className="fas fa-check-double    " />
                    </span>
                    <span>
                      Learn to use Object Oriented Programming with classes!
                    </span>
                  </div>
                  <div className="content__learn__item">
                    <span className="mr-3 content__learn__icon">
                      <i className="fas fa-check-double    " />
                    </span>
                    <span>
                      Understand how to use both the Jupyter Notebook and create
                      .py files
                    </span>
                  </div>
                  <div className="content__learn__item">
                    <span className="mr-3 content__learn__icon">
                      <i className="fas fa-check-double    " />
                    </span>
                    <span>
                      Build a complete understanding of Python! from the ground
                      up!
                    </span>
                  </div>
                  <div className="content__learn__item">
                    <span className="mr-3 content__learn__icon">
                      <i className="fas fa-check-double    " />
                    </span>
                    <span>
                      Learn to use Python professionally, learning both Python 2
                      and Python 3!
                    </span>
                  </div>
                  <div className="content__learn__item">
                    <span className="mr-3 content__learn__icon">
                      <i className="fas fa-check-double    " />
                    </span>
                    <span>
                      Learn to use Python professionally, learning both Python 2
                      and Python 3!
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content__video my-5">
              <h4 className="my-3">Course content</h4>
              <div className="video my-3">
                <div className="video__section ">
                  <span>SECTION 1: INTRODUCTION</span>
                  <span className="btn btn-success ml-3 video__section__btn">
                    Preview
                  </span>
                </div>
                <h5 className="my-3  pl-4">Lessons</h5>
                <ul className="video__box mt-4 ml-4">
                  <li className="py-2 video__box__item my-2">
                    <span className="mx-2">
                      <i className="fas fa-play    " />
                    </span>
                    <span className="item__name">
                      How to obtain your Certificate of Completion for this
                      course
                    </span>
                    <span className="float-right item__time">
                      <span className="mx-1">
                        <i className="fas fa-clock    " />
                      </span>
                      <span>15:55</span>
                    </span>
                  </li>
                  <li className="py-2 video__box__item my-2">
                    <span className="mx-2">
                      <i className="fas fa-play    " />
                    </span>
                    <span className="item__name">Customize The Workspace</span>
                    <span className="float-right item__time">
                      <span className="mx-1">
                        <i className="fas fa-clock    " />
                      </span>
                      <span>10:00</span>
                    </span>
                  </li>
                  <li className="py-2 video__box__item my-2">
                    <span className="mx-2">
                      <i className="fas fa-play    " />
                    </span>
                    <span className="item__name">
                      Working Files – Download These First
                    </span>
                    <span className="float-right item__time">
                      <span className="mx-1">
                        <i className="fas fa-clock    " />
                      </span>
                      <span>8:45</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="video mt-5 py-5">
                <div className="video__section ">
                  <span>SECTION 2: WORKSPACE AND PREFERENCES</span>
                  <span className="btn btn-success ml-3 video__section__btn">
                    Preview
                  </span>
                </div>
                <h5 className="my-4  pl-3">Lessons</h5>
                <ul className="video__box mt-4">
                  <li className="py-2 video__box__item my-2">
                    <span className="mx-2">
                      <i className="fas fa-play    " />
                    </span>
                    <span className="item__name">
                      Get In Total Control Of The Control Panel
                    </span>
                    <span className="float-right item__time">
                      <span className="mx-1">
                        <i className="fas fa-clock    " />
                      </span>
                      <span>35:00</span>
                    </span>
                  </li>
                  <li className="py-2 video__box__item my-2">
                    <span className="mx-2">
                      <i className="fas fa-play    " />
                    </span>
                    <span className="item__name">
                      The Magic Of Auto Recovery
                    </span>
                    <span className="float-right item__time">
                      <span className="mx-1">
                        <i className="fas fa-clock    " />
                      </span>
                      <span>95:55</span>
                    </span>
                  </li>
                  <li className="py-2 video__box__item my-2">
                    <span className="mx-2">
                      <i className="fas fa-play    " />
                    </span>
                    <span className="item__name">Customize The Workspace</span>
                    <span className="float-right item__time">
                      <span className="mx-1">
                        <i className="fas fa-clock    " />
                      </span>
                      <span>55:55</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-center content__video__seemore">
                <button className="btn btn__seemore">
                  See more
                  <span className="px-2">
                    <i className="fas fa-angle-double-right    " />
                  </span>
                </button>
              </div>
            </div>
            <div className="content__review pt-5">
              <h3>Student feedback</h3>
              <div className="row">
                <div className="col-lg-3 review__rating text-center">
                  <p className="h1 mb-2">4.5</p>
                  <div>
                    <i className="fas fa-star    " />
                    <i className="fas fa-star    " />
                    <i className="fas fa-star    " />
                    <i className="fas fa-star    " />
                    <i className="fas fa-star-half-alt    " />
                  </div>

                  <p className="mt-2">Cuorse Rating</p>
                </div>
                <div className="col-lg-6">
                  <div class="progress my-2">
                    <div class="progress-bar  progress__bar__1 w-75"></div>
                  </div>
                  <div class="progress my-2">
                    <div class="progress-bar w-50  progress__bar__2"></div>
                  </div>
                  <div class="progress my-2">
                    <div class="progress-bar progress__bar__3 w-5"></div>
                  </div>
                  <div class="progress my-2">
                    <div class="progress-bar progress__bar__4 w-5"></div>
                  </div>
                  <div class="progress my-2">
                    <div class="progress-bar progress__bar__5 w-5"></div>
                  </div>
                </div>
                <div className="col-lg-3 review__percent">
                  <div className="pt-2">
                    <i class="fas fa-star    "></i>
                    <i class="fas fa-star    "></i>
                    <i class="fas fa-star    "></i>
                    <i class="fas fa-star    "></i>
                    <i class="fas fa-star    "></i>
                    <span className="ml-3">75%</span>
                  </div>
                  <div className="pt-2">
                    <i class="fas fa-star    "></i>
                    <i class="fas fa-star    "></i>
                    <i class="fas fa-star    "></i>
                    <i class="fas fa-star    "></i>
                    <i class="far fa-star"></i>
                    <span className="ml-3"> 55%</span>
                  </div>
                  <div className="pt-2">
                    <i class="fas fa-star    "></i>
                    <i class="fas fa-star    "></i>
                    <i class="fas fa-star    "></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <span className="ml-3">25%</span>
                  </div>
                  <div className="pt-2">
                    <i class="fas fa-star    "></i>
                    <i class="fas fa-star    "></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <span className="ml-3"> 1%</span>
                  </div>
                  <div className="pt-2">
                    <i class="fas fa-star    "></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <span className="ml-3">1%</span>
                  </div>
                </div>
              </div>
              <div className="review__comment my-5 py-5 ">
                <div className="row my-5">
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-lg-3 px-0 comment__avatar text-center">
                        <span className="">Up</span>
                      </div>
                      <div className="col-lg-9 comment__name">
                        <p className="mb-0">Ajoin Cean</p>
                        <p className="mb-0">17/5/2019</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 comment__content">
                    <div>
                      <i class="fas fa-star    "></i>
                      <i class="fas fa-star    "></i>
                      <i class="fas fa-star    "></i>
                      <i class="fas fa-star    "></i>
                      <i class="fas fa-star    "></i>
                    </div>
                    <p>
                      everything is awesome about this course, but a real time
                      project(industry level project) demo at the end would have
                      given a very good finishing touch.
                    </p>
                    <div className="comment__select">
                      <span>Was this review helpful?</span>
                      <span className="btn">Yes</span>
                      <span className="btn">No</span>
                      <span>Report</span>
                    </div>
                  </div>
                </div>
                <div className="row my-5">
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-lg-3 px-0 comment__avatar text-center">
                        <span className="">An</span>
                      </div>
                      <div className="col-lg-9 comment__name">
                        <p className="mb-0">Alan walk</p>
                        <p className="mb-0">10/5/2019</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 comment__content">
                    <div>
                      <i class="fas fa-star    "></i>
                      <i class="fas fa-star    "></i>
                      <i class="fas fa-star    "></i>
                      <i class="fas fa-star    "></i>
                      <i class="fas fa-star    "></i>
                    </div>
                    <p>
                      everything is awesome about this course, but a real time
                      project(industry level project) demo at the end would have
                      given a very good finishing touch.
                    </p>
                    <div className="comment__select">
                      <span>Was this review helpful?</span>
                      <span className="btn">Yes</span>
                      <span className="btn">No</span>
                      <span>Report</span>
                    </div>
                  </div>
                </div>
                <div className="row my-5">
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-lg-3 px-0 comment__avatar text-center">
                        <span className="">JU</span>
                      </div>
                      <div className="col-lg-9 comment__name">
                        <p className="mb-0">Justin</p>
                        <p className="mb-0">05/1/2019</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 comment__content">
                    <div>
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                      <i className="fas fa-star    " />
                    </div>

                    <p>
                      everything is awesome about this course, but a real time
                      project(industry level project) demo at the end would have
                      given a very good finishing touch.
                    </p>
                    <div className="comment__select">
                      <span>Was this review helpful?</span>
                      <span className="btn">Yes</span>
                      <span className="btn">No</span>
                      <span>Report</span>
                    </div>
                  </div>
                </div>
                <div className="btn__seemore text-center">
                  <button className="btn btn__seemore">
                    See more
                    <span className="px-2">
                      <i class="fas fa-angle-double-right    "></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ben phải */}
          <div className="col-4 col-sm-4 col-lg-5 mt-3">
            <div className="card">
              <div className="card-img-top text-center pt-5">
                <img className="w-75 h-75" src={chiTiet.hinhAnh} alt="#" />
              </div>
              <div className="card-body">
                <div className="card__gia row">
                  <div className="col-lg-6" onClick={() => btnLike()}>
                    <span className="gia__icon">
                      <i class="fas fa-heart    " ref={likeIcon}></i>
                    </span>
                    <span className="gia__like">Add to wishlist </span>
                  </div>
                  <div className="col-lg-6">
                    <span className="gia__gia">$19.99</span>
                  </div>
                </div>
                <div className="card__button text-center py-3">
                  <div className="content__learn__item">
                    <button className="add w-75  my-2">ADD TO CARD</button>
                  </div>
                  <div>
                    <button className="buy w-75  my-2">BUY NOW</button>
                  </div>
                </div>
                <div className="card__Enrolled row card__box">
                  <div className="col-lg-6 col-12">
                    <p>
                      Enrolled: <b>3 students</b>
                    </p>
                  </div>
                  <div className="col-lg-6 col-12 text-right">
                    <span classname="card__box__right  ">
                      <i className="fas fa-user    " />
                    </span>
                  </div>
                </div>
                <div className="card__Duration row card__box">
                  <div className="col-lg-6 col-12">
                    <p>
                      Duration: <b>6 hours</b>
                    </p>
                  </div>
                  <div className="col-lg-6 col-12 text-right">
                    <span classname="card__box__right ">
                      <i className="fas fa-clock    " />
                    </span>
                  </div>
                </div>
                <div className="card__Lectures row card__box">
                  <div className="col-lg-6 col-12">
                    <p>
                      Lectures: <b>6</b>
                    </p>
                  </div>
                  <div className="col-lg-6 col-12 text-right">
                    <span classname="card__box__right ">
                      <i className="fas fa-volume-up    " />
                    </span>
                  </div>
                </div>
                <div className="card__Video row card__box">
                  <div className="col-lg-6 col-12">
                    <p>
                      Video: <b> 3 hours</b>
                    </p>
                  </div>
                  <div className="col-lg-6 col-12 text-right">
                    <span classname="card__box__right ">
                      <i className="fas fa-video    " />
                    </span>
                  </div>
                </div>
                <div className="card__Level row card__box">
                  <div className="col-lg-6 col-12">
                    <p>
                      Level: <b>3 Beginner</b>
                    </p>
                  </div>
                  <div className="col-lg-6 col-12 text-right">
                    <span classname="card__box__right ">
                      <i className="fas fa-level-up-alt    " />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
