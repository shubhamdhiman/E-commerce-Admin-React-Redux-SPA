import React from 'react'
import '../Assets/Css/AddProduct.css'
function AddProduct() {
  return (
    <div className='addProduct'>
        <form>
        <div className='addContainer'>
        <p className='heading'>Add Product</p>
        <input type="text" placeholder='Item Name...'required/>
        <textarea type="text" placeholder='Item desc...'required></textarea>
        <input type="number" placeholder='Item price...'required />
        <input type="number" placeholder='Item Rating...' max={5} min={0}  required/>
        <button type='submit' className='addBtn'>Add</button>
        </div>
        </form>
    </div>
  )
}

export default AddProduct;