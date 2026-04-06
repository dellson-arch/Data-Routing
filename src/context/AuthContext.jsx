import { createContext, useState } from "react";

export let Auth = createContext()

export let AuthProvider = ({children})=>{
    const[registeredUser , setRegisteredUser] = useState(
        JSON.parse(localStorage.getItem("registeredUsers-->")) || []
    )
    const[LoginUser , setLoginUser] = useState(null)

   return <Auth.Provider value={{setRegisteredUser , setLoginUser , registeredUser , LoginUser}}>
    {children}
   </Auth.Provider>
}