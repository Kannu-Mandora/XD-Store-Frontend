import React from 'react'
import { removeToCart } from '../../store/CartSlice'
import { useSelector, useDispatch } from 'react-redux'
const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productsId) => {
        dispatch(removeToCart(productsId));
    }
    return (
        <>
            <h1 className="text-center text-4xl my-3">Carts</h1>
            <div className='flex justify-center flex-wrap items-center my-10 gap-3' >

                {
                    products.map((item) => {
                        return <div key={item.id} className='flex flex-col justify-center items-center relative  bg-gray-300 text-black p-10 rounded gap-4' >
                            <img src={item.image} alt={item.title} className="mix-blend-multiply aspect-square w-44" />
                            <h1>{item.title.substring(0, 20)}</h1>
                            <h3>Price: ${item.price}</h3>
                            <button className='bg-red-400 px-3 py-2 rounded' onClick={()=>handleRemove(item.id)} >Remove To Cart</button>
                        </div>
                    })
                }
            </div>
        </>

    )
}

export default Cart