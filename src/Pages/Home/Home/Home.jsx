import SectionSiteCover from "../../../components/SectionSiteCover";
import Banner from "../Banner/Banner";
import ExclusiveFlower from "../ExclusiveFlower/ExclusiveFlower";
import ExploreGifts from "../ExploreGifts/ExploreGifts";
import FindGift from "../FindGift/FindGift";
import SweetSurprises from "../SweetSurprises/SweetSurprises";
import Testimonial from "../Testimonial/Testomonial";
import TrendingGift from "../TrendingGift/TrendingGift";
import OfferTitle from "../../../components/OfferTitle";
import Accordion from "../Accordion/Accordion";

const Home = () => {
    return (
        <div>
            <OfferTitle />
            <Banner />
            <FindGift />
            <ExclusiveFlower />
            <SweetSurprises />
            <ExploreGifts />
            <TrendingGift />
            <Testimonial />
            <div className="md:pb-0 pb-6 md:pt-10 pt-6">
                <Accordion />
            </div>
        </div>
    );
};

export default Home;