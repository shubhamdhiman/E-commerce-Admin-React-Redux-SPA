import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart, fetchData } from "../redux/actions/reduxActions";
import "../Assets/Css/AllProducts.css";
const AllProducts = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.dataR.data);
  
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  // const [heading, setHeading] = useState("Heading");
  // const [desc, setDesc] = useState("leather shoe, full leather sho");
  // const [price, setPrice] = useState("3000");
  function add_item_to_cart(index){ 
    dispatch(add_to_cart(storeData[index]))
    // console.log(storeData[index])
    // console.log(index)
  }
  useEffect(() => {
    function clearFilter() {
      (async function fetchDataFromAPI() {
        const data = await fetch(
          `https://my-json-server.typicode.com/shubhamdhiman/ecommerce-dummyData/products`
        );
        const json = await data.json();
        dispatch(fetchData(json));
        setLoading(false);
      })();
    }
    clearFilter();
  }, []);
  return (
    <div className="allProductsContainer">
      {loading ? (
        <div
          class="spinner-border text-info"
          style={{ marginTop: "20rem" }}
          role="status"
        >
          <span class="sr-only"></span>
        </div>
      ) : (
        storeData.map((item, index) => (
          <div className="product" key={index}>
            <div className="allProductsLeft">
              <img src={item.image} alt="img not found" />
            </div>
            <div className="allProductsRight">
              <div className="allProductsContent">
                {!edit ? (
                  <p className="allProductsHeading">{item.name}</p>
                ) : (
                  <input
                    // onChange={(e) => {
                    //   setHeading(e.target.value);
                    // }}
                    className="inputHeading"
                    type="text"
                    value={item.name}
                  />
                )}
                {!edit ? (
                  <p className="allProductsDesc">{item.description}</p>
                ) : (
                  <textarea
                    // onChange={(e) => {
                    //   setDesc(e.target.value);
                    // }}
                    cols={100}
                    className="inputDesc"
                    value={item.description}
                  ></textarea>
                )}
              </div>
              <div className="itemPriceRatingDeleteBtn">
                <div className="itemRating">
                  Rating:&nbsp;
                  {!edit ? (
                    <div>
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
                  ) : (
                    <input
                      type="number"
                      value={item.rating}
                      className="inputRating"
                    />
                  )}
                </div>
                <div className="itemPrice">
                  Price:{" "}
                  {!edit ? (
                    <strong>{item.price}</strong>
                  ) : (
                    <input
                      className="inputPrice"
                      type="number"
                      // onChange={(e) => {
                      //   setPrice(e.target.value);
                      // }}
                      value={item.price}
                    />
                  )}
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
                      {/* <p className="tooltip" style={{ color: "#374151" }}>
                        Edit Item
                      </p> */}
                    </button>
                    <button className="addToCart" onClick={()=>{add_item_to_cart(index)}}>
                      <i
                        class="fa-solid fa-cart-plus fa-2x"
                        style={{ color: "#374151" }}
                      ></i>
                      {/* <p className="tooltip" style={{ color: "#374151" }}>
                        Add To Cart
                      </p> */}
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
        ))
      )}
    </div>
  );
};

export default AllProducts;
