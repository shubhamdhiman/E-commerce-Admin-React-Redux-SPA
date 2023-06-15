import React from "react";

import "../Assets/Css/Cart.css";
function Cart() {
  return (
    <div className="cartContainer">
      <div className="cartItem">
        <div className="cartLeft">
          <img src="" alt="img not found" />
        </div>
        <div className="cartRight">
          <div className="cartItemContent">
            <p className="cartItemHeading">Heading</p>
            <p className="cartItemDesc">
              leather shoe, full leather shoe loremfa-rotate-270 content
              contente sdfhoiashfaisufhasiodfhuaiosuf
              haoiseruhaiosrufhasifuhasio fhasiofhaiofhalieufhalisefuha
              lsiufhaiskldfuhaisoeufh
            </p>
          </div>
          <div className="itemPriceRatingDeleteBtn">
            
            <div className="itemRating">
              Rating: {" "}
              <i className="fa-solid fa-star fa-lg" style={{ color: "#00ffef" }}></i>
              <i className="fa-solid fa-star fa-lg" style={{ color: "#00ffef" }}></i>
              <i className="fa-solid fa-star fa-lg" style={{ color: "#00ffef"}}></i>
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
                Price: <strong>3000</strong>
            </div>
            <button className="cartDeleteBtn">
              <i class="fa-solid fa-trash fa-2x"></i>
              <p className="tooltip">Remove Item from Cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
