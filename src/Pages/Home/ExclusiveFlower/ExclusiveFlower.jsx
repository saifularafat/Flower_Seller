import SectionBanner from "../../../components/SectionBanner";
import SectionTitle from "../../../components/SectionTitle";
/* images */
import flower1 from "../../../assets/flowers/14759.webp"
import flower2 from "../../../assets/flowers/12345.webp"
import flower3 from "../../../assets/flowers/25465.webp"
import flower4 from "../../../assets/flowers/25978.webp"
import flower5 from "../../../assets/flowers/56495.webp"
import flower6 from "../../../assets/flowers/84620.webp"
import HomeImages from "../../../components/HomeImages";
const ExclusiveFlower = () => {
    return (
        <div className="md:my-10 my-6">
            <SectionTitle
                color=" text-slate-900"
                title="Send Flowers & Exclusive Gifts" />
            <div className=" md:overflow-x-hidden overflow-x-scroll mx-2 md:mx-0">
                <HomeImages
                    path1="/disney-flower"
                    Image1={flower1}
                    title1="Same Day"
                    path2="/birthday-flower"
                    Image2={flower2}
                    title2="Birthday Flower"
                    path3="/chocolate-gift"
                    Image3={flower3}
                    title3="Chocolate Gifts"
                    path4="/loveAndRomance"
                    Image4={flower4}
                    title4="Love Gift"
                    path5="/sympathy-flower"
                    Image5={flower5}
                    title5="Sympathy"
                    path6="/thanksgiving-flower"
                    Image6={flower6}
                    title6="Get Well"
                />
            </div>
            <SectionBanner />
        </div>
    );
};

export default ExclusiveFlower;