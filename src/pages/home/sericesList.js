import Slider from "react-slick";
import SliderCard from "../../components/SliderCard/sliderCard";
const SericesList = ({ title }) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
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
            <h2 className="mb-3 px-40 text-[#a8a8a8] text-3xl font-bold tracking-widest py-6">{title}</h2>
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
                </Slider>
            </div>
        </section>
    )
}
export default SericesList;