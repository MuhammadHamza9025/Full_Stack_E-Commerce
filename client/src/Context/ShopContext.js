import React, { createContext, useState } from "react";
import { useEffect } from 'react'
import { Navigate } from "react-router-dom";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null)





const ShopContextProvider = (props) => {
    const [cartItem, setcartItem] = useState([])



    const addtocart = (itemId) => {
        setcartItem((pre) => ([...pre, itemId]))
        if (localStorage.getItem('auth-token')) {

            fetch('http://localhost:9000/cart', {
                method: "POST",
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemId })
            }).then((response) => response.json()).then((data) => console.log(data.cart))
        }
        else {
            // Navigate('/login')
        }

    }

    const removetocart = (id) => {
        setcartItem(cartItem.filter((c) => c.id !== id))
    }


    const [newdata, setnewdata] = useState([]);
    const [newcart, setnewcart] = useState([])
    // console.log(newdata)




    const getapidata = async () => {

        const getapi = await fetch('http://localhost:9000/addproducts')
        const result = await getapi.json()
        setnewdata(result)
    }

    // const getcartdataf = async () => {

    //     const cartitem = await fetch('http://localhost:9000/getcart', {

    //         method: "POST",
    //         headers: {
    //             Accept: 'application/form-data',
    //             'auth-token': `${localStorage.getItem('auth-token')}`,
    //             "Content-Type": "application/json"
    //         },
    //         body: ''
    //     })

    //     const res = await cartitem.json()
    //     console.log(res)
    //     // setcartItem(res)


    // }

    useEffect(() => {
        getapidata()
        // getcartdataf()


    }, [])



    const all_product1 = newdata

    // const all_product1 = newdata
    // const [cart, setcartid] = useState({})

    // for (let i = 0; i < all_product1.length; i++) {
    //     console.log(all_product1.name)
    // }

    // useEffect(() => {
    //     const idsArray = all_product1.map((item) => item.id);
    //     setcartid(idsArray);
    // }, []);


    // console.log('the ids are ', cart)


    const contextvalue = { all_product1, cartItem, setcartItem, addtocart, removetocart }

    return (

        <ShopContext.Provider value={contextvalue} >

            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
