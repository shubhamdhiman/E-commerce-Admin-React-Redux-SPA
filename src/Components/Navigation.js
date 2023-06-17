import React from "react";
import logo from "../Assets/Images/urban-kart-logo.png";
import "../Assets/Css/Navigation.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_PRODUCT_PAGE,
  ALL_PRODUCTS_PAGE,
  CART_PAGE,
  add_product_page,
  all_products_page,
  cart_page,
} from "../redux/actions/reduxActions";
function Navigation() {
  const cartItems = useSelector((state) => state.dataR.cart);
  const page = useSelector((state) => state.pageR.page);
  const shufflePage = useDispatch();
  console.log(page[0]);

  // console.log(typeof(page[0]))
  function changingPage(pageName) {
    if (pageName === "add_product_page") {
      shufflePage(add_product_page(pageName));
    } else if (pageName === "all_products_page") {
      shufflePage(all_products_page(pageName));
    } else if (pageName === "cart_page"){
      shufflePage(cart_page(pageName));
    }
  }
  return (
    <div className="nav">
      <div className="left">
        <img src={logo} alt="UrbanKart" />
        <button
          className="navButton"
          onClick={() => changingPage(ALL_PRODUCTS_PAGE)}
        >
          Products
        </button>
        <button
          className="navButton"
          onClick={() => changingPage(ADD_PRODUCT_PAGE)}
        >
          Add Product&nbsp;
          <i className="fa-solid fa-plus" style={{ color: "#374151" }}></i>
        </button>
      </div>
      <div className="right">
        <button className="cartButton" onClick={()=>changingPage(CART_PAGE)}>
          Cart Items :&nbsp;{cartItems.length}
        </button>
      </div>
    </div>
  );
}

export default Navigation;
