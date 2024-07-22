import React from 'react'
import data from '../Assets/data'

const Popular = () => {
    return (
        <>
            <h2 className='font-bold text-4xl my-[2em] text-center '>Popular in Women</h2>
            <div className='flex justify-center flex-wrap  mt-[1em] gradiant  p-3 h-[100%]'>
                {data.map((items) => {
                    return (
                        <>
                            <div className='w-[152px] sm:w-[19vw]  m-[5px] sm:m-[7px] lg:m-[12px]' key={items.id}>
                                <img src={items.image} alt="" className='h-[140px] sm:h-[200px] lg:h-[250px] w-[100%]' />
                                <span className='text-gray-800 max-w-[100%] my-10 text-xs sm:text-sm '>{items.name.substring(0, 23) + '...'}</span>
                                <br />
                                <span className='text-xs text-red-500 font-semibold'>${items.new_price}</span>
                                <span className='line-through italic mx-10 text-gray-400 text-xs'>${items.old_price}</span>

                            </div>
                        </>
                    )
                })}
            </div >
        </>
    )
}

export default Popular
