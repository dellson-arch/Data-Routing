🔍 Example
async function test1() {
  return 10
}

async function test2() {
  console.log("hello")
}

Output:
test1() → Promise { 10 }
test2() → Promise { undefined }

👉 See?

Return ho ya na ho → Promise toh aayega hi
🔴 Now your case
Case 1:
useEffect(()=>{
  getAllProducts()
},[])

👉 Tumne call kiya
👉 But uska return (Promise) ignore kar diya

So internally:

getAllProducts() → Promise (ignored)

Case 2:
let data = getAllProducts()
console.log(data)

👉 Ab tumne us Promise ko store kiya
👉 Isliye console me dikha:

Promise { <pending> }