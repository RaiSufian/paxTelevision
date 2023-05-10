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
    {
        name: "Log In",
        pathLink: "/login"
    },
    ]
    return (
        <div className="shadow-inner bg-themeColor">
            <div className="max-w-[1320px] mx-auto lg:py-9 py-5  ">
                <div className="relative flex items-center justify-between">
                    <div>
                        <img src="/images/PAXlogo.webp" alt="logo" className="w-3/4 h-auto md:w-full" />
                    </div>
                    <div className="lg:hidden"><Hamburger toggled={isOpen} toggle={setOpen} /></div>

                    <ul className={`md:flex flex-wrap flex-1 lg:px-10 px-5 gap-3 lg:relative absolute w-full bg-themeColor ${isOpen ? "" : "h-0 lg:h-full"} overflow-hidden top-full transition-all duration-75 z-10`}>
                        {link.map((item, index) => {
                            return (
                                <li className="flex flex-1 w-full my-3" key={index} onClick={() => setOpen(false)}>
                                    <Link to={item.pathLink} className={` text-center py-3 font-poppins  font-normal border-r  border-white flex-1 hover:bg-orange hover:text-black w-full ${path == item.pathLink ? "bg-orange text-black" : "bg-themeDark text-white"}`}>{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="hidden md:block">
                        <img src="/images/PAXlogo.webp" alt="logo" className="w-3/4 h-auto ml-auto md:w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;