import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import useBookMarlFlower from "../../../api/useBookMarlFlower";

const Cart = () => {
    const [bookMark, refetch] = useBookMarlFlower();
    console.log(bookMark);
    return (
        <div>
            <Link to="" className="flex-1 items-center text-center">
                <div className="w-full mx-auto">
                    <GrCart className="lg::w-8 lg:h-8 w-7 h-7 mx-auto md:text-[#282A33] text-slate-100" />
                </div>
                <span className="text-xs font-medium text-center md:block hidden">({bookMark?.length}) Cart</span>
                <span className="text-xs font-medium text-center md:text-[#282A33] text-slate-100 md:hidden flex items-center"> Cart <span className="text-xs">(0)</span></span>
            </Link>
        </div>
    );
};

export default Cart;