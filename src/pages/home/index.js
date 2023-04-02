import HeroVideo from "./herovideo";
import PromotedAds from "./promotedAds";
import LiveLink from "./liveLink";
import SericesList from "./sericesList";
import AboutHome from "./aboutHome";
import ContactUs from "./contactUs";
import Inspirational from './Inspirational';
import VariableSilder from "./variableSlider";

const Home = () => {
    return (
        <>
            <HeroVideo />
            <PromotedAds />
            <LiveLink />
            <SericesList title="Local Content" />
            <SericesList title="Drama" />
            <SericesList title="Kids / Family" />
            <VariableSilder title="Lifestyle" />
            <VariableSilder title="American Sign Language (ASL)" />
            <Inspirational />
            <AboutHome />
            <ContactUs />
        </>
    )
}
export default Home;