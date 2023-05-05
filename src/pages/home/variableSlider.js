
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
const VariableSilder = ({ title, allVideos }) => {
    console.log("all Videos in lifeStyle", allVideos && allVideos)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1400 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1400, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
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
        <section className="pb-5 text-white bg-black">
            <div>
                <h2 className="mb-3 lg:px-40 md:px-20 px-5 text-[#a8a8a8] text-4xl font-bold tracking-widest py-6">{title}</h2>
                <Carousel responsive={responsive}>
                    {allVideos && allVideos.map((item) => {
                        return (
                            <Link className="relative px-2">
                                <img src={item.thumbnail} className="w-full" />
                                <div className="absolute top-0 bottom-0 z-10 flex items-end w-full p-5 bg-black opacity-0 hover:opacity-80">
                                    <div className="text-[#a8a8a8]">
                                        <h3 >{item.name}</h3>
                                        <p className="text-sm">PAX Television {item.name}</p>
                                    </div>
                                </div>
                            </Link>

                        )
                    })}
                </Carousel>
                {/* <Slider {...settings}>
                    {allVideos && allVideos.map((item) => {
                        return (
                            <Link className="relative px-2">
                                <img src={item.thumbnail} className="w-full" />
                                <div className="absolute top-0 bottom-0 z-10 flex items-end w-full p-5 bg-black opacity-0 hover:opacity-80">
                                    <div className="text-[#a8a8a8]">
                                        <h3 >{item.name}</h3>
                                        <p className="text-sm">PAX Television {item.name}</p>
                                    </div>
                                </div>
                            </Link>

                        )
                    })}
                </Slider> */}
            </div>
        </section>
    )
}
export default VariableSilder;