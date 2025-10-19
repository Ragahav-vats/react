import React from 'react'
import "./globals.css"
import MainLayout from './(website)/Components/Common/MainLayout'
import PageNotFound from './(website)/Components/PageNotFound'

export default function notFound() {
  return (
    <>
      <MainLayout>
        <PageNotFound/>
      </MainLayout>
    </>
  )
}
