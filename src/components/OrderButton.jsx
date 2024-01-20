import { Link } from "react-router-dom";
import useAdmin from "../api/useAdmin";

const OrderButton = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="border-0 border-b-[2px] border-slate-400 pb-3">
            {
                <button className="">
                    {
                        isAdmin ? <Link to="/dashboard/adminHome" className="text-xs font-medium hover:underline leading-none">
                            Your Dashboard
                        </Link>
                            :
                            <Link to="/dashboard/userHome" className="text-xs font-medium hover:underline leading-none">
                                Your Dashboard
                            </Link>
                    }
                </button>
            }

            {
                isAdmin ?
                    <>
                        <br />
                        <Link to="/dashboard/adminProfile" className="text-xs font-medium hover:underline leading-none">
                            Your Profile
                        </Link>
                        <br />
                        <Link to="/dashboard/email" className="text-xs font-medium hover:underline leading-none">
                            Your Email
                        </Link>
                    </>
                    :
                    <>
                        <br />
                        <Link to="/dashboard/userProfile" className="text-xs font-medium hover:underline leading-none">
                            Your Profile
                        </Link>
                        <br />
                        <Link to="/dashboard/addressAdd" className="text-xs font-medium hover:underline leading-none">
                            Add Your Address
                        </Link>
                        <br />
                        <Link to="my-order" className="text-xs font-medium hover:underline leading-none">
                            Track Your Order
                        </Link>
                        <br />
                    </>
            }
        </div>
    );
};

export default OrderButton;