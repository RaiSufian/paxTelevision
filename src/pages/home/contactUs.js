const ContactUs = () => {
    return (
        <div className="bg-black py-8 px-5">
            <div className="max-w-[1280px] mx-auto text-white px-8 font-poppins relative before:absolute before:w-[1px] before:bg-white before:content-[''] before:h-60 before:top-0 before:left-0">
                <h6 className="lg:text-6xl md:text-4xl text-3xl py-3">Connect with us</h6>
                <div className="bg-gray p-6 max-w-[992px] mt-5 ">
                    <h3 className="py-4 text-3xl">Contact Us</h3>
                    <form>
                        <div className="lg:flex">
                            <div className="lg:w-3/12 mx-2 mt-5">
                                <label className="text-sm">First Name</label><br />
                                <input type="text" className="h-11 w-full bg-[#CCCACA] px-2 hover:bg-[] focus:outline-none focus:bg-[#5A515E] text-[#FE5B5E]" />
                            </div>
                            <div className="lg:w-3/12 mx-2 mt-5">
                                <label className="text-sm">Last Name</label><br />
                                <input type="text" className="h-11 w-full bg-[#CCCACA] px-2 focus:outline-none focus:bg-[#5A515E] text-[#FE5B5E]" />
                            </div>
                            <div className="lg:w-1/2 mx-2 mt-5">
                                <label className="text-sm">Email*</label><br />
                                <input type="email" className="h-11 w-full bg-[#CCCACA] px-2 focus:outline-none focus:bg-[#5A515E] text-[#FE5B5E]" />
                            </div>
                        </div>
                        <div className="mx-2 mt-10">
                            <label className="text-sm">Write a message</label><br />
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm bg-[#CCCACA] focus:outline-none focus:bg-[#5A515E] text-[#FE5B5E]" ></textarea>

                        </div>
                        <div className="mx-2 mt-8">
                            <button className="text-3xl py-6 px-10 bg-themeColor text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default ContactUs