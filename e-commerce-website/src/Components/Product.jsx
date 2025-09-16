import React, { useEffect, useState } from 'react'
import Show from './Show';
import axios from 'axios';


export default function Product({items}) {
const [showImages, setShowImages] = useState([1,2,3,4,5,6,7,8])

useEffect(()=>{
    axios.get('https://dummyjson.com/products?limit=12')
    .then((result) =>{
       setShowImages(result.data.products)
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
