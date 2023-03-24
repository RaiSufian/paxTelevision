import { Icon } from '@iconify/react';
const Footer = () => {
    return (
        <>
            <div className="bg-black py-6">
                <div className="max-w-[1280px] mx-auto text-white">
                    <div className="flex justify-around items-center text-gray">
                        <div>
                            <span>© 2023 by PAX Television. </span>
                        </div>
                        <ul className="flex gap-4 items-center">
                            <li ><Icon icon="gg:facebook" className="text-2xl" /></li>
                            <li><Icon icon="bi:instagram" className="text-2xl" /></li>
                            <li><Icon icon="akar-icons:youtube-fill" className="text-2xl" /></li>
                        </ul>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;