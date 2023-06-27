import React from 'react'

const Card2 = (props) => {
    const {img, desc, name, price, href} = props;
    return (
        <div className="bg-gray-700 max-w-sm mx-auto rounded-lg shadow-xl ">
            <div className="py-4 px-6 flex flex-col gap-2">
                <a href={href} className="text-2xl font-bold text-gray-200">
                    {name}</a>
                <p className="text-gray-400">
                    {desc} </p>
            </div>
            <div>
                <img src={img}
                    alt={name}
                    className="w-full object-cover"/>
            </div>
            <div className="py-4 px-6 flex items-center justify-between bg-gray-800 rounded-bl-lg rounded-br-lg ">
                <span className="text-gray-200">${price}</span>
                <button className="text-gray-200 hover:text-white transition-colors font-semibold outline-none">
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Card2
