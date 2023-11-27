import { Link } from "react-router-dom";
import img1 from "../../assets/birthdayImages/Birthday_Wishes_Flower_Cake_VibrantPassport_Eligible_Birthday_Wishes_Flower_Cake_Vibrant.webp"
import img2 from "../../assets/birthdayImages/Cart_Gift.webp"
import img3 from "../../assets/birthdayImages/Denarii_Lavender_SpaBasket.webp"
import img4 from "../../assets/birthdayImages/Happy_Birthday_Kid.webp"
const BirthdayContainer = () => {
    return (
        <div className="grid grid-cols-3 gap-5 ">
            <Link to="" className="w-full h-[400px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                <img src={img1} alt="" className="w-full h-80 object-cover" />
                <div className=" px-1">
                    <h4 className="text-lg font-semibold leading-tight">Birthday Wishes Flower Cake Vibrant</h4>
                    <p className="text-lg font-bold">$50.90 - $57.10</p>
                </div>
            </Link>
            <Link to="" className="w-full h-[400px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                <img src={img2} alt="" className="w-full h-80 object-cover" />
                <div className=" px-1">
                    <h4 className="text-lg font-semibold leading-tight">Party Pooch™</h4>
                    <p className="text-lg font-bold">$58.99 - $67.60</p>
                </div>
            </Link>
            <Link to="" className="w-full h-[400px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                <img src={img3} alt="" className="w-full h-80 object-cover" />
                <div className=" px-1">
                    <h4 className="text-lg font-semibold leading-tight">Denari Lavender SpaBasket</h4>
                    <p className="text-lg font-bold">$48.99 - $56.00</p>
                </div>
            </Link>
            <Link to="" className="w-full h-[400px] space-y-3 hover:shadow-md transition-all duration-200 rounded overflow-hidden">
                <img src={img4} alt="" className="w-full h-80 object-cover" />
                <div className=" px-1">
                    <h4 className="text-lg font-semibold leading-tight">Happy Birthday Kid</h4>
                    <p className="text-lg font-bold">$55.40 - $63.60</p>
                </div>
            </Link>

        </div>
    );
};

export default BirthdayContainer;