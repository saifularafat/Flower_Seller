import PagesPath from "../../components/PagesPath";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import banner from "../../assets/community/communities-hero.webp"
import Alice from "../../assets/community/alices-table.webp"
import floral from "../../assets/community/floral-heart-project.webp"
import ceo from "../../assets/community/communities-hero.webp"
import light from "../../assets/community/light-after-loss.webp"
import canvas from "../../assets/community/canvas_placeholder.aea9bb0b.gif"
import smile from "../../assets/community/smile-farms-birthyay.webp"
import birthdayImag from "../../assets/community/send-birthday-flowers-hero-fy24-holidays.webp"
import { Link } from "react-router-dom";
import CommunityCart from "./CommunityCart";

const Community = () => {
    return (
        <div className="overflow-x-hidden">
            <PagesPath path="/community" name="Community" title="Flower Community" />
            <div className="text-center">
                {/* Celebrations Community */}
                <h3 className="text-2xl md:text-4xl font-semibold">Celebrations Community</h3>
                <div className="pt-1 md:block hidden">
                    <p>Building meaningful relationships is at the heart of everything we do. From
                    </p>
                    <span>engaging</span>
                    <p>workshops to inspiring stories, it’s never been easier to reach out.</p>
                </div>
                <p className="md:hidden">Building meaningful relationships is at the heart of everything we do. From engaging
                    workshops to inspiring stories, it’s never been easier to reach out.
                </p>
            </div>
            <div className="py-5 relative">
                <img src={banner} alt="" className="md:h-[420px] w-full object-cover" />
                <div className="absolute top-[30%] left-[20%] ">
                    <div>
                        <span className="text-base md:text-3xl font-serif leading-4 font-semibold text-center text-white">Make Every Birthday</span>
                    </div>
                    <div>
                        <span className="text-base md:text-3xl font-serif leading-4 font-semibold text-center text-white">Special With a Free</span>
                    </div>
                    <div>
                        <span className="text-base md:text-3xl font-serif leading-4 font-semibold text-center text-white">Group Video Montage!</span>
                    </div>
                    <div className="text-sm font-normal text-white md:pt-3 pt-1">
                        <p>We've teamed up with Tribute.co to extend this free offer</p>
                        <p>exclusively for 1-800-Flowers & Family of Brands Customers!</p>
                    </div>
                    <div className="md:pt-5 pt-2">
                        <button className="text-slate-800 bg-slate-50 rounded-lg md:py-2 py-1 px-3 md:px-6 md:text-base text-sm md:font-bold font-medium font-sans-">
                            START A TRIBUTE
                        </button>
                    </div>
                    <div className="md:pt-9 pt-4 flex items-center gap-2 text-white cursor-pointer">
                        <MdSlowMotionVideo />
                        <span>Watch Sample Video</span>
                    </div>
                </div>
            </div>
            {/* second section */}
            <div className="grid md:grid-cols-3 col-span-1 gap-x-5 gap-y-6 space-y-2 py-5">
                <Link className="col-span-1 hover:scale-105 transition-all duration-200 overflow-hidden z-10">
                    <img src={Alice} alt="" className="object-cover " />
                    <p className="uppercase text-lg font-bold pt-1 flex items-center justify-center gap-[2px]">Alice's Table WorkShop <FaAngleRight className="text-base font-normal" /></p>
                </Link>
                <Link className="col-span-1 hover:scale-105 transition-all duration-200 overflow-hidden z-10">
                    <img src={Alice} alt="" className="object-cover " />
                    <p className="uppercase text-lg font-bold pt-1 flex items-center justify-center gap-[2px]">Alice's Table WorkShop <FaAngleRight className="text-base font-normal" /></p>
                </Link>
                <Link className="col-span-1 hover:scale-105 transition-all duration-200 overflow-hidden z-10">
                    <img src={floral} alt="" className="object-cover " />
                    <p className="uppercase text-lg font-bold pt-1 flex items-center justify-center gap-[2px]">Alice's Table WorkShop <FaAngleRight className="text-base font-normal" /></p>
                </Link>
                <Link className="col-span-1 hover:scale-105 transition-all duration-200 overflow-hidden z-10">
                    <img src={light} alt="" className="object-cover " />
                    <p className="uppercase text-lg font-bold pt-1 flex items-center justify-center gap-[2px]">Alice's Table WorkShop <FaAngleRight className="text-base font-normal" /></p>
                </Link>
                <Link className="col-span-1 hover:scale-105 transition-all duration-200 overflow-hidden z-10">
                    <img src={canvas} alt="" className="object-cover w-full" />
                    <p className="uppercase text-lg font-bold pt-1 flex items-center justify-center gap-[2px]">Alice's Table WorkShop <FaAngleRight className="text-base font-normal" /></p>
                </Link>
                <Link className="col-span-1 hover:scale-105 transition-all duration-200 overflow-hidden z-10">
                    <img src={smile} alt="" className="object-cover " />
                    <p className="uppercase text-lg font-bold pt-1 flex items-center justify-center gap-[2px]">Alice's Table WorkShop <FaAngleRight className="text-base font-normal" /></p>
                </Link>
            </div>
            <div className="py-8">
                <img src={birthdayImag} alt="" className="object-cover" />
            </div>
            <div className="py-10">
                <CommunityCart />
            </div>
        </div>
    );
};

export default Community;