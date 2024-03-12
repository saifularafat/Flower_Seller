import { Link, useParams } from "react-router-dom";
import userEmailToPayment from "../../api/useEmailPayment";
import { useState } from "react";
import { useForm } from "react-hook-form";
const OrderUseCancel = () => {
    const { id } = useParams();
    const [payments, refetch] = userEmailToPayment();
    const payD = payments.find(pay => pay._id === id);
    const [openModal, setOpenModal] = useState(false);

    // const { image, name, price, totalPrice, payStatus, paymentType, date, currentAddress, userName, email, PhoneNumber } = payD;
    const {
        register,
        formState: { errors },
        handleSubmit } = useForm();

    const onSubmit = (data) => {
        const info = {
            image: payD?.image,
            name: payD?.name,
            price: payD?.price,
            totalPrice: payD?.totalPrice,
            payStatus: payD?.payStatus,
            paymentType: "Cancel",
            currentAddress: payD?.currentAddress,
            userName: payD?.userName,
            email:payD?.email,
            PhoneNumber:payD?.PhoneNumber,
            cancelType: data.cancelDec,
            cancelMessage: data.cancelMessage
        }
        console.log("this info ====>", info);
    }

    return (
        <>
            <div key={payD?._id} className="flex flex-col md:flex-row justify-center my-10">
                <div className=" max-w-[300px] flex items-center justify-center group">
                    <img className="rounded-lg transform scale-110" src={payD?.image} alt="flower Photo" />
                </div>
                <div className="bg-white flex gap-2 rounded-tr-lg rounded-br-lg px-8 py-3 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]">
                    <div className="space-y-1 text-left">
                        {/* flower info */}
                        <h1 className="text-xl font-bold">Flower Details </h1>
                        <h2 className="text-sm font-medium text-gray-700 font-sans">
                            <span className="">Flower Name: </span> {payD?.name}
                        </h2>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Flower Price: {payD?.price}$</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Bat & Charge: {payD?.charge}$</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Total Price: {payD?.totalPrice}$</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Transition ID: {payD?.payStatus === "pending" ? <span className="uppercase">{payD?.payStatus}</span> : <>{payD?.transition_id}</>}</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Payment Type: {payD?.paymentType}</p>
                        <p className="font-sans text-sm text-gray-700 font-medium"> Payment Date: {payD?.date}</p>
                        <p className="text-slate-800 text-sm font-sans font-medium">Delivery Address: {payD?.currentAddress}</p>
                        <p className="text-[15px] font-sans text-center font-medium bg-black/80 text-red-600 rounded mt-1">{payD?.duration}</p>
                    </div>
                    <div className="">
                        {/* user info */}
                        <h1 className="text-xl font-bold">User Details </h1>
                        <p className="text-slate-800 text-[15px] font-sans font-medium">User Name: {payD?.userName}</p>
                        <p className="text-slate-800 text-[15px] font-sans font-medium">Email: {payD?.email}</p>
                        <p className="text-slate-800 text-[15px] font-sans font-medium">Phone Number: {payD?.PhoneNumber}</p>
                        <p className="text-slate-800 text-[15px] font-sans font-medium">Flower ID: {payD?._id}</p>

                        <div className="flex items-center justify-center mt-10">
                            <Link to="/dashboard/orderHistory">
                                <button className="text-xl w-36 h-11 rounded-lg before:block before:absolute bg-[#f3f0f0] hover:before:bg-sky-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-sky-500 bg-transparent border-2 overflow-hidden border-sky-700 duration-500">
                                    Order History
                                </button>
                            </Link>
                        </div>

                        {/* Order Cancel Modal */}
                        <div className="w-72 pt-3 mx-auto flex items-center justify-center">
                            <button onClick={() => setOpenModal(true)} className="text-xl w-36 h-11 rounded-lg before:block before:absolute bg-red-500 hover:before:bg-red-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-left-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-black bg-transparent border-2 overflow-hidden border-red-700 duration-500">
                                Order Cancel
                            </button>
                            <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}>
                                <div onClick={(e_) => e_.stopPropagation()} className={`absolute p-8 w-full lg:w-[768px] bg-white drop-shadow-2xl rounded-lg ${openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'}`}>
                                    {/* cancel Form  */}
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div>
                                            <label className="label">
                                                <span className="label-text md:text-xl text-xl font-semibold ">Select Your Cancel Product Type Option*</span>
                                            </label>
                                            <select {...register("cancelDec", { required: true })} className="w-full border-2 border-blue-600 rounded-md px-3 py-2">
                                                <option value="" selected></option>
                                                <option value="birthday">Birthday</option>
                                                <option value="thanksgiving">Thanksgiving</option>
                                                <option value="IndependenceDay">IndependenceDay</option>
                                                <option value="disney">disney</option>
                                                <option value="valentines">Valentines</option>
                                                <option value="sympathy">Sympathy</option>
                                                <option value="plants">Plants</option>
                                                <option value="giftsMore">Gifts & More</option>
                                            </select>
                                            {errors.cancelDec?.type === "required" && (
                                                <p className="text-red-600 text-sm">Select Your Flower Cancel Type is required</p>
                                            )}
                                        </div>
                                        <h4 className="mt-6 mb-3 text-xl font-medium"> Messages*</h4>

                                        <textarea {...register("cancelMessage", { required: true })} name="cancelMessage" id="" cols="10" rows="3" className="w-full border-2 border-blue-700 rounded-lg px-3 py-1 text-sm"></textarea>
                                        {errors.cancelMessage?.type === "required" && (
                                            <p className="text-red-600 text-sm">Please Your Opinion is required!</p>
                                        )}
                                        <button type="submit" className="relative inline-block h-10 w-24 text-base text-white duration-300 before:absolute before:inset-0 before:-z-10 before:block before:bg-yellow-400 before:duration-500 after:absolute after:inset-0 after:-z-10 after:block after:bg-red-800 after:duration-500 hover:before:skew-y-12 hover:after:-skew-y-12 mt-3">Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderUseCancel;