import {useState} from "react";
import Sidebar from "./components/shared/Sidebar"
import Car from "./components/shared/Car";
import {MdMenu, MdClose, MdKeyboardArrowDown, MdOutlineShoppingBag} from "react-icons/md";
import {FaUserLarge} from "react-icons/fa6";
import {RiHome3Fill} from "react-icons/ri";
import Header from "./components/shared/Header";
import Card2 from "./components/Cards/Card2";
import NavBar from "./components/shared/NavBar";
function App() {
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
        <div className="bg-[#262837] w-full min-h-screen">

           {/** 
            <Sidebar showMenu={showMenu}/> {/**menu movil 
            <Car showOrder={showOrder}
                setShowOrder={setShowOrder}/>
                */}
           {/*NavBar*/}
           <NavBar />
            <main className="lg:pl-32  lg:pr-96 text-white pb-20">
                <div className="md:p-8 p-4">
                    {/**Header */}
                    <Header/> {/**Title content */}

                    <div className="flex items-center justify-between mb-16">
                        <h2 className="text-xl text-gray-300">
                            Seleccionar
                        </h2>
                        <button className="flex items-center gap-4 text-gray-300 bg-[#1f1d2b] py-2 px-2 rounded-lg"><MdKeyboardArrowDown/>
                            Productos</button>

                    </div>

                    {/**Content */}

                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {/**card */}

                        <Card2 img="/assets/images/TC30.jpeg" desc="Cerradura inteligente, para puerta de vidrio templado" name="GLS-TC30" href="https://www.google.com"/>

                        <Card2 img="/assets/images/TS68.jpg" desc="Cerradura inteligente, para puerta de madera con reconocimiento facial 3D" name="WLS-TS68" href="#"/>
                        <Card2 img="/assets/images/TS12.jpg" desc="Cerradura inteligente, para puerta de madera con reconocimiento facial 3D" name="WLS-TS12" href="#"/>
                        <Card2 img="/assets/images/TS12.jpg" desc="Cerradura inteligente, para puerta de madera con reconocimiento facial 3D" name="WLS-TS12" href="#"/>
                        <Card2 img="/assets/images/TC30.jpeg" desc="Cerradura inteligente, para puerta de vidrio templado" name="GLS-TC30" href="https://www.google.com"/>

                        <Card2 img="/assets/images/TS68.jpg" desc="Cerradura inteligente, para puerta de madera con reconocimiento facial 3D" name="WLS-TS68" href="#"/>

                    </div>
                </div>


            </main>
        </div>
    )
}

export default App
