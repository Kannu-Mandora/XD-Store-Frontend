import React from 'react'
import { Link } from 'react-router-dom'
const Productbars = () => {
  return (
   <>
   <div className='productData' >

    <Link to="Categories">
    <div>
      <img src={require("../../assests/images/Animated Icons/categories.png")} alt="Categories" />
      <span>Categories</span>
    </div>
    </Link>
    <Link to="Offers">
    <div>
      <img src={require("../../assests/images/Animated Icons/offers.png")} alt="Offers" />
      <span>Offers</span>
    </div>
    </Link>
    <Link to="Todaydeals">
    <div>
      <img src={require("../../assests/images/Animated Icons/hours.png")} alt="Today Deals" />
      <span>Today Deals</span>
    </div>
    </Link>
    <Link to="bestSeller">
    <div>
      <img src={require("../../assests/images/Animated Icons/bestSeller.png")} alt="Best Seller" />
      <span>Best Seller</span>
    </div>
    </Link>
    <Link to="Electronics">
    <div>
      <img src={require("../../assests/images/Animated Icons/electronics.png")} alt="Electronics" />
      <span>Electronics</span>
    </div>
    </Link>
    <Link to="Fashion">
    <div>
      <img src={require("../../assests/images/Animated Icons/fashion.png")} alt="Fashion" />
      <span>Fashion</span>
    </div>
    </Link>
    <Link to="Mobiles">
    <div>
      <img src={require("../../assests/images/Animated Icons/mobile.png")} alt="Mobiles" />
      <span>Mobiles</span>
    </div>
    </Link>
    <Link to="Kitchen">
    <div>
      <img src={require("../../assests/images/Animated Icons/kitchenTools.png")} alt="Kitchen" />
      <span>Kitchen</span>
    </div>
    </Link>
    <Link to="Hotdeals">
    <div>
      <img src={require("../../assests/images/Animated Icons/hotDeal.png")} alt="Hot Deals" />
      <span>Hot Deals</span>
    </div>
    </Link>
    <Link to="Books">
    <div>
      <img src={require("../../assests/images/Animated Icons/books.png")} alt="Books" />
      <span>Books</span>
    </div>
    </Link>

   </div>
   
   </>
  )
}

export default Productbars