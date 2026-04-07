import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Navbar />
           
      <main className="flex-1 h-full overflow-y-auto p-8 bg-gray-50">
        <Outlet />
      </main>

    </div>
  )
}

export default MainLayout;