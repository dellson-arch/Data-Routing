import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'

const AuthProtected = () => {

  //idhar mere ko logic likhna hai ki agar user logged in hoga toh mere paas toh tu nii aayega 
  const{LoginUser} = useContext(Auth)
  
  if(LoginUser){
    return <Navigate to={'/dashboard'}/>
  }
  return <Outlet/>
}

export default AuthProtected
