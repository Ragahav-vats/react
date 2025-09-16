import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Heading from './Components/Heading'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import Cards from './assets/Cards'
// import Product from './Components/Product'

import './assets/css/style.css'
import ProductShoping from './Components/ProductShoping'


createRoot(document.getElementById('root')).render(
  <>
   {/* <Heading />
   <Cards/>
   <Product /> */}
   <ProductShoping/>
   
  </>,
)
