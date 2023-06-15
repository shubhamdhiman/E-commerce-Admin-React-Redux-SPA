import React, { useState } from "react";
import "../Assets/Css/AllProducts.css";
const AllProducts = () => {
  const [edit, setEdit] = useState(false);
  const [heading, setHeading] = useState("Heading");
  const [desc, setDesc] = useState("leather shoe, full leather sho");
  const [price, setPrice] = useState("3000");
  return (
    // <div>
    <div className="allProductsContainer">
      <div className="product">
        <div className="allProductsLeft">
          <img src="" alt="img not found" />
        </div>
        <div className="allProductsRight">
          <div className="allProductsContent">
            {!edit ? (
              <p className="allProductsHeading">{heading}</p>
            ) : (
              <input
                onChange={(e) => {
                  setHeading(e.target.value);
                }}
                className="inputHeading"
                type="text"
                value={heading}
              />
            )}
            {!edit ? (
              <p className="allProductsDesc">{desc}</p>
            ) : (
              <textarea
              onChange={(e) => {
                setDesc(e.target.value);
              }}
                cols={100}
                className="inputDesc"
                value={desc}
              ></textarea>
            )}
          </div>
          <div className="itemPriceRatingDeleteBtn">
            <div className="itemRating">
              Rating:&nbsp;
              {!edit ? <div>
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
              </div>:<input type="number" className="inputRating" />}
            </div>
            <div className="itemPrice">
              Price: {!edit ? <strong>{price}</strong> : <input className="inputPrice" type="number" onChange={(e)=>{setPrice(e.target.value)}} value={price} />}
            </div>

            {!edit ? (
              <div>
                <button className="allProductsDeleteBtn">
                  <i
                    class="fa-solid fa-trash fa-2x"
                    style={{ color: "red" }}
                  ></i>
                  <p className="tooltip">Remove Product</p>
                </button>
                <button
                  className="allProductsEditBtn"
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  <i
                    className="fa-solid fa-pen-to-square fa-2x"
                    style={{ color: "#374151" }}
                  ></i>
                  <p className="tooltip" style={{ color: "#374151" }}>
                    Edit Item
                  </p>
                </button>
              </div>
            ) : (
              <div>
                <button className="cancelBtn">Cancel</button>
                <button
                  className="saveBtn"
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AllProducts;
