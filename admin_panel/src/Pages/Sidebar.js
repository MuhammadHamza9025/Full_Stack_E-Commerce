import React from 'react'
import { Link } from 'react-router-dom'
import svg from '../Admin Panel Assets/Product_Cart.svg'
import remove from '../Admin Panel Assets/Product_list_icon.svg'

const Sidebar = () => {
    return (
        <>
            <div className=' lg:w-[240px]   flex lg:flex-col items-center bg-white justify-around lg:justify-normal lg:h-[100dvh] ' >
                <div className='  w-[170px] flex lg:w-[79%]  bg-slate-100 items-center p-2 text-blue-600 my-12 cursor-pointer'>
                    <Link to={'/addproducts'} className='flex justify-around' >  <img src={svg} alt="" />
                        <span>Add Products</span></Link>
                </div>
                <div className=' w-[170px] lg:w-[70%]  bg-slate-100 items-center p-2 text-blue-600 cursor-pointer'>
                    <Link to={'showproducts'} className='flex justify-around'>    <img src={remove} alt="" />
                        <span>Product List</span></Link>
                </div>

            </div>
        </>
    )
}

export default Sidebar
