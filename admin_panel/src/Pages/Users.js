import React, { useEffect, useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Users = () => {
    const [users, setusers] = useState([])



    const fetchusers = async () => {
        const fetchapi = await fetch('https://backend-puce-zeta.vercel.app/users')
        const res = await fetchapi.json()
        setusers(res)
    }
    useEffect(() => {
        fetchusers()
    }, [])



    const deleteusers = async (id) => {




        try {
            const deleteuse = await fetch(`http://localhost:9000/users/${id}`, {
                method: 'DELETE'
            })
            toast.info('User Deleted !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        }
        catch (err) {
            console.log(err)
        }





        fetchusers()
    }

    return (
        <>

            {/* <h1>Total Users : {users.length}</h1> */}
            {/* <div>
                {
                    users?.map((e) => {
                        return (
                            <p>{e.password}</p>
                        )
                    })
                }
            </div> */}


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[100vw] overflow-y-auto">

                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Our products
                        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                username
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Remove Users
                            </th>

                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((items) => {

                                return (
                                    <>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <span>{items.Username}</span>
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <span>{items.email}</span>
                                            </th>

                                            <td class="px-6 py-4 text-right">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => deleteusers(items._id)} >Delete</a>
                                            </td>
                                        </tr>


                                    </>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div >
            <ToastContainer />


        </>
    )
}

export default Users
