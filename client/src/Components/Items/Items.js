import React from 'react'
import { Link } from 'react-router-dom'
import image from '../Assets/p1_product_i1.png'
import newicon from '../Assets/new.png'

const Items = (props) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <Link to={`/product/${props.id}`} onClick={scrollToTop}>
                <div className='w-[118px]  sm:w-[19vw]  m-[5px] sm:m-[7px] lg:m-[12px] relative' key={props.id}>
                    <img src={props.image} alt="" className='h-[140px] sm:h-[200px] lg:h-[250px] w-[100%]' />
                    <span className='text-gray-800 max-w-[100%] my-10 text-xs sm:text-sm lg:text-balance'>{props.name}</span>
                    <br />
                    <span className='text-sx'>${props.new_price}</span>
                    <span className='line-through mx-10 text-gray-400 text-xs'>${props.old_price}</span>
                    {/* <div className='absolute z-9 -top-2 blinking-image'><img src={newicon} alt="" className='h-[50px] -rotate-45 ' /></div> */}
                </div>
            </Link>










        </>
    )
}

export default Items
