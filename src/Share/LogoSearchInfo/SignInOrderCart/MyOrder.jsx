import { Link } from "react-router-dom";
import car from "../../../assets/othersImg/car.webp";
import userEmailToPayment from "../../../api/useEmailPayment";
import useAuth from "../../../api/useAuth";

const MyOrder = () => {
    const {user} = useAuth();
    const [payments] = userEmailToPayment();
    const orderLength = payments.filter((orLength) => orLength?.orderInfo?.payStatus || orLength?.payStatus === "pending");

    return (
        <>
            <Link to="my-order" className="flex-1 items-center text-center md:block hidden">
                <img src={car} alt="" className="lg:h-7 h-6 mx-auto object-cover mt-1" />
                <span className="lg:text-sm md:text-xs leading-tight font-medium text-center">My Order</span>
            </Link>
            <Link to="my-order" className="lg:w-40 lg:h-20 md:w-5 md:h-8 flex-1 items-center text-center block md:hidden">
                <img src={car} alt="" className="lg:h-7 h-6 object-cover mt-1" />
                <span className="text-white text-xs leading-tight font-medium text-center">Order</span>
            </Link>
            {
                user ?
                    <>
                        {orderLength?.length > 0 &&
                            <span className="bg-red-50 h-4 w-4 mx-auto text-center rounded-md absolute right-1 top-0 text-xs text-slate-500 font-light" >{orderLength?.length}</span>
                        }
                    </>
                    :
                    <></>
            }
        </>
    );
};

export default MyOrder;