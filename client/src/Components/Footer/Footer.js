import React from 'react'
import logo from '../Assets/logo.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import pintester from '../Assets/pintester_icon.png'
import instagram from '../Assets/instagram_icon.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    const a = new Date().getFullYear()
    return (
        <>
            <div className='flex justify-center flex-col items-center '>
                <div className='sm:space-x-4 space-x-2 my-[1.5em]  items-center  flex justify-center'>
                    <Link to={'/'}>    <img src={logo} alt="" className='cursor-pointer' /></Link>
                    <span className='font-bold sm:text-2xl  text-xl  '> Shopper</span>
                </div>
                <ul className='flex sm:space-x-10 space-x-3 text-sm sm:text-base mt-[2em]'>
                    <li className='cursor-pointer'>Company</li>
                    <li className='cursor-pointer'>Products</li>
                    <li className='cursor-pointer'>Offices</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
                <ul className='flex sm:space-x-6 space-x-4 text-sm sm:text-base mt-[1em]'>

                    <li className=' cursor-pointer border-[0.4] my-3 border-gray-400 p-[5px] bg-gray-200'><img src={whatsapp} alt="" className='h-[30px]' /></li>
                    <li className=' cursor-pointer border-[0.4] my-3 border-gray-400 p-[5px] bg-gray-200'><img src={instagram} alt="" className='h-[30px]' /></li>
                    <li className=' cursor-pointer border-[0.4] my-3 border-gray-400 p-[5px] bg-gray-200'><img src={pintester} alt="" className='h-[30px]' /></li>
                </ul>
                <hr className='font-bold my-[20px] bg-black  border border-gray-300 h-[1px] w-[80%] ' />
                <p>Copyright @ <span>{a}</span> - All Rights Reserved</p>
            </div >
        </>
    )
}

export default Footer
