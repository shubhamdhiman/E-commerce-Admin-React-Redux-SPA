// Importing CSS file for app component
import "../Assets/Css/App.css";

// Importing all the Components
import Navigation from "./Navigation";
import AllProducts from "./AllProducts";
import Cart from "./Cart";
import AddProduct from "./AddProduct";
import ItemDetails from "./ItemDetails";

// Imoprting use Selector for getting data from store
import { useSelector } from "react-redux";

function App() {
  const page = useSelector((state) => state.pageR.page);
  return (
    <>
      <Navigation />
      {/* Using Conditional rendering to redner different pages */}
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
// Exporting the app component
export default App;
