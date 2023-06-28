import React from 'react'
import {useState} from "react";
import {MdMenu, MdClose, MdOutlineShoppingBag} from "react-icons/md";
import {FaUserLarge} from "react-icons/fa6";
import {RiHome3Fill} from "react-icons/ri";
import Car from './Car';
import Sidebar from './Sidebar';
const NavBar = (props) => {
    const [showMenu, SetShowMenu] = useState(false);
    const [showOrder, setShowOrder] = useState(false);

    const toggleMenu = () => {
        SetShowMenu(!showMenu);
        setShowOrder(false);
    }
    const toggleOrder = () => {
        setShowOrder(!showOrder);
        SetShowMenu(false);
        
    }
   
    return (
        <div>
        <Sidebar showMenu={showMenu}/> {/**menu movil */}
            <Car showOrder={showOrder}
                setShowOrder={setShowOrder}/>
        <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl
                    py-4 px-8 flex items-center justify-between text-gray-400
                    rounded-tl-xl rounded-tr-xl">
            <button className="p-2">
                <RiHome3Fill/>

            </button>
            <button className="p-2">
                <FaUserLarge/>
            </button>
            <button onClick={toggleOrder}
                className="p-2">
                <MdOutlineShoppingBag/>
            </button>
            <button className="p-2"
                onClick={toggleMenu}>
                {
                showMenu ? <MdClose/>: <MdMenu/>
            } </button>


        </nav>
        </div>
    )
}

export default NavBar
