import { Link } from "react-router-dom";
import banner from "../assets/sectionBanner/one.jpeg"
const SectionBanner = () => {
    return (
        <Link to="" className="relative" title="Black SunDay">
            <img src={banner} alt="" className="w-11/12 mx-auto h-72 object-cover" />
            <div className="absolute top-1/3 left-32 z-10 space-y-1">
                <h2 className="md:text-6xl md:font-semibold uppercase text-white">Black Sunday </h2>
                <p className="md:text-3xl md:font-semibold text-white uppercase text-center">Shopping Savings</p>
                <div className="bg-orange-800 rounded-md text-center py-1 md:w-2/5 w-1/2 mx-auto">
                    <button className="md:text-lg font-semibold uppercase text-white">Shop Now</button>
                </div>
            </div>
        </Link>
    );
};

export default SectionBanner;