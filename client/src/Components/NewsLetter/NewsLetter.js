import React from 'react'


const NewsLetter = () => {
    return (
        <>
            <div className='w-[95%] sm:w-[80%] m-auto   p-10 sm:py-16 bg-purple-200 my-[1em]  flex flex-col justify-center items-center      ' >
                <h1 className='text-3xl sm:text-5xl text-center font-bold  '>Get Exclusive Offer on your Email</h1>
                <h3 className='text-center font-semibold my-[1em]'>Subscribe to our Network and stay Updated.</h3>
                <div className='border border-gray-500 rounded-full w-[300px] sm:w-[60%] m-auto bg-white  flex justify-between mt-[4em] mb-[1.5em]  gradiant'>
                    <input type="text" placeholder='Your Email ID' className='text-gray-500 border-none outline-none sm:p-[0.8em] w-[140px] sm:w-[200px] p-2  rounded-full' />
                    <button className='bg-black text-white  w-[60px] sm:w-[120px] flex justify-center  px-14 rounded-full items-center' >Subscribe</button>
                </div>

            </div>
        </>
    )
}

export default NewsLetter
