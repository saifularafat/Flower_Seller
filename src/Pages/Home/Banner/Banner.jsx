import BannerContent from "./BannerContent";
import Slider from "./Slider";

const Banner = () => {
    return (
        <div className="grid grid-cols-2 relative">
            <div className="col-span-1">
                <BannerContent />
            </div>
            <div className="col-span-1">
                <Slider />
            </div>
        </div>
    );
};

export default Banner;