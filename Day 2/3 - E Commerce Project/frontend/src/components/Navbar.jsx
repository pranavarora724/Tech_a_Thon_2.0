import { FaOpencart } from "react-icons/fa";

function Navbar()
{
    return(
       <div className="bg-green-400">
         <div className="flex justify-between max-w-[1200px] w-[90%] mx-auto py-4">
            <div className="flex items-center gap-x-4">
                <div className="text-white font-semibold text-xl">Shopping Kart</div>
                <div>
                    <FaOpencart className="text-white text-2xl"/>
                </div>
            </div>

            <div className="flex items-center gap-x-4 px-4 text-white">
                <div className="cursor-pointer">Home</div>
                <div className="cursor-pointer">Contact Us</div>
                <div className="cursor-pointer">About Us</div>
                <div className="cursor-pointer">Cart</div>
            </div>
        </div>
       </div>
    )
}

export default Navbar;