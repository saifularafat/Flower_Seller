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
        <div className="md:my-16 my-8">
            <SectionTitle
                color="text-slate-900"
                title="Sweet & Savory Surprises"
                textSize="text-2xl" />
            {/* TODO Link */}
            <div className="md:overflow-x-hidden overflow-x-scroll mx-2 md:mx-0">
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
            </div>
            <Link to={twoBanner?.bannerLink} className="">
                <img src={twoBanner?.bannerImage} loading='lazy' alt="bannerFlower" className="md:w-11/12 h-32 md:h-full mx-auto" />
            </Link>
            <div className="md:mt-10 mt-5">
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
                <Link to={threeBanner?.bannerLink} >
                    <img src={threeBanner?.bannerImage} alt="" className="md:w-11/12 h-32 md:h-full mx-auto" />
                </Link>
            </div>
        </div>
    );
};

export default SweetSurprises;