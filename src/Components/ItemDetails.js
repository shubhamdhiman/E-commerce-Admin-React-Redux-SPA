import React from "react";
import "../Assets/Css/ItemDetails.css";
function ItemDetails() {
  return (
    <div className="itemDetailsContainer">
      <div className="itemDetails">
        <div className="itemImgRatingPrice">
          <img height="200px" src="" alt="img not found"/>
          <div className="itemDetailsRight">
            <div className="itemDetailsHeading">Heading</div>
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
          <div className="itemDetailsPrice">Price: <strong>3000</strong></div>
          </div>
        </div>
        <div className="itemDetailsDesc">
            <strong>Item Description: </strong>asidfhaieufhaiseuf aoisufheiau aoiuf haoief haoifhu aoifhu iof hoiaf oaisfhaoisfuh aiosfhiaksjnskj kf ifhaiof haoi foaih oifah oi hfisoh flisdfjn lia alifh aiewfh aif ailwf ao
        </div>
        <button className="itemDetailsAddBtn">Add Product</button>
      </div>
    </div>
  );
}

export default ItemDetails;
