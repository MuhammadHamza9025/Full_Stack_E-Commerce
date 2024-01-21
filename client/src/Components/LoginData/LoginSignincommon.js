
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginSignincommon = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handlelogin = async (e) => {
        const data = { email, password }
        let resdata = '';
        e.preventDefault()
        const fetchlogin = await fetch('http://localhost:9000/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json()).then((data) => resdata = data)
        if (resdata.success) {
            localStorage.setItem('auth-token', resdata.token)
            window.location.replace("/")
        }
        else {
            alert(resdata.errors)
        }

    }

    return (
        <>

            <div className='flex justify-center p-14 bg-slate-200'>
                <div className='flex flex-col items-center justify-center border p-6 bg-white'>
                    <h2 className='font-bold text-3xl my-3'>Sign in</h2>
                    <input type="text" placeholder='Your Email' className='w-[300px] p-2 outline-none border bg-transparent text-gray-600 my-1' onChange={(e) => setemail(e.target.value)} />
                    <input type="password" placeholder='Password' className='w-[300px] p-2 outline-none border bg-transparent text-gray-600 my-1' onChange={(e) => setpassword(e.target.value)} />
                    <button className='w-[300px] p-2 outline-none border bg-red-600 text-white font-bold mt-4 hover:bg-red-800' onClick={handlelogin}>Continue</button>
                    <div className='text-xs my-2'>Don't have an Account ? <Link to='/signup' className='cursor-pointer text-blue-600'>Sign up here.</Link></div>
                </div>
            </div>

        </>
    )
}

export default LoginSignincommon
