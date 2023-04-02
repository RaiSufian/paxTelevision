import { Link } from 'react-router-dom';
const AboutHero = () => {
    return (
        <section className="bg-black py-20 px-5">

            <div className="max-w-[1280px] mx-auto text-white  font-poppins ">
                <div className=" px-8 lg:w-1/2 md:w-4/5 relative before:absolute before:w-[1px] before:bg-white before:content-[''] before:h-60 before:top-0 before:left-0">
                    <h2 className="text-[#a8a8a8]">About us</h2>
                    <h3 className="lg:text-7xl text-4xl mt-3">PAX Television</h3>
                    <p className="text-justify mt-5 font-light">
                        PAX Television is a family friendly streaming channel that broadcasts wholesome content 24/7. Owned and operated by Christians, PAX Television's aim is to provide content that upholds the values and morals of the Christian faith.
                    </p>
                </div>
                <div className="py-10 px-8 lg:w-3/5 md:w-4/5">
                    <p className="lg:text-2xl text-xl leading-relaxed">PAX Television has a substream called "PAX180" for streaming local content produced in North Texas.</p>
                    <div className="px-5 mt-6">
                        <Link to="/" className="">
                            <button className="lg:w-4/5 w-full text-center bg-white text-darkText py-2">Go to PAX180</button> </Link>
                    </div>
                </div>

            </div>


        </section>
    )
}
export default AboutHero 