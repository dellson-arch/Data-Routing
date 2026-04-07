import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'
import { toast } from 'react-toastify'

const ProtectedDashboard = () => {
    console.log("protected rendering ...")

    const{LoginUser} = useContext(Auth)

    if(!LoginUser){
     toast.error("Unauthorized Error")
     return <Navigate to={"/"}/>
    }
    return <Outlet/>
}

export default ProtectedDashboard
