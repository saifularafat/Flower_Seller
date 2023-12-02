import { Link } from "react-router-dom";
import car from "../../../assets/othersImg/car.webp"

const MyOrder = () => {
    return (
        <Link to="my-order" className="w-40 h-20">
            <img src={car} alt="" className="h-7 object-cover" />
            <span className="text-sm font-medium">My Order</span>
        </Link>
    );
};

export default MyOrder;