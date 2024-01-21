import React from 'react'
import offer from '../Assets/exclusive_image.png'

const Offer = () => {
    return (
        <div className='bg-pink-100  p-4 w-[95%]  m-auto sm:w-[70%]  mt-[2em] flex justify-around'>
            <div className='max-w-[52%] flex flex-col justify-center'>
                <span className='font-bold text-3xl sm:text-4xl lg:text-6xl font-sans '>Exclusive Offer for You</span>
                <p className='my-[1em] text-sm  font-semibold'>ONLY ON BEST SELLERS PRODUCT</p>
                <button className='bg-red-500 w-[100px] sm:w-[140px] lg:w-[170px] my-[1em] text-white font-semibold sm:p-2 p-1 rounded-xl'>Check now</button>
            </div>
            <div className='border flex items-end'>
                <img src={offer} alt="" className=' h-[170px] sm:h-[300px]' />
            </div>
        </div>
    )
}

export default Offer
