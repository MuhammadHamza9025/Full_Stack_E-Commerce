import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";

import Admin from "./Pages/Admin";
import { useEffect, useState } from "react";



function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Admin></Admin>

      </BrowserRouter>
    </>
  );
}

export default App;
