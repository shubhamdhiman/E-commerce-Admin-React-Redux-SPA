import React from "react";
import "../Assets/Css/ItemDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart } from "../redux/actions/reduxActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { add_item_toastify } from "./toastify_functions";
function ItemDetails() {
  const itemData = useSelector((state)=>state.dataR.item_detail)
  const storeData = useSelector((state)=>state.dataR.data)
  const dispatch = useDispatch()
  // console.log("itemData",itemData)
  function addToCartFromItem(value){
    const newData = storeData.filter((item)=> item.name == value)
    // console.log(newData)
    // console.log(newData[0])
    dispatch(add_to_cart(newData[0]))
    add_item_toastify()
  }
  return (
    
    <div className="itemDetailsContainer">
      {
        itemData.map((item,index)=>(
          <div className="itemDetails"key={index}>
        <div className="itemImgRatingPrice">
          <img  src={item.image} alt="img not found"/>
          <div className="itemDetailsRight">
            <div className="itemDetailsHeading">{item.name}</div>
          <div className="itemDetailsRating">
            Rating: &nbsp;
            <i
              className="fa-solid fa-star fa-xl"
              style={{ color: "#00ffef" }}
            ></i>
            <i
              className="fa-solid fa-star fa-xl"
              style={{ color: "#00ffef" }}
            ></i>
            <i
              className="fa-solid fa-star fa-xl"
              style={{ color: "#00ffef" }}
            ></i>
            <i
              className="fa-regular fa-star fa-xl"
              style={{ color: "#00ffee" }}
            ></i>
            <i
              className="fa-regular fa-star fa-xl"
              style={{ color: "#00ffee" }}
            ></i>
          </div>
          <div className="itemDetailsPrice">Price: <strong>{item.price}</strong></div>
          </div>
        </div>
        <div className="itemDetailsDesc">
            <strong>Item Description: </strong>{item.description}
        </div>
        <button className="itemDetailsAddBtn" onClick={()=>addToCartFromItem(item.name)}>Add to Cart</button>
      </div>
        ))
      }
      <ToastContainer />
    </div>
  );
}

export default ItemDetails;
