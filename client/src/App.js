import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from '../src/Pages/Shop'
import ShopCategory from '../src/Pages/ShopCategory'
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Signup from './Components/LoginData/Signup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import kid_banner from './Components/Assets/banner_kids.png'
import women_banner from './Components/Assets/banner_women.png'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/Mens' element={<ShopCategory category='men' banner={men_banner} />}></Route>
          <Route path='/Women' element={<ShopCategory category='women' banner={women_banner} />}></Route>
          <Route path='/Kids' element={<ShopCategory category='kid' banner={kid_banner} />}></Route>
          <Route path='/product/:id' element={<Product />}></Route>

          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/login' element={<LoginSignup />}></Route>
          <Route path='/signup' element={<Signup />}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
