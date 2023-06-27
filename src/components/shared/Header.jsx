import React from 'react'
import {
   
    MdOutlineSearch,
  
} from "react-icons/md";
const Header = () => {
  return (
    <header> {/** Title and search */}
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
            <h1 className="text-2xl text-gray-300">DA Store</h1>
            <p className="text-gray-500">26 Junio 2023</p>
        </div>
        <form>
            <div className="w-full relative">
                <MdOutlineSearch className="absolute left-3 top-1/2
                                                                                                                                                                                                                                                                                                                                                                          -translate-y-1/2 text-gray-300"/>
                <input type="text" className="bg-[#1f1d2b] w-full py-2 pl-10 pr-4 rounded-lg
                                                                                                                                                                                                                                                                                                                                                                        text-gray-300 outline-none" placeholder="Search product"></input>
            </div>

        </form>
    </div>

    {/* Tabs*/}
    <nav className="text-gray-300 flex items-center justify-between  md:justify-start  md:gap-8 border-b mb-6">
        <a href="#" className="relative py-2 pr-4 mb-0 before:w-1/2 before:h-[2px] before:absolute
                                                                                                                                                                                                                                                                                            before:bg-[#ec7c6a] before:left-0 before:rounded-full
                                                                                                                                                                                                                                                                                             before:-bottom-[1px] text-[#ec7c6a]">
            Auromatización y Domótica
        </a>
        <a href="#" className="py-2 pr-4">
            Seguridad electrónica
        </a>
        <a href="#" className="py-2 pr-4">
            CCTV y Control de accesos
        </a>

    </nav>


</header>
  )
}

export default Header