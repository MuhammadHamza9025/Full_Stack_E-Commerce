import React from 'react'

import navlogo from '../Admin Panel Assets/nav-logo.svg'
import profile from '../Admin Panel Assets/nav-profile.svg'
import Sidebar from './Sidebar'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between bg-white p-2'>
                <img src={navlogo} alt="" className='m-2 h-[50px] ' />
                <img src={profile} alt="" className='m-2 h-[50px] ' />
            </div>

        </>
    )
}

export default Navbar
