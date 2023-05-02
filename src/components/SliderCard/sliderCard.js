import { Link } from "react-router-dom";
const SliderCard = ({ name, image }) => {
    return (
        <div className="flex justify-center w-full">
            <Link to="/webserices" className="relative w-full px-3">
                <img src={image} className="w-full" />
                <div className="absolute top-0 bottom-0 z-10 flex items-end w-full p-5 bg-black opacity-0 hover:opacity-80">
                    <div className="text-[#a8a8a8]">
                        <h3 >{name}</h3>
                        <p className="text-sm">PAX Television {name}</p>
                    </div>
                </div>
            </Link>

        </div>
    )
}
export default SliderCard;