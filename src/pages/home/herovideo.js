import React, { useEffect } from "react";
const HeroVideo = () => {
    useEffect(() => {
        const video = document.getElementById("my-video");
        const controls = video.controls;
        const audioControl = video.querySelector('[title="Toggle mute"]');
        video.removeAttribute("controls");
        video.removeAttribute("controls");
        if (audioControl) {
            audioControl.parentNode.removeChild(audioControl);
        }
    }, []);
    const src =
        "https://video.wixstatic.com/video/9cedfb_79db81a409134340a0f53bf408ab2836/1080p/mp4/file.mp4";

    return (
        <>
            <div id="my-video" className="bg-black py-2">
                <div className=" max-w-[1380px] mx-auto">
                    <video autoPlay={true} loop muted className="w-full mx-auto object-cover lg:h-[520px] md:h-[350px] h-[210px]">
                        <source src={src} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
            </div>
        </>
    )
}
export default HeroVideo;