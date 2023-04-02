import { Link } from "react-router-dom";
const Inspirational = () => {
    return (
        <section className="bg-black text-white pb-5">
            <h2 className="mb-3 lg:px-40 md:px-20 px-5 text-[#a8a8a8] text-4xl font-bold tracking-widest py-6">Inspirational</h2>
            <div className="">
                <Link to="/details" className="w-4/5 relative">
                    <img src="/images/reviveSchool.webp" />
                    <div className="px-5 py-6 bg-black absolute top-0 bottom-0 w-full z-10 opacity-0 hover:opacity-80 flex items-end">
                        <div className="text-[#a8a8a8]">
                            <h3 className="text-lg">reviveSchool</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}
export default Inspirational;