import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { axiosInstance } from '../config/AxiosInstance'

const ProductDetails = () => {
   let { id } = useParams()
   let [productDetail, setProductDetail] = useState(null)

   let getSingleProduct = async () => {
    try {
        let res = await axiosInstance.get(`/products/${id}`) //byDeafult .get hoti hai isliye kuch nii likha likh bhi sakte ho
        setProductDetail(res.data) 
    } catch (error) {
        console.log("error fetching product details", error)
    }
   }
  
   useEffect(() => {
     if (id) {
        getSingleProduct()
     }
   }, [id])

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6 lg:p-20 font-sans overflow-hidden">
      {/* Map over the [productDetail] array */}
      {productDetail && productDetail.id && [productDetail].map((val) => {
        return (
          <div key={val.id} className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left side: HD Image with Realistic Reflection */}
            <div className="relative flex flex-col justify-center items-center h-[50vh] lg:h-[70vh] group">
              
              {/* 1. Main HD Image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img 
                  src={val.thumbnail} 
                  alt={val.title} 
                 
                  className="w-[90%] h-[90%] object-contain drop-shadow-[0_45px_70px_rgba(0,0,0,0.18)] transition-transform duration-700 hover:scale-[1.03] filter brightness-110 contrast-105 saturate-110"
                />
              </div>

              {/* 2. Realistic Floor Reflection */}
              <div className="absolute -bottom-2 w-full h-[15%] left-0 right-0 z-0 pointer-events-none">
                 {/* Create the flipped reflection */}
                 <div className="w-full h-full origin-top transform scale-y-[-0.75] filter blur-sm opacity-60">
                    <img 
                      src={val.thumbnail} 
                      alt="" 
                      className="w-full h-full object-contain filter brightness-120 saturate-120"
                    />
                 </div>
                 
                 {/* Radial Gradient Floor Mask (Makes it blend into the floor) */}
                 <div className="absolute inset-x-0 -bottom-1 h-full bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/90 to-transparent" />
                 
                 {/* Linear Gradient Floor Mask (Makes it fade away from the product) */}
                 <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/10 to-[#F8F9FA]/80" />
              </div>

              {/* 3. Subtle Glass Floor Effect */}
              <div className="absolute -bottom-1 h-[2px] w-[90%] left-[5%] bg-white/20 blur-[1px] rounded-full z-[1]" />
            </div>

            {/* Right side: Product Info */}
            <div className="flex flex-col z-10 p-4">
              <div className="mb-10">
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4">
                    {val.brand || val.category}
                </span>
                
                <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[0.95] drop-shadow-sm">
                  {val.title}
                </h2>
                
                <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                  {val.description}
                </p>
              </div>

              <div className="flex items-center gap-10">
                <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Price</span>
                    <span className="text-4xl font-light text-gray-900 tracking-tighter">
                        ${val.price}
                    </span>
                </div>
                
                <button className="flex-1 lg:flex-none bg-gray-900 border border-gray-900 px-16 py-4 relative group overflow-hidden transition-all hover:bg-black active:scale-95 shadow-xl">
                   <span className="relative z-10 text-[12px] font-bold uppercase tracking-[0.2em] text-white">
                      Add to Cart
                   </span>
                </button>
              </div>

              <div className="mt-16 pt-8 border-t border-gray-100 flex gap-12">
                <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Rating</span>
                    <span className="text-sm font-bold text-gray-900">★ {val.rating}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Stock</span>
                    <span className="text-sm font-bold text-gray-900">{val.stock} Units</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductDetails;