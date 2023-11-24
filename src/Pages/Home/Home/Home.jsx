import SectionSiteCover from "../../../components/SectionSiteCover";
import Banner from "../Banner/Banner";
import ExclusiveFlower from "../ExclusiveFlower/ExclusiveFlower";
import ExploreGifts from "../ExploreGifts/ExploreGifts";
import FindGift from "../FindGift/FindGift";
import SweetSurprises from "../SweetSurprises/SweetSurprises";
import OfferTitle from "./OfferTitle";

const Home = () => {
    return (
        <div>
            <OfferTitle />
            <Banner />
            <FindGift />
            <ExclusiveFlower />
            <SweetSurprises />
            <SectionSiteCover />
            <ExploreGifts />
        </div>
    );
};

export default Home;