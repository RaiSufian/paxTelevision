import { Link } from "react-router-dom";
const SliderCard = () => {
    return (
        <div className="w-80 flex justify-center">
            <Link className="relative">
                <img src="/images/promptImf.webp" className="" />
                <div className="p-5 bg-black absolute top-0 bottom-0 w-full z-10 opacity-0 hover:opacity-80 flex items-end">
                    <div className="text-[#a8a8a8]">
                        <h3 >The Father I Never Knew</h3>
                        <p className="text-sm">PAX Television The Father I Never Knew</p>
                    </div>

                </div>
            </Link>

        </div>
    )
}
export default SliderCard;