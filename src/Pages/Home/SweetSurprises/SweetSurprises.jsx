import { Link } from "react-router-dom";
/* images */
import sweet1 from "../../../assets/flowers/sweet/chocolateGift.webp"
import sweet2 from "../../../assets/flowers/sweet/BakedGoods.webp"
import sweet3 from "../../../assets/flowers/sweet/furitBaskets.webp"
import sweet4 from "../../../assets/flowers/sweet/giftBaskets.webp"
import sweet5 from "../../../assets/flowers/sweet/meatCheese.webp"
import sweet6 from "../../../assets/flowers/sweet/wineBer.webp"
/* components */
import SectionTitle from "../../../components/SectionTitle";
import HomeImages from "../../../components/HomeImages";
import SectionSiteCover from "../../../components/SectionSiteCover";
import useBannerGet from "../../../api/useBannerGet";
import useLeftRightBannerGet from "../../../api/useLeftRightBannerGet";

const SweetSurprises = () => {
    const [banners] = useBannerGet();
    const [leftRightBGet] = useLeftRightBannerGet();
    const twoBanner = banners.find(banner => banner.category === "bannerTwo");
    const threeBanner = banners.find(banner => banner.category === "bannerThree");
    const leftOne = leftRightBGet.find(leftOne => leftOne.category === "leftOne")
    const rightOne = leftRightBGet.find(rightOne => rightOne.category === "rightOne")
    return (
        <div className="md:my-10 my-5">
            <SectionTitle 
            color="text-slate-900" 
            title="Sweet & Savory Surprises" />
            {/* TODO Link */}
            <HomeImages
                path1="chocolate-gift"
                Image1={sweet1}
                title1="Chocolate Gift"
                path2="chocolate-gift"
                Image2={sweet2}
                title2="Baked Goods"
                path3="fruit-gift-shop"
                Image3={sweet3}
                title3="Fruit Baskets"
                path4="chocolate-gift"
                Image4={sweet4}
                title4="Baskets Gift"
                path5="chocolate-gift"
                Image5={sweet5}
                title5="Meat Cheese"
                path6="alcohol-wine-bar-shop"
                Image6={sweet6}
                title6="wine Bar"
            />
            <Link to={twoBanner?.bannerLink}>
                <img src={twoBanner?.bannerImage} alt="" className="w-11/12 mx-auto" />
            </Link>
            <div className="mt-8">
                <SectionSiteCover
                    path1={leftOne?.leftRightLink}
                    Image1={leftOne?.leftRightImage}
                    title1={leftOne?.leftRightContent}
                    path2={rightOne?.leftRightLink}
                    Image2={rightOne?.leftRightImage}
                    title2={rightOne?.leftRightContent}
                />
            </div>
            <div className="mt-8">
                <Link to={threeBanner?.bannerLink}>
                    <img src={threeBanner?.bannerImage} alt="" className="w-11/12 mx-auto" />
                </Link>
            </div>
        </div>
    );
};

export default SweetSurprises;