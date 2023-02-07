import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from '../../jsx/Loader';
const Laptops = () => {
    const [electronics, setElectronics] = useState([]);
    const [loading, setLoading] = useState(false);
    const products = async () => {
        setLoading(true);
        try {
            const res = await axios.get("https://fakestoreapi.com/products/category/electronics");
            setLoading(false);
            setElectronics(res.data);
        } catch (error) {
            alert("Internal Server Error");
        }
    }
    useEffect(() => {
        products();
    }, [])
    return (
        <>
            <div className='flexCenter' >
                <Loader loading={loading} />
            </div>
            <div className='grid grid-cols-2 justify-start items-center gap-6 my-5' >
                {
                    electronics.map((electronics) => {
                        return <div key={electronics.id} className='flex flex-col justify-center items-center relative  bg-gray-300 text-black py-5 rounded gap-4' >
                            <button className='absolute right-3 top-0' >Cart--&gt;</button>
                            <img src={electronics.image} alt="" title={electronics.title.substring(0, 20)} className='w-32 aspect-square mix-blend-multiply' loading='lazy' />
                            <h1>{electronics.title.substring(0, 20)}</h1>
                            <h3>Price: ${electronics.price}</h3>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Laptops