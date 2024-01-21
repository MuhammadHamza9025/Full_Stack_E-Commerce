import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ShowProducts from "./ShowProducts";
import AddProducts from "./AddProducts";
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';


const Admin = () => {

    const [data, setdata] = useState([])
    const getapi = async () => {
        const getdata = await fetch('http://localhost:9000/addproducts')
        const result = await getdata.json()
        setdata(result)

    }

    useEffect(() => {
        getapi()
    }, [])
    return (
        <>
            <div className='flex flex-col lg:flex-row'>
                <Sidebar ></Sidebar>
                <Routes>
                    <Route path="/addproducts" element={<AddProducts getapi={getapi} data={data}></AddProducts>}></Route>
                    <Route path="/showproducts" element={<ShowProducts getapi={getapi} data={data}></ShowProducts>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default Admin
