import React from 'react'
import NavBar from '../Components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='max-w-6xl mx-auto'>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}
