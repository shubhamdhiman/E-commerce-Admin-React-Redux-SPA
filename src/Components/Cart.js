import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Assets/Css/Cart.css";
import { delete_from_cart } from "../redux/actions/reduxActions";
import { delete_item_toastify } from "./toastify_functions";
function Cart() {
  const cart_data = useSelector((state) => state.dataR.cart);
  const dispatch = useDispatch();

  const [empty, setEmpty] = useState(true);

  function delete_from_cart_function(index) {
    const filteredData = cart_data.filter(
      (item) => cart_data.indexOf(item) !== index
    );
    dispatch(delete_from_cart(filteredData));
      delete_item_toastify()
    if (filteredData.length === 0) {
      setEmpty(true);
    }
  }

  useEffect(() => {
    const numberOfItems = cart_data.length;
    if (numberOfItems !== 0) {
      setEmpty(false);
    }
  }, empty);
  return (
    <div className="cartContainer">
      {empty ? (
        <div style={{ fontSize: "2rem", color: "#00FFEE", marginTop: "10rem" }}>
          Oops!!! No items in the cart
        </div>
      ) : (
        cart_data.map((item, index) => (
          <div className="cartItem" key={index}>
            <div className="cartLeft">
              <img src={item.image} alt="img not found" />
            </div>
            <div className="cartRight">
              <div className="cartItemContent">
                <p className="cartItemHeading">{item.name}</p>
                <p className="cartItemDesc">{item.description}</p>
              </div>
              <div className="itemPriceRatingDeleteBtn">
                <div className="itemRating">
                  Rating:&nbsp;
                  <i
                    className="fa-solid fa-star fa-lg"
                    style={{ color: "#00ffef" }}
                  ></i>
                  <i
                    className="fa-solid fa-star fa-lg"
                    style={{ color: "#00ffef" }}
                  ></i>
                  <i
                    className="fa-solid fa-star fa-lg"
                    style={{ color: "#00ffef" }}
                  ></i>
                  <i
                    className="fa-regular fa-star fa-lg"
                    style={{ color: "#00ffee" }}
                  ></i>
                  <i
                    className="fa-regular fa-star fa-lg"
                    style={{ color: "#00ffee" }}
                  ></i>
                </div>
                <div className="itemPrice">
                  Price: <strong>{item.price}</strong>
                </div>
                <button
                  className="cartDeleteBtn"
                  onClick={() => {
                    delete_from_cart_function(index);
                  }}
                >
                  <i class="fa-solid fa-trash fa-2x"></i>
                  <p className="tooltip">Remove Item from Cart</p>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <ToastContainer />
    </div>
  );
}

export default Cart;
