
import { Link } from 'react-router-dom';
const Findvideos = ({ name, subcollectionData }) => {
    console.log("Videos Sub", subcollectionData)
    const src =
        "https://video.wixstatic.com/video/9cedfb_79db81a409134340a0f53bf408ab2836/1080p/mp4/file.mp4";

    const updateSeasonID = (name) => {
        localStorage.setItem('season_name', name);
    }

    return (

        <section className="px-5 py-20 bg-black">
            <div className="max-w-[1024px] mx-auto text-white  font-poppins">
                <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                        {/* <Icon icon="mdi:dots-vertical" className="text-2xl" /> */}
                        <span>{name} All Seasons </span>
                    </div>

                </div>
                <div className="flex flex-wrap">
                    {subcollectionData && subcollectionData.map((item, index) => {
                        return (
                            <div className="w-full pb-8 lg:w-1/3 md:w-1/2" key={index} onClick={() => updateSeasonID(item?.title)}>
                                <div className="flex justify-center w-full"  >
                                    <Link to={`/webserices/web-series-episodes/${item?.id}`} className="relative w-full px-3 h-[250px]" >
                                        <img src={item.thumbnail} className="object-cover w-full h-full" />
                                        <div className="absolute top-0 bottom-0 z-10 flex items-end w-full h-full p-5 bg-black opacity-0 hover:opacity-80">
                                            <div className="text-[#a8a8a8]">
                                                <h3 >{item?.title}</h3>
                                                <p className="text-sm">PAX Television {item?.title}</p>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}
export default Findvideos;