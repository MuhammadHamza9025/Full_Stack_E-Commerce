import React, { useEffect } from 'react'

const ShowProducts = ({ data, getapi }) => {

    const deleteproduct = async (id) => {
        console.log(id)
        try {
            const resp = await fetch(`https://backend-puce-zeta.vercel.app/addproducts/${id}`, {
                method: "DELETE",
            });
            // Refresh data after successful delete
        } catch (error) {
            console.error('Error deleting data:', error);
        }
        getapi()
    };



    return (
        <>



            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[100vw] overflow-y-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Our products
                        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((items) => {

                                return (
                                    <>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <img src={items.image} alt="" className='h-[120px] w-[100px]' />
                                            </th>
                                            <td class="px-6 py-4">
                                                <span>{items.name}</span>
                                            </td>
                                            <td class="px-6 py-4">
                                                {items.category}
                                            </td>
                                            <td class="px-6 py-4">
                                                ${items.new_price}
                                            </td>
                                            <td class="px-6 py-4 text-right">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => deleteproduct(items._id)}>Delete</a>
                                            </td>
                                        </tr>

                                    </>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div >

        </>
    )
}

export default ShowProducts
