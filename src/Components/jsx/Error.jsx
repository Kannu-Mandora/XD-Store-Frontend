import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center overflow-hidden cursor-default h-[90vh]' >
       <span className='text-3xl font-titillium my-5' >404</span>
       <span className='text-2xl titillium mb-5 primary-color uppercase' >This URL is not found</span>
       <span className='text-2xl titillium mb-5 leaf-darkest-color uppercase' >Go To Home</span>
       <Link to="/">
        <span className='bg-primary-color text-white px-3 py-2 rounded hover:bg-green-500'>Home</span>
       </Link>
    </div>
    </>
  )
}

export default Error
