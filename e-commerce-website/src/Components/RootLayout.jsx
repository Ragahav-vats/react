import React from 'react'
import Heading from './Heading'
import { Outlet } from 'react-router'
import ContextAPI from './ContextAPI'

export default function RootLayout() {
  return (
    <>
      <ContextAPI>
        <Heading />
        <Outlet />
      </ContextAPI>

    </>
  )
}
