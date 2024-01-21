import React from 'react'

import dropdown from '../Assets/dropdown_icon.png'


const BreadCrums = ({ product }) => {

    return (
        <div className='flex items-center  p-2   mt-[1em] sm:mx-[6.4em] text-xs sm:text-sm'>


            Home <img src={dropdown} alt="" className='transform -rotate-90 h-[10px] mx-[2px] mt-[3px] ' /> SHOP <img src={dropdown} alt="" className='transform -rotate-90 h-[10px] mx-[2px] mt-[3px]' /> {product.category}<img src={dropdown} alt="" className='transform -rotate-90 mx-[2px] h-[10px] mt-[3px]' />{product.name}

        </div>
    )
}

export default BreadCrums
