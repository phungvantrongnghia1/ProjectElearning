import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../../../redux/actions/KhoaHocAction";
export default function ItemPhim(props) {
  const dispatch = useDispatch();
  console.log(props);
  const [classSpecal, setClassSpecal] = useState("");
  useEffect(() => {
    if (props.sendKey === "specail") {
      setClassSpecal(props.sendKey);
    }
  }, []);
  const kiemTraTen = (name = "") => {
    if (name.length < 12) {
      return <p className="card-title h5">{name}</p>;
    } else {
      return <p className="card-title h5">{name.substring(0, 12)}.......</p>;
    }
  };
  const addToCart = item => {
    console.log("add cart");
    dispatch(addCart(item));
  };
  /// chuẩn bị thêm sản phẩm vào giỏ hàng bắt sự kiện click button dispatch tới reducer
  return (
    <div className="ItemPhim">
      <div className={`Itemlayout  py-2 ${classSpecal}`}>
        <div className="text-center Itemlayout__box my-2">
          <span className="Itemlayout__img">
            <img src="https://cyberlearn-21.web.app/img/teacher.jpg" alt="" />
          </span>
          <span className="Itemlayout__tacgia h4">George Richards</span>
        </div>
        <p className="Itemlayout__tenkhoahoc py-2">title khoa hoc ne </p>
        <p className="Itemlayout__mota">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          voluptates, hic quas quos nihil eos animi maiores eaque suscipit
          aliquid, velit sequi. Laboriosam obcaecati debitis itaque nisi
          accusantium quis doloribus.
        </p>
        <div className="row mx-0">
          <div className="col-lg-4 px-0">
            <i class="fas fa-signal    "></i>Advanced
          </div>
          <div className="col-lg-4 px-0">
            <i class="fas fa-list    "></i> 6 Lectures
          </div>
          <div className="col-lg-4 px-0">
            <i class="fas fa-clock    "></i>6 Hours
          </div>
        </div>
        <button
          className="btn btn-warning Itemlayout__button my-3"
          onClick={() => addToCart(props.item)}
        >
          Add to card
        </button>
        <div className="row">
          <div className="col-lg-6">
            <span>
              <i class="fas fa-heart    "></i>
            </span>
            <span>Add to likelist</span>
          </div>
          <div className="col-lg-6">15.55$</div>
        </div>
      </div>
      {/* <h3 className="stt">{props.item.maKhoaHoc}</h3> */}
      <Link to={`/khoahoc/chitiet/${props.item.maKhoaHoc}`}>
        <div className="card">
          <div className="card__img">
            <img className="card-img-top" src={props.item.hinhAnh} alt="alo" />
          </div>
          <div className="card-body">
            {kiemTraTen(props.item.tenKhoaHoc)}
            <div className="card-text mb-2">
              <i class="fas fa-star icon__start"></i>
              <i class="fas fa-star icon__start"></i>
              <i class="fas fa-star icon__start"></i>
              <i class="fas fa-star icon__start"></i>
              <i class="fas fa-star icon__start"></i>
              <i>(5355)</i>
            </div>
            <div className="card-body__tacgia">
              <p>Join Dea</p>
            </div>
            <div className="card-body__tien text-center">
              <span className="tien">$19.99</span>
              <span className="khuyenmai ml-2 h4">
                <i> $15.99</i>
                <span className="ml-1">
                  <i class="fas fa-tags    "></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
