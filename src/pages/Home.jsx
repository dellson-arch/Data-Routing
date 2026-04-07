import { useLoaderData } from "react-router"

const Home = () => {
  console.log("home rendering ...")

  let products = useLoaderData() //ye ek hook hai jo karta hai ki loader me jo bhi data hoga uska result yaha lakar dega
  console.log("products jo home me aa chuke hai -->" , products)

  return (
    <div>
      Home
    </div>
  )
}

export default Home

//mere ko karna tha ki jo api hit ho rahi hai wo dom load hone se pehle aa jaye toh App routes me jao and loader banao