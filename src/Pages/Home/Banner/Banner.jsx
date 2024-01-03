import { Link } from "react-router-dom";
import BannerContent from "./BannerContent";
import Slider from "./Slider";

const Banner = () => {
    return (
        <div className="grid grid-cols-2 relative">
            {/* TODO LINK */}
            <Link to="" className="col-span-1 md:block hidden">
                <BannerContent />
            </Link>
            <div className="md:col-span-1 col-span-2">
                <Slider />
            </div>
            <div className="absolute md:top-1/4 md:left-[45%] left-1/4 md:bottom-0 -bottom-2 bg-white md:w-36 md:h-36 md:rounded-full rounded-lg text-center mx:p-3 p-1 text-slate-900 z-30">
                <h2 className="font-bold md:text-lg text-sm text-[#5a5140] capitalize italic leading-none md:pt-2">Same~day delivery Available!</h2>
                <span className="text-xs text-slate-700">just select markets</span>
            </div>
        </div>
    );
};

export default Banner;