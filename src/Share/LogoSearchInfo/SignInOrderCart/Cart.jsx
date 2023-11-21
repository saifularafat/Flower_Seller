import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <Link to="" className="flex-1 items-center text-center">
            <GrCart className="md:text-4xl w-full mx-auto text-2xl  text-[#282A33]" />
            <span className="text-xs font-medium text-center md:block hidden">(0) Cart</span>
            <span className="text-xs font-medium text-center md:hidden block">Cart</span>
        </Link>
    );
};

export default Cart;