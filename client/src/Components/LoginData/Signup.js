import React, { useState } from 'react'

const Signup = () => {
    const [Username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


    const handlesignup = async (e) => {
        const data = { Username, email, password }
        e.preventDefault()
        const fetchlogin = await fetch('http://localhost:9000/signup', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })


    }
    return (
        <>
            <div className='flex justify-center p-14 bg-slate-200'>
                <div className='flex flex-col items-center justify-center border p-6 bg-white'>
                    <h2 className='font-bold text-3xl my-3'>Sign Up</h2>
                    <input type="text" placeholder='Your Name' className='w-[300px] p-2 outline-none border bg-transparent text-gray-600 my-1' onChange={(e) => setusername(e.target.value)} />
                    <input type="text" placeholder='Your Email' className='w-[300px] p-2 outline-none border bg-transparent text-gray-600 my-1' onChange={(e) => setemail(e.target.value)} />
                    <input type="password" placeholder='Password' className='w-[300px] p-2 outline-none border bg-transparent text-gray-600 my-1' onChange={(e) => setpassword(e.target.value)} />
                    <button className='w-[300px] p-2 outline-none border bg-red-600 text-white font-bold mt-4 hover:bg-red-800' onClick={handlesignup}>Continue</button>
                </div>
            </div>
        </>
    )
}

export default Signup
