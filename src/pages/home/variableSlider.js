
import Slider from "react-slick";
import { Link } from "react-router-dom";
const VariableSilder = ({ title, allvideos }) => {
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
                <Slider {...settings}>
                    {allvideos && allvideos.map((item) => {
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
                </Slider>
            </div>
        </section>
    )
}
export default VariableSilder;