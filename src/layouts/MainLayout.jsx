import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  console.log("main Layout rendering ...")
  return (
   <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      <Navbar />
           
    <main className="flex-1 h-full overflow-y-auto">
       <div className="p-8">
           <Outlet />
        </div>
      </main>

    </div>
  )
}

export default MainLayout;