import HeroVideo from "./herovideo";
import PromotedAds from "./promotedAds";
import LiveLink from "./liveLink";
import SericesList from "./sericesList";
import AboutHome from "./aboutHome";
import ContactUs from "./contactUs";

const Home = () => {
    return (
        <>
            <HeroVideo />
            <PromotedAds />
            <LiveLink />
            <SericesList title="Drama" />
            <SericesList title="Kids / Family" />
            <AboutHome />
            <ContactUs />
        </>
    )
}
export default Home;