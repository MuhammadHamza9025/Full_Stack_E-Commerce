import React from 'react'
import handicon from '../Assets/hand_icon.png'
import arrowicon from '../Assets/arrow.png'
import heroimage from '../Assets/hero_image.png'


const Hero = () => {
    return (
        <div className='flex justify-around   h-[80dvh] bg-pink-200-200 bg-pink-300'>
            <div className='w-[500px] flex flex-col justify-center   items-center'>
                <p className=' font-bold text-lg italic items-center justify-center text-center mb-4'>NEW ARRIVALS ONLY</p>


                <h1 className='font-bold text-4xl text-center sm:text-5xl lg:text-6xl'>New Collections For Everyone</h1>
                <button className='flex justify-around items-center bg-red-500 rounded-3xl m-[2em] p-2 w-[220px] text-white font-bold '>Latest Collection <img src={arrowicon} alt="" /> </button>
            </div>
            <div>
                <img src={heroimage} alt="" className='h-[500px] hidden sm:block' />
            </div>

        </div>
    )
}

export default Hero
