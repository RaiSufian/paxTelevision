import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Hamburger from 'hamburger-react'
const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const location = useLocation()
    const path = location.pathname;
    const link = [{
        name: "Home",
        pathLink: "/"
    },
    {
        name: "Stream / Buy",
        pathLink: "/stream-buy"
    },
    {
        name: "About",
        pathLink: "/aboutUs"
    },
    ]
    return (
        <div className="bg-themeColor shadow-inner">
            <div className="max-w-[1320px] mx-auto lg:py-9 py-5  ">
                <div className="flex justify-between items-center relative">
                    <div>
                        <img src="/images/PAXlogo.webp" alt="logo" className="md:w-full w-3/4 h-auto" />
                    </div>
                    <div className="lg:hidden"><Hamburger toggled={isOpen} toggle={setOpen} /></div>

                    <ul className={`md:flex flex-wrap flex-1 lg:px-10 px-5 gap-3 lg:relative absolute w-full bg-themeColor ${isOpen ? "" : "h-0 lg:h-full"} overflow-hidden top-full transition-all duration-75 z-10`}>
                        {link.map((item, index) => {
                            return (
                                <li className="flex-1 flex w-full my-3" key={index} onClick={() => setOpen(false)}>
                                    <Link to={item.pathLink} className={` text-center py-3 font-poppins  font-normal border-r  border-white flex-1 hover:bg-orange hover:text-black w-full ${path == item.pathLink ? "bg-orange text-black" : "bg-themeDark text-white"}`}>{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div>
                        <img src="/images/PAXlogo.webp" alt="logo" className="md:w-full w-3/4 h-auto ml-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;