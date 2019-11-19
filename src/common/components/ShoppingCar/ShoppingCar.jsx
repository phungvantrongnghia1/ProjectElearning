import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemShopping } from "../../../redux/actions/KhoaHocAction";
import Checkout from "./Checkout/Checkout";
export default function ShoppingCar() {
  const CartReducer = useSelector(state => state.KhoaHocReducer.Cart);
  const dispatch = useDispatch();
  const [totalPrice, setPrice] = useState(0);
  const [checkout, setCheckout] = useState(true);
  const [title, setTitle] = useState("Shopping Cart");
  useEffect(() => {
    let temp = toTalPrice();
    setPrice(temp);
  }, [CartReducer.length]);
  const toTalPrice = () => {
    let temp = 0;
    for (let i = 0; i < CartReducer.length; i++) {
      temp += 18.88;
    }
    return temp;
  };
  const removeItem = item => {
    dispatch(removeItemShopping(item));
  };
  const renDerCart = () => {
    return CartReducer.map((item, index) => {
      return (
        <div className="row my-3 py-3" key={index}>
          <div className="col-2 col-lg-2">
            <img
              className="img__course"
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </div>
          <div className="col-6 col-lg-6">
            <p className="course__name m-0">{item.biDanh}</p>
            <p className="course__auth m-0">
              By Martin Perhiniak, Yes I'm a Designer
            </p>
          </div>
          <div className="col-2 col-lg-2 course__section text-left">
            <div>
              <span>
                <i class="fas fa-save    "></i>
              </span>
              <span className="ml-2">Save</span>
            </div>
            <div>
              <span>
                <i class="fas fa-trash-alt    "></i>
              </span>
              <span className="ml-2" onClick={() => removeItem(item)}>
                Dellect
              </span>
            </div>
          </div>
          <div className="col-2 col-lg-2 course__price">
            <p className="m-0">$18.88</p>
            <p className="m-0">$19.26</p>
          </div>
        </div>
      );
    });
  };
  const renderCheckout = () => {
    let key = !title;
    if (key) {
      console.log("true");
    } else {
      setTitle("Check Out");
    }
    return setCheckout(key);
  };

  const checkRender = () => {
    if (checkout) {
      return (
        <div className="container Cart__content">
          <p> item in cart</p>
          <div className="row">
            <div className="col-lg-8 infor">{renDerCart()}</div>

            <div className="col-lg-4 total px-4">
              <p className="h1">Total</p>
              <p className="total__pricePro h2">${totalPrice}</p>
              <p className="total__price">$120</p>
              <div className="text-center my-3">
                <button
                  className="btn btn-success w-75 py-3 btn__checkout"
                  onClick={() => renderCheckout()}
                >
                  Checkout
                </button>
              </div>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter coupon"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text btn">Apply</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Checkout listItem={CartReducer} totalPrice={totalPrice}></Checkout>
      );
    }
  };

  return (
    <div className="Cart">
      <div className="container-fluid h-100 px-0 Cart__title py-5">
        <div className="container ">
          <div>
            <span className=" mr-2">
              <i class="fas fa-home    "></i>
            </span>
            / <span className="ml-2 h5">{title}</span>
          </div>
          <div className="my-2 h1 text-black">{title}</div>
        </div>
        {checkRender()}
      </div>
    </div>
  );
}
