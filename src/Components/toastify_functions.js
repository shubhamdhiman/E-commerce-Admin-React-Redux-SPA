import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function add_item_toastify() {
  const notify = () => toast.success("Item Added to Cart Successfully",{
    theme:"light"
  });
  notify();
}
export function delete_item_toastify() {
  const notify = () => toast.success("Item Deleted Successfully");
  notify();
}
export function add_item_database_toastify() {
  const notify = () => toast.success("Item Added Successfully");
  notify();
}
export function data_sorted_toastify() {
  const notify = () => toast.success("Sorted Successfully");
  notify();
}
export function unsorted_toastify() {
  const notify = () => toast.success("Unsorted Successfully");
  notify();
}
export function edit_cancel_toastify() {
  const notify = () => toast.success("Editing Canceled Successfully");
  notify();
}
export function edit_done_toastify() {
  const notify = () => toast.success("Editing Done Successfully");
  notify();
}
export function addRightRating() {
  const notify = () => toast.warn("Add Rating from 0-5");
  notify();
}
