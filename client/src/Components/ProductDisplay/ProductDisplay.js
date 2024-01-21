import React, { useContext, useState } from 'react'
import star from '../Assets/star_dull_icon.png'
import star1 from '../Assets/star_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = ({ product }) => {
    const { addtocart } = useContext(ShopContext)


    return (
        <>
            <div className='sm:mx-[6em] my-6 flex flex-col  lg:flex-row   '>

                <div className='flex w-[90%]  m-auto lg:w-[50%]   overflow-hidden '>  {/* leftside */}
                    <div >
                        <img src={product.image} className='sm:h-[90px] sm:m-4 h-[65px] m-2  ' alt="" />
                        <img src={product.image} className='sm:h-[90px] sm:m-4 h-[65px] m-2  ' alt="" />
                        <img src={product.image} className='sm:h-[90px] sm:m-4 h-[65px] m-2  ' alt="" />
                        <img src={product.image} className='sm:h-[90px] sm:m-4 h-[65px] m-2  ' alt="" />
                    </div>
                    <div className='w-[100%]'>
                        <img src={product.image} className='sm:h-[420px] h-[285px] w-[100%] sm:m-4 m-2 ' alt="" />
                    </div>
                </div>
                <div className='my-4 mx-8 w-[80%]  lg:w-[50%] '>{/* righttside */}
                    <h1 className='font-bold text-2xl sm:text-3xl'>{product.name}</h1>
                    <div className='flex space-x-1 space-y-2'>
                        <img src={star1} className='h-[12px] my-2' alt="" />
                        <img src={star1} className='h-[12px]' alt="" />
                        <img src={star1} className='h-[12px]' alt="" />
                        <img src={star1} className='h-[12px]' alt="" />
                        <img src={star} className='h-[12px]' alt="" />
                    </div>
                    <div className='w-[20%] flex justify-between my-[1em]'>
                        <span className='line-through text-gray-600'>${Number(product.old_price)}</span>
                        <span className='text-red-500 font-semibold'>${product.new_price}</span>
                    </div>
                    <span className='text-sm flex w-[90%]  sm:w-[100%]'>A Light Weight, Usually Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, veniam for bith men and women we have branded products.</span>
                    <h2 className='text-black my-3 text-xl font-semibold mx-3' > Select size</h2>
                    <div className='flex space-x-2 my-4 w-[80%] justify-center'>
                        <button className='h-[30px] w-[30px] border border-gray-300 bg-gray-100 p-2 flex justify-center items-center'>S</button>
                        <button className='h-[30px] w-[30px] border border-gray-300 bg-gray-100 p-2 flex justify-center items-center'>M</button>
                        <button className='h-[30px] w-[30px] border border-gray-300 bg-gray-100 p-2 flex justify-center items-center'>l</button>
                        <button className='h-[30px] w-[30px] border border-gray-300 bg-gray-100 p-2 flex justify-center items-center'>XL</button>
                        <button className='h-[30px] w-[30px] border border-gray-300 bg-gray-100 p-2 flex justify-center items-center'>XXL</button>
                    </div>
                    <button className='my-4 bg-red-600 text-lg text-white w-[180px] p-2 active:bg-red-500' onClick={() => addtocart(product)} >Add to Cart</button>
                    <div><span className='text-black  text-lg font-semibold '> Category :</span> <span>{product.category} ,Tee Shirts</span></div>
                </div>

            </div >
            <div className='w-[80%] m-auto my-[4em]'>
                <div className='flex'>
                    <button className='w-[200px] bg-slate-100 p-3 font-semibold'>Description</button>
                    <button className='w-[200px] bg-slate-100 p-3 font-semibold mx-3'>Reviews (212)</button>
                </div>
                <p className='lg:w-[90%] text-sm sm:text-base w-[100%] flex my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere amet incidunt minus, sunt quia debitis doloremque ex, omnis neque iste hic excepturi nisi, cupiditate nihil eligendi. Quasi necessitatibus quas incidunt quia.
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. At vitae, sint hic porro voluptatum aliquid odio assumenda harum magnam quos quo sit animi cumque repellendus nam consequatur cupiditate corporis accusantium facere aut excepturi? Ex quae sint sunt eveniet earum delectus.</p>
            </div>
        </>
    )
}

export default ProductDisplay
