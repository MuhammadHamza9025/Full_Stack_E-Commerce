import React, { createContext, useState } from "react";
import { useEffect } from 'react'
import { Navigate, json } from "react-router-dom";
import all_product from "../Components/Assets/all_product";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ShopContext = createContext(null)





const ShopContextProvider = (props) => {
    const [newdata, setnewdata] = useState([]);
    const [cartItem, setcartItem] = useState([])
    const [newcoll, setnewcollectiondata] = useState([]);


    // Add to Cart 
    const addtocart = async (itemId) => {
        if (localStorage.getItem('auth-token')) {
            setcartItem((pre) => ([...pre, itemId]))
            toast.success('Item Added To Cart!', {
                position: "top-right",
                autoClose: 1065,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            await fetch('http://localhost:9000/cart', {
                method: "POST",
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(itemId)
            }).then((response) => console.log(response)).then((data) => console.log(data.cart))
        }
        else {
            toast.error('Please Login First to Purchase !', {
                position: "top-leff",
                autoClose: 1665,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            }, window.location.replace('/login'))
        }
    }









    //Getting products from database
    const getapidata = async () => {
        const getapi = await fetch('http://localhost:9000/addproducts')
        const result = await getapi.json()
        setnewdata(result)
    }

    //Gtting carts from Database
    const getcartdataf = async () => {
        const cartitem = await fetch('http://localhost:9000/getcart', {
            method: "POST",
            headers: {
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                "Content-Type": "application/json"
            },
            body: ''
        })
        const res = await cartitem.json()
        const result = res.cart.map((rr) => { return rr.id })
        setcartItem(res.cart)
        console.log(result)
    }

    //Remove items from Cart
    const removetocart = async (id) => {
        toast.success('Item Removed Succesfully !', {
            position: "top-center",
            autoClose: 1065,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
        const detetecarts = await fetch(`http://localhost:9000/getcart/${id}`, {
            method: "DELETE",
            headers: {
                'auth-token': `${localStorage.getItem('auth-token')}`,
            }
        })
        const res = await detetecarts.json()
        console.log(res)
        setcartItem(res)

    }

    //Getting newcollection from database 

    const newcollection = async () => {

        const fetchcollection = await fetch("http://localhost:9000/newcollection")
        const res = await fetchcollection.json()
        setnewcollectiondata(res)
    }


    //useeffect
    useEffect(() => {
        getapidata()
        if (localStorage.getItem('auth-token')) {
            getcartdataf()
            newcollection()
        }
    }, [])



    const all_product1 = newdata;
    const contextvalue = { all_product1, cartItem, setcartItem, addtocart, removetocart, getcartdataf, newcoll }

    return (

        <>
            <ShopContext.Provider value={contextvalue} >

                {props.children}
            </ShopContext.Provider>
            <ToastContainer />
        </>
    )
}
export default ShopContextProvider;
