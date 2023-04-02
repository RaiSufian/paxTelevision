import Slider from "react-slick";
import SliderCard from "../../components/SliderCard/sliderCard";
import { Icon } from '@iconify/react';
const SericesList = ({ title }) => {
    var settings = {
        dots: false,
        infinite: false,
        className: "center",
        infinite: true,
        slidesToShow: 5,
        prevArrow: <Icon icon="ic:outline-navigate-next" />,
        nextArrow: <Icon icon="ic:outline-navigate-next" />,
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
            <h2 className="mb-3 lg:px-40 md:px-20 px-5 text-[#a8a8a8] text-4xl font-bold tracking-widest py-6">{title}</h2>
            <div>
                <Slider {...settings}>
                    <div>
                        <SliderCard />
                    </div>
                    <div>
                        <SliderCard />
                    </div>
                    <div>
                        <SliderCard />
                    </div>
                    <div>
                        <SliderCard />
                    </div>
                    <div>
                        <SliderCard />
                    </div>
                    <div>
                        <SliderCard />
                    </div>
                    <div>
                        <SliderCard />
                    </div>
                    <div>
                        <SliderCard />
                    </div>
                    <div>
                        <SliderCard />
                    </div>
                    <div>
                        <SliderCard />
                    </div>
                    <div>
                        <SliderCard />
                    </div>
                    <div>
                        <SliderCard />
                    </div>
                </Slider>
            </div>
        </section>
    )
}
export default SericesList;