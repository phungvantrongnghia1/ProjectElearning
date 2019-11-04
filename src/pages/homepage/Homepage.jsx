import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Carousel from "../../common/components/Carousel/Carousel";
import { layDanhSachKhoaHoc } from "../../redux/actions/KhoaHocAction";
export default function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachKhoaHoc());
    console.log("one times");
  }, [dispatch]);
  // console.log(KhoaHocStore);
  return (
    <div className="w-100 homepage">
      <Carousel></Carousel>
    </div>
  );
}
