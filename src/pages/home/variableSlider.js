
import Slider from "react-slick";
import { Link } from "react-router-dom";
const VariableSilder = ({ title }) => {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="bg-black text-white pb-5">
            <div>
                <h2 className="mb-3 lg:px-40 md:px-20 px-5 text-[#a8a8a8] text-4xl font-bold tracking-widest py-6">{title}</h2>
                <Slider {...settings}>

                    <Link className="relative  px-2">
                        <img src="/images/var12.webp" className="w-full" />
                        <div className="p-5 bg-black absolute top-0 bottom-0 w-full z-10 opacity-0 hover:opacity-80 flex items-end">
                            <div className="text-[#a8a8a8]">
                                <h3 >The Father I Never Knew</h3>
                                <p className="text-sm">PAX Television The Father I Never Knew</p>
                            </div>

                        </div>
                    </Link>



                    <Link className="relative  px-2">
                        <img src="/images/var22.webp" className="w-full" />
                        <div className="p-5 bg-black absolute top-0 bottom-0 w-full z-10 opacity-0 hover:opacity-80 flex items-end">
                            <div className="text-[#a8a8a8]">
                                <h3 >The Father I Never Knew</h3>
                                <p className="text-sm">PAX Television The Father I Never Knew</p>
                            </div>

                        </div>
                    </Link>



                    <Link className="relative  px-2">
                        <img src="/images/var23.webp" className="w-full" />
                        <div className="p-5 bg-black absolute top-0 bottom-0 w-full z-10 opacity-0 hover:opacity-80 flex items-end">
                            <div className="text-[#a8a8a8]">
                                <h3 >The Father I Never Knew</h3>
                                <p className="text-sm">PAX Television The Father I Never Knew</p>
                            </div>

                        </div>
                    </Link>




                    {/* <div className="px-2">
                        <img src="/images/var23.webp" className="w-full" style={{ width: 700 }} />
                    </div> */}

                </Slider>
            </div>
        </section>
    )
}
export default VariableSilder;