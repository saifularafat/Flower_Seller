import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div>
            <Link to="" className="flex-1 items-center text-center">
            <div className="w-full mx-auto">
                <GrCart className="md:w-8 md:h-8 w-6 h-6 mx-auto text-[#282A33]" />
            </div>
            <span className="text-xs font-medium text-center md:block hidden">(0) Cart</span>
            <span className="text-xs font-medium text-center md:hidden block">Cart</span>
        </Link>
        </div>
    );
};

export default Cart;