import ContactUs from "../home/contactUs";
const Stream = () => {
    return (
        <>
            <section className="bg-black py-20 px-5">

                <div className="max-w-[1280px] mx-auto text-white  font-poppins ">
                    <div className=" px-8 lg:w-3/5 md:w-4/5 relative before:absolute before:w-[1px] before:bg-white before:content-[''] before:h-full before:top-0 before:left-0">
                        <h2 className="text-[#a8a8a8]">PAX Television</h2>
                        <h3 className="lg:text-7xl text-4xl mt-3">Subscribe or Rent!</h3>
                        <p className="text-justify mt-5 font-light">
                            Get full access to all movies, shows, documentaries, kids' programs. With a FULL PASS you will get to stream all of PAX Television's content. No limits. No questions. Simple.
                        </p>
                        <p className="pt-7"> Enjoy our free content, subscribe for a full pass, or rent your favorite shows and movies for 48hrs.  </p>
                    </div>


                </div>


            </section>
            <ContactUs />
        </>
    )
}
export default Stream;