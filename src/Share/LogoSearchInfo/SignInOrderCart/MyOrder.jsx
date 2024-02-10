import { Link } from "react-router-dom";
import car from "../../../assets/othersImg/car.webp"
import useTotalPaymentData from "../../../api/useTotalPaymentData";

const MyOrder = () => {
    const [totalPayment, refetch] = useTotalPaymentData();
    const orderLength = totalPayment.filter((orLength) => orLength?.orderInfo?.payStatus ? orLength?.orderInfo?.payStatus : orLength?.payStatus == "pending");
    return (
        <>
            <Link to="my-order" className="lg:w-40 lg:h-20 md:w-8 md:h-8 flex-1 items-center text-center">
                <img src={car} alt="" className="lg:h-7 h-6 object-cover mt-3" />
                <span className="lg:text-sm md:text-xs leading-tight text-xs font-medium text-center">My Order</span>
            </Link>
            {orderLength?.length &&
                <span className="bg-red-50 h-4 w-4 mx-auto text-center rounded-md absolute right-3 top-1 text-xs text-slate-500 font-light" >{orderLength?.length}</span>
            }
        </>
    );
};

export default MyOrder;