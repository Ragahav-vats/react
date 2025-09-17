import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Show from './Show';

export default function BestSelling() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php?limit=12')
        .then((result) => {
            setProducts(result.data.data);
            console.log(result.data.data)
        })
        .catch(() => {
            toast.error('Something went wrong !',{

            });
        })
    },[]);
    return (
    <>
    
        <div className='container-fluid'>
                <div className='container'>
                    <div className='row p-5 text-center'>
                        <h2>Best Selling Products</h2>
                    </div>
                    <div className='row row-gap-3'>
                        {
                            products.map((items, index) => {
                                return(
                                    <Show key={index} items={items} type="1"/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

                
    </>
            )
}

