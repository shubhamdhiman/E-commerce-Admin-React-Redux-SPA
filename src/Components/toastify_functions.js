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
export function data_sorted_toastify() {
  const notify = () => toast("Sorted Successfully");
  notify();
}
export function unsorted_toastify() {
  const notify = () => toast("Unsorted Successfully");
  notify();
}
export function edit_cancel_toastify() {
  const notify = () => toast("Editing Canceled Successfully");
  notify();
}
export function edit_done_toastify() {
  const notify = () => toast("Editing Done Successfully");
  notify();
}
