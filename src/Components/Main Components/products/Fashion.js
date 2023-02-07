import axios from 'axios';
import {useState, useEffect} from 'react'
import { Rings } from 'react-loader-spinner';
const Fashion = () => {
    const [mansFashion, setMansFashion] = useState([]);
    const [womensFashion, setWomensFashion] = useState([]);
    const [loading, setLoading] = useState(false);
    const products = async () => {
        try{
            setLoading(true);
            const mens =  axios.get("https://fakestoreapi.com/products/category/men's clothing");
            const womens = axios.get("https://fakestoreapi.com/products/category/women's clothing");
            setMansFashion((await mens).data);
            setWomensFashion((await womens).data);
            setLoading(false);
        } catch(error){
            alert("Internal Server Error");
        }
    }
    useEffect(()=>{
        products();
    }, [])
  return (
    <>
    <h1 className="text-center text-3xl font-medium py-4  ">Men's Fashion</h1>
        <div className='flexCenter' >
        <Rings
            height="80"
            width="80"
            color="#6B728E"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loading}
            ariaLabel="rings-loading"
        />
    </div>
    <div className='grid grid-cols-2 justify-start items-center gap-6 my-5' >


    {
        mansFashion.map((fashion) => {
            return <div key={fashion.id} className='flex flex-col justify-center items-center relative bg-gray-200 text-black py-5 rounded gap-4' >
                <button className='absolute right-3 top-0' >Cart--&gt;</button>
                <img src={fashion.image} alt="" title={fashion.title.substring(0,20)} className='w-32 aspect-square mix-blend-multiply' loading='lazy' />
                <h1>{fashion.title.substring(0, 20)}</h1>
                <h3>Price: ${fashion.price}</h3>
            </div>
        })
    }
    </div>

    <h1 className="text-center text-3xl font-medium py-4  ">Women's Fashion</h1>
    <div className='flexCenter' >
        <Rings
            height="80"
            width="80"
            color="#6B728E"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loading}
            ariaLabel="rings-loading"
        />
    </div>
    <div className='grid grid-cols-2 justify-start items-center gap-6 my-5' >


    {
        womensFashion.map((fashion) => {
            return <div key={fashion.id} className='flex flex-col justify-center items-center relative bg-gray-200 text-black py-5 rounded gap-4' >
                <button className='absolute right-3 top-0' >Cart--&gt;</button>
                <img src={fashion.image} alt="" title={fashion.title.substring(0,20)} className='w-32 aspect-square mix-blend-multiply' loading='lazy' />
                <h1>{fashion.title.substring(0, 20)}</h1>
                <h3>Price: ${fashion.price}</h3>
            </div>
        })
    }
    </div>
    </>
  )
}

export default Fashion