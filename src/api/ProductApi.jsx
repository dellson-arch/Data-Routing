import { axiosInstance } from "../config/AxiosInstance"

  export let getAllProducts = async()=>{
     try {
      let res = await axiosInstance.get('/products') //https://dummyjson.com --> baseURL , products --> endPoint of the API
      console.log("api hitted")
    //   console.log(res)
      return res.data.products
     } catch (error) {
      console.log("errors in products api", error)
     }
  }


  //Ab agar isko home pe use karna hai