import axios from "axios";

export let axiosInstance = axios.create({
    baseURL : "https://dummyjson.com"
})

axiosInstance.interceptors.response.use(
    (response) => {
        console.log("in instance" , response)
        return response
    },
    (error) => {
        console.log("error in instance" , error)
    }
)