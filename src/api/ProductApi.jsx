import axios from "axios"

  export let getAllProducts = async()=>{
     try {
      let res = await axios.get('https://dummyjson.com/products')
      console.log("api hitted")
    //   console.log(res)
      return res.data.products
     } catch (error) {
      console.log("errors in products api", error)
     }
  }


  //Ab agar isko home pe use karna hai