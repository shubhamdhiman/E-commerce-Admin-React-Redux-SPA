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
  addRightRating,
  add_item_toastify,
  data_sorted_toastify,
  delete_item_toastify,
  edit_cancel_toastify,
  edit_done_toastify,
  unsorted_toastify,
} from "./toastify_functions";
import "../Assets/Css/AllProducts.css";
import { callRating } from "./ratingfunc";

const AllProducts = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.dataR.data);
  const storeDataUnsorted = useSelector((state) => state.dataR.unsorted_data);
  const [loading, setLoading] = useState(true);
  const [itemInfo,setItemInfo] = useState({
    name:"",
    description:"",
    rating:"",
    price:"",
    image:"",
  })
  const isTrue = "true";
  function add_item_to_cart(index) {
    add_item_toastify();
    dispatch(add_to_cart(storeData[index]));
  }

  function delete_item_from_database(index) {
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
    const newData = storeData.filter(
      (item) => storeData.indexOf(item) === index
    );
    dispatch(item_details_data(newData));
    dispatch(item_details_page(ITEM_DETAILS_PAGE));
  }
  function editItem(index, value) {
    const selectedItemforEdit = storeData.filter(
      (item) => storeData.indexOf(item) === index
    );
    const mapOverSelectedItem = selectedItemforEdit.map((item) => ({
      ...item,
      edit: `${value}`,
    }));
    const newData = [...storeData];
    newData.splice(index, 1, mapOverSelectedItem[0]);
    dispatch(fetchData(newData));
    if(value === false){
      edit_cancel_toastify()
    }
  }
  function saveEditItem(index){
    if(itemInfo.rating > 5 || itemInfo.rating<0){
      addRightRating()
      return;
    }
    const selectedItemforEdit = storeData.filter(
      (item) => storeData.indexOf(item) === index
    );
    const mapOverSelectedItem = selectedItemforEdit.map((item) => ({
      ...item,
      name:itemInfo.name,
      description:itemInfo.description,
      rating:itemInfo.rating,
      price:itemInfo.price,
      edit: "false",
    }));
    const newData = [...storeData];
    newData.splice(index, 1, mapOverSelectedItem[0]);
    dispatch(fetchData(newData));
    dispatch(unsorted_data(newData))
    edit_done_toastify()
    setItemInfo({
      name:"",
    description:"",
    rating:"",
    price:"",
    image:"",
    })
  }
  // function callRating(value){
  //   if(value===0 || value<0){
      
  //     return <i
  //    className="fa-solid fa-star fa-lg"
  //    style={{ color: "#00ffef" }}
  //  ></i>
  //   }else{
  //     return <i
  //     className="fa-regular fa-star fa-lg"
  //     style={{ color: "#00ffef" }}
  //   ></i>
  //   }
    
  // }
  useEffect(() => {
    function clearFilter() {
      (async function fetchDataFromAPI() {
        const data = await fetch(
          `https://my-json-server.typicode.com/shubhamdhiman/ecommerce-dummyData/products`
        );
        const json = await data.json();
        const editableData = json.map((item) => ({ ...item, edit: "false" }));
        dispatch(fetchData(editableData));
        dispatch(unsorted_data(editableData));
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
                {isTrue !== item.edit ? (
                  <p className="allProductsHeading">{item.name}</p>
                ) : (
                  <input
                    // onChange={(e) => {
                    //   setHeading(e.target.value);
                    // }}
                    className="inputHeading"
                    type="text"
                    onChange={(e)=>{setItemInfo({...itemInfo,name:e.target.value})}}
                    value={itemInfo.name}

                  />
                )}
                {isTrue !== item.edit ? (
                  <p className="allProductsDesc">{item.description}</p>
                ) : (
                  <textarea
                    // onChange={(e) => {
                    //   setDesc(e.target.value);
                    // }}
                    cols={100}
                    className="inputDesc"
                    onChange={(e)=>{setItemInfo({...itemInfo,description:e.target.value})}}
                    value={itemInfo.description}
                  ></textarea>
                )}
              </div>
              <div className="itemPriceRatingDeleteBtn">
                <div className="itemRating">
                  Rating:&nbsp;
                  {isTrue !== item.edit ? (
                    <div>
                      {/* {item.rating}/5 */}
                      {callRating(1-item.rating)}
                      {callRating(2-item.rating)}
                      {callRating(3-item.rating)}
                      {callRating(4-item.rating)}
                      {callRating(5-item.rating)}
                      {/* <i
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
                      ></i> */}
                    </div>
                  ) : (
                    <input
                      type="number"
                      onChange={(e)=>{setItemInfo({...itemInfo,rating:e.target.value})}}
                      value={itemInfo.rating}
                      className="inputRating"
                    />
                  )}
                </div>
                <div className="itemPrice">
                  Price:{" "}
                  {isTrue !== item.edit ? (
                    <strong>{item.price}</strong>
                  ) : (
                    <input
                      className="inputPrice"
                      type="number"
                      // onChange={(e) => {
                      //   setPrice(e.target.value);
                      // }}
                      onChange={(e)=>{setItemInfo({...itemInfo,price:e.target.value})}}
                      value={itemInfo.price}
                    />
                  )}
                </div>

                {isTrue !== item.edit ? (
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
                        // setEdit(true);
                        const boolval = true;
                        setItemInfo({name:item.name,description:item.description,rating:item.rating,price:item.price,image:item.image})
                        editItem(index, boolval);
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
                    <button
                      className="cancelBtn"
                      onClick={() =>{
                        const boolval = false; 
                        editItem(index, boolval)}}
                    >
                      Cancel
                    </button>
                    <button
                      className="saveBtn"
                      onClick={() => {
                        saveEditItem(index)
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
