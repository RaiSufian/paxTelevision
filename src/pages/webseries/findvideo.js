import { Icon } from '@iconify/react';
const Findvideos = () => {
    const src =
        "https://video.wixstatic.com/video/9cedfb_79db81a409134340a0f53bf408ab2836/1080p/mp4/file.mp4";
    return (

        <section className="bg-black py-20 px-5">
            <div className="max-w-[1024px] mx-auto text-white  font-poppins">
                <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <Icon icon="mdi:dots-vertical" className="text-2xl" />
                        <span>Dr. Wonder's Workshop (ASL) </span>
                    </div>
                    <div className="relative group">
                        <button className="text-sm text-light_gray">
                            All Categories
                        </button>
                        <div className="w-48 bg-black absolute top-full right-0 text-sm z-10 hidden group-hover:block">
                            <ul className="py-5">
                                <li className="py-2 px-3 hover:text-light_gray cursor-pointer">
                                    <span>All Categories</span>
                                </li>
                                <li className="py-2 px-3 hover:text-light_gray cursor-pointer">
                                    <span>ASL</span>
                                </li>
                                <li className="py-2 px-3 hover:text-light_gray cursor-pointer">
                                    <span>Kids</span>
                                </li>
                                <li className="py-2 px-3 hover:text-light_gray cursor-pointer">
                                    <span>Sign Language</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="lg:w-1/3 md:w-1/2 w-full  pb-8">
                        <video controls className="w-full mx-auto object-cover h-[195px] shadow-lg" poster="https://images-vod.wixmp.com/9cedfb8e-a33d-4349-8d4e-0ad17576a377/images/6cab5c237d2c4aa1bf95d947e3c39b1ff002/v1/fill/w_295,h_166,q_85,usm_0.66_1.00_0.01/file.webp">
                            <source src={src} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <div className="flex">

                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full  pb-8">
                        <video controls className="w-full mx-auto object-cover h-[195px] shadow-lg" poster="https://images-vod.wixmp.com/9cedfb8e-a33d-4349-8d4e-0ad17576a377/images/19b39ef5d95242ddbd9c4e7def81df7ef002/v1/fill/w_295,h_166,q_85,usm_0.66_1.00_0.01/file.webp">
                            <source src={src} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <div className="flex">

                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full  pb-8">
                        <video controls className="w-full mx-auto object-cover h-[195px] shadow-lg" poster="https://images-vod.wixmp.com/9cedfb8e-a33d-4349-8d4e-0ad17576a377/images/781106a31e9c4563a5888798031c8535f002/v1/fill/w_295,h_166,q_85,usm_0.66_1.00_0.01/file.webp">
                            <source src={src} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <div className="flex">

                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full  pb-8">
                        <video controls className="w-full mx-auto object-cover h-[195px] shadow-lg" poster="https://images-vod.wixmp.com/9cedfb8e-a33d-4349-8d4e-0ad17576a377/images/6cab5c237d2c4aa1bf95d947e3c39b1ff002/v1/fill/w_295,h_166,q_85,usm_0.66_1.00_0.01/file.webp">
                            <source src={src} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <div className="flex">

                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full  pb-8">
                        <video controls className="w-full mx-auto object-cover h-[195px] shadow-lg" poster="https://images-vod.wixmp.com/9cedfb8e-a33d-4349-8d4e-0ad17576a377/images/19b39ef5d95242ddbd9c4e7def81df7ef002/v1/fill/w_295,h_166,q_85,usm_0.66_1.00_0.01/file.webp">
                            <source src={src} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <div className="flex">

                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full  pb-8">
                        <video controls className="w-full mx-auto object-cover h-[195px] shadow-lg" poster="https://images-vod.wixmp.com/9cedfb8e-a33d-4349-8d4e-0ad17576a377/images/781106a31e9c4563a5888798031c8535f002/v1/fill/w_295,h_166,q_85,usm_0.66_1.00_0.01/file.webp">
                            <source src={src} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <div className="flex">

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Findvideos;