import React from 'react'
import {
  
    MdClose,
   
    MdDeleteForever,
  
} from "react-icons/md";
const Car = (props) => {
    const {showOrder, setShowOrder}=props;

  return (
    
     <div className={`rounded-lg lg:col-span-2 fixed  top-0 bg-[#1f1d2b] w-full transition-all lg:right-0 lg:w-96 h-full
     ${showOrder ? "right-0" : "-right-full"}
    z-50 `}
     >
         {/**Orders */}
         <div className="relative pt-16  lg:pt-8 text-gray-300 p-8 h-full ">
             <MdClose 
             onClick={()=>setShowOrder(false)}
             className="lg:hidden absolute left-0 top-0 p-3 box-content text-gray-300 bg-[#262837] rounded-full left-4 top-4 text-xl"/>
             <h1 className="text-2xl my-4">Orders #20232606</h1>
             {/**pills */}
             <div className="flex items-center gap-4 flex-wrap">
                 <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
                     Comprar
                 </button>
                 <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                     Pagar
                 </button>
                 <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                     Cancelar
                 </button>
             </div>
             {/**Car */}
             <div>
                 <div className="grid grid-cols-6 mb-4 p-4">
                     <h5 className="col-span-4">
                         Item
                     </h5>
                     <h5>Cant.</h5>
                     <h5>Precio</h5>
                 </div>
                 
                 {/**Products */}
                 <div className=" h-[400px]  md:h-[700px] lg:h-[350px] overflow-y-auto overflow-x-hidden ">
                     {/**Product */}
                     <div className="bg-[#262837] p-4 rounded-xl mb-4">
                     <div className="grid grid-cols-6 mb-4">
                         {/**Product description */}
                         <div className="col-span-4 flex items-center gap-3">
                             <img src="/assets/images/domotica.jpg" className="w-10 h-10 object-cover"/>
                             <div>
                                 <h5 className="text-sm">Domótica</h5>
                                 <p className="text-xs text-gray-500">$5230</p>
                             </div>

                         </div>
                         {/* Quantity  */}
                         <div>
                             <span>
                                 2
                             </span>
                         </div>
                         {/**Price */}
                         <div>
                             <span>
                                 $531
                             </span>
                         </div>
                     </div>
                     {/**Note */}
                     <div className="grid grid-cols-6 items-center">
                         <form className="col-span-5">
                             <input type="text" className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none" placeholder="Comentarios"/>
                         </form>
                         <div className="col-span-1 text-center">
                             <button className="border border-red-500 p-2 rounded-lg">
                                 <MdDeleteForever className="text-red-500 "/>
                             </button>
                         </div>
                     </div>
                 </div>
                 <div className="bg-[#262837] p-4 rounded-xl mb-4">
                     <div className="grid grid-cols-6 mb-4">
                         {/**Product description */}
                         <div className="col-span-4 flex items-center gap-3">
                             <img src="/assets/images/domotica.jpg" className="w-10 h-10 object-cover"/>
                             <div>
                                 <h5 className="text-sm">Domótica</h5>
                                 <p className="text-xs text-gray-500">$5230</p>
                             </div>

                         </div>
                         {/* Quantity  */}
                         <div>
                             <span>
                                 2
                             </span>
                         </div>
                         {/**Price */}
                         <div>
                             <span>
                                 $531
                             </span>
                         </div>
                     </div>
                     {/**Note */}
                     <div className="grid grid-cols-6 items-center">
                         <form className="col-span-5">
                             <input type="text" className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none" placeholder="Comentarios"/>
                         </form>
                         <div className="col-span-1 text-center">
                             <button className="border border-red-500 p-2 rounded-lg">
                                 <MdDeleteForever className="text-red-500 "/>
                             </button>
                         </div>
                     </div>
                 </div>
                 <div className="bg-[#262837] p-4 rounded-xl mb-4">
                     <div className="grid grid-cols-6 mb-4">
                         {/**Product description */}
                         <div className="col-span-4 flex items-center gap-3">
                             <img src="/assets/images/domotica.jpg" className="w-10 h-10 object-cover"/>
                             <div>
                                 <h5 className="text-sm">Domótica</h5>
                                 <p className="text-xs text-gray-500">$5230</p>
                             </div>

                         </div>
                         {/* Quantity  */}
                         <div>
                             <span>
                                 2
                             </span>
                         </div>
                         {/**Price */}
                         <div>
                             <span>
                                 $531
                             </span>
                         </div>
                     </div>
                     {/**Note */}
                     <div className="grid grid-cols-6 items-center">
                         <form className="col-span-5">
                             <input type="text" className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none" placeholder="Comentarios"/>
                         </form>
                         <div className="col-span-1 text-center">
                             <button className="border border-red-500 p-2 rounded-lg">
                                 <MdDeleteForever className="text-red-500 "/>
                             </button>
                         </div>
                     </div>
                 </div>
                 <div className="bg-[#262837] p-4 rounded-xl mb-4">
                     <div className="grid grid-cols-6 mb-4">
                         {/**Product description */}
                         <div className="col-span-4 flex items-center gap-3">
                             <img src="/assets/images/domotica.jpg" className="w-10 h-10 object-cover"/>
                             <div>
                                 <h5 className="text-sm">Domótica</h5>
                                 <p className="text-xs text-gray-500">$5230</p>
                             </div>

                         </div>
                         {/* Quantity  */}
                         <div>
                             <span>
                                 2
                             </span>
                         </div>
                         {/**Price */}
                         <div>
                             <span>
                                 $531
                             </span>
                         </div>
                     </div>
                     {/**Note */}
                     <div className="grid grid-cols-6 items-center">
                         <form className="col-span-5">
                             <input type="text" className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none" placeholder="Comentarios"/>
                         </form>
                         <div className="col-span-1 text-center">
                             <button className="border border-red-500 p-2 rounded-lg">
                                 <MdDeleteForever className="text-red-500 "/>
                             </button>
                         </div>
                     </div>
                 </div>
                 </div>
                
             </div>
             {/**Submit payment */}
             <div className="bg-[#262837] absolute w-full left-0 bottom-0 p-4">
                <div className="flex items-center justify-between">
                 <span className="text-gray-400">Descuento</span>
                 <span className="text-gray-400">$0</span>
                </div>
                <div className="flex items-center justify-between ">
                 <span className="text-gray-400">Subtotal</span>
                 <span className="text-gray-400">$3202</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                 <span className="text-gray-400">Iva 12%</span>
                 <span className="text-gray-400">$123</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                 <span>Total</span>
                 <span>$12393</span>
                </div>
                <div>
                 <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                     Pagar
                 </button>
                </div>
             </div>
         </div>

     </div>
  )
}

export default Car