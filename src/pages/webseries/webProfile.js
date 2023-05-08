import * as React from 'react';

import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const WebProfile = ({ detailVideo }) => {

    return (
        <section className="px-5 pt-20 pb-10 bg-black">
            <div className="max-w-[1024px] mx-auto text-white  font-poppins">
                <div className="">
                    <Link to="/" className="flex items-center text-sm underline text-light_gray">
                        <Icon icon="material-symbols:arrow-back-ios-new" />Back to home
                    </Link>
                </div>
                <div className="flex gap-4 pt-10">
                    <div className="w-3/5">
                        <div>
                            <h3 className="text-2xl lg:text-4xl">{detailVideo?.name}</h3>
                            <div className=" max-w-[600px] mx-auto pt-12">
                                {
                                    detailVideo?.hasOwnProperty('playback_link') ?
                                        (
                                            <>
                                                <div className="">
                                                    <div style={{ position: 'relative', paddingBottom: '56.25%', overflow: 'hidden', height: 0, maxWidth: '100%' }}><iframe
                                                        src={`https://iframe.dacast.com/vod/${detailVideo?.playback_link.replace("-vod-", "/")}`} width="100%" height="100%" frameBorder={0} scrolling="no" allow="autoplay;encrypted-media" allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen style={{ position: 'absolute', top: 0, left: 0 }} /></div>
                                                </div>
                                            </>

                                        )
                                        :
                                        (
                                            <>
                                                <img src={detailVideo?.thumbnail} alt="" />
                                            </>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 px-10 border-l border-white bg-red">
                        <p className="text-sm text-light_gray">1h 40min   |   Language: English   |  {detailVideo?.description}</p>
                        <div className="py-7">
                            <p className="leading-relaxed">
                                {detailVideo?.about}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WebProfile