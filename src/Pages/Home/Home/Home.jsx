import Banner from "../Banner/Banner";
import ExclusiveFlower from "../ExclusiveFlower/ExclusiveFlower";
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
        </div>
    );
};

export default Home;