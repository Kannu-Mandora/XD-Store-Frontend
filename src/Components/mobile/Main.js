import React from 'react'
import Productbars from '../jsx/Productbars'
import Categorybar from "../desktop/Categorybar"

const Main = () => {
  return (
    <>
      <div className="lg:hidden flex justify-start items-center h-20 bg-leaf-light-color overflow-scroll scrollbar">
        <Productbars/>
    </div>
    <Categorybar/>
    <div>
    <h1 className='text-center my-5'>This is Main Page</h1>
    </div>
    </>
  )
}

export default Main
