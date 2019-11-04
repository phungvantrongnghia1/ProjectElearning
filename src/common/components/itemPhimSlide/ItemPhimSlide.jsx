import React from "react";
import { Link } from "react-router-dom";
export default function ItemPhimSlide(props) {
  const kiemTraTen = (name = "") => {
    if (name.length < 12) {
      return <p className="card-title h5 py-3">{name}</p>;
    } else {
      return <p className="card-title h5 py-3">{name.substring(0, 12)}....</p>;
    }
  };

  return (
    <div className="ItemPhim ItemPhimSlide">
      {/* <h3 className="stt">{props.item.maKhoaHoc}</h3> */}
      <Link to={`/khoahoc/chitiet/${props.item.maKhoaHoc}`}>
        <div className="card">
          <div className="card__img">
            <img className="card-img-top" src={props.item.hinhAnh} alt="alo" />
          </div>
          <div className="card-body">
            {kiemTraTen(props.item.tenKhoaHoc)}
            <div classname="card-text mb-2">
              <i className="fas fa-star icon__start" />
              <i className="fas fa-star icon__start" />
              <i className="fas fa-star icon__start" />
              <i className="fas fa-star icon__start" />
              <i className="fas fa-star icon__start" />
              <i>(5355)</i>
            </div>

            <div className="card-body__tacgia">
              <p>Join Dea</p>
            </div>
            <div className="card-body__tien text-center">
              <span className="tien">$19.99</span>
              <span className="khuyenmai ml-2 h4">
                <i> $15.99</i>
                <span classname="ml-1">
                  <i className="fas fa-tags    " />
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
