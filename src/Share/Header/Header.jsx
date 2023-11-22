import { Link } from "react-router-dom";
import img1 from "../../assets/logo/logo.webp"
import img2 from "../../assets/headerImg/1800Baskets_Logo_compact.svg"
import img3 from "../../assets/headerImg/fb-logo-v2.svg"
import img4 from "../../assets/headerImg/SharisLogo_r.svg"
import img5 from "../../assets/headerImg/wlf-logo-v2.svg"
const Header = () => {
    return (
        <div className="md:block hidden">
            <div className="grid md:grid-cols-8 ">
                <Link to="" className="py-3 px-3 border-t-0  border-b-[2px] border-l-[0.5px] border-r-[0.5px] border-solid border-slate-100 hover:border-b-[2px] hover:border-t-0 hover:border-b-slate-800 transition-all duration-200 opacity-60 hover:opacity-100">
                    <img src={img1} alt="" className="object-cover w-2/4 mx-auto " />
                </Link>
                <Link to="" className="py-3 px-3 border-t-0  border-b-[2px] border-solid border-slate-100 hover:border-b-[2px] hover:border-t-0 hover:border-b-slate-800 transition-all duration-200 opacity-60 hover:opacity-100">
                    <img src={img2} alt="" className="object-cover w-2/4 mx-auto " />
                </Link>
                <Link to="" className="py-3 px-3 border-t-0  border-b-[2px] border-l-[0.5px] border-r-[0.5px] border-solid border-slate-100 hover:border-b-[2px] hover:border-t-0 hover:border-b-slate-800 transition-all duration-200 opacity-60 hover:opacity-100">
                    <img src={img3} alt="" className="object-cover w-2/4 mx-auto " />
                </Link>
                <Link to="" className="py-3 px-3 border-t-0  border-b-[2px] border-solid border-slate-100 hover:border-b-[2px] hover:border-t-0 hover:border-b-slate-800 transition-all duration-200 opacity-60 hover:opacity-100">
                    <img src={img4} alt="" className="object-cover w-2/4 mx-auto " />
                </Link>
                <Link to="" className="py-3 px-3 border-t-0  border-b-[2px] border-l-[0.5px] border-r-[0.5px] border-solid border-slate-100 hover:border-b-[2px] hover:border-t-0 hover:border-b-slate-800 transition-all duration-200 opacity-60 hover:opacity-100">
                    <img src={img5} alt="" className="object-cover w-2/4 mx-auto " />
                </Link>
                <Link to="" className="py-3 px-3 border-t-0  border-b-[2px]  border-solid border-slate-100 hover:border-b-[2px] hover:border-t-0 hover:border-b-slate-800 transition-all duration-200 opacity-60 hover:opacity-100">
                    <img src={img1} alt="" className="object-cover w-2/4 mx-auto " />
                </Link>
                <Link to="" className="py-3 px-3 border-t-0  border-b-[2px] border-l-[0.5px] border-r-[0.5px] border-solid border-slate-100 hover:border-b-[2px] hover:border-t-0 hover:border-b-slate-800 transition-all duration-200 opacity-60 hover:opacity-100">
                    <img src={img3} alt="" className="object-cover w-2/4 mx-auto " />
                </Link>
                <Link to="" className="py-3 px-3 border-t-0  border-b-[2px] border-solid border-slate-100 hover:border-b-[2px] hover:border-t-0 hover:border-b-slate-800 transition-all duration-200 opacity-60 hover:opacity-100">
                    <img src={img2} alt="" className="object-cover w-2/4 mx-auto " />
                </Link>
            </div>
        </div>
    );
};

export default Header;