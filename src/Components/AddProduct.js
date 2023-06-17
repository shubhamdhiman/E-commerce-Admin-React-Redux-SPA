import React, { useState } from 'react'
import '../Assets/Css/AddProduct.css'
import { useDispatch } from 'react-redux';
import { add_to_database } from '../redux/actions/reduxActions';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { add_item_database_toastify } from './toastify_functions';
function AddProduct() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name:"",
    description:"",
    price:"",
    rating:"",
    image:"",
  });
  function addItemToDatabase(e){
    e.preventDefault()
    console.log(formData)
    dispatch(add_to_database(formData))
    setFormData({
      name:"",
    description:"",
    price:"",
    rating:"",
    })
    add_item_database_toastify()
  }
  return (
    <div className='addProduct'>
        <form>
        <div className='addContainer'>
        <p className='heading'>Add Product</p>
        <input type="text" placeholder='Item Name...' value={formData.name} onChange={(e)=>{setFormData({...formData,name:e.target.value})}}required/>
        <textarea type="text" placeholder='Item desc...' value={formData.description} onChange={(e)=>{setFormData({...formData,description:e.target.value})}} required></textarea>
        <input type="number" placeholder='Item price...' value={formData.price} onChange={(e)=>{setFormData({...formData,price:e.target.value})}}required />
        <input type="number" placeholder='Item Rating...' max={5} min={0}  value={formData.rating} onChange={(e)=>{setFormData({...formData,rating:e.target.value})}} required/>
        <button type='submit' className='addBtn' onClick={(e)=>{addItemToDatabase(e)}}>Add</button>
        </div>
        </form>
        <ToastContainer />
    </div>
  )
}

export default AddProduct;