import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ItemPimSlide from "../itemPhimSlide/ItemPhimSlide";
import LoadingPage from "../LoadingPage/LoadingPage";
export default function Carousel() {
  const KhoaHocReducer = useSelector(state => state.KhoaHocReducer);
  const [DSrender, setDSRender] = useState([]);

  const [itemCarou, setItemCarou] = useState(3);
  console.log(KhoaHocReducer.DSKH.length);
  useEffect(() => {
    if (window.innerWidth < 576) {
      setItemCarou(2);
    } else if (window.innerWidth > 912) {
      setItemCarou(3);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 576) {
        setItemCarou(2);
      } else {
        setItemCarou(3);
      }
    });
  }, []);

  useEffect(() => {
    setDSRender(KhoaHocReducer.DSKH);
  }, [KhoaHocReducer.DSKH]);
  console.log(DSrender);
  const kiemTraMoTa = (name = "") => {
    if (name.length < 150) {
      return <p className="card-title">{name}</p>;
    } else {
      return <p className="card-title ">{name.substring(0, 150)}....</p>;
    }
  };
  const renderCarousel = () => {
    if (KhoaHocReducer.DSKH.length !== 0) {
      return (
        <Fragment>
          <div className="col-12 col-lg-6 Carousel__right">
            <span className="start">
              <Link to="/khoahoc">
                <img
                  src="https://www.howkteam.vn/Content/images/index/hocngay.png"
                  alt=""
                />
              </Link>
            </span>
          </div>
          <div className="col-12 col-lg-6 Carousel__left mt-2">
            <div className="Carousel__left__title ">
              <OwlCarousel
                className="owl-theme mb-2"
                autoplay={true}
                autoplayTimeout={5000}
                items={1}
                loop
                margin={10}
                nav={false}
                dotClass=""
              >
                {KhoaHocReducer.DSKH.map((item, index) => {
                  return (
                    <div className="item" key={index}>
                      <span className="h1 text-warning">0{index}</span>
                      <span className="ml-2 h2 text-white">
                        {item.tenKhoaHoc}
                      </span>
                      <div className="text-info">
                        <i class="fas fa-star  text-warning  "></i>
                        <i class="fas fa-star  text-warning  "></i>
                        <i class="fas fa-star  text-warning  "></i>
                        <i class="fas fa-star  text-warning  "></i> 5.0(2)
                        <span className="ml-2 text-warning">
                          {kiemTraMoTa(item.moTa)}
                        </span>
                      </div>
                      <Link
                        className="btn btn-warning my-3"
                        to={`/khoahoc/chitiet/${item.maKhoaHoc}`}
                      >
                        Học Ngay
                      </Link>
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
            <OwlCarousel
              className="owl-theme mt-5"
              autoplay={true}
              rtlClass="owl-rtl"
              autoplayTimeout={5000}
              items={itemCarou}
              loop
              margin={10}
              nav
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
        </Fragment>
      );
    } else {
      return <LoadingPage></LoadingPage>;
    }
  };
  return <div className="Carousel row m-0 h-100">{renderCarousel()}</div>;
}
