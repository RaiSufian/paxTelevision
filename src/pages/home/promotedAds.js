import { Link } from "react-router-dom";
const PromotedAds = () => {
    return (
        <section className="bg-darkBlue py-4    ">
            <div className="max-w-[992px] mx-auto text-white">
                <div className="flex">
                    <div className="py-3 flex-1 px-5 relative before:absolute before:content-['']  before:h-3/4 before:top-0 before:w-[1px] before:bg-white before:left-0">
                        <div className="promoted_card h-12 bg-themeColor w-44 flex items-center z-50 justify-center relative after:absolute after:content-[''] after:h-[34px] after:w-[34px] after:bg-themeColor after:right-0 after:translate-x-1/2 after:rotate-45 before:absolute before:content-[''] before:left-[2px] before:top-full before:border-r-[25px] before:border-b-[15px] before:rotate-12 before:-translate-y-3/4">
                            <p className="text-2xl font-semibold w-full h-full bg-themeColor text-center py-2 relative">TOP PICK</p>
                        </div>
                        <div className="py-5">
                            <h2 className="text-6xl font-semibold"><Link to="/">The King's Messengers</Link></h2>
                            <p className="pt-8 text-md font-poppins leading-relaxed"><Link to="/">The King's Messengers is a mini-series about two refugees surviving in the fictional war-torn country of Zanora. Anwaar and David must learn to overcome their differences and work together to outsmart the dangerous Resistance Army. Along the way they learn to go deeper in their own faith journey.</Link></p>

                        </div>
                    </div>
                    <div className="w-1/4">
                        <img src="/images/promptImf.webp" alt="card_img" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PromotedAds;