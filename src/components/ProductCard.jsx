import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {

    const navigate = useNavigate()

  // 1. Destructure with a fallback for the image array
  const { title, price, description, images, image, category } = product;
  
  // Use the first image from the array, or the single image string, or a fallback
  const displayImage = (images && images[0]) || image || "https://images.unsplash.com/photo-1482049016688-2d3e1b311543";

  return (
   <div className="group relative h-[520px] w-[280px] overflow-hidden rounded-[40px] bg-white shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2">
      
      {/* 1. Subtle Background Tint (Matches the category) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-transparent" />

      {/* 2. Main Product Image - Centered and padded for clean objects */}
      <div onClick={()=>navigate(`/dashboard/product/detail/${product.id}`)}className="absolute top-0 h-[60%] w-full p-8 flex items-center justify-center">
        <img
          src={displayImage}
          alt={title}
          className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* 3. Floating Category Badge */}
      <div className="absolute top-6 left-6 z-10">
        <span className="rounded-full bg-white/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-800 shadow-sm border border-white/20">
          {category?.name || category}
        </span>
      </div>

      {/* 4. Light Glassmorphism Details Pane */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] w-full overflow-hidden rounded-[40px] border-t border-white/40 bg-white/60 p-6 backdrop-blur-xl z-20 flex flex-col justify-between shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
        
        <div>
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight line-clamp-2 leading-tight">
              {title}
            </h2>
            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 shrink-0">
              <span className="text-orange-500">★</span>
              <span>4.5</span>
            </div>
          </div>

          <p className="text-[11px] leading-relaxed text-gray-600 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Footer: Pricing & Actions */}
        <div className="space-y-4">
          <div className="flex items-end justify-between border-b border-black/5 pb-3">
            <div>
              <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-widest">Price</span>
              <div className="flex items-baseline gap-0.5 text-gray-900">
                <span className="text-sm font-bold">$</span>
                <span className="text-2xl font-black">{price}</span>
              </div>
            </div>
            
            {/* Heart Icon (Subtle) */}
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2">
             <button className="flex-1 py-2.5 rounded-2xl border border-gray-200 text-[10px] font-bold uppercase text-gray-500 hover:bg-gray-50 transition-all">
              Remove
            </button>

            <button className="flex-[2] flex h-11 items-center justify-between rounded-2xl bg-gray-900 text-white pl-5 pr-1 text-[11px] font-bold uppercase tracking-wider shadow-xl transition hover:bg-black active:scale-95">
              Add to Cart
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-xl text-white">
                +
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;