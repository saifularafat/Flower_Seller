import { Link } from "react-router-dom";

const BannerContent = () => {
    return (
        <div className="relative bg-gradient-to-tr from-[#bde7c1] to-[#e2f1e3] w-full md:h-[320px]">
            <div className="absolute md:translate-y-3/4 md:translate-x-2/4">
                <h2 className="md:text-4xl text-lg md:font-semibold text-[#272622]">Here's To The Gestures </h2>
                <h2 className="md:text-4xl text-lg md:font-semibold text-[#3f3e3a] pb-3">That Bring Us Together</h2>
                <div className="bg-blue-900 md:w-3/5 mx-auto text-center rounded-lg md:py-2 hover:bg-sky-700 transition-all duration-200 ">
                    <Link to="/thanksgiving-flower" className="uppercase md:py-2 py-1 text-white md:text-base text-xs text-center md:font-semibold font-medium rounded-md">Shop Thanksgiving</Link>
                </div>
            </div>
        </div>
    );
};

export default BannerContent;