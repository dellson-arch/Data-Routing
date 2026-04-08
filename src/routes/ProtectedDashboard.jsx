import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'

const ProtectedDashboard = () => {
    console.log("protected rendering ...")

    const{LoginUser} = useAuth()

    if(!LoginUser){
     toast.error("Unauthorized Error")
     return <Navigate to={"/"}/>
    }
    return <Outlet/>
}

export default ProtectedDashboard
