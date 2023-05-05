import Slider from "react-slick";
import React, { useContext } from "react"
import SliderCard from "../../components/SliderCard/sliderCard";
import { Icon } from '@iconify/react';


import Carousel from "react-multi-carousel";
const SericesList = ({ title, allVideos }) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1400 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1400, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const updateSeasonID = (id) => {
        localStorage.setItem('seasonId', id);
    }

    return (
        <section className="pb-5 text-white bg-black">
            <h2 className="mb-3 lg:px-40 md:px-20 px-5 text-[#a8a8a8] text-4xl font-bold tracking-widest py-6">{title}</h2>
            <div>
                <Carousel responsive={responsive}>
                    {allVideos && allVideos.map((item) => {
                        return (
                            <div onClick={() => updateSeasonID(item?.id)} key={item?.id} >
                                <SliderCard image={item?.thumbnail} name={item?.name} link={`/webserices/${item?.id}`} id />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </section>
    )
}
export default SericesList;