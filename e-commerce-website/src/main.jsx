import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Heading from './Components/Heading'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import Cards from './assets/Cards'


import './assets/css/style.css'
import ProductShoping from './Components/ProductShoping'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Home'


createRoot(document.getElementById('root')).render(
  <>
   {/* <Home/>
   <ProductShoping/> */}
   <BrowserRouter>
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/product-shoping' element={<ProductShoping/>}/>
   </Routes>
   </BrowserRouter>
   
  </>,
)
