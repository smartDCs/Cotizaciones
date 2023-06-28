import React from "react";
import {RiHome3Fill} from "react-icons/ri";
import {
    MdOutlineDevicesOther,
    MdRequestQuote,
    MdPointOfSale,
    MdOutlineInventory,
    MdLogout,
    MdSupervisorAccount
} from "react-icons/md";
import {FaFileInvoiceDollar,
    FaFileInvoice,
    FaAddressCard
} from "react-icons/fa6";


const Sidebar = (props) => {
    const {showMenu} = props;
    return (
        <div className={
            `bg-[#1f1d2b] fixed lg:left-0 top-0 w-28 h-full flex 
            flex-col justify-between py-6 rounded-tr-xl 
            rounded-br-xl z-50 transition-all 
            ${
                showMenu ? "left-0" : "-left-full"
            }`
        }>
            <div>
                <ul className="pl-4 pb-0 ">
                    <li>
                        <h1 className="tesxt-2xl text-gray-300 uppercase font-bold text-center my-5">
                            Logo
                        </h1>
                    </li>
                    <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
                        <a href="#" className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-center text-white ">
                            <RiHome3Fill className="text-2xl "/>
                        </a>
                    </li>
                   
                    <li className="text-xs hover:text-base hover:bg-[#262837] pt-2 pb-0 pl-2 rounded-tl-xl rounded-bl-xl group transition-colors text-white">
                        Compras
                        <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center
                                                    rounded-xl text-center text-[#ec7c6a]
                                                    group-hover:text-white transition-colors">
                            <MdRequestQuote className="text-2xl "/>
                        </a>
                    </li>
                    <li className=" text-xs hover:text-base hover:bg-[#262837] pt-2 pb-0 pl-2 rounded-tl-xl rounded-bl-xl group transition-colors text-white">
                    <span>Ventas</span>
                        <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center
                                                    rounded-xl text-center text-[#ec7c6a]
                                                    group-hover:text-white transition-colors">
                                                        
                            < MdPointOfSale className="text-2xl "/>
                           
                            
                        </a>
                    </li>
                    <li className=" text-xs hover:text-base hover:bg-[#262837] pt-2 pb-0 pl-2 rounded-tl-xl rounded-bl-xl group transition-colors text-white">
                  Cotizaciones
                        <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center
                                                    rounded-xl text-center text-[#ec7c6a]
                                                    group-hover:text-white transition-colors">
                                                        
                            < FaFileInvoice className="text-2xl "/>
                           
                            
                        </a>
                    </li>
                   
                   
                    <li className=" text-xs hover:text-base hover:bg-[#262837] pt-2 pb-0 pl-2 rounded-tl-xl rounded-bl-xl group transition-colors text-white">
                        Inventario
                        <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center
                                                    rounded-xl text-center text-[#ec7c6a]
                                                    group-hover:text-white transition-colors">
                         <MdOutlineInventory className="text-2xl "/>
                        </a>
                    </li>
                    <li className="text-xs hover:text-base hover:bg-[#262837] pt-2 pb-0 pl-2 rounded-tl-xl rounded-bl-xl group transition-colors text-white">
                        Nómina
                        <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center
                                                    rounded-xl text-center text-[#ec7c6a]
                                                    group-hover:text-white transition-colors">
                         <FaAddressCard className="text-2xl "/>
                        </a>
                    </li>

                    
                </ul>
            </div>
            <div>
                <ul className="pl-4">
                    <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center
                                                    rounded-xl text-center text-[#ec7c6a]
                                                    group-hover:text-white transition-colors">
                            <MdLogout className="text-2xl "/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
