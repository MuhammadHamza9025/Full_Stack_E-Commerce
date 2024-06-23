import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import CartItems from '../Components/Cartdata/Cartdata'
import ShopCategory from './ShopCategory'
import Cartdata from '../Components/Cartdata/Cartdata'
import Items from '../Components/Items/Items'
const Cart = () => {
    const { cartItem, aaaaa } = useContext(ShopContext)

    // const [array, setarray] = useState(cartItem.map((val) => val.new_price))  // array form of all prices
    // let [sum, setsum] = useState(0)
    // let newsome = 0

    // for (var i = 0; i < array.length; i++) {
    //     newsome = newsome += array[i]

    // }
    // setsum(new)



    return (
        <>
            {cartItem.length > 0 ?

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right  text-black">
                        <thead className="text-xs uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3 text-xs w-[450px] sm:w-[330px] ">
                                    Title
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Remove</span>
                                </th>
                            </tr>
                        </thead>

                        {
                            cartItem ? cartItem?.map((item) => {
                                return (<>
                                    <Cartdata key={item.id} image={item.image} price={item.new_price} category={item.category} name={item.name} id={item._id} ></Cartdata>

                                </>)
                            }) : ''
                        }

                    </table>
                </div>

                :
                <div className='h-[40vh] flex justify-center items-center text-5xl font-bold font-mono'>
                    The Cart is Empty
                </div>

            }
            {/* {
                aaaaa.map((i) => {
                    return (
                        <>
                            <p>{i.email}</p>
                        </>
                    )

                })
            } */}

            <div className=' mx-8 mt-[5em]'>
                <span className='font-bold text-2xl m-4 '>Cart Total</span>
                <div className=' flex sm:w-[400px] w-[250px]  flex-col  text-gray-600 my-10'>
                    <div className='flex justify-between'> <span>SubTotal </span><span>${
                        cartItem
                            .map((val) => val.new_price)
                            .reduce(
                                (total, value) => parseFloat(total) + parseFloat(value), 0

                            )}
                    </span></div>
                    <hr className='my-2 border-2 border-gray-200' />
                    <div className='flex justify-between'> <span>Shipping </span><span>Free </span></div>
                    <hr className='my-2 border-2 border-gray-200' />
                    <div className='flex justify-between'> <span>Total </span><span>$
                        {
                            cartItem
                                .map((val) => val.new_price)
                                .reduce(
                                    (total, value) => parseFloat(total) + parseFloat(value), 0

                                )}
                    </span></div>

                </div>
                <div className=' flex justify-end sm:w-[400px] w-[250px] '>
                    <button className='my-4 bg-red-600 text-base rounded-3xl text-white w-[180px] p-1 active:bg-red-500   '  >Proceed To Payment</button>

                </div>
            </div>
        </>

    )
}

export default Cart
