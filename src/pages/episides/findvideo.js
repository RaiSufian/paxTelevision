import { Icon } from '@iconify/react';

const Findvideos = ({ name, subcollectionData }) => {
    const src =
        "https://video.wixstatic.com/video/9cedfb_79db81a409134340a0f53bf408ab2836/1080p/mp4/file.mp4";

    const sortedEpisodes = subcollectionData.sort((a, b) => a.episode - b.episode);
    console.log("All Episodes", sortedEpisodes)
    return (

        <section className="px-5 py-20 bg-black">
            <div className="max-w-[1024px] mx-auto text-white  font-poppins">
                <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                        <Icon icon="mdi:dots-vertical" className="text-2xl" />
                        <span>{name} All Episodes </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {sortedEpisodes && sortedEpisodes.map((item, index) => {
                        const playLinkId = item.playback_link.replace("-vod-", "/");
                        return (
                            <div className="" key={index} >
                                <h3 >{item?.title}</h3>
                                <div style={{ position: 'relative', paddingBottom: '56.25%', overflow: 'hidden', height: 0, maxWidth: '100%' }}><iframe
                                    src={`https://iframe.dacast.com/vod/${playLinkId}`} width="100%" height="100%" frameBorder={0} scrolling="no" allow="autoplay;encrypted-media" allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen style={{ position: 'absolute', top: 0, left: 0 }} /></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}
export default Findvideos;