import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Show from './Show';


export default function Product() {
const [showImages, setShowImages] = useState([])

useEffect(()=>{
    axios.get('https://wscubetech.co/ecommerce-api/products.php?limit=12')
    .then((result) =>{
       setShowImages(result.data.data)
       console.log(result.data.data)
    })
    .catch(() =>{
         toast.error('something went wrong !')
    })
},[]);


  return (
    <>
      <div className='container-fluid'>
                      <div className='container'>
                          <div className='row text-center p-5'>
                              <h2>Top Rated Products</h2>
                          </div>
                          <div className='row'>
                              {
                                  showImages.map((items,index) =>{
                                    return(
                                    <Show key={index} items={items} type='2'/>  
                                  )
                                  
                              })
      
                              }
                          </div>
                      </div>
                  </div>
    </>
  )
}
