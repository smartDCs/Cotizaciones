import React from 'react'

const Card = (props) => {
    const {img,description,price,inventory}=props;
  return (
    <div className="bg-[#1f1d2b]  gap-2 p-8 rounded-xl flex flex-col items-center text-gray-300 text-center">
    <img src={img} 
    className="w-40 h-40 object-cover -mt-20 rounded-xl shadow-md shadow-gray-500"/>

    <p className="text-xl">
        {description}
    </p>
    <span className="text-gray-400">
       $ {price}
    </span>
    <p className="text-gray-600">
        Disponible: {inventory}
    </p>
</div>
  )
}

export default Card