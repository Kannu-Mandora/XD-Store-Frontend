import React from 'react'
import { Link } from 'react-router-dom'
import Categories from "../../assests/images/Animated Icons/categories.png"
import Offers from "../../assests/images/Animated Icons/offers.png"
import TodayDeals from "../../assests/images/Animated Icons/hours.png"
import BestSeller from "../../assests/images/Animated Icons/bestSeller.png"
import Books from "../../assests/images/Animated Icons/books.png"
import Electronics from "../../assests/images/Animated Icons/electronics.png"
import Fashion from "../../assests/images/Animated Icons/fashion.png"
import Mobiles from "../../assests/images/Animated Icons/mobile.png"
import Kitchen from "../../assests/images/Animated Icons/kitchenTools.png"
import Hotdeals from "../../assests/images/Animated Icons/hotDeal.png"
const Productbars = () => {
  return (
   <>
   <div className='productData' >

    <Link to="Categories">
    <div>
      <img src={Categories} alt="Categories" />
      <span>Categories</span>
    </div>
    </Link>
    <Link to="Offers">
    <div>
      <img src={Offers} alt="Offers" />
      <span>Offers</span>
    </div>
    </Link>
    <Link to="Todaydeals">
    <div>
      <img src={TodayDeals} alt="Today Deals" />
      <span>Today Deals</span>
    </div>
    </Link>
    <Link to="BestSeller">
    <div>
      <img src={BestSeller} alt="Best Seller" />
      <span>Best Seller</span>
    </div>
    </Link>
    <Link to="Electronics">
    <div>
      <img src={Electronics} alt="Electronics" />
      <span>Electronics</span>
    </div>
    </Link>
    <Link to="Fashion">
    <div>
      <img src={Fashion} alt="Fashion" />
      <span>Fashion</span>
    </div>
    </Link>
    <Link to="Mobiles">
    <div>
      <img src={Mobiles} alt="Mobiles" />
      <span>Mobiles</span>
    </div>
    </Link>
    <Link to="Kitchen">
    <div>
      <img src={Kitchen} alt="Kitchen" />
      <span>Kitchen</span>
    </div>
    </Link>
    <Link to="Hotdeals">
    <div>
      <img src={Hotdeals} alt="Hot Deals" />
      <span>Hot Deals</span>
    </div>
    </Link>
    <Link to="Books">
    <div>
      <img src={Books} alt="Books" />
      <span>Books</span>
    </div>
    </Link>

   </div>
   
   </>
  )
}

export default Productbars