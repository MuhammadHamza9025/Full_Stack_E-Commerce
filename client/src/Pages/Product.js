import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
    const { all_product1 } = useContext(ShopContext)


    const { id } = useParams()




    const product = all_product1.find((e) => (e.id === Number(id)))





    return (
        <div>
            <BreadCrums product={product}></BreadCrums>
            <ProductDisplay product={product}></ProductDisplay>
            <RelatedProducts product={product}></RelatedProducts>

        </div>
    )
}

export default Product
