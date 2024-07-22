import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Items from '../Components/Items/Items'
import dropdown from '../Components/Assets/dropdown_icon.png'


const ShopCategory = (props, { category }) => {


    const { all_product1 } = useContext(ShopContext)
    console.log(all_product1)
    // const newarray = all_product.concat(newdata)
    // console.log(newdata)







    return (
        <>
            <div>
                <img src={props.banner} alt="" className='m-auto w-[90%] h-[120px] sm:h-full sm:w-[80%]' />
            </div>
            <div className='flex justify-between m-auto w-[77%] mt-10'>
                <span className='text-xs sm:text-base'><b>Showing 00</b> out of {all_product1.length}  Items</span>

                <div className='flex justify-between border items-center border-gray-600 rounded-xl px-[0.9em] cursor-pointer ' >
                    Sort by   <img src={dropdown} alt="" className='h-[7px] mx-2' />
                </div>
            </div>
            <div className='flex w-[85%] flex-wrap justify-center m-auto mt-6 '>
                {all_product1?.map((items) => {
                    if (items && items.category && props.category === items.category) {


                        return (
                            <>
                                <Items key={items.id} image={items.image} name={items.name} new_price={items.new_price} old_price={items.old_price} id={items.id} ></Items>
                            </>

                        )
                    }

                })}




            </div>
            <div className='flex justify-center my-[2em]'>
                <button className=' w-[200px]  bg-slate-50 py-3  rounded-3xl font-bold hover:bg-slate-50'>Explore More</button>
            </div>
        </>
    )
}

export default ShopCategory
