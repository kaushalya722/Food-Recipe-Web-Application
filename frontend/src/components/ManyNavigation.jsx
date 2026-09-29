import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export const ManyNavigation = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/> 
        <Footer/>
    </div>
  )
}
 //<Outlet/> - renderthe childern