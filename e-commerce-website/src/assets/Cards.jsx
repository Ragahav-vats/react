import React, { useEffect, useState } from 'react'
import Show from '../Components/Show';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';


export default function Cards() {
    const [showImages, setShowImages] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    useEffect(()=>{
    axios.get('https://dummyjson.com/products?limit=12&skip=12')
    .then((result) =>{
       setShowImages(result.data.products)
    })
    .catch(() =>{
         toast.error('something went wrong !')
    })
},[]);
    return (
        <>
        <ToastContainer />
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row text-center p-5'>
                        <h2>Best Selling Products</h2>
                    </div>
                    <div className='row'>
                        {
                            showImages.map((items,index) =>{
                            return(
                                <Show key={index} items={items}/> 
                            )
                            
                        })

                        }
                    </div>
                </div>
            </div>

        </>
    )
}
