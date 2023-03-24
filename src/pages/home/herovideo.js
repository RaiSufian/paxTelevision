const HeroVideo = () => {
    const src =
        "https://video.wixstatic.com/video/9cedfb_79db81a409134340a0f53bf408ab2836/1080p/mp4/file.mp4";

    return (
        <>
            <div className="bg-black py-2">
                <div className=" max-w-[1380px] mx-auto">
                    <video autoPlay={true} controls muted className="w-full mx-auto object-cover h-[520px]">
                        <source src={src} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
            </div>
        </>
    )
}
export default HeroVideo;