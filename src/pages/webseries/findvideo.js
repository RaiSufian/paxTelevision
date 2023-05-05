import { Icon } from '@iconify/react';
import SliderCard from '../../components/SliderCard/sliderCard';
const Findvideos = ({ name, subcollectionData }) => {
    const src =
        "https://video.wixstatic.com/video/9cedfb_79db81a409134340a0f53bf408ab2836/1080p/mp4/file.mp4";
    return (

        <section className="px-5 py-20 bg-black">
            <div className="max-w-[1024px] mx-auto text-white  font-poppins">
                <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                        <Icon icon="mdi:dots-vertical" className="text-2xl" />
                        <span>{name} All Seasons </span>
                    </div>
                    <div className="relative group">
                        <button className="text-sm text-light_gray">
                            All Categories
                        </button>
                        <div className="absolute right-0 z-10 hidden w-48 text-sm bg-black top-full group-hover:block">
                            <ul className="py-5">
                                <li className="px-3 py-2 cursor-pointer hover:text-light_gray">
                                    <span>All Categories</span>
                                </li>
                                <li className="px-3 py-2 cursor-pointer hover:text-light_gray">
                                    <span>ASL</span>
                                </li>
                                <li className="px-3 py-2 cursor-pointer hover:text-light_gray">
                                    <span>Kids</span>
                                </li>
                                <li className="px-3 py-2 cursor-pointer hover:text-light_gray">
                                    <span>Sign Language</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {subcollectionData && subcollectionData.map((item, index) => {
                        return (
                            <div className="w-full pb-8 lg:w-1/3 md:w-1/2" key={index}>
                                <SliderCard image={item.thumbnail} name={item.name} link={`/webserices/web-series-episodes/${item.id}`} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}
export default Findvideos;