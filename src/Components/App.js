import "../Assets/Css/App.css";
import Navigation from "./Navigation";
import AllProducts from "./AllProducts";
// import { store } from '../redux/store';
// import { Provider } from 'react-redux';
import Cart from "./Cart";
import AddProduct from "./AddProduct";
import ItemDetails from "./ItemDetails";
import { useSelector } from "react-redux";

function App() {
  const page = useSelector((state) => state.pageR.page);
  // console.log(page[0]);
  // console.log(page[0] === "all_products_page");
  return (
    <>
      <Navigation />
      {page[0] === "all_products_page" ? (
        <AllProducts />
      ) : page[0] === "cart_page" ? (
        <Cart />
      ) : page[0] === "add_product_page" ? (
        <AddProduct />
      ) : page[0] === "item_details_page" ? (
        <ItemDetails />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
