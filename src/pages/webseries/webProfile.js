import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const WebProfile = () => {
    const src =
        "https://video.wixstatic.com/video/9cedfb_79db81a409134340a0f53bf408ab2836/1080p/mp4/file.mp4";
    return (
        <section className="bg-black pt-20 pb-10 px-5">
            <div className="max-w-[1024px] mx-auto text-white  font-poppins">
                <div className=" ">
                    <Link to="/" className="flex items-center text-light_gray underline text-sm">
                        <Icon icon="material-symbols:arrow-back-ios-new" />back to home
                    </Link>
                </div>
                <div className="flex pt-10 gap-4">
                    <div className="w-3/5">
                        <div>
                            <h3 className="lg:text-4xl text-2xl">Courageous Love (2017)</h3>
                            <div className=" max-w-[600px] mx-auto pt-12">
                                <div className="flex items-center justify-between px-5">
                                    <span>Courageous Love</span> <Icon icon="bi:info-lg" />
                                </div>
                                <video controls autoPlay={true} className="w-full mx-auto object-cover h-[338px] shadow-lg" poster="https://static.wixstatic.com/media/9cedfb_fb9492826000435387f4ea86e737b0c1~mv2.png/v1/fill/w_600,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Dr%20Wonder's%20Workshop.png">
                                    <source src={src} type="video/mp4" />
                                    Sorry, your browser doesn't support embedded videos.
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 bg-red border-l border-white px-10">
                        <p className=" text-light_gray text-sm">1h 40min   |   Language: English   |  Drama / Romance</p>
                        <div className="py-7">
                            <p className="leading-relaxed">
                                Courageous Love follows Alex Shelby as he encounters romance and intrigue while trying to save the family business that he recently inherited. While working undercover at the New York City branch office he falls in love with an employee named Michelle. Alex must make a difficult decision to save his company from impending collapse or to follow his heart.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WebProfile