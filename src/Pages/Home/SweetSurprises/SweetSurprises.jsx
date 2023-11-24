import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
/* images */
import flower1 from "../../../assets/flowers/14759.webp"
import flower2 from "../../../assets/flowers/12345.webp"
import flower3 from "../../../assets/flowers/25465.webp"
import flower4 from "../../../assets/flowers/25978.webp"
import flower5 from "../../../assets/flowers/56495.webp"
import flower6 from "../../../assets/flowers/84620.webp"
import banner from "../../../assets/sectionBanner/disnep.webp"
const SweetSurprises = () => {
    return (
        <div className="md:my-10 my-5">
            <SectionTitle color="text-slate-900" title="Sweet & Savory Surprises" />
            <div className="grid grid-cols-6 gap-3 overflow-x-scroll md:overflow-x-hidden py-10 mx-2">
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <img src={flower2} alt="" className="hover:scale-105 transition-all duration-200" />
                    <h4 className="text-center text-lg font-medium tracking-wide">Birthday Flowers</h4>
                </Link>
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <img src={flower1} alt="" className="hover:scale-105 transition-all duration-200" />
                    <h4 className="text-center text-lg font-medium tracking-wide">Birthday Flowers</h4>
                </Link>
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <img src={flower3} alt="" className="hover:scale-105 transition-all duration-200" />
                    <h4 className="text-center text-lg font-medium tracking-wide">Birthday Flowers</h4>
                </Link>
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <img src={flower4} alt="" className="hover:scale-105 transition-all duration-200" />
                    <h4 className="text-center text-lg font-medium tracking-wide">Birthday Flowers</h4>
                </Link>
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <img src={flower5} alt="" className="hover:scale-105 transition-all duration-200" />
                    <h4 className="text-center text-lg font-medium tracking-wide">Birthday Flowers</h4>
                </Link>
                <Link to="" className=" border border-white rounded-md shadow-md p-0">
                    <img src={flower6} alt="" className="hover:scale-105 transition-all duration-200" />
                    <h4 className="text-center text-lg font-medium tracking-wide">Birthday Flowers</h4>
                </Link>
            </div>
            <Link to="">
                <img src={banner} alt="" className="w-11/12 mx-auto" /></Link>
        </div>
    );
};

export default SweetSurprises;