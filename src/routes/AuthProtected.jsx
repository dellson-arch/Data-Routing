import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/AuthContext'

const AuthProtected = () => {

  //idhar mere ko logic likhna hai ki agar user logged in hoga toh mere paas toh tu nii aayega 
  const{LoginUser} = useAuth()
  
  if(LoginUser){
    return <Navigate to={'/dashboard'}/>
  }
  return <Outlet/>
}

export default AuthProtected
