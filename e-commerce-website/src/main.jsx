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
import AboutUs from './Components/AboutUs'
import ProductDetails from './Components/ProductDetails'
import RootLayout from './Components/RootLayout'
import ContactUs from './Components/ContactUs'
import ViewCart from './Components/ViewCart'


createRoot(document.getElementById('root')).render(
  <>
    {/* <Home/>
   <ProductShoping/> */}
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/product-shoping/:slug1?/:slug2?' element={<ProductShoping />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/product-details/:id?' element={<ProductDetails />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/view-cart' element={<ViewCart/>} />
        </Route>

        <Route path='admin-panel' element={<RootLayout />}>

          <Route path='categories' >
            <Route path='add' element={<Home />} />
            <Route path='view' element={<Home />} />
            <Route path='edit' element={<Home />} />
            <Route path='details' element={<Home />} />
          </Route>

          <Route path='products'>
            <Route path='add' element={<Home />} />
            <Route path='view' element={<Home />} />
            <Route path='edit' element={<Home />} />
            <Route path='details' element={<Home />} />
          </Route>


        </Route>

      </Routes>
    </BrowserRouter>

  </>,
)
