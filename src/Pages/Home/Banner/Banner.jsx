import { Link } from "react-router-dom";
import BannerContent from "./BannerContent";
import Slider from "./Slider";

const Banner = () => {
    return (
        <div className="grid grid-cols-2 relative">
            {/* TODO LINK */}
            <Link to="" className="col-span-1">
                <BannerContent />
            </Link>
            <div className="col-span-1">
                <Slider />
            </div>
            <div className="absolute top-1/4 left-[45%] bg-white md:w-36 md:h-36 rounded-full text-center p-3 text-slate-900 z-10">
                <h2 className="font-bold text-lg text-[#5a5140] capitalize italic">Same~day delivery Available!</h2>
                <span className="text-xs text-slate-700">just select markets</span>
            </div>
        </div>
    );
};

export default Banner;