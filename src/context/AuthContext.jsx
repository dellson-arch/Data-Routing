import { createContext, useContext, useState } from "react";

let Auth = createContext()

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

export let useAuth = ()=> useContext(Auth) //idhar basicallyhum ek hook bana dete hain taki hume har jagah useContext kar kar ke cheeze na karni pade . ab isme har context se data hum kaise le sakte hai using useContext. unecessry load ko reduce karne ke liye