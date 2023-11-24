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
import banner from "../../../assets/sectionBanner/disnep.webp"
import SectionSiteCover from "../../../components/SectionSiteCover";
import leftCover from "../../../assets/flowers/cover/christmas-gifts.webp"
import rightCover from "../../../assets/flowers/cover/sharis-berries.webp"
import sectionBanner from "../../../assets/sectionBanner/gift.webp"
const SweetSurprises = () => {
    return (
        <div className="md:my-10 my-5">
            <SectionTitle color="text-slate-900" title="Sweet & Savory Surprises" />
            {/* TODO Link */}
            <HomeImages
                path1=""
                Image1={sweet1}
                title1="Chocolate Gift"
                path2=""
                Image2={sweet2}
                title2="Baked Goods"
                path3=""
                Image3={sweet3}
                title3="Fruit Baskets"
                path4=""
                Image4={sweet4}
                title4="Baskets Gift"
                path5=""
                Image5={sweet5}
                title5="Meat Cheese"
                path6=""
                Image6={sweet6}
                title6="wine Bar"
            />
            <Link to="">
                <img src={banner} alt="" className="w-11/12 mx-auto" />
            </Link>
            <div className="mt-8">
                {/* TODO Link */}
                <SectionSiteCover
                    path1=""
                    Image1={leftCover}
                    title1="Personalized Christmas Gift"
                    path2=""
                    Image2={rightCover}
                    title2="Artisan Crafted Berries"
                />
            </div>
            <div className="mt-8">
                <Link to="">
                    <img src={sectionBanner} alt="" className="w-11/12 mx-auto" />
                </Link>
            </div>
        </div>
    );
};

export default SweetSurprises;