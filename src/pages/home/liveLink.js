import { Link } from "react-router-dom";
const LiveLink = () => {
    const src =
        "https://video.wixstatic.com/video/9cedfb_9a74b91a32d8410dbebecb8d3ad0b103/480p/mp4/file.mp4";
    return (
        <section className="py-6 bg-gray">
            <div className="max-w-[1380px] mx-auto">
                <div className="flex">
                    <div className="flex-1">
                        <img src="/images/promotPax.webp" className="mx-auto object-cover h-[362px] w-full" />
                    </div>

                    <div className="w-[30rem]">
                        <video utoPlay={true} controls muted className="mx-auto object-cover h-[362px]">
                            <source src={src} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex justify-around">
                        <Link to="/" className="p-[2px] border border-skin bg-darkBlue hover:bg-black hover:text-white hover:border-white">
                            <button className="text-3xl px-20 py-5 z-0 bg-darkBlue text-[#FFF1AA] py-4 border border-skin hover:bg-black hover:text-white hover:border-white">
                                WATCH LIVE
                            </button>
                        </Link>
                        <Link to="/ " className="p-[2px] border border-skin bg-darkBlue hover:bg-black hover:text-white hover:border-white">
                            <button className="text-3xl px-14 py-5 z-0 bg-darkBlue text-[#FFF1AA]  py-4 border border-skin hover:bg-black hover:text-white hover:border-white">
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