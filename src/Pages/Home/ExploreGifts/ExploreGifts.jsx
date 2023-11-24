import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
/* images */
import gift1 from "../../../assets/flowers/exploreGift/giftSets.webp"
import gift2 from "../../../assets/flowers/exploreGift/personalizedGift.webp"
import gift3 from "../../../assets/flowers/exploreGift/Candles.webp"
import gift4 from "../../../assets/flowers/exploreGift/HomeDecor.webp"
import gift5 from "../../../assets/flowers/exploreGift/spaBaskets.jpeg"
import gift6 from "../../../assets/flowers/14759.webp"
import SectionSiteCover from "../../../components/SectionSiteCover";
import leftCover from "../../../assets/flowers/cover/gifts-personalizatio.webp"
import rightCover from "../../../assets/flowers/cover/harry-david-gift.webp"
import HomeImages from "../../../components/HomeImages";

const ExploreGifts = () => {
    return (
        <div className="md:my-10 my-6">
            <SectionTitle color="text-slate-900" title="Explore Our Gifts & More" />
            {/* TODO LINKS */}
            <HomeImages 
            path1=""
            Image1={gift1}
            title1="Gift Sets"
            path2=""
            Image2={gift2}
            title2="Personalized Gift"
            path3=""
            Image3={gift3}
            title3="Candles"
            path4=""
            Image4={gift4}
            title4="Home Decor"
            path5=""
            Image5={gift5}
            title5="Spa Baskets"
            path6=""
            Image6={gift6}
            title6="Preserved Roses"
            />
            <SectionSiteCover
              path1=""
              Image1={rightCover }
              title1="Delicious Gifts That Make The Celebration "
              path2=""
              Image2={leftCover}
              title2="Custom Creations for Moments That Count"
            />
        </div>
    );
};

export default ExploreGifts;