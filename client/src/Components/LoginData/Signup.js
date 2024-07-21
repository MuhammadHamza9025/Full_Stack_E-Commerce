import React, { useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [Username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


    const handlesignup = async (e) => {
        let resdata = ''
        const data = { Username, email, password }
        e.preventDefault()
        const fetchlogin = await fetch('https://backend-w1zs.vercel.app/signup', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json()).then((data) => resdata = data)
        if (!resdata.success) {
            toast.error(resdata.message, {
                position: "top-right",
                autoClose: 1065,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
        }
        else {
            toast.success(resdata.message, {
                position: "top-right",
                autoClose: 2065,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            setpassword('')
            setemail('')
            setusername('')
            window.location.replace("/login")
        }



    }
    return (
        <>
            <form className='flex justify-center p-14 bg-slate-200 bg-opacity-35'>
                <div className='flex flex-col items-center justify-center border-2 p-6 bg-opacity-100 box-decoration-clone bg-white rounded-lg py-10'>
                    <h2 className='font-bold text-3xl my-3'>Sign Up</h2>
                    <input type="text" placeholder='Your Name' className='w-[300px] p-2 outline-none border bg-transparent text-gray-600 my-1' onChange={(e) => setusername(e.target.value)} />
                    <input type="text" placeholder='Your Email' className='w-[300px] p-2 outline-none border bg-transparent text-gray-600 my-1' onChange={(e) => setemail(e.target.value)} />
                    <input type="password" placeholder='Password' className='w-[300px] p-2 outline-none border bg-transparent text-gray-600 my-1' onChange={(e) => setpassword(e.target.value)} />
                    <button className='w-[300px] p-2 outline-none border bg-red-600 text-white font-bold mt-4 hover:bg-red-800' onClick={handlesignup}>Continue</button>
                </div>
            </form>
            {/* <p onClick={() => toast('k')}>jbjk</p> */}
            <ToastContainer />
        </>
    )
}

export default Signup
