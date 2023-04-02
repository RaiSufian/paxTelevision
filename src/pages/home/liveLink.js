import { Link } from "react-router-dom";
const LiveLink = () => {
    const src =
        "https://video.wixstatic.com/video/9cedfb_9a74b91a32d8410dbebecb8d3ad0b103/480p/mp4/file.mp4";
    return (
        <section className="py-6 bg-gray">
            <div className="max-w-[1380px] mx-auto">
                <div className="md:flex">
                    <div className="flex-1">
                        <img src="/images/promotPax.webp" className="mx-auto object-cover lg:h-[362px] md:h-[185px] w-full" />
                    </div>

                    <div className="lg:w-[30rem] md:w-[20rem]">
                        <video autoPlay={true} loop muted className="mx-auto object-cover lg:h-[362px] md:h-[185px]">
                            <source src={src} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="md:flex justify-around text-center">
                        <Link to="/" className="p-[2px] border border-skin bg-darkBlue hover:bg-black hover:text-white hover:border-white ">
                            <button className="mt-1 md:mt-0 lg:text-3xl text-xl lg:px-20 px-12 py-5 z-0 bg-darkBlue text-[#FFF1AA] py-4 border border-skin hover:bg-black hover:text-white hover:border-white ">
                                WATCH LIVE
                            </button>
                        </Link>
                        <Link to="/ " className="p-[2px] border border-skin bg-darkBlue hover:bg-black hover:text-white hover:border-white ">
                            <button className="mt-1 md:mt-0 lg:text-3xl text-xl lg:px-14 px-10 py-5 z-0 bg-darkBlue text-[#FFF1AA]  py-4 border border-skin hover:bg-black hover:text-white hover:border-white ">
                                Meet our Premier Partners
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LiveLink;