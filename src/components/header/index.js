import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="bg-themeColor shadow-inner">
            <div className="max-w-[1320px] mx-auto py-9 pb-12">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="/images/PAXlogo.webp" alt="logo" className="w-full h-auto" />
                    </div>
                    <ul className="flex flex-wrap flex-1 px-10 gap-3">
                        <li className="flex-1 flex ">
                            <Link to="/" className="bg-themeDark text-white text-center py-3 font-poppins  font-normal border-r  border-white flex-1 ">Home</Link>
                        </li>
                        <li className="flex-1 flex ">
                            <Link to="/" className="bg-themeDark text-white text-center py-3 font-poppins  font-normal border-r  border-white flex-1 ">Stream / Buy</Link>
                        </li>
                        <li className="flex-1 flex ">
                            <Link to="/" className="bg-themeDark text-white text-center py-3 font-poppins  font-normal border-r  border-white flex-1 ">About</Link>
                        </li>
                    </ul>
                    <div>
                        <img src="/images/PAXlogo.webp" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;