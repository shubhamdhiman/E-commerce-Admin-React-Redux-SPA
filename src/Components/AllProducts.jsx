import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ITEM_DETAILS_PAGE,
  add_to_cart,
  delete_from_database,
  fetchData,
  item_details_data,
  item_details_page,
  unsorted_data,
} from "../redux/actions/reduxActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  add_item_toastify,
  data_sorted_toastify,
  delete_item_toastify,
  unsorted_toastify,
} from "./toastify_functions";
import "../Assets/Css/AllProducts.css";
const AllProducts = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.dataR.data);
  const storeDataUnsorted = useSelector((state) => state.dataR.unsorted_data);
  // const storeDataitemDetail = useSelector((state) => state.dataR.item_detail);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  // let arr1 = [];
  // let arr2 = [];

  function add_item_to_cart(index) {
    add_item_toastify();
    dispatch(add_to_cart(storeData[index]));
  }

  function delete_item_from_database(index) {
    // console.log(index);
    const filteredData = storeData.filter(
      (item) => storeData.indexOf(item) !== index
    );
    dispatch(delete_from_database(filteredData));
    delete_item_toastify();
  }
  function sortedObj(a, b) {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
    return 0;
  }
  function sortData() {
    const clonedArr = [...storeData];
    clonedArr.sort(sortedObj);
    dispatch(fetchData(clonedArr));
    data_sorted_toastify();
  }
  function removeSort() {
    dispatch(fetchData(storeDataUnsorted));
    unsorted_toastify();
  }
  function seeItemDetails(index) {
    // console.log(index)
    const newData = storeData.filter(
      (item) => storeData.indexOf(item) === index
    );
    // console.log(newData)
    dispatch(item_details_data(newData));
    // console.log(storeDataitemDetail)
    dispatch(item_details_page(ITEM_DETAILS_PAGE));
  }
  // function ratingRender(number) {
  //   // console.log("number is ", number)
  //   for (let i = 0; i < number; i++) {
  //     arr1.push(
  //       <i className="fa-solid fa-star fa-lg" style={{ color: "#00ffef" }}></i>
  //     );
  //   }
  //   if (5 - number !== 0) {
  //     for (let i = 0; i < 5 - number; i++) {
  //       arr2.push(
  //         <i
  //           className="fa-regular fa-star fa-lg"
  //           style={{ color: "#00ffee" }}
  //         ></i>
  //       );
  //     }
  //   }
  // }
  useEffect(() => {
    function clearFilter() {
      (async function fetchDataFromAPI() {
        const data = await fetch(
          `https://my-json-server.typicode.com/shubhamdhiman/ecommerce-dummyData/products`
        );
        const json = await data.json();
        dispatch(fetchData(json));
        dispatch(unsorted_data(json));
        setLoading(false);
      })();
    }
    if (storeData.length === 0) {
      clearFilter();
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <div className="allProductsContainer">
      <div className="sortDiv">
        <button
          className="sortButton"
          onClick={() => {
            sortData();
          }}
        >
          Sort Items
        </button>
        <button
          className="removeSortButton"
          onClick={() => {
            removeSort();
          }}
        >
          <i className="fa-solid fa-square-xmark" style={{ color: "red" }}></i>
        </button>
      </div>
      {loading ? (
        <div style={{ marginTop: "10rem" }}>
          <h1 style={{ color: "white" }}>Loading....</h1>
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
                      {/* {ratingRender(item.rating)} */}
                      {/* {console.log(arr)} */}
                      {/* {console.log("array1 is ", arr1)}
                      {console.log("array2 is ", arr2)}
                      {arr1.map((item, index) => {
                        return <i
                          key={index}
                          className="fa-solid fa-star fa-lg"
                          style={{ color: "#00ffef" }}
                        ></i>
})}
                      {arr2.map((item, index)=>{
                        return <i key={index}
                        className="fa-regular fa-star fa-lg"
                        style={{ color: "#00ffef" }}
                        ></i>
                      })} 
                      {(arr1 = [])}
                      {(arr2 = [])} */}

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
                    <button
                      className="allProductsDeleteBtn"
                      onClick={() => delete_item_from_database(index)}
                    >
                      <i
                        class="fa-solid fa-trash fa-2x"
                        style={{ color: "red" }}
                      ></i>
                      <p className="tooltip" style={{ color: "red" }}>
                        Remove Product
                      </p>
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
                    <button
                      className="addToCart"
                      onClick={() => {
                        add_item_to_cart(index);
                      }}
                    >
                      <i
                        class="fa-solid fa-cart-plus fa-2x"
                        style={{ color: "#374151" }}
                      ></i>
                      <p className="tooltip" style={{ color: "#374151" }}>
                        Add To Cart
                      </p>
                    </button>
                    <button
                      className="itemDetailsBtn"
                      onClick={() => {
                        seeItemDetails(index);
                      }}
                    >
                      <i
                        className="fa-solid fa-circle-info fa-2x"
                        style={{ color: "#374151" }}
                      ></i>
                      <p className="tooltip" style={{ color: "#374151" }}>
                        See Item Details
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
        ))
      )}
      <ToastContainer />
    </div>
  );
};

export default AllProducts;
