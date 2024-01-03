import { Link } from "react-router-dom";
import trending1 from "../../../assets/flowers/trending/festiveFrosty.webp"
import trending2 from "../../../assets/flowers/trending/dashingThrough.webp"
import trending3 from "../../../assets/flowers/trending/sparklingHoliday.webp"
import trending4 from "../../../assets/flowers/trending/santersSerprice.webp"
import trending5 from "../../../assets/flowers/trending/FieldEurope.webp"
import trending6 from "../../../assets/flowers/trending/holideyFlower.webp"
import trending7 from "../../../assets/flowers/trending/giftHoliday.webp"
import trending8 from "../../../assets/flowers/trending/pegantasion.webp"
const TrendingGift = () => {
    return (
        <div className="md:my-10 my-6 md:overflow-x-hidden overflow-x-scroll mx-2 md:mx-0">
            <div className="grid grid-cols-8 gap-3 w-[1320px] mx-auto md:overflow-x-hidden overflow-x-scroll">
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <img src={trending1} alt="" className="hover:scale-105 transition-all duration-200" />
                    <h4 className="text-lg font-medium tracking-wide">Festive Frosty</h4>
                    <span className="text-xl font-bold">$56.10</span>
                </Link>
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <img src={trending2} alt="" className="hover:scale-105 transition-all duration-200" />
                    <h4 className="text-lg font-medium tracking-wide">Dashing Through</h4>
                    <span className="text-xl font-bold">$49.35</span>
                </Link>
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <img src={trending3} alt="" className="hover:scale-105 transition-all duration-200" />
                    <h4 className="text-lg font-medium tracking-wide"> Sparkling Holiday</h4>
                    <span className="text-xl font-bold">$51.40</span>
                </Link>
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <div className="relative">
                        <img src={trending4} alt="" className="hover:scale-105 transition-all duration-200" />
                        <div className="absolute bottom-2 left-2 w-2/3 bg-slate-100 rounded-md">
                            <p className="uppercase p-1 text-center text-sm text-red-600 font-bold">save 30%</p>
                        </div>
                    </div>
                    <h4 className="text-lg font-medium tracking-wide">Santa's Surprise</h4>
                    <span className="text-xl font-bold "> <span className="line-through text-base text-red-600">$67.80</span> $50.20 </span>
                </Link>
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <img src={trending5} alt="" className="hover:scale-105 transition-all duration-200" />
                    <h4 className="text-lg font-medium tracking-wide">Field Europe</h4>
                    <span className="text-xl font-bold">$46.87</span>
                </Link>
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <div className="relative">
                        <img src={trending6} alt="" className="hover:scale-105 transition-all duration-200" />
                        <div className="absolute bottom-2 left-2 w-2/3 bg-slate-100 rounded-md">
                            <p className="uppercase p-1 text-center text-sm text-red-600 font-bold">save 25%</p>
                        </div>
                    </div>
                    <h4 className="text-lg font-medium tracking-wide">Holiday Flower</h4>
                    <span className="text-xl font-bold "> <span className="line-through text-base text-red-600">$59.60</span> $49.00 </span>
                </Link>
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <img src={trending8} alt="" className="hover:scale-105 transition-all duration-200" />
                    <h4 className="text-lg font-medium tracking-wide"> Pegantasion Gift</h4>
                    <span className="text-xl font-bold">$44.90</span>
                </Link>
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <div className="relative">
                        <img src={trending7} alt="" className="hover:scale-105 transition-all duration-200" />
                        <div className="absolute bottom-2 left-2 w-2/3 bg-slate-100 rounded-md">
                            <p className="uppercase p-1 text-center text-sm text-red-600 font-bold">save 15%</p>
                        </div>
                    </div>
                    <h4 className="text-lg font-medium tracking-wide">Holiday Gift</h4>
                    <span className="text-xl font-bold "> <span className="line-through text-base text-red-600">$41.60</span> $36.00 </span>
                </Link>
            </div>
        </div>
    );
};

export default TrendingGift;