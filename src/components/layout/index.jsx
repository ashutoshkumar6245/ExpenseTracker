import React from 'react'
import Header from '../header'
import Navigation from '../navBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col justify-center'>
        <Header/>
        <Navigation/>
        <Outlet/>
    </div>
  )
}

export default Layout