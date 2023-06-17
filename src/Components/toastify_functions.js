import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function add_item_toastify() {
    const notify = () => toast("Item Added to Cart Successfully");
    notify();
  }
export function delete_item_toastify() {
    const notify = () => toast("Item Deleted Successfully");
    notify();
  }
  export function add_item_database_toastify() {
    const notify = () => toast("Item Added Successfully");
    notify();
  }