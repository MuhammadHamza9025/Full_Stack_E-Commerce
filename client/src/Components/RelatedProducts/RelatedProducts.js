import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Items from '../Items/Items'

const RelatedProducts = ({ product }) => {

    const { all_product1 } = useContext(ShopContext)
    const newfilter = all_product1.filter((cat) => (cat.category === product.category && cat.id !== product.id))


    return (
        <>
            <div className='flex flex-col justify-center items-center my-[2em]'>
                <h1 className=' font-bold text-3xl'>Related Products</h1>
                <span className='bg-black w-[110px] my-2 h-[4px] rounded-full'></span>
            </div>
            <div className='flex justify-center flex-wrap  mt-[1em] gradiant  p-3 h-[100%]'>

                {newfilter.slice(0, 4).map((items) => {
                    return (
                        <>
                            <Items key={items.id} image={items.image} name={items.name} new_price={items.new_price} old_price={items.old_price} id={items.id}></Items>


                        </>
                    )
                })}
            </div>
        </>
    )
}

export default RelatedProducts
