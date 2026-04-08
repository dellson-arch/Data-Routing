import { useLoaderData } from "react-router"
import ProductCard from "../components/ProductCard"

const Home = () => {
  console.log("home rendering ...")

  let products = useLoaderData() //ye ek hook hai jo karta hai ki loader me jo bhi data hoga uska result yaha lakar dega
  console.log("products jo home me aa chuke hai -->" , products)

  return (
   <div className="flex flex-wrap gap-6 justify-start">
    {
      products.map((val)=>{
        return <ProductCard key={val.id} product={val}/>
      })
    }
</div>
  )
}

export default Home

//mere ko karna tha ki jo api hit ho rahi hai wo dom load hone se pehle aa jaye toh App routes me jao and loader banao