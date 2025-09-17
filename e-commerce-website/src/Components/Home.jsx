import React from 'react'
import Heading from './Heading'
import { Card } from 'react-bootstrap'
import Product from './Product'
import BestSelling from './BestSelling'
// import Show from './Show'




export default function Home() {
  return (
    <>
      <Heading/>
      <Card/>
      <Product/>
      <BestSelling/>
      {/* <Show/> */}
      
    </>
  )
}
