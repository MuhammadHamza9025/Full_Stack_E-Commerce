import React, { useContext, useState } from 'react'
import ShopCategory from '../../Pages/ShopCategory'
import { ShopContext } from '../../Context/ShopContext'
// import 'react-notifications/lib/notifications.css';


const CartItems = ({ image, category, price, name, id }) => {
    const { cartItem, removetocart } = useContext(ShopContext)





    return (
        <>


            <tbody>
                <tr class="bg-white border-b  hover:bg-gray-50">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                        <img src={image} alt="" className='h-[60px]' />
                    </th>
                    <td class="px-6 py-4">
                        {name}
                    </td>
                    <td class="px-6 py-4">
                        {category}
                    </td>
                    <td class="px-6 py-4">
                        ${price}
                    </td>

                    <td class="px-6 py-4 text-right">
                        <span href="#" class="font-medium text-blue-600 dark:text-blue-500 hover: cursor-pointer
                        " onClick={() => removetocart(id)}>❌</span>
                    </td>

                </tr>

            </tbody>

        </>
    )
}

export default CartItems
