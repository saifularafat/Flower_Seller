import { Link, useParams } from "react-router-dom";
import userEmailToPayment from "../../../api/useEmailPayment";
const PaymentDetails = () => {
    const { id } = useParams();
    const [payments, refetch] = userEmailToPayment();
    const payD = payments.find(pay => pay._id === id);

    console.log(id, "-------........> 6 line >", payD);
    return (
        <>
            <div key={payD?._id} className=" flex flex-col md:flex-row justify-center  my-10">
                <div className=" max-w-[350px] flex items-center justify-center group">
                    <img className="rounded-lg transform scale-110" src={payD?.image} alt="flower Photo" />
                </div>
                <div className="bg-white space-y-4 rounded-tr-lg rounded-br-lg md:w-[450px] p-8 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]">
                    <div className="space-y-1 text-left">
                        {/* flower info */}
                        <h2 className="text-sm font-medium text-gray-700 font-sans">
                            <span className="">Flower Name: </span> {payD?.name}
                        </h2>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Flower Price: {payD?.price}$</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Bat & Charge: {payD?.charge}$</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Total Price: {payD?.totalPrice}$</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Transition ID: <span className="text-blue-800 text-base">{payD?.payStatus === "pending" ? <span className="uppercase">{ payD?.payStatus}</span> : <>{ payD?.transition_id}</>}</span></p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Payment Type: {payD?.paymentType}</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Payment Date: {payD?.date}</p>
                        <p className="text-slate-800 text-sm font-sans font-medium">Delivery Address: {payD?.currentAddress}</p>
                    </div>
                    <div className="">
                        {/* user info */}
                        <p className="text-slate-800 text-[15px] font-sans font-medium">User Name: {payD?.userName}</p>
                        <p className="text-slate-800 text-[15px] font-sans font-medium">Email: {payD?.email}</p>
                        <p className="text-slate-800 text-[15px] font-sans font-medium">Phone Number: {payD?.PhoneNumber}</p>
                        <p className="text-slate-800 text-[15px] font-sans font-medium">Flower ID: {payD?._id}</p>
                        <p className="text-[15px] font-sans text-center font-medium bg-black/80 text-red-600 rounded mt-1">{payD?.duration}</p>
                    </div>
                    <div className="text-center">
                        <Link to="/dashboard/orderHistory">
                            <button className="text-xl w-36 h-11 rounded-lg before:block before:absolute bg-[#f3f0f0] hover:before:bg-sky-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-sky-500 bg-transparent border-2 overflow-hidden border-sky-700 duration-500">
                                Order History
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentDetails;