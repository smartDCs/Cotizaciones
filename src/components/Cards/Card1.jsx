import React from 'react'

const Card1 = (props) => {
    const {img,name,description}=props;
  return (
    <div className="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
    <div>
      <img
          src={img}
          alt={name}
          className="w-full object-cover"
      />
    </div>
    <div className="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
      <h3 className="text-white text-lg font-semibold">Enfoque</h3>
    </div>
    <div className="px-6 py-4 flex flex-col gap-2">
      <h1 className="text-xl font-semibold text-gray-800">
       {name}
      </h1>
      <p className="text-gray-500">
       {description}
      </p>
      <div className="flex items-center mt-4 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <h1 className="px-2 text-sm">JT - UI</h1>
      </div>
      <div className="flex items-center mt-4 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
  
        <h1 className="px-2 text-sm">Chihuahua, México</h1>
      </div>
      <div className="flex items-center mt-4 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
  
        <h1 className="px-2 text-sm">frontend@jt-ui.com</h1>
      </div>
    </div>
  </div>
  )
}

export default Card1