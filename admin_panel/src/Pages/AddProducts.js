import React, { useState } from 'react'

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = ({ getapi, data }) => {

    const [name, setname] = useState('')
    const [old_price, setprice] = useState('')
    const [new_price, setoffer] = useState('')
    const [category, setcate] = useState('men')
    const [image, setimage] = useState('')
    const [id, setid] = useState(Math.floor(Date.now() / 9000))

    const handleclick = async (e) => {
        e.preventDefault()
        // const data = { name, , category, price, image };
        const formdata = new FormData()
        formdata.append('image', image)
        formdata.append('name', name)
        formdata.append('category', category)
        formdata.append('new_price', new_price)
        formdata.append('old_price', old_price)
        formdata.append('id', id)
        console.log(typeof (id))



        const fetchapi = await fetch('https://backend-w1zs.vercel.app/addproducts', {
            method: 'POST',
            body: formdata,
            // headers: {
            //     "Content-Type": "application/json",
            //     "Content-Type": "multipart/form-data",
            // },
        }).then(() => console.log('Successfull')).catch((err) => console.log(err))
        toast.success("items Added", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
        setname("")
        setprice("")
        setoffer("")
        setimage("")
        getapi()

    }







    return (
        <div className='w-[100%] lg:w[70%] bg-white my-[0.4em] sm:m-[2em] p-2'>
            <div className='flex flex-col'>
                <h2 className='text-lg text-slate-800 my-4'>Project Title</h2>
                <input type="text" placeholder='Type here' className=' w-[340px] sm:-[70%] p-[0.5em] text-slate-600 outline-none border-2 ' value={name} onChange={(e) => setname(e.target.value)} />

            </div>

            <div className=' flex my-4  flex-col sm:flex-row'>
                <div className='flex flex-col w-[340px]  sm:w-[33%]'>
                    <span>Price</span>
                    <input type="Number" placeholder='Price' className=' p-[0.5em] text-slate-600 outline-none border-2  ' value={old_price} onChange={(e) => setprice(e.target.value)} /> </div>
                <div className='flex flex-col w-[340px] sm:mx-[2em] sm:w-[33%]'>
                    <span>Offer Price</span>
                    <input type="Number" placeholder='Offer Price' className=' p-[0.5em] text-slate-600 outline-none border-2 ' value={new_price} onChange={(e) => setoffer(e.target.value)} />

                </div>
            </div>

            <div className='flex flex-col'>
                <span className='text-lg text-slate-800 my-2'>Product Category</span>
                <select name="category" className='border border-black w-[100px] my-4' onChange={(e) => setcate(e.target.value)}>
                    <option value="men">men</option>
                    <option value="women">women</option>
                    <option value="kid">kid</option>
                </select>
            </div>
            <div>
                <input type="file" onChange={(e) => setimage(e.target.files[0])} />
            </div>
            <div>
                <button className='p-2 bg-red-500 font-bold text-white my-4 w-[100px]' onClick={handleclick}>Add</button>
            </div>



            <img src="" alt="" />


            <ToastContainer />
        </div>

    )
}

export default AddProducts
