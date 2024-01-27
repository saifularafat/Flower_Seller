import SectionSiteCover from "../../../components/SectionSiteCover";
import Banner from "../Banner/Banner";
import ExclusiveFlower from "../ExclusiveFlower/ExclusiveFlower";
import ExploreGifts from "../ExploreGifts/ExploreGifts";
import FindGift from "../FindGift/FindGift";
import SweetSurprises from "../SweetSurprises/SweetSurprises";
import Testimonial from "../Testimonial/Testomonial";
import TrendingGift from "../TrendingGift/TrendingGift";
import OfferTitle from "../../../components/OfferTitle";
import useAuth from "../../../api/useAuth";
import Loading from "../../../Share/Loading/Loading";

const Home = () => {
    const {loading} = useAuth();
    if (loading) {
        return <Loading />
    }
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
        </div>
    );
};

export default Home;