import { createContext, useState } from "react";

export let Auth = createContext()

export let AuthProvider = ({children})=>{
    const[registeredUser , setRegisteredUser] = useState(
        JSON.parse(localStorage.getItem("registeredUsers-->")) || []
    )
    const[LoginUser , setLoginUser] = useState(
        JSON.parse(localStorage.getItem("Logged user-->")) || null //waise bydefault localStorage null hi return karta hai but theek hai 
    )

   return <Auth.Provider value={{setRegisteredUser , setLoginUser , registeredUser , LoginUser}}>
    {children}
   </Auth.Provider>
}