import { Link } from "react-router-dom";
import img1 from "../../assets/logo/logo.webp"
import img2 from "../../assets/headerImg/1800Baskets_Logo_compact.svg"
import img3 from "../../assets/headerImg/fb-logo-v2.svg"
import img4 from "../../assets/headerImg/SharisLogo_r.svg"
import img5 from "../../assets/headerImg/wlf-logo-v2.svg"
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div className="md:block hidden">
            <Marquee className="" speed={30}>
                <div className="grid md:grid-cols-9 gap-3">
                    <Link to="" className="py-3 px-3 border-t-0  border-b-[2px] border-l-[0.5px] border-r-[0.5px] border-solid border-slate-100 hover:border-b-[2px] hover:border-t-0 hover:border-b-slate-800 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src={img1} alt="" className="object-cover w-full h-12 mx-auto " />
                    </Link>
                    <Link to="" className="top_header_one">
                        <img src={img2} alt="" className="object-cover w-full h-12 mx-auto " />
                    </Link>
                    <Link to="" className="top_header_two">
                        <img src={img3} alt="" className="object-cover w-full h-12 mx-auto " />
                    </Link>
                    <Link to="" className="top_header_one">
                        <img src={img4} alt="" className="object-cover w-full h-12 mx-auto " />
                    </Link>
                    <Link to="" className="top_header_two">
                        <img src={img5} alt="" className="object-cover w-full h-12 mx-auto " />
                    </Link>
                    <Link to="" className="top_header_three">
                        <img src={img1} alt="" className="object-cover w-full h-12 mx-auto " />
                    </Link>
                    <Link to="" className="top_header_three">
                        <img src={img1} alt="" className="object-cover w-full h-12 mx-auto " />
                    </Link>
                    <Link to="" className="top_header_one">
                        <img src={img2} alt="" className="object-cover w-full h-12 mx-auto " />
                    </Link>
                    <Link to="" className="top_header_two">
                        <img src={img3} alt="" className="object-cover w-full h-12 mx-auto " />
                    </Link>
                   
                </div>
            </Marquee>
        </div >
    );
};

export default Header;