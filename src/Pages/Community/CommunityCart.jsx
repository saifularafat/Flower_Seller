import { Link } from "react-router-dom";
import img1 from "../../assets/sale/44067-118650-230831133148x.jpg";
import img2 from "../../assets/sale/97343122118x.webp";
import img3 from "../../assets/sale/mk033632x.webp";
import img4 from "../../assets/sale/sign.jpg";
const CommunityCart = () => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-2 overflow-x-hidden ">
            <div className="card w-full hover:shadow-xl border overflow-hidden">
                <div className="">
                    <img src={img1} alt="" className="object-cover rounded-md hover:scale-105 transition-all duration-200" />
                </div>
                <div className="text-center md:py-2 py-1">
                    <h2 className="text-xl font-semibold">
                        Free eCards
                    </h2>
                    <p className="md:px-2 px-1">Whatever it is, say it from the heart.</p>
                    <div className="md:py-4 py-3">
                        <Link to="" className="text-lg uppercase font-semibold py-2 px-4 border-2 border-slate-700 rounded-md">READ More</Link>
                    </div>
                </div>
            </div>
            <div className="card w-full hover:shadow-xl border overflow-hidden">
                <div className="">
                    <img src={img2} alt="" className="object-cover rounded-md  hover:scale-105 transition-all duration-200" />
                </div>
                <div className="text-center  md:py-2 py-1">
                    <h2 className=" text-xl font-semibold">
                        Free eCards
                    </h2>
                    <p className="md:px-2 px-1">Whatever it is, say it from the heart.</p>
                    <div className="md:py-4 py-3">
                        <Link to="" className="text-lg uppercase font-semibold py-2 px-4 border-2 border-slate-700 rounded-md">Gift Now</Link>
                    </div>
                </div>
            </div>
            <div className="card w-full hover:shadow-xl border overflow-hidden">
                <div className="">
                    <img src={img3} alt="" className="object-cover rounded-md  hover:scale-105 transition-all duration-200" />
                </div>
                <div className="text-center  md:py-2 py-1">
                    <h2 className=" text-xl font-semibold">
                        Petal Talk Blog
                    </h2>
                    <p className="md:px-2 px-1">Inviting ideas and advice to help you connect, express & thrive.</p>
                    <div className="md:py-4 py-3">
                        <Link to="" className="text-lg uppercase font-semibold py-2 px-4 border-2 border-slate-700 rounded-md">SEnd Now</Link>
                    </div>
                </div>
            </div>
            <div className="card w-full hover:shadow-xl border overflow-hidden">
                <div className="">
                    <img src={img4} alt="" className="h-[359px] object-cover rounded-md  hover:scale-105 transition-all duration-200" />
                </div>
                <div className="text-center  md:py-2 py-1">
                    <h2 className=" text-xl font-semibold">
                        Tribute | Free Group Video
                    </h2>
                    <p className="md:px-2 px-1">
                        A fun way to bring everyone into the surprise.
                    </p>
                    <div className="md:py-4 py-3">
                        <Link to="" className="text-lg uppercase font-semibold py-2 px-4 border-2 border-slate-700 rounded-md">GEt Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityCart;