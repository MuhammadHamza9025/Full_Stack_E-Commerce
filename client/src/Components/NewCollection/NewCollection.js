import React, { useContext } from 'react'
import newcollection from '../Assets/new_collections'
import bannermens from '../Assets/banner_mens.png'


import { ShopContext } from '../../Context/ShopContext'

const NewCollection = () => {

    const { newcoll } = useContext(ShopContext)
    console.log(newcoll)
    return (
        <>
            <h2 className='font-bold text-4xl my-[1.5em] text-center '>New Collections</h2>
            <div className='flex justify-center flex-wrap  mt-[1em] gradiant  p-3 h-[100%]'>
                {newcoll.map((items) => {
                    return (
                        <>
                            <div className='w-[118px]  sm:w-[19vw]  m-[5px] sm:m-[7px] lg:m-[12px]' key={items.id}>
                                <img src={items.image} alt="" className='h-[140px] sm:h-[200px] lg:h-[250px] w-[100%]' />
                                <span className='text-gray-800 max-w-[100%] my-10 text-xs sm:text-sm lg:text-balance'>{items.name}</span>
                                <br />
                                <span className='text-sx'>${items.new_price}</span>
                                <span className='line-through mx-10 text-gray-400 text-xs'>${items.old_price}</span>

                            </div>
                        </>
                    )
                })}
            </div >

        </>
    )
}

export default NewCollection
