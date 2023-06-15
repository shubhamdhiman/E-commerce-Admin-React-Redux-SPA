import React from 'react'
import logo from  '../Assets/Images/urban-kart-logo.png'
import '../Assets/Css/Navigation.css'
function Navigation() {
  return (
    <div className='nav'>
        <div className='left'>
            <img src={logo} alt='UrbanKart'/>
            <button className='navButton'>Products</button>
            <button className='navButton'>Add Product&nbsp;<i className="fa-solid fa-plus" style={{"color": "#374151"}}></i></button>
        </div>
        <div className='right'>
            <button className='cartButton'>Cart Items : 5</button>
        </div>
    </div>
  )
}

export default Navigation