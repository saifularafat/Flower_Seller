import { Link } from "react-router-dom";
import car from "../../../assets/othersImg/car.webp"

const MyOrder = () => {
    return (
        <Link to="my-order" className="lg:w-40 lg:h-20 md:w-8 md:h-8  flex-1 items-center text-center">
            <img src={car} alt="" className="lg:h-7 h-6 object-cover mt-3" />
            <span className="lg:text-sm md:text-xs leading-tight text-xs font-medium text-center">My Order</span>
        </Link>
    );
};

export default MyOrder;