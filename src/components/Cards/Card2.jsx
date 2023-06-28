import React from 'react'
import {
  
   MdOutlineWhatsapp   
  
} from "react-icons/md";

const Card2 = (props) => {
    const {img, desc, name, href} = props;
    return (
        <div className="bg-gray-700 max-w-sm mx-auto rounded-lg shadow-xl max-h-[350px]">
            <div className="py-4 px-6 flex flex-col gap-2">
                <a href={href} className="text-2xl font-bold text-gray-200">
                    {name}</a>
                <p className="text-gray-400">
                    {desc} </p>
            </div>
            <div >
                <img src={img}
                    alt={name}
                    className="w-full object-fill h-40"/>
            </div>
            <div className="py-4 px-6 flex items-center justify-between bg-gray-800 rounded-bl-lg rounded-br-lg ">
                <span className="text-gray-200">Solicitar cotización</span>
                <button className="text-gray-200 hover:text-white transition-colors font-semibold outline-none">
                    <MdOutlineWhatsapp/>
                </button>
            </div>
        </div>
    )
}

export default Card2
